import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 56px;
  border: 0;
  border-radius: 10px;
  padding: 0 32px;
  font-weight: 500;
  margin-top: 16px;
  text-transform: uppercase;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7159c1')};
  }
`;
