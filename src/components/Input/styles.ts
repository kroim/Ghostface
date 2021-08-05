import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.inputBg};
  color: ${(props) => props.theme.colors.placeholder};
  border-radius: 10px;
  padding: 8px 16px;
  border: 2px solid ${(props) => props.theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;

  & + div {
    margin: 8px 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }
  }

  svg {
    margin-right: 16px;
  }
`;
