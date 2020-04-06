import React, { useEffect } from 'react';
import { SafeView, Column, Grid } from '../../../components/Containers';
import { StockIcon } from '../../../components/Icons';
import { Title, Heading } from '../../../components/Texts';
import { ReceiptParseNavigationProps } from '../ReceiptParseStack';

export type Props = ReceiptParseNavigationProps<'ReceiptConfirm'> & {
};

const ReceiptConfirm: React.FC<Props> = ({ navigation, route: { params: { addedQuantity } } }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Stocks'), 3000);
  }, []);

  return (
    <SafeView full>
      <Column justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center">
          <StockIcon wrapperVariant="warning" />
          <Title ml="m">Your Receipt</Title>
        </Grid>
        <Heading mt="l">{`Added ${addedQuantity || 0} items to your stock`}</Heading>
      </Column>
    </SafeView>
  );
};

export default ReceiptConfirm;
