import React, { useEffect } from 'react';
import {
  ScrollView, Keyboard, LayoutAnimation,
} from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { useBoolean } from '../../../hooks';
import { KeyboardView, Column, Grid } from '../../Containers';
import { IconButton } from '../../Buttons';
import { NextIcon } from '../../Icons';
import StyledEditor from './StyledEditor';
import StyledToolBar from './StyledToolBar';

export type Props = {
  scrollable?: boolean;
  editable?: boolean;
  initialContent?: string;
  onSave?: (content?: string) => void;
};

const RichTextEditor: React.FC<Props> = ({
  editable,
  initialContent,
  onSave,
}) => {
  const editorRef: React.RefObject<StyledEditor> = React.createRef();
  const [isKeyboardVisible, { setTrue, setFalse }] = useBoolean(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setTrue(),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setFalse(),
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
      <Column>
        <ScrollView>
          <StyledEditor
            ref={ editorRef }
            contentEditable={ editable }
            initialContentHTML={ initialContent || '' }
          />
        </ScrollView>
      </Column>
      {
        isKeyboardVisible && editable ? (
          <StyledToolBar
            getEditor={ () => editorRef.current }
            onPressAddImage={ () => {} }
          />
        ) : (
          onSave && (
            <Grid py="s" mr="xxl" justifyContent="flex-end" alignItems="center">
              <IconButton
                onPress={ onSaveClick }
              >
                <NextIcon variant="warning" />
              </IconButton>
            </Grid>
          )
        )
      }
    </KeyboardView>
  );
};

RichTextEditor.defaultProps = {
  scrollable: true,
  editable: true,
};

export default RichTextEditor;
