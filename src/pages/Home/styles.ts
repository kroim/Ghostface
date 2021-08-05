import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight';
import {File} from '@styled-icons/boxicons-regular/File';
import {FileBlank} from '@styled-icons/boxicons-regular/FileBlank';
import {Telegram} from '@styled-icons/bootstrap/Telegram';
import {Twitter} from '@styled-icons/bootstrap/Twitter';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {ChartLine} from '@styled-icons/fa-solid/ChartLine';
import {Check2Square} from '@styled-icons/bootstrap/Check2Square';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .home{
      background: #FDEDCC;
  }
`;

export const Section = styled.section`
  width: 100%;

  h2.title {
    margin-bottom: 1.5rem;
    letter-spacing: 1px!important;
    word-break: break-word;
  }
  p.lead {
    font-size: 16px;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .mainbtn {
    background-color: #FDEDCC;
    padding: 1.5rem 1.5rem;
    margin-top: 8px;
    border-radius: 30px;
    text-decoration: none!important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mainbtn a{
    color: #000;
  }
  .icon-box img {
    height: 150px;
  }
  .icon-box-d {
    flex: .25 0 25%!important;
  }
  .icon-box .icon-box-holder {
    color: #ffffff;
    background-color: #e2b782;
    padding: 50px 25px;
    text-align: center;
    border-radius: 5px;
    margin: 15px;
    font-family: Montserrat;
    letter-spacing: 0!important;
  }
  .icon-box .icon-box-holder h3.title_text {
    font-weight: 300!important;
    font-size: 15px;
    margin: 10px 0;
    letter-spacing: 0!important;
    line-height: 24px;
  }
  .icon-box .icon-box-holder a.button_text {
      color: #ffffff;
      border: 1px solid;
      padding: 8px;
      border-radius: 5px;
      font-weight: 700;
      display: block;
      text-transform: uppercase;
      font-size: 12px;
      transition: all .3s ease;
      -webkit-transition: all .3s ease;
      text-decoration: none!important;
  }
  h4 {
    color: #9a009a;
    margin-bottom: 2rem;
  }
  .update-caption {
    font-size: 16px;
  }
   .infobox {
      padding: 1rem;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 3rem 6rem 3rem 6rem;
  }
  .scarenomics-img{
    width: 1216px;
  }
  .scare-1{
      position: absolute;
      top: 270px;
      width: 1216px;
  }
  .scare-2{
      position: absolute;
      top: 480px;
      width: 1216px;
  }
  .scare-3{
      position: absolute;
      top: 690px;
      width: 1216px;
  }
  .scare-1-text{
      margin: 0 60px;
  }
  .scare-2-text{
      margin: 0 200px;
  }
  .scare-3-text{
      margin: 0 80px;
  }
   @media (max-width: 1216px) {
      .scarenomics-img{
        width: 900px;
      }
      .scare-1{
          position: absolute;
          top: 240px;
          width: 900px;
      }
      .scare-2{
          position: absolute;
          top: 400px;
          width: 900px;
      }
      .scare-3{
          position: absolute;
          top: 550px;
          width: 900px;
      }
      .scare-1-text{
          margin: 0 30px;
      }
      .scare-2-text{
          margin: 0 140px;
      }
      .scare-3-text{
          margin: 0 50px;
      }
  }
   @media (max-width: 900px) {
      .scarenomics-img{
        opacity: 0;
        width: 100%;
      }
      .scare-1{
          position: absolute;
          top: 240px;
        width: 100%;
      }
      .scare-2{
          position: absolute;
          top: 300px;
        width: 100%;
      }
      .scare-3{
          position: absolute;
          top: 360px;
         width: 100%;
      }
      .scare-1-text{
          margin: 0 10px;
      }
      .scare-2-text{
          margin: 0 10px;
      }
      .scare-3-text{
          margin: 0 10px;
      }
  }
  .box-credit {
    background-image: url(/images/sq1_t.png);
  }
  .box-bnb {
    background-image: url(/images/sq2_t.png);
  }
  .box-redistribution {
    background-image: url(/images/sq3_t.png);
  }
  .tokenomics-back {
    background: #FDEDCC;
  }
  .faq {
      background-color: #fff;
      color: #000;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: 0;
      transition: .4s;
      margin-bottom: 2rem;
  }
  .panel {
    padding: 0 18px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 0;
    margin: -2rem 0 2rem 0;
  }
  .panel p {
    color: #000;
    margin-top: 1rem;
  }
  .faq-mark{
    color: #42c4ec;
    font-weight: bold;
    padding-right: 20px;
  }
  .box-telegram{
    background-color: #32afed !important;
  }
  .box-twitter{
    background-color: rgb(29, 161, 242) !important;
  }
  .box-email{
    background-color: #dd3333 !important;
  }
  .box-chart{
    background-color: rgb(153, 0, 153) !important;
  }
  .scrolled.fade-in-bottom {
    animation: fade-in-bottom 1s ease-in-out both;
  }
  .scroll.scrolled {
      opacity: 1;
  }
  .scroll {
      opacity: 0;
      transition: opacity .5s;
  }
  @keyframes fade-in-bottom {
    0% {
        -webkit-transform: translateY(50px);
        transform: translateY(50px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
  }
`;

export const Content = styled.div`
    max-width: 1216px;
    float: none;
    margin: auto;
`;

export const ArrowRightIcon = styled(ArrowRight)`
  color: white;
  margin-left: 8px
`;
export const FileIcon = styled(File)`
  color: white;
`;
export const FileBlankIcon = styled(FileBlank)`
  color: white;
`;

export const TelegramIcon = styled(Telegram)`
  color: white;
`;

export const TwitterIcon = styled(Twitter)`
  color: white;
`;

export const EmailIcon = styled(EmailOutline)`
  color: white;
`;

export const ChartIcon = styled(ChartLine)`
  color: white;
`;

export const Check2SquareIcon = styled(Check2Square)`
   color: #007bff;
   margin-right: 8px;
`;
