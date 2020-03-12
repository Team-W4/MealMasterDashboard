import React, { useState, useEffect } from 'react';
import {
  ScrollView, Keyboard, LayoutAnimation,
} from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { KeyboardView, Column, Grid } from '../../Containers';
import { IconButton } from '../../Buttons';
import { NextIcon } from '../../Icons';
import StyledEditor from './StyledEditor';
import StyledToolBar from './StyledToolBar';

export type Props = {
  initialContent?: string;
  onSave?: (content?: string) => void;
};

const RichTextEditor: React.FC<Props> = ({
  initialContent,
  onSave,
}) => {
  const editorRef: React.RefObject<StyledEditor> = React.createRef();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }, [isKeyboardVisible]);

  const onSaveClick = async () => {
    // Get the data here and call the interface to save the data
    const html = await editorRef.current?.getContentHtml();

    if (onSave) {
      onSave(html);
    }
  };

  return (
    <KeyboardView full behavior="padding">
      <Column m="l" mb="0">
        <ScrollView>
          <StyledEditor
            ref={ editorRef }
            initialContentHTML={ initialContent || '' }
          />
        </ScrollView>
      </Column>
      {isKeyboardVisible ? (
        <StyledToolBar
          getEditor={ () => editorRef.current }
          onPressAddImage={ () => {} }
        />
      ) : (
        <Grid py="s" mr="xxl" justifyContent="flex-end" alignItems="center">
          <IconButton
            onPress={ onSaveClick }
          >
            <NextIcon variant="warning" />
          </IconButton>
        </Grid>
      )}
    </KeyboardView>
  );
};

export default RichTextEditor;
