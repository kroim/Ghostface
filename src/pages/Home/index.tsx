import React, { useEffect } from 'react';

import * as S from './styles';
import Faq from "~/pages/Home/faq";

const faqs = [
  {
    question: "Is the presale only available on DxSale? If so, can I guarantee my space?",
    answer: "Presale for BIGFOOT will be on DxSale only. If you see BIGFOOT on another platform, it is a copy. Currently there is no whitelist available, so the presale is a first come first serve basis."
  },
  {
    question: "What is the BANANA Reward Pool?",
    answer: "4% of every transaction is taken and added to the contract in $BANANA. This amount of $BANANA is called the\n" +
      "                reward pool, from which people can claim."
  },
  {
    question: "How do I passively earn $BANANA?",
    answer: "All you need to do is hold $BIGFOOT and you'll earn a share of the BANANA Reward Pool, proportional to\n" +
      "                the amount of $BIGFOOT you hold. On top of that, there is also a 1% reflection which will earn you\n" +
      "                $BIGFOOT and be deposited straight into your wallet!"
  },
  {
    question: "How does the claim work?",
    answer: "The reward pool works by using the percentage of tokens you hold against the supply. This percentage is\n" +
      "                used to calcualte the amount of BANANA you receieve when you claim. For example: if you hold 1% of the\n" +
      "                tokens, and the reward pool has 100BANANA, when you claim you would receive 1BANANA, reducing the reward pool\n" +
      "                to 99BANANA. <br/>\n" +
      "                If another person also held 1% of the tokens and claimed after you did, they would recieve 0.99BANANA, as\n" +
      "                the reward pool would have been at 99BANANA.<br/>\n" +
      "                BIGFOOT's claim is weekly. Visit our <a href=\"dashboard\" target=\"_blank\">dashboard</a> and see how\n" +
      "                much you can claim. If you hold $BIGFOOT, you can see the percentage of tokens you hold. This\n" +
      "                percentage is used to calculate how much of the BANANA pool you can collect.<br/>\n" +
      "                All you need to do is visit the <a href=\"dashbaord\">dashboard</a>, connect your wallet, and you're ready\n" +
      "                to go. The collection date shown is the earliest you can claim next, so as long as you claim after that\n" +
      "                date/time you're good to go."
  },
  {
    question: "What happens if I miss a daily claim?",
    answer: "The collection date shown is the earliest you can claim next. You can claim 1 minute or 1 day after, it\n" +
      "                doesn't matter. However, other people will be claiming, meaning there is a chance for the reward pool to\n" +
      "                be lower than before, which could cause you to claim less. We recommend claiming as soon as you can to\n" +
      "                ensure to get the most amount of $BANANA."
  },
]

const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/scroll.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <S.Container>
      <S.Section id="home" className="home">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0 scroll slide-left scrolled">
              <img src="/images/home_02.png" alt="BIGFOOT Icon" className="img-fluid" />
              <div className="row justify-content-around">
                <div className="col-sm-3 mainbtn">
                  <a target="_blank" href="http://exchange.pancakeswap.finance/#/swap?inputCurrency=0x0952ddffde60786497c7ced1f49b4a14cf527f76" rel="noopener noreferrer">BUY</a>
                </div>
                <div className="col-sm-3 mainbtn">
                  <a href="dashboard">CLAIM BANANA</a>
                </div>
                <div className="col-sm-3 mainbtn">
                  <a target="_blank" href="https://poocoin.app/tokens/0x0952ddffde60786497c7ced1f49b4a14cf527f76" rel="noopener noreferrer">CHART</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 img-main">
              <h1 style={{ fontSize: 48, fontFamily: 'CartooNature', color: 'black' }}>HOLD $FOOT and gain Banana with each transaction being made!</h1>
              <p style={{ color: 'black', paddingTop: '20px', fontFamily: 'CartooNature' }}>Bigfoot is a decentralized hybrid pool token, Simply hold $FOOT and gain Banana which is Apeswaps native token. Make sure to join The Cave (telegram) this is where the community receives the latest news and updates as well as makes decisions through a poll system as a community.</p>
            </div>
          </div>
        </S.Content>
      </S.Section>

      <S.Section id="features" className="features">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16">
          <div className="row scroll fade-in-bottom">
            <div className="col-lg-12 col-xl-12 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
              <div className="text-center">
                <h2 className="title">FEATURES</h2>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
              <div className='row'>
                <div className="col-md-7 mb-md-0">
                  <img src="/images/feature01.png" alt="Feature01" style={{ maxWidth: 300 }} />
                </div>
                <div className="col-md-5 mb-md-0 box-center">
                  <div style={{ color: 'black' }}>
                    <h5 className="mt-4 h3"><b>4%</b><br />Auto Liquidity Pool</h5>
                    <div>4% of every transaction contributes towards automatically generating liquidity that goes into Apeswap.</div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className="col-md-5 mb-md-0 box-center">
                  <div style={{ color: 'black' }}>
                    <h5 className="mt-4 h3"><b>4%</b><br />Redistribution in Banana</h5>
                    <div>4% of every buy/sell is taken and redistributed to all Bigfoot holders.</div>
                  </div>
                </div>
                <div className="col-md-7 mb-md-0">
                  <img src="/images/feature02.png" alt="Feature01" style={{ maxWidth: 225 }} />
                </div>
              </div>

              <div className='row'>
                <div className="col-md-7 mb-md-0">
                  <img src="/images/feature03.png" alt="Feature01" style={{ maxWidth: 250 }} />
                </div>
                <div className="col-md-5 mb-md-0 box-center">
                  <div style={{ color: 'black' }}>
                    <h5 className="mt-4 h3"><b>2%</b><br />$FOOT Redistribution</h5>
                    <div>2% of every buy/sell is redistributed to all Bigfoot holders in $FOOT.</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </S.Content>
      </S.Section>

      <S.Section id="tokenomics" className="tokenomics">
        <div className="tokenomics-back">
          <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
            <div className="row align-items-center">
              <div className="text-center">
                <h2 className="title">FOOTONOMICS</h2>
                <div>
                  <img src='/images/footprint.png' alt='FootPrint' />
                </div>
              </div>
            </div>
            <div className="row align-items-center" style={{paddingTop: 20, color: 'black'}}>
              <div className="col-md-4"><S.Check2SquareIcon size={24} /> 4% Auto Liquidity Acquisition</div>
              <div className="col-md-4"><S.Check2SquareIcon size={24} /> 4% $BANANA Redistribution</div>
              <div className="col-md-4"><S.Check2SquareIcon size={24} /> 2% $BIGFOOT Redistribution</div>
            </div>
          </S.Content>
        </div>
      </S.Section>

      <S.Section id="questions" className="questions">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
          <div id="faq" className="col-lg-12 col-xl-12 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
            <div className="text-center">
              <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
          </div>
          {
            faqs.map((faq, index) => <Faq key={index} index={index + 1} question={faq.question} answer={faq.answer} />)
          }
        </S.Content>
      </S.Section>
    </S.Container>
  );
};

export default Home;
