import React from 'react';
import 'twin.macro';
import { useForm } from 'react-hook-form';

import image from '../../assets/Login/login.png';
import Button from '../../components/Button';
import { ContainerLogin } from './styles';

interface ILogin {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (inputData: ILogin) => {
    const data = {
      user: inputData.email,
      password: inputData.password,
    };
    console.log(data);
  };

  return (
    <ContainerLogin>
      <img src={image} alt="" />
      <div className="content">
        <h1>
          Faça login no <span>painel</span>
        </h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="boxInput">
            <label htmlFor="">Nome de Usuário ou Endereço de Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite o seu usuário ou email"
              {...register('email', { required: true })}
            />
          </div>
          <div className="boxInput">
            <label htmlFor="">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite a sua senha"
              {...register('password', { required: true })}
            />
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" name="sfg" />
              <div>Mantenha-me conectado</div>
            </label>
            <div className="password">
              <a href="https://github.com/Luizrtr/">
                <strong>Esqueceu minha senha?</strong>
              </a>
            </div>
          </div>
          <div>
            <Button tw="w-full md:w-5/12 text-center" type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </ContainerLogin>
  );
};

export default Login;
