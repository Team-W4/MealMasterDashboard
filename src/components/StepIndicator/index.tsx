import React, { PropsWithChildren } from 'react';
import styled from '../../styled';
import { Grid, Box } from '../Containers';

const StepDot = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.foreground};
  border-radius: 5px;
`;

export type Props = {
  stepLength: number;
  currentStep: number;
};

const StepIndicator: React.FC<PropsWithChildren<Props>> = ({
  stepLength, currentStep, children,
}) => {
  const stepList: Array<JSX.Element | React.ReactNode> = [];
  let i = 0;
  for (i = 0; i < stepLength; i += 1) {
    if (currentStep !== i) {
      stepList.push(<StepDot />);
    } else {
      stepList.push(children);
    }
  }

  return (
    <Grid alignItems="center">
      {
        stepList.map((step) => (
          <Box mr="s">
            {step}
          </Box>
        ))
      }
    </Grid>
  );
};


export default StepIndicator;
