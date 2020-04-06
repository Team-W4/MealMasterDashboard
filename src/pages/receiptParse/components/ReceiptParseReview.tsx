import React, { useEffect, useState } from 'react';
import range from 'lodash.range';
import { connect } from 'react-redux';
import { Picker, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { RNCamera } from 'react-native-camera';
import { stockActions } from '../../../actions';
import { GenericFood, StockItem } from '../../../constants/dataTypes';
import {
  SafeView, Box, Grid,
} from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';
import { Title } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { StockIcon, CheckIcon } from '../../../components/Icons';
import { ReceiptParseNavigationProps } from '../ReceiptParseStack';
import DataList from '../../../components/DataList';
import FoodSearchListCard from '../../search/components/FoodSearchListCard';

export type Props = ReceiptParseNavigationProps<'ReceiptReview'> & {
  receiptFoods: Array<GenericFood>;
  parseReceipt: () => void;
  addToStock: (id: number, amount: Omit<StockItem, 'id'>) => void;
};

const ReceiptParseReview: React.FC<Props> = ({
  navigation, parseReceipt, receiptFoods, addToStock,
}) => {
  const [foodMap, setMap] = useState(new Map<number, number>());

  useEffect(() => parseReceipt(), []);

  useEffect(() => {
    if (receiptFoods && receiptFoods.length > 0) {
      receiptFoods.forEach((food) => foodMap.set(food.id, 1));
    }
  }, [receiptFoods]);

  useEffect(() => {
  }, []);

  const addReceiptToStock = () => {
    if (foodMap.size > 0) {
      foodMap.forEach((quantity, id) => addToStock(id, {
        quantity,
        dateObtained: (new Date()).toISOString(),
      }));
    }

    navigation.push('ReceiptConfirm', { addedQuantity: receiptFoods.length });
  };

  return (
    <SafeView full side="bottom">
      <RNCamera
        style={{ height: 500, width: 500 }}
      />
      <DrawerCard
        topOffset={ 480 }
        topRightOverlay={ (
          <IconButton variant="warning" onPress={ addReceiptToStock }>
            <CheckIcon variant="inverted" />
          </IconButton>
        ) }
      >
        <Grid mt="m" justifyContent="center" alignItems="center">
          <StockIcon wrapperVariant="warning" />
          <Title ml="m">Your Receipt</Title>
        </Grid>
        {
          receiptFoods && receiptFoods.length > 0 ? (
            // @ts-ignore
            <DataList
              data={
                receiptFoods.sort((a,b) => {
                  if (a.name > b.name) return 1;
                  if (a.name < b.name) return -1;
                  return 0;
                })
              }
              keyExtractor={ (item: GenericFood) => item && (item.id || '').toString() }
              renderItem={ ({ item: { id, name } }: { item: GenericFood }) => (
                <Box key={ name } mx="l" mb="xl">
                  <FoodSearchListCard
                    title={ name }
                    subtitle="produce"
                  />
                  <Box position="absolute" right="xl" top="0" left="80%">
                    <Picker
                      mode="dropdown"
                      selectedValue={ foodMap.get(id) }
                      itemStyle={{ height: 100 }}
                      onValueChange={ (itemValue) => {
                        foodMap.set(id, itemValue);
                        setMap(new Map(foodMap));
                      } }
                    >
                      {
                        range(1, 21).map(((i: number) => (
                          <Picker.Item label={ i.toString() } value={ i } />
                        )))
                      }
                    </Picker>
                  </Box>
                </Box>
              ) }
            />
          ) : (
            <Box mt="xxxl">
              <ActivityIndicator />
            </Box>
          )
        }
      </DrawerCard>
    </SafeView>
  );
};

const mapStateToProps = (state: any) => ({
  receiptFoods: state.stock.receiptFoods,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      parseReceipt: stockActions.parseReceipt,
      addToStock: stockActions.addToStock,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiptParseReview);
