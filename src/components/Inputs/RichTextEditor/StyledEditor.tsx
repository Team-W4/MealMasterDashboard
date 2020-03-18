import React from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { Dimensions } from 'react-native';
import { actions, messages } from './actions';
import editorHTML from './web/editor';
import { Box } from '../../Containers';

export type Props = {
  contentEditable?: boolean;
  initialContentHTML?: string;
  editorInitializedCallback?: () => void;
};

type State = {
  selectionChangeListeners: Array<any>;
  height: number;
};

class StyledEditor extends React.Component<Props, State> {
  private focusListeners: Array<() => void> = [];

  private intervalHeight?: number = undefined;

  private contentResolve?: Function = undefined;

  private contentReject?: Function = undefined;

  private pendingContentHtml?: number = undefined;

  private webviewBridge?: any;

  constructor(props: Props) {
    super(props);

    this.onMessage = this.onMessage.bind(this);
    this.setWebHeight = this.setWebHeight.bind(this);
    this.sendAction = this.sendAction.bind(this);
    this.setContentFocusHandler = this.setContentFocusHandler.bind(this);
    this.setContentHTML = this.setContentHTML.bind(this);
    this.getContentHtml = this.getContentHtml.bind(this);
    this.sendAction = this.sendAction.bind(this);
    this.registerToolbar = this.registerToolbar.bind(this);
    this.blurContentEditor = this.blurContentEditor.bind(this);
    this.focusContentEditor = this.focusContentEditor.bind(this);
    this.insertImage = this.insertImage.bind(this);
    this.init = this.init.bind(this);

    this.state = {
      selectionChangeListeners: [],
      height: 0,
    };
  }

  public componentWillUnmount(): void {
    if (this.intervalHeight) {
      clearInterval(this.intervalHeight);
    }
  }

  private onMessage(event: WebViewMessageEvent): void {
    const { selectionChangeListeners } = this.state;

    try {
      const message = JSON.parse(event.nativeEvent.data);
      switch (message.type) {
        case messages.CONTENT_HTML_RESPONSE:
          if (this.contentResolve) {
            this.contentResolve(message.data);
            this.contentResolve = undefined;
            this.contentReject = undefined;

            if (this.pendingContentHtml) {
              clearTimeout(this.pendingContentHtml);
              this.pendingContentHtml = undefined;
            }
          }
          break;
        case messages.LOG:
          // eslint-disable-next-line no-console
          console.log('FROM EDIT:', ...message.data);
          break;
        case messages.SELECTION_CHANGE:
          selectionChangeListeners.forEach((listener) => {
            listener(message.data);
          });
          break;
        case messages.CONTENT_FOCUSED:
          this.focusListeners.map((focusHandler: () => void) => focusHandler());
          break;
        case messages.OFFSET_HEIGHT:
          this.setWebHeight(message.data);
          break;
        default:
          break;
      }
    } catch (e) {
      console.error(e);
    }
  };

  private setWebHeight(nextHeight: number): void {
    const { height } = this.state;
    if (nextHeight !== height) {
      this.setState({ height: nextHeight });
    }
  };

  public setContentFocusHandler(listener: () => void): void {
    this.focusListeners.push(listener);
  }

  public setContentHTML(html?: string): void {
    this.sendAction(actions.content, "setHtml", html);
  }

  public async getContentHtml(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.contentResolve = resolve;
      this.contentReject = reject;
      this.sendAction(actions.content, "postHtml");

      this.pendingContentHtml = setTimeout(() => {
        if (this.contentReject) {
          this.contentReject('timeout');
        }
      }, 5000);
    });
  }

  private sendAction(type: string, action?: string, data?: any): void {
    const jsonString = JSON.stringify({ type, name: action, data });
    if (this.webviewBridge) {
      this.webviewBridge.postMessage(jsonString);
    }
  }

  public registerToolbar(listener: any): void {
    const { selectionChangeListeners } = this.state;
    this.setState({
      selectionChangeListeners: [...selectionChangeListeners, listener],
    });
  }

  public blurContentEditor(): void {
    this.sendAction(actions.content, 'blur');
  }

  public focusContentEditor(): void {
    this.sendAction(actions.content, 'focus');
  }

  public insertImage(attributes: any): void {
    this.sendAction(actions.insertImage, "result", attributes);
  }

  public init(): void {
    const { initialContentHTML, editorInitializedCallback } = this.props;

    this.setContentHTML(initialContentHTML);
    this.focusContentEditor();

    if (editorInitializedCallback) {
      editorInitializedCallback();
    }

    this.intervalHeight = setInterval(() => {
      this.sendAction(actions.updateHeight);
    }, 200);
  }

  public render(): JSX.Element {
    const { contentEditable } = this.props;
    const { height } = this.state;

    return (
      <Box height={ height || Dimensions.get('window').height * 0.7 }>
        <WebView
          dataDetectorTypes="none"
          javaScriptEnabled
          hideKeyboardAccessoryView
          bounces={ false }
          scrollEnabled={ false }
          domStorageEnabled={ false }
          keyboardDisplayRequiresUserAction={ false }
          ref={ (r) => { this.webviewBridge = r; } }
          originWhitelist={ ["*"] }
          source={{ html: editorHTML({ contentEditable }) }}
          onLoad={ () => this.init() }
          onMessage={ this.onMessage }
          { ...this.props }
        />
      </Box>
    );
  }
}

export default StyledEditor;
