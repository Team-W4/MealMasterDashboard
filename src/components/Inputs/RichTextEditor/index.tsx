import React from 'react';
import { ScrollView } from 'react-native';
import {
  KeyboardView, Column, Grid, Box,
} from '../../Containers';
import { IconButton } from '../../Buttons';
import { NextIcon } from '../../Icons';
import StyledEditor from './StyledEditor';
import StyledToolBar from './StyledToolBar';

const EditorWrapper: React.FC<{ editable?: boolean }> = ({ editable, ...props }) => (
  editable ? (
    <ScrollView { ...props } />
  ) : (
    <Box { ...props } />
  )
);

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

  const onSaveClick = async () => {
    // Get the data here and call the interface to save the data
    const html = await editorRef.current?.getContentHtml();

    if (onSave) {
      onSave(html);
    }
  };

  return (
    <KeyboardView full behavior="padding">
      <Column m="l" my="0">
        <EditorWrapper editable={ editable }>
          <StyledEditor
            ref={ editorRef }
            contentEditable={ editable }
            initialContentHTML={ initialContent || '' }
          />
        </EditorWrapper>
      </Column>
      {
        editable && (
          <Grid alignItems="center">
            <Column>
              <StyledToolBar
                getEditor={ () => editorRef.current }
                onPressAddImage={ () => {} }
              />
            </Column>
            {
              onSave && (
                <Box px="m">
                  <IconButton
                    onPress={ onSaveClick }
                  >
                    <NextIcon variant="warning" />
                  </IconButton>
                </Box>
              )
            }
          </Grid>
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
