import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { StockItem } from '../../../constants/dataTypes';
import Box from '../../../components/Containers/Box';
import Grid, { Column } from '../../../components/Containers/Grid';
import Input from '../../../components/Inputs/Input';
import DateInput from '../../../components/Inputs/DateInput';
import SearchIcon from '../../../components/Icons/Search';
import Button from '../../../components/Buttons/Button';
import IconButton from '../../../components/Buttons/IconButton';
import { properDateHelper } from '../../../utils/dateHelper';

const ERROR_MSGS = {
  invalidQuantity: 'Enter a positive quantity',
  invalidDate: 'Choose a date before or including today',
};

export type Props = {
  onBack: () => void;
  onUpdateStock: (stockItem: StockItem) => void;
  onAddStock: (foodId: number, quantity: number) => void;
  stockItemDetails: StockItem;
};

const errorInitialState = {
  quantityError: '',
  dateError: '',
};

const StockEditForm: React.FC<Props> = ({
  onBack,
  onUpdateStock,
  onAddStock,
  stockItemDetails,
}) => {
  const [showDate, setShowDate] = useState(false);
  const [errors, setErrors] = useState(errorInitialState);
  const [date, setDate] = useState(
    stockItemDetails && stockItemDetails.dateObtained
    ? new Date(stockItemDetails.dateObtained)
    : new Date()
  );
  const [quantity, setQuantity] = useState(stockItemDetails && stockItemDetails.quantity.toString() || '');

  function onChange(e: any, selectedDate?: Date) {
    const currentDate = selectedDate || date;

    setShowDate(Platform.OS === 'ios' ? true : false);
    setDate(currentDate);
  };

  function onCancelClick() {
    Alert.alert(
      'Are you sure?',
      'Your edit will be lost',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: onBack},
      ],
    );
  };

  function onSaveClick() {
    if (!quantity || Number(quantity) <= 0) {
      setErrors({ ...errorInitialState, quantityError: ERROR_MSGS.invalidQuantity});
      return;
    }

    if (date.setHours(0, 0, 0, 0) > (new Date()).setHours(0, 0, 0, 0)) {
      setErrors({ ...errorInitialState, dateError: ERROR_MSGS.invalidDate});
      return;
    }

    setErrors({ ...errorInitialState });
    if (stockItemDetails) {
      onUpdateStock({
        quantity,
        dateObtained: date.toString(),
      });
    } else {
      
    }
  }

  console.log(quantity);
  return (
		<Box width="100%" flexGrow={1} mt="200px">
      <Box px="xxxl">
        <Box mb="l">
          <Input
            title="Servings"
            placeholder="2 servings"
            value={quantity}
            error={errors.quantityError}
            onChangeText={e => setQuantity(e)}
          />
        </Box>
        <Box>
          <Input
            title="When did you get these?"
            editable={false}
            placeholder="Feb 20, 2020"
            value={properDateHelper(date)}
            error={errors.dateError}
          />
          <Box position="absolute" right="0" top="xxs">
            <IconButton onPress={() => setShowDate(!showDate)}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {showDate && (
        <DateInput
          value={date}
          onChange={onChange}
        />
      )}
      <Grid position="absolute" bottom="xxxl" px="l" width="100%">
        <Column pr="xs">
          <Button
            variant="normal"
            title="Cancel"
            onPress={onCancelClick}
          />
        </Column>
        <Column pl="xs">
          <Button
            variant="warning"
            title="Save"
            onPress={onSaveClick}
          />
        </Column>
      </Grid>
    </Box>
  );
}

export default StockEditForm;
