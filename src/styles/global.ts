import fontSizes from './variables/fontSizes';
import fontWeight from './variables/fontWeights';
import spaces from './variables/spaces';
import {bodyColor, linkColor} from './variables/colors';
import {createGlobalStyle} from './styled';

const global = createGlobalStyle`
  @font-face {
    font-family: Sofia;
    src: url('/fonts/SofiaProLight.woff') format('woff');
    font-weight: ${fontWeight.light};
  }

  @font-face {
    font-family: Sofia;
    src: url('/fonts/SofiaProRegular.woff') format('woff');
    font-weight: ${fontWeight.normal};
  }

  @font-face {
    font-family: Sofia;
    src: url('/fonts/SofiaProBold.woff') format('woff');
    font-weight: ${fontWeight.bold};
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, button, textarea, select {
    font-family: Sofia, sans-serif;
  }

  html, body {
    font-family: Sofia, sans-serif;
    font-size: ${fontSizes.pica};
    color: ${bodyColor};
    line-height: ${spaces.large};
  }

  a {
    color: ${linkColor};
    text-decoration: none;
  }

  strong {
    font-weight: ${fontWeight.bold};
  }

  select::-ms-expand {
    display: none;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default global;
