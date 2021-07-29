import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    min-width: 100%;
    height: 100%;
    background: #FDEDCC;
    color: ${(props) => props.theme.colors.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
  }

  body,
  input,
  button {
    font: 1.6rem ${typography.type.text};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${typography.weight.bold};
    font-family: ${typography.type.title};
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${typography.size.l3}px;
  }

  h2 {
    font-size: ${typography.size.l2}px;
  }

  h3 {
    font-size: ${typography.size.l1}px;
  }

  h3 {
    font-size: ${typography.size.m2}px;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .mb-2 {
    margin-bottom: 1rem!important
  }

  .mb-4 {
    margin-bottom: 2rem!important
  }

  .ml-4 {
    margin-left: 2rem!important
  }

  .mb-8 {
    margin-bottom: 4rem!important
  }

  .m-4 {
    margin: 2rem!important
  }

  .p-4 {
    padding: 2rem!important
  }

  .p-1 {
    padding: 0.5rem!important
  }

  .p-0 {
      padding: 0
  }

  .py-8 {
    padding-top: 4rem!important;
    padding-bottom: 4rem!important;
  }

   .py-16 {
    padding-top: 8rem!important;
    padding-bottom: 8rem!important;
  }

  .justify-content-between {
      justify-content: space-between!important
  }

  .align-items-center {
      align-items: center!important
  }

  .text-center {
      text-align: center!important
  }

  .justify-content-around {
      justify-content: space-around!important
  }

  .w-full {
    width: 100%
  }

  .box-center {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;
