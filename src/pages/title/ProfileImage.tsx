import React from 'react';
import styled from '../../styled';

const StyledProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

// TODO: #API profile retrieval API here
const ProfileImage = () => (
  <StyledProfileImage
    source={{
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSApy-jLGxkJkh2yMP19apdhBt9tmO6l4XD5QQ2yLGNah9Xy-dQ',
    }}
  />
);

export default ProfileImage;
