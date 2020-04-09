import React from 'react';
import ConsumeStack from './ConsumeStack';
import ConsumeReview from './components/ConsumeReview';

const ConsumeContainer: React.FC = () => (
  <ConsumeStack.Navigator headerMode="none">
    <ConsumeStack.Screen name="ConsumeReview" component={ ConsumeReview } />
    {/* <ConsumeStack.Screen name="ReceiptConfirm" component={ ReceiptConfirm } /> */}
  </ConsumeStack.Navigator>
);

export default ConsumeContainer;
