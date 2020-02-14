import colors, {
  ColorNames,
  DefaultSemanticColors,
  SemanticColors,
} from './variables/colors';
import fontSizes, { FontSizeNames } from './variables/fontSizes';
import lineHeights, { LineHeightNames } from './variables/lineHeights';
import fontWeights, { FontWeightNames } from './variables/fontWeights';
import spaces, { SpaceNames } from './variables/spaces';

export interface ThemeInterface {
  colors: ColorNames;
  fontSizes: FontSizeNames;
  lineHeights: LineHeightNames;
  fontWeights: FontWeightNames;
  space: SpaceNames;
  semanticColors: SemanticColors;
}

const theme = {
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  space: spaces,
  semanticColors: DefaultSemanticColors,
};

export default theme;
