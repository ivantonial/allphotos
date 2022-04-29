import React from "react";

export default props =>{
    return(
        <div class="main-content">
            <img src="/src/assets/BackgroundImage.png" class="img"></img>
        
            <div id='login-box'>
                <input type="text" id="username-login-input" placeholder="Login"/>
                <input type="password" id="password-login-input"placeholder="Senha"/>
                
                <div id="login-links-plus-btn">
                    <div id="login-links">
                        <a id='create-account-btn'href={props.registerURL}>Criar conta</a>
                        <a id='forgot-password-btn'href={props.fogotPasswordURL}>Esqueceu a senha?</a>
                    </div>
                    <div id="btn-login-box">
                        <button type='button' id="btn-login">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}