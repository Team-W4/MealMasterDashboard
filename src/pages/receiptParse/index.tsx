import React from 'react';
import ReceiptParseStack from './ReceiptParseStack';
import ReceiptParseReview from './components/ReceiptParseReview';
import ReceiptConfirm from './components/ReceiptConfirm';

const ReceiptParseContainer: React.FC = () => (
  <ReceiptParseStack.Navigator headerMode="none">
    <ReceiptParseStack.Screen name="ReceiptReview" component={ ReceiptParseReview } />
    <ReceiptParseStack.Screen name="ReceiptConfirm" component={ ReceiptConfirm } />
  </ReceiptParseStack.Navigator>
);

export default ReceiptParseContainer;
