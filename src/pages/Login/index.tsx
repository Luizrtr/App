import React from "react"


import image from '../../assets/Login/login.png'
import { ContainerLogin } from './styles'

export const Login:React.FC = () =>{
    return(
        <ContainerLogin>
                <img src={image} alt="" />
            <div>
                <h1>Faça login no <span>painel</span></h1>
                <form action="">
                    <div></div>
                </form>
            </div>
        </ContainerLogin>
    )
}

export default Login;