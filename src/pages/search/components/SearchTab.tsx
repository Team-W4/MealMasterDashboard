import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import TextButton from '../../../components/Buttons/TextButton';

export type Props = {
  title: string;
  active?: boolean;
  onLongPress: (ev: NativeSyntheticEvent<NativeTouchEvent> | void) => void;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent> | void) => void;
};

const SearchTab: React.FC<Props> = ({
  title, active, onPress, onLongPress, ...props
}) => (
  <TextButton
    mr="50px"
    size="h1"
    variant={ active ? 'warning' : 'tertiary' }
    onLongPress={ onLongPress }
    onPress={ onPress }
    { ...props }
  >
    {title}
  </TextButton>
);

export default React.forwardRef(SearchTab);
