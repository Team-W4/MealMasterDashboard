import React from 'react';
import DateTimePicker, {
  IOSNativeProps,
  AndroidNativeProps,
} from '@react-native-community/datetimepicker';
import Box from '../../Containers/Box';
import Heading from '../../Texts/Heading';

export type Props = (IOSNativeProps | AndroidNativeProps) & {
  title?: string;
};

const DateInput: React.FC<Props> = ({ title, ...props }) => (
  <Box>
    {title && <Heading>{title}</Heading>}
    <DateTimePicker {...props} />
  </Box>
);

export default DateInput;
