import React  from 'react';
import * as S from './styles';

interface Props {
  onConnect: Function
}


const Header: React.FC<Props> = ({onConnect}) => {

  return (
    <S.Container>
      <S.Content>
        <S.Logo className="float-none">
          <a href="/">
            <img src={"/images/logo.png"} alt={"logo"}/>
          </a>
        </S.Logo>
        <a href="#/" className="btn btn-primary connect-btn" onClick={() =>onConnect()}>Connect</a>
      </S.Content>
    </S.Container>
  );
};

export default Header;
