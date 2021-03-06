import styled from '../../../styled';
import { Card, CardProps } from '../../../components/Cards';

enum stockCardColorEnum {
  warning,
  error,
  tertiary,
}

export type StockCardColorKeys = keyof typeof stockCardColorEnum;

export type StockCardColorProps = {
  shadowVariant?: StockCardColorKeys;
};

export type Props = CardProps & StockCardColorProps;

const StockListCardWrapper = styled(Card)<Props>`
  ${({ shadowVariant, theme: { colors } }) => {
    switch (shadowVariant) {
      case 'warning':
        return `
          box-shadow: 0 15px 18px;
          shadow-opacity: 0.5;
          shadow-color: ${colors.neoncarrot};
        `;
      case 'error':
        return `
          box-shadow: 0 15px 18px;
          shadow-opacity: 0.75;
          shadow-color: ${colors.persimmonred};
        `;
      case 'tertiary':
      default:
        return `
          box-shadow: 0 0 10px;
          shadow-color: ${colors.silver};
        `;
    }
  }}
`;

export default StockListCardWrapper;
