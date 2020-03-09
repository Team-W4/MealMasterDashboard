import React, { useRef } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeView } from '../../Containers';
import { Button } from '../../Buttons';
import StyledEditor from './StyledEditor';
import StyledToolBar from './StyledToolBar';

export type Props = {
  initialContent?: string;
  onSave?: () => {};
};

const RichTextEditor: React.FC<Props> = ({
  initialContent,
  onSave,
  ...props
}) => {
  const editorRef: React.RefObject<StyledEditor> = React.createRef();
  const onSaveClick = async () => {
    // Get the data here and call the interface to save the data
    const html = await editorRef.current?.getContentHtml();
    alert(html);

    if (onSave) {
      onSave();
    }
  };

  return (
    <SafeView full>
      <Button variant="warning" onPress={ onSaveClick } />
      <ScrollView>
        <StyledEditor
          ref={ editorRef }
          initialContentHTML={ initialContent || '' }
        />
      </ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <StyledToolBar
          getEditor={ () => editorRef.current }
          onPressAddImage={ () => {} }
        />
      </KeyboardAvoidingView>
    </SafeView>
  );
};

export default RichTextEditor;
