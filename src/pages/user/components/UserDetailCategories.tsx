import React from 'react';
import styled from '../../../styled';

const UserDetailCategories = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
`;

export default UserDetailCategories;
