import React from 'react';
import styled from '../../../styled';
import StyledCardWrapper, {
  Props as SWProps,
} from '../../../components/Cards/Card/StyledCardWrapper';

const StyledImage = styled.Image`
  height: 75px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = SWProps & {
  imageURI?: string;
  title?: string;
  tag?: string;
  expiryTime?: string;
  quantity?: string;
};

const StockListCard: React.FC<Props> = ({
  imageURI,
  title,
  tag,
  expiryTime,
  quantity,
  ...props
}) => (
  <StyledCardWrapper {...props}>
    <StyledImage source={{ uri: imageURI }} />
  </StyledCardWrapper>
);

export default StockListCard;
