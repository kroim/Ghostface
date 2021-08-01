import React from 'react';
import * as S from './styles';

interface Props {

}


const Footer: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Content>
        <div className="container ac socials" id="socials">
          <div className="row scroll fade-in-bottom scrolled">
            <div className="col-md-12 text-center">
              <S.Logo className="footer-logo">
                <img alt="Icon For Logo" className="logo-bt" src="/images/logo.png"/>
              </S.Logo>

              <div className="col-sm-12 nav">
                <a href="#home">Home</a>
                <a href="#tokenomics">Tokenomics</a>
                <a href="#roadmap">Roadmap</a>
                <a target="_blank" href="/files/whitepaper.pdf#toolbar=0">Whitepaper</a>
                <a href="#faq">FAQ</a>
              </div>

              <div className="col-sm-12 mb-4">
                <br/>© BIGFOOT 2021 // All Right Reserved
              </div>

            </div>
          </div>
        </div>
        <img className="bg-bottom" src="/images/bg_b.png" alt={"bottom-bg"} />
      </S.Content>
    </S.Container>
  );
};

export default Footer;
