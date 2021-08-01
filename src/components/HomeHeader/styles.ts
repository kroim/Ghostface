import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
`;

export const Navbar = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1216px) {
    margin: 0 20px;
  }

  a{
      text-decoration: none!important;
      color: #000;
      margin: auto;
      font-weight: bold;
      padding: 4px 8px;
  }
`;

export const Logo = styled.div`
  float: none;
  display: inline-flex;

  img {
    width: 64px;
    height: 64px;
  }
`;
