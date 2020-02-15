import { ThemeInterface } from './theme';
import * as styledComponents from 'styled-components/native';

type StyledComponents = styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

const {
  default: styled,
  css,
  ThemeProvider,
  withTheme,
} = styledComponents as StyledComponents;

export { css, ThemeProvider, withTheme };

export default styled;
