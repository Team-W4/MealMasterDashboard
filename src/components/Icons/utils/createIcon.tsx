import React from 'react';
import { StyledComponent } from 'styled-components';
import styled from '../../../styled';
import { ThemeInterface } from '../../../styled/theme';
import SVGIcon, { Props as SVGIconProps } from './SVGIcon';

type Props = { [K in Exclude<keyof SVGIconProps, 'paths'>]?: SVGIconProps[K] };

const createIcon = (
  name: string,
  paths: Array<string>,
): StyledComponent<React.FunctionComponent<Props>, ThemeInterface> => {
  const Icon: React.FC<Props> = props => <SVGIcon paths={paths} {...props} />;

  const StyledIcon = styled(Icon)``;
  StyledIcon.displayName = `${name}Icon`;

  return StyledIcon;
};

export default createIcon;
