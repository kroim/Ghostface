import styled from 'styled-components';

export const Container = styled.header`
  background-color: white;
`;

export const Content = styled.div`
   max-width: 1216px;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1216px) {
    margin: 0 20px;
  }

  .connect-btn {
    margin-left: 25px;
    border-radius: 50px;
    padding: 6px 25px 7px;
    white-space: nowrap;
    transition: .3s;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #47b2e4;
    font-weight: 600;
    background-color: #670067 !important;
    border-color: #670067 !important;
  }
`;

export const Logo = styled.div`
  display: inline-flex;

  img {
    width: 48px;
    height: 48px;
  }
`;
