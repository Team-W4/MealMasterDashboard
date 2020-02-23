import React from 'react';
import { ScrollView } from 'react-native';
import styled from '../../styled';
import Box from '../../components/Containers/Box';
import Text from '../../components/Texts/Text';
import Card from '../../components/Cards/Card';
import ScrollList from '../../components/ScrollList';

const HoriztonalScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1
  background-color: orange;
`;

const SuggestionCard = styled(Card)`
  aspect-ratio: 1;
`;

const HomePage: React.FC = () => (
  <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <SuggestionCard>
        
      </SuggestionCard>
    </ScrollView>
  </ScrollView>
);

export default HomePage;
