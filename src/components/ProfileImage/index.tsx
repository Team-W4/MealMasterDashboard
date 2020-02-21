import React from 'react';
import styled from '../../styled';
import { iconButtonSizes } from '../Buttons/IconButton';
import { ButtonSizeProps } from '../Buttons/buttonSizes';

export type Props = ButtonSizeProps & {
  rounded?: boolean;
  uri?: string;
};

const StyledProfileImage = styled.Image<Props>`
  width: 50px;
  height: 50px;
  border-radius: ${({ rounded, theme: { space } }) =>
    rounded ? '100px' : space.s};
`;

// TODO: #API profile retrieval API here
const ProfileImage: React.FC<Props> = ({ rounded, uri, ...props }) => (
  <StyledProfileImage rounded={rounded} source={{ uri }} {...props} />
);

ProfileImage.defaultProps = {
  rounded: false,
  uri:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSApy-jLGxkJkh2yMP19apdhBt9tmO6l4XD5QQ2yLGNah9Xy-dQ',
};

export default ProfileImage;
