import React, { InputHTMLAttributes } from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<StyledIconProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }): JSX.Element => {
  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </S.Container>
  );
};

export default Input;
