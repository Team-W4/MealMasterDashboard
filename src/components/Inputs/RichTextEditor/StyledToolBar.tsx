import React from 'react';
import { FlatList } from 'react-native';
import { actions as EditorActions } from './actions';
import {
  BoldIcon, ItalicIcon, UnderlinedIcon, UnorderedListIcon, OrderedListIcon,
  LinkIcon, AlignLeftIcon, AlignRightIcon, AlignCenterIcon, AlignFullIcon,
} from '../../Icons';
import { IconButton } from '../../Buttons';
import { Box } from '../../Containers';

const defaultActions = [
  EditorActions.setBold,
  EditorActions.setItalic,
  EditorActions.setUnderline,
  EditorActions.alignLeft,
  EditorActions.alignCenter,
  EditorActions.alignRight,
  EditorActions.alignFull,
  EditorActions.insertBulletsList,
  EditorActions.insertOrderedList,
  EditorActions.insertLink,
  EditorActions.insertImage,
];

const icons = {
  [EditorActions.insertImage]: <></>,
  [EditorActions.setBold]: <BoldIcon />,
  [EditorActions.setItalic]: <ItalicIcon />,
  [EditorActions.setUnderline]: <UnderlinedIcon />,
  [EditorActions.alignLeft]: <AlignLeftIcon />,
  [EditorActions.alignRight]: <AlignRightIcon />,
  [EditorActions.alignCenter]: <AlignCenterIcon />,
  [EditorActions.alignFull]: <AlignFullIcon />,
  [EditorActions.insertBulletsList]: <UnorderedListIcon />,
  [EditorActions.insertOrderedList]: <OrderedListIcon />,
  [EditorActions.insertLink]: <LinkIcon />,
};

export type Props = {
  getEditor: () => any;
  actions?: Array<string>;
  onPressAddImage?: () => void;
};

type Data = { action: string, selected: boolean };

type State = {
  editor: any;
  selectedItems: Array<string>;
  actions: Array<string>;
  data: Array<Data>;
};

export default class RichToolbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      editor: undefined,
      selectedItems: [],
      actions: defaultActions,
      data: RichToolbar.getRows(defaultActions, []),
    };
  }

  public componentDidMount(): void {
    const { getEditor } = this.props;

    const editor = getEditor();
    if (!editor) {
      throw new Error('Toolbar has no editor!');
    } else {
      editor.registerToolbar(
        (selectedItems: Array<any>) => this.setSelectedItems(selectedItems),
      );
      this.setState({ editor });
    }
  }

  private onPress(action: string): void {
    const { onPressAddImage } = this.props;
    const { editor } = this.state;

    switch (action) {
      case EditorActions.setBold:
      case EditorActions.setItalic:
      case EditorActions.insertBulletsList:
      case EditorActions.insertOrderedList:
      case EditorActions.setUnderline:
      case EditorActions.heading1:
      case EditorActions.heading2:
      case EditorActions.heading3:
      case EditorActions.heading4:
      case EditorActions.heading5:
      case EditorActions.heading6:
      case EditorActions.setParagraph:
      case EditorActions.removeFormat:
      case EditorActions.alignLeft:
      case EditorActions.alignCenter:
      case EditorActions.alignRight:
      case EditorActions.alignFull:
      case EditorActions.setSubscript:
      case EditorActions.setSuperscript:
      case EditorActions.setStrikethrough:
      case EditorActions.setHR:
      case EditorActions.setIndent:
      case EditorActions.setOutdent:
      case EditorActions.insertLink:
        editor.sendAction(action, "result");
        break;
      case EditorActions.insertImage:
        if (onPressAddImage) {
          onPressAddImage();
        }
        break;
      default:
        break;
    }
  }

  private static getRows(actions: Array<string>, selectedItems: Array<string>): Array<Data> {
    return actions.map(
      (action) => ({ action, selected: selectedItems.includes(action) }),
    );
  }

  private setSelectedItems(selectedItems: Array<string>): void {
    const { actions, selectedItems: selectedState } = this.state;

    if (selectedItems !== selectedState) {
      this.setState({
        selectedItems,
        data: RichToolbar.getRows(actions, selectedItems),
      });
    }
  }

  public render(): JSX.Element {
    const { data } = this.state;

    return (
      <Box height="75px" alignItems="center" justifyContent="center">
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          horizontal
          keyExtractor={ (item, index) => `${item.action}-${index}` }
          data={ data }
          showsHorizontalScrollIndicator={ false }
          renderItem={ ({ item: { action, selected } }) => (
            <IconButton variant={ selected ? 'warning' : 'transparent' } onPress={ () => this.onPress(action) }>
              {icons[action]}
            </IconButton>
          ) }
        />
      </Box>
    );
  }
}
