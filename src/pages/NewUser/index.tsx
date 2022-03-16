import React from 'react';
import { useForm } from 'react-hook-form';
import 'twin.macro';

import { ContainerNewUser } from './styles';
import image from '../../assets/Login/login.png';
import Button from '../../components/Button';
import api from '../../services/api';

interface ICreate {
  name: string;
  user: string;
  email: string;
  password: string;
}

export const NewUser: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (inputData: ICreate) => {
    const data = {
      name: inputData.name,
      user: inputData.user,
      email: inputData.email,
      password: inputData.password,
    };
    await api.post('API-Rest-Users/Controllers/create.php', data, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'https://www.example.com',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
    });
  };

  return (
    <ContainerNewUser>
      <img src={image} alt="" />
      <div className="content">
        <h1>
          Faça o cadastro do seu <span>usuário</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="boxInput">
            <label htmlFor="">Nome completo</label>
            <input
              id="name"
              type="text"
              placeholder="Digite o seu nome completo"
              {...register('name', { required: true })}
            />
          </div>
          <div className="boxInput">
            <label htmlFor="">Usuário</label>
            <input
              id="user"
              type="text"
              placeholder="Digite o seu usuário"
              {...register('user', { required: true })}
            />
          </div>
          <div className="boxInput">
            <label htmlFor="">E-mail</label>
            <input
              id="email"
              type="text"
              placeholder="Digite o seu e-mail"
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
          <div>
            <Button tw="w-full md:w-5/12 text-center" type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </ContainerNewUser>
  );
};

export default NewUser;
