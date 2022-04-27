import React from "react";
import { ReactDOM } from "react-dom";

export default props =>{
    return(
        <div id='login-box'>
        <input type="text" id="username-login-input" placeholder="Login"/>
        <input type="text" id="password-login-input"placeholder="Senha"/>
        <a id='create-account-btn'src={props.registerURL}>Criar conta</a>
        <a id='forgot-password-btn'src={props.fogotPasswordURL}>Esqueceu a senha</a>
        <button type='button' id="btn-login">Entrar</button>
        </div>
    )
}