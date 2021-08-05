import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  h1 {
    margin: 0 0 80px;
  }
`;

export const Section = styled.section`
  width: 100%;

  .icon-box {
      box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
      margin-bottom: 40px;
      padding: 50px 30px;
      transition: all .4s ease-in-out;
      background: #fff;
      border-radius: 7px;
  }

  img {
    width: 92px;
    height: 92px;
  }

  .icon-box .caption {
      color: #9a009a !important;
  }

  .icon-box h4 {
    font-size: 20px;
  }

  .buy-gostface {
      font-family: "Jost",sans-serif;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 10px 28px 11px;
      border-radius: 50px;
      transition: .5s;
      margin: 10px 10px 0 0;
      color: #fff;
      text-align: center;
      background-image: linear-gradient(90deg,#670067,#9a009a 51%,#9a009a);
  }

  .bubbly-button {
    color: #ffffff !important;
    padding: 10px;
    border-radius: 50px;
    background-image: linear-gradient(90deg,#670067,#9a009a 51%,#9a009a) !important;
    box-shadow: 0 2px 25px #670067;
  }

  .icon-box-service{
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    margin-bottom: 40px;
    padding: 50px 30px;
    transition: all .4s ease-in-out;
    background: #fff;
    border-radius: 7px;
    width: 100%;
    text-align: center;
  }

  .icon-box-service img{
    margin-bottom: 8px;
  }
  .icon-box-service h4{
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
    max-width: 1216px;
    float: none;
    margin: auto;
    color: black;
`;

export const Modalbody = styled.div`
    color: black;

    .connect_wallet{
      margin: 24px;
      transition: transform .5s,-webkit-transform .5s;
    }
    .connect_wallet:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
    img {
      width: 56px;
      height: 56px;
    }
    .divider {
      height: 1px;
      background: #3db9be;
      margin: 30px 0;
    }
`;
