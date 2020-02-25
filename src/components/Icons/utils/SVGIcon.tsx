/* eslint-disable react/no-array-index-key */
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { space, SpaceProps } from 'styled-system';
import styled from '../../../styled';
import iconSizes, { IconSizeProps } from '../variables/iconSizes';
import iconColors, { IconColorProps } from '../variables/iconColors';

export type Props = SvgProps &
  IconSizeProps &
  IconColorProps &
  SpaceProps & {
    paths: Array<string>;
  };

const StyledSVG = styled(Svg)`
  ${iconSizes}
  ${space}
`;

const SVGIcon: React.FC<Props> = ({ paths, variant, ...props }) => (
  <StyledSVG
    viewBox="0 0 50 50"
    fill={ variant ? iconColors[variant] : '' }
    { ...props }
  >
    {paths.map((path, index) => (
      <Path key={ index } d={ path } />
    ))}
  </StyledSVG>
);

SVGIcon.defaultProps = {
  size: 'normal',
  variant: 'normal',
};

export default SVGIcon;
