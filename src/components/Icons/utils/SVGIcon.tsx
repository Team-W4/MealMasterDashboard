/* eslint-disable react/no-array-index-key */
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { space, SpaceProps } from 'styled-system';
import styled from '../../../styled';
import iconSizes, { IconSizeProps } from '../variables/iconSizes';
import iconColors, { IconColorProps } from '../variables/iconColors';
import iconWrapperSizes, { IconWrapperSizeProps } from '../variables/iconWrapperSizes';
import iconWrapperColors, { IconWrapperColorProps } from '../variables/iconWrapperColor';

export type Props = SvgProps &
  IconSizeProps &
  IconColorProps &
  IconWrapperColorProps &
  SpaceProps & {
    paths: Array<string>;
  };

type SVGProps = Omit<Props, 'paths'>;

const StyledSVG = styled(Svg)<SVGProps>`
  ${iconSizes}
  ${space}
`;

const StyledSVGWrapper = styled.View<
  IconWrapperSizeProps & IconWrapperColorProps
>`
  ${iconWrapperSizes}
  ${iconWrapperColors}
  border-radius: 100px;
  border-width: 5px;
  align-items: center;
  justify-content: center;
`;

const ConditionalIconWrapper: React.FC<React.PropsWithChildren<
  IconWrapperSizeProps & IconWrapperColorProps
>> = ({ wrapperVariant, size, children }) => (
  wrapperVariant ? (
    <StyledSVGWrapper wrapperVariant={ wrapperVariant } size={ size }>
      {children}
    </StyledSVGWrapper>
  ) : (
    <>
      {children}
    </>
  )
);

const SVGIcon: React.FC<Props> = ({
 paths, variant, size, wrapperVariant, ...props
}) => (
  <ConditionalIconWrapper wrapperVariant={ wrapperVariant } size={ size }>
    <StyledSVG
      viewBox="0 0 50 50"
      size={ size }
      fill={ variant ? iconColors[variant] : '' }
      { ...props }
    >
      {paths.map((path, index) => (
        <Path key={ index } d={ path } />
        ))}
    </StyledSVG>
  </ConditionalIconWrapper>
  );

SVGIcon.defaultProps = {
  size: 'normal',
  variant: 'normal',
};

export default SVGIcon;
