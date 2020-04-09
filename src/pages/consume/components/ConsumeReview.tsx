import React from 'react';
import { SafeView } from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';

export type Props = {

};

const ConsumeReview: React.FC<Props> = () => (
  <SafeView full>
    <DrawerCard />
  </SafeView>
);

export default ConsumeReview;
