import styled from '../../styled';
import tagColors, { TagColorProps } from './tagColors';

const StyledTagWrapper = styled.View<TagColorProps>`
  ${tagColors}
  height: 25px;
  min-width: 90px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex-direction: row;
  padding-left: ${({ theme: { space } }) => space.m};
  padding-right: ${({ theme: { space } }) => space.m};
  border-radius: ${({ theme: { space } }) => space.xs};
`;

export default StyledTagWrapper;
