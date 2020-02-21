import styled from "../../../styled";
import Card, { Props as CardProps } from '../../../components/Cards/Card';

enum stockCardColorEnum {
  warning,
  error,
  tertiary,
}

export type StockCardColorKeys = keyof typeof stockCardColorEnum;

export type StockCardColorProps = {
  shadowVariant?: StockCardColorKeys;
};

const StockListCardWrapper = styled(Card)<CardProps & StockCardColorProps>`
  ${({ shadowVariant, theme: { colors } }) => {
    switch (shadowVariant) {
      case 'warning':
        return `
          shadow-opacity: 0.5;
          shadow-color: ${colors.neoncarrot};
        `;
      case 'error':
        return `
          shadow-opacity: 0.5;
          shadow-color: ${colors.persimmonred};
        `;
      case 'tertiary':
      default:
        return '';
    };
  }}
`;

export default StockListCardWrapper;
