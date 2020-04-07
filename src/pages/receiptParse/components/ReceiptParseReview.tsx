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
import { Title, Subtitle } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { StockIcon, CheckIcon, CameraIcon } from '../../../components/Icons';
import { ReceiptParseNavigationProps } from '../ReceiptParseStack';
import DataList from '../../../components/DataList';
import FoodSearchListCard from '../../search/components/FoodSearchListCard';

export type Props = ReceiptParseNavigationProps<'ReceiptReview'> & {
  receiptFoods: Array<GenericFood>;
  parseReceipt: (base64?: string) => void;
  addToStock: (id: number, amount: Omit<StockItem, 'id'>) => void;
};

const ReceiptParseReview: React.FC<Props> = ({
  navigation, parseReceipt, receiptFoods, addToStock,
}) => {
  const cameraRef = React.createRef<RNCamera>();
  const [reviewMode, setReviewMode] = useState(false);
  const [foodMap, setMap] = useState(new Map<number, number>());

  useEffect(() => {
    if (receiptFoods && receiptFoods.length > 0) {
      receiptFoods.forEach((food) => {
        if (food) {
          foodMap.set(food.id, 1);
        }
      });
    }
  }, [receiptFoods]);

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.current?.takePictureAsync({
        quality: 0.5,
        base64: true,
        pauseAfterCapture: true,
      });

      if (data) {
        setReviewMode(true);
        parseReceipt(data.base64);
      }
    }
  };

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
    <SafeView full side="bottom" style={{ backgroundColor: 'orange' }}>
      <RNCamera
        ref={ cameraRef }
        style={{ height: 450 }}
        autoFocus="on"
      >
        <SafeView full>
          <Box m={ 64 } borderWidth={ 3 } borderColor="white" borderRadius={ 20 } flexGrow={ 1 } />
        </SafeView>
      </RNCamera>
      <DrawerCard
        topRightOverlay={ reviewMode ? (
          <IconButton variant="warning" onPress={ addReceiptToStock }>
            <CheckIcon variant="inverted" />
          </IconButton>
        ) : (
          <IconButton variant="warning" onPress={ takePicture }>
            <CameraIcon variant="inverted" />
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
              keyExtractor={ (item: GenericFood) => ((item && item.name) || '').toString() }
              renderItem={ ({ item: { id, name } }: { item: GenericFood }) => (
                <Box key={ name } mx="l" my="xs">
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
                          <Picker.Item key={ i } label={ i.toString() } value={ i } />
                        )))
                      }
                    </Picker>
                  </Box>
                </Box>
              ) }
            />
          ) : (
            <Box pt="xxxl" mt="xxxl">
              {
                reviewMode ? (
                  <ActivityIndicator />
                ) : (
                  <Subtitle textAlign="center" mb="xxl">Try taking a picture of your receipt</Subtitle>
                )
              }
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
