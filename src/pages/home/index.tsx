import React from 'react';
import { ScrollView } from 'react-native';
import styled from '../../styled';
import Card from '../../components/Cards/Card';

const SuggestionCard = styled(Card)`
  aspect-ratio: 1;
`;

const HomePage: React.FC = () => (
  <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
      <SuggestionCard />
    </ScrollView>
  </ScrollView>
);

export default HomePage;
