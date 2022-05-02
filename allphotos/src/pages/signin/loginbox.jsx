import React from "react";
import './signin.css';

async function login(){
    const username = document.getElementById('username-login-input').value;
    const password = document.getElementById('password-login-input').value;
    const objectBody = {username,password};

    const path = 'http://localhost:8000';
    const myHeader = new Headers({
        'Access-Control-Allow-Credentials':true,
        'Content-Type':'application/json',
        'Accepts':'application/json'
    });
    const myRequest = new Request(path+'/checkuser',{
        method:'POST',
        credentials: 'include',
        headers:myHeader,
        body:JSON.stringify(objectBody)
    });
    
    const request = await fetch(myRequest);
    if(request.status === 200){
        const {accessToken} = await request.json();
        localStorage.setItem('accessToken', accessToken);
    }else{
        const {query} = await request.json();
        const msgElement = document.getElementById('password-login-msg');
        msgElement.style.display = 'initial';
        msgElement.textContent = query;
    };
};

export default props =>{
    return(
        <div className="main-content-login">
            {/* <img src="/src/assets/BackgroundImage.png" className="img" draggable='false'></img> */}
            <div id='part-one'>
                <div id="register-image-container-logo">
                    <img className='register-image-container' src="/src/assets/Logo.svg" draggable='false'/>
                    <span id='register-span-image' className='register-image-container'>AllPhotos</span>
                </div>
                <div id='login-box'>
                    <input type="text" id="username-login-input" placeholder="Username"/>
                    <input type="password" id="password-login-input"placeholder="Senha"/>
                    <span id='password-login-msg'></span>
                    <div id="login-links-plus-btn">
                        <div id="login-links">
                            <a id='create-account-btn'href={props.registerURL}>Criar conta</a>
                            {/* <a id='forgot-password-btn'href={props.fogotPasswordURL}>Esqueceu a senha?</a> */}
                        </div>
                        <div id="btn-login-box">
                            <button type='button' id="btn-login" onClick={login}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='part-two'>
                <h2>Share Your Photos</h2>
            </div>
        </div>
    )
}