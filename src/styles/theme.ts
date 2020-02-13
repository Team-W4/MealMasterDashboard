import colors, {
  ColorNames,
  DefaultSemanticColors,
  SemanticColors,
} from './variables/colors';
import fontSizes, {FontSizeNames} from './variables/fontSizes';
import fontWeights, {FontWeightNames} from './variables/fontWeights';
import spaces, {SpaceNames} from './variables/spaces';

export interface ThemeInterface {
  colors: ColorNames;
  fontSizes: FontSizeNames;
  fontWeights: FontWeightNames;
  spaces: SpaceNames;
  semanticColors: SemanticColors;
}

const theme: ThemeInterface = {
  colors,
  fontSizes,
  fontWeights,
  spaces,
  semanticColors: DefaultSemanticColors,
};

export default theme;
