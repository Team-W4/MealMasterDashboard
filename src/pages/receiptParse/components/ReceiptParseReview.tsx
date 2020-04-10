import React, { useEffect, useState } from 'react';
import range from 'lodash.range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  LayoutAnimation, Picker, ActivityIndicator, StatusBar, Alert,
} from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { useSafeArea } from 'react-native-safe-area-context';
import { RNCamera } from 'react-native-camera';
import { stockActions } from '../../../actions';
import { GenericFood, StockItem } from '../../../constants/dataTypes';
import {
  SafeView, Box, Grid,
} from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';
import { Title, Subtitle } from '../../../components/Texts';
import { IconButton, Button } from '../../../components/Buttons';
import { StockIcon, CameraIcon, RetryIcon } from '../../../components/Icons';
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
  const { bottom } = useSafeArea();
  const cameraRef = React.createRef<RNCamera>();
  const [reviewMode, setReviewMode] = useState(false);
  const [foodMap, setMap] = useState(new Map<number, number>());

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.current?.takePictureAsync({
        base64: true,
        pauseAfterCapture: true,
      });

      if (data) {
        setReviewMode(true);
        parseReceipt(data.base64);
      }
    }
  };

  const retryTakePicture = () => {
    setReviewMode(false);
    if (cameraRef) {
      cameraRef.current?.resumePreview();
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

  useEffect(() => {
    if (receiptFoods && receiptFoods.length > 0 && receiptFoods.every((food) => !!food)) {
      receiptFoods.forEach((food) => {
        if (food) {
          foodMap.set(food.id, 1);
        }
      });

      LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
    } else {
      if (receiptFoods && receiptFoods.length === 0) return;

      Alert.alert('', 'We could not find any food on your receipt.', [
        {
          text: 'Try again',
          style: 'cancel',
          onPress: () => retryTakePicture(),
        },
      ]);
    }
  }, [receiptFoods]);

  return (
    <SafeView full side="bottom">
      <StatusBar barStyle="light-content" />
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
          <IconButton variant="warning" onPress={ retryTakePicture }>
            <RetryIcon variant="inverted" />
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
          receiptFoods && receiptFoods.length > 0 && receiptFoods.every((food) => !!food) ? (
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
              renderItem={ ({ item }: { item: GenericFood }) => (
                <Box key={ item.name } mx="l" my="xs">
                  <FoodSearchListCard
                    data={ item }
                    rightOverlay={ (
                      <Picker
                        mode="dropdown"
                        selectedValue={ foodMap.get(item.id) }
                        itemStyle={{ height: 100 - 32, width: 20 }}
                        onValueChange={ (itemValue) => {
                          foodMap.set(item.id, itemValue);
                          setMap(new Map(foodMap));
                        } }
                      >
                        {
                          range(1, 21).map(((i: number) => (
                            <Picker.Item key={ i } label={ i.toString() } value={ i } />
                          )))
                        }
                      </Picker>
                    ) }
                  />
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
      {
        reviewMode && receiptFoods && receiptFoods.length > 0
        && receiptFoods.every((food) => !!food) && (
          <Grid position="absolute" left="0" right="0" bottom={ bottom > 0 ? bottom : 'xxxl' } px="l" justifyContent="center">
            <Button variant="warning" title="Add to stock" onPress={ addReceiptToStock } />
          </Grid>
        )
      }
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
