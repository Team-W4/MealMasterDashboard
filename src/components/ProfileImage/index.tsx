import React from 'react';
import styled from '../../styled';

export type Props = {
  rounded?: boolean;
  uri?: string;
};

const StyledProfileImage = styled.Image<Props>`
  width: 50px;
  height: 50px;
  border-radius: ${({ rounded, theme: { space } }) => rounded ? '25px' : space.s};
`;

// TODO: #API profile retrieval API here
const ProfileImage: React.FC<Props> = ({ rounded, uri }) => (
  <StyledProfileImage rounded={rounded} source={{ uri }} />
);

ProfileImage.defaultProps = {
  rounded: false,
  uri:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSApy-jLGxkJkh2yMP19apdhBt9tmO6l4XD5QQ2yLGNah9Xy-dQ',
};

export default ProfileImage;
