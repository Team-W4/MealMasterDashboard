import React from 'react';
import Box from '../../components/Containers/Box';
import Button from '../../components/Buttons/Button';
import IconButton from '../../components/Buttons/IconButton';
import FavoriteIcon from '../../components/Icons/Favorite';

const HomePage: React.FC = () => (
  <Box>
    <IconButton>
      <FavoriteIcon variant="warning" />
    </IconButton>
    <Button title="Add" variant="normal" />
    <Button title="Add" variant="warning" />
    <Button title="Add" variant="active" />
    <Button title="Add" variant="error" />
    <Button title="Add" variant="success" />
    <Button title="Add" variant="secondary" />
    <Button title="Add" variant="tertiary" />
    <Button title="Add" variant="link" />
  </Box>
);

export default HomePage;
