import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import StyledEditor from '../../../components/Inputs/RichTextEditor/StyledEditor';
import StyledToolBar from '../../../components/Inputs/RichTextEditor/StyledToolBar';
import { Button } from '../../../components/Buttons';

const initHTML = `
`;

class RecipeEditContainer extends React.Component {
  save = async () => {
    // Get the data here and call the interface to save the data
    const html = await this.richText.getContentHtml();
    alert(html);
  };

  render() {
    const that = this;
    return (
      <SafeAreaView style={ styles.container }>
        <Button variant="warning" onPress={ this.save } />
          <ScrollView style={ styles.scroll }>
            <StyledEditor
              ref={ (rf) => that.richText = rf }
              initialContentHTML={ initHTML }
              style={ styles.rich }
            />
          </ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <StyledToolBar
            getEditor={ () => that.richText }
            onPressAddImage={ () => {} }
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
});

export default RecipeEditContainer;
