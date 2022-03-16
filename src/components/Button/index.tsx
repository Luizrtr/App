import React, { ButtonHTMLAttributes } from 'react';

import { ContainerButton } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<InputProps> = ({ children, ...rest }) => (
  <ContainerButton type="button" {...rest}>
    {children}
  </ContainerButton>
);

export default Button;
