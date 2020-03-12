import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Platform, Alert } from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import styled from '../../../styled';
import {
  titleHelper, dateDifferenceHelper, properDateHelper, dateParser,
} from '../../../utils';
import {
  CheckIcon, CancelIcon, DeleteStockIcon, SearchIcon, InfoIcon,
} from '../../../components/Icons';
import {
  StockItem, StockDetails, Tag as TagType,
} from '../../../constants/dataTypes';
import { Box, Grid } from '../../../components/Containers';
import { Button, IconButton } from '../../../components/Buttons';
import { Input, DateInput } from '../../../components/Inputs';
import { Title, Subtitle } from '../../../components/Texts';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import StockItemListCard from './StockItemListCard';
import { DrawerCard } from '../../../components/Cards';
import MoreMenu from '../../../components/MoreMenu';

const ERROR_MSGS = {
  invalidQuantity: 'Enter a positive quantity',
  invalidDate: 'Choose a date before or including today',
};

const errorInitialState = {
  quantityError: '',
  dateError: '',
};

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.l};
  margin-bottom: ${({ theme: { space } }) => space.xl};
`;

export type Props = {
  onFavorite?: () => void;
  onShare?: () => void;
  onBack: () => void;
  onRefresh: () => void;
  onMoreDetails: () => void;
  onItemClick: (id: number) => void;
  onAdd: (stockItem: StockItem) => void;
  onUpdate: (stockItem: StockItem) => void;
  onDelete: (stockItemId: number) => void;
  editMode?: boolean;
  stockDetails: StockDetails;
  stockItemDetails: StockItem;
};

const StockDetailsPage: React.FC<Props> = ({
  onRefresh,
  onItemClick,
  onAdd,
  onUpdate,
  onDelete,
  onMoreDetails,
  editMode: editModeProp,
  stockDetails: {
    foodName, tags, stockItems, nextExpiration,
  },
  stockItemDetails,
}) => {
  const [editMode, setEditMode] = useState(editModeProp);
  const [showDate, setShowDate] = useState(false);
  const [errors, setErrors] = useState(errorInitialState);
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');

  useEffect(
    () => LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY")),
    [editMode, showDate, errors],
  );

  useEffect(() => {
    if (!editMode) {
      setShowDate(false);
      setErrors(errorInitialState);
      setDate(new Date());
      setQuantity('');
    }
  }, [editMode]);

  useEffect(() => {
    if (stockItemDetails) {
      const { quantity: quantityProp, dateObtained } = stockItemDetails;

      if (quantityProp) {
        setQuantity(quantityProp.toString());
      }

      if (dateObtained) {
        setDate(dateParser(dateObtained));
      }
    }
  }, [stockItemDetails]);

  const onChangeDate = (e: any, selectedDate?: Date): void => {
    const currentDate = selectedDate || date;

    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const getExpireTag = (): JSX.Element => {
    const today = new Date();
    const nextExp = dateParser(nextExpiration);
    let expireTag = <></>;

    if (dateDifferenceHelper(nextExp, today) < 0) {
      expireTag = <Tag value="Expired!!" variant="expired" />;
    } else if (dateDifferenceHelper(nextExp, today) <= 2) {
      expireTag = <Tag value="Expires Soon!" variant="soon" />;
    }

    return expireTag;
  };

  const onDeleteClick = (): void => {
    Alert.alert('Are you sure?', 'This item will be deleted', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        onPress: () => {
          onDelete(stockItemDetails.id);

          onRefresh();
          setEditMode(false);
        },
      },
    ]);
  };

  const onSaveClick = (): void => {
    if (!quantity || Number(quantity) <= 0) {
      setErrors({
        ...errorInitialState,
        quantityError: ERROR_MSGS.invalidQuantity,
      });
      return;
    }

    if (date.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)) {
      setErrors({ ...errorInitialState, dateError: ERROR_MSGS.invalidDate });
      return;
    }

    setErrors({ ...errorInitialState });
    const payload = {
      ...stockItemDetails,
      quantity: Number(quantity),
      dateObtained: date.toISOString(),
    };

    if (stockItemDetails && stockItemDetails.id) {
      onUpdate(payload);
    } else {
      onAdd(payload);
    }

    onRefresh();
    setEditMode(false);
  };

  return (
    <Box height="100%" width="100%">
      <Visual
        size="large"
        source={{
          uri:
            'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
        }}
      />
      <DrawerCard
        topOffset={ 300 }
        topRightOverlay={ (
          <MoreMenu
            items={ [
              {
                title: 'See nutritional values',
                icon: <InfoIcon />,
                onPress: onMoreDetails,
              },
              {
                title: 'Delete this entire stock',
                textVariant: 'error',
                icon: <DeleteStockIcon variant="error" />,
                onPress: () => {},
              },
            ] }
          />
        ) }
      >
        <Box px="l">
          <Subtitle mb="s">PRODUCE</Subtitle>
          <Title mb="s">{titleHelper(foodName)}</Title>
        </Box>
        <TagList horizontal showsHorizontalScrollIndicator={ false }>
          <Box mr="xs">{getExpireTag()}</Box>
          {tags && tags.map((tag: TagType) => (
            <Box key={ tag.id } alignSelf="flex-start" mr="xs">
              <Tag value={ tag.name } />
            </Box>
          ))}
        </TagList>
        {
          editMode ? (
            <>
              <Box px="l">
                <Box mb="l">
                  <Input
                    title="Servings"
                    placeholder="2 servings"
                    value={ quantity }
                    error={ errors.quantityError }
                    onChangeText={ (e) => setQuantity(e) }
                  />
                </Box>
                <Box>
                  <Input
                    title="When did you get these?"
                    editable={ false }
                    placeholder="Feb 20, 2020"
                    value={ properDateHelper(date) }
                    error={ errors.dateError }
                  />
                  <Box position="absolute" right="0" top="xxs">
                    <IconButton onPress={ () => setShowDate(!showDate) }>
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              {showDate && <DateInput value={ date } onChange={ onChangeDate } />}
            </>
          ) : (
            stockItems && (
              <>
                {
                  stockItems
                    .sort(
                      (a: StockItem, b: StockItem) => dateParser(a.expirationDate).getTime()
                        - dateParser(b.expirationDate).getTime(),
                    )
                    .map((stockItem: StockItem) => (
                      <Box key={ stockItem.id } px="l" mb="m">
                        <StockItemListCard
                          expirationDate={ stockItem.expirationDate }
                          createdDate={ stockItem.dateObtained }
                          quantity={ stockItem.quantity }
                          onPress={ () => {
                            onItemClick(stockItem.id);
                            setEditMode(true);
                          } }
                        />
                      </Box>
                    ))
                }
                <Box height="58px" />
              </>
            )
          )
        }
      </DrawerCard>
      <Grid
        position="absolute"
        left="0"
        right="0"
        bottom="xxxl"
        px="xl"
        justifyContent="center"
      >
        {
          editMode ? (
            <>
              <Box mr="s">
                <IconButton variant="error" onPress={ onDeleteClick }>
                  <DeleteStockIcon variant="inverted" />
                </IconButton>
              </Box>
              <Box mr="s">
                <IconButton onPress={ () => setEditMode(false) }>
                  <CancelIcon variant="warning" />
                </IconButton>
              </Box>
              <IconButton variant="warning" onPress={ onSaveClick }>
                <CheckIcon variant="inverted" />
              </IconButton>
            </>
          ) : (
            <Button
              variant="warning"
              title="Add some more"
              onPress={ () => setEditMode(true) }
            />
          )
        }
      </Grid>
    </Box>
  );
};

export default StockDetailsPage;
