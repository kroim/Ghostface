import React from 'react';
import * as S from './styles';

interface Props {

}


const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Navbar>
        <ul className="nav justify-content-center nav-fill w-full">
          <li className="nav-item p-1">
            <a href="#home">HOME</a>
          </li>
          <li className="nav-item p-1">
            <a href="#features">FEATURES</a>
          </li>
          <li className="nav-item p-1">
            <a href="#tokenomics">FOOTONOMICS</a>
          </li>
          <li className="nav-item p-1">
            <a href="#roadmap">ROADMAP</a>
          </li>
        </ul>
        <S.Logo className="float-none">
          <a href="/">
            <img src={"/images/logo.png"} alt={"logo"}/>
          </a>
        </S.Logo>
        <ul className="nav justify-content-center nav-fill w-full">
          <li className="nav-item p-1">
            <a target="_blank" href="/files/audit.pdf#toolbar=0" rel="noopener noreferrer">AUDIT</a>
          </li>
          <li className="nav-item p-1">
            <a target="_blank" href="/files/whitepaper.pdf#toolbar=0" rel="noopener noreferrer">WHITEPAPER</a>
          </li>
          <li className="nav-item p-1">
            <a target="_blank" href="https://bscscan.com/token/0x0952ddffde60786497c7ced1f49b4a14cf527f76" rel="noopener noreferrer">CONTRACT</a>
          </li>
          <li className="nav-item p-1">
            <a href="/speedpass" target="_blank" rel="noopener noreferrer">SPEEDBUY</a>
          </li>
        </ul>
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
