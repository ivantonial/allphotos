
import './signup.css'

async function register(){
  const name = document.getElementById('input-name').value;
  const password = document.getElementById('input-password').value;
  const email = document.getElementById('input-email').value;
  const birthDate = document.getElementById('input-date').value;
  const objectBody = {name,password,email,birthDate};

  const path = 'http://localhost:8000';
  const myHeader = new Headers({
    'Content-Type':'application/json',
    'Accepts':'application/json'
  });
  const myRequest = new Request(path+'/adduser',{
    method:'POST',
    headers:myHeader,
    body:JSON.stringify(objectBody),
  });

  console.log(123);
  if(validation()){
    const request = await fetch(myRequest);
    console.log(request.status);
    if(request.status === 200){
      window.location.replace('/');
    }else{
      document.getElementById('result').textContent = 'Erro do registro';
    };
  };
};

function validation(){
  const regExp = {
    name: /^\w{3,20}$/i,
    password: /(?=^.{6,}$)(?=.*\w+)(?=.*[0-9]+)(?=.*[@$#!_]+)(?=.*^[^<>\.\\\/\'\"]+$)/,
    email: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
  };
  const ids = ['span-name','span-password','span-email','span-date'];

  const inputName = document.getElementById('input-name').value;
  const inputPassword = document.getElementById('input-password').value;
  const inputEmail = document.getElementById('input-email').value;
  const date = document.getElementById('input-date').value;

  for(let i of ids){
    document.getElementById(i).textContent = '';
  };

  const tests = [[inputName, 'name'], [inputPassword, 'password'], [inputEmail, 'email']];
  const log = ['O nome deve ter no minimo 3 caracteres, e no maximo 20 caracteres.',
   'Senha deve ter 6 caracteres, 1 numero, 1 simbolo $@#!_',
   'Formato invalido de email.'];
  let index = null;

  const validation = tests.every(
    (test) => {
      const option = test[1];
      const str = test[0];
      if(regExp[option].test(str)){
        return true;
      }else{
        index = tests.indexOf(test);
        return false;
      };
    }
  );
  if(!validation){
    const element = document.getElementById(ids[index]);
    element.textContent = log[index];
    return false;
  }
  else if(date === ''){
    const element = document.getElementById(ids[3]);
    element.textContent = 'Insira uma data.';
    return false
  }
  else{
    return true;
  };


};

export function SignUp() {

  return (   
    <div className="main-content">
      <div id="image-container" className="img">
        <div id='container-messages'>
          {/* <img src="/src/assets/BackgroundImage.png" class="img">
          </img> */}
          <div id="register-image-container-logo">
            <img className='register-image-container' src="/src/assets/Logo.svg" draggable='false' />
            <span id='register-span-image' className='register-image-container'>AllPhotos</span>
          </div>
          <h2>Share Your Photos</h2>
        </div>
      
        <div id="container">
            <h1>Registrar</h1>
            <input type="text" name="Nome" placeholder= 'Nome...' id="input-name"/>
            <span id='span-name'></span>
            <input type="password" name="password" placeholder="Senha..." id="input-password"/>
            <span id='span-password'></span>
            <input type="email" name="email" placeholder="Email" id="input-email"/>
            <span id='span-email'></span>
            <input type="date" name="date" placeholder="data" id="input-date"/>
            <span id="span-date"></span>
            <button id="btn" onClick={register}>Cadastrar</button>
            <span id='result'></span>
        </div>
      </div>
    </div>
  )
}

