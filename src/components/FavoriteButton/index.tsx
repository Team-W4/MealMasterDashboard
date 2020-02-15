import React from 'react';
import FavoriteIcon from '../Icons/Favorite';
import StyledRoundedButton from './StyledRoundedButton';

export type Props = {
  favorited?: boolean;
};

const FavoriteButton: React.FC<Props> = ({ favorited, ...props }) => (
  <StyledRoundedButton {...props}>
    <FavoriteIcon variant={favorited ? 'warning' : 'tertiary'} />
  </StyledRoundedButton>
);

FavoriteButton.defaultProps = {
  favorited: false,
};

export default FavoriteButton;
