
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
  const request = await fetch(myRequest);
};

export function SignUp() {

  return (   
    <div class="main-content">
      <img src="/src/assets/BackgroundImage.png" class="img"></img>
      <div id="container">
        <h1>Registrar</h1>
        <input type="text" name="Nome" placeholder= 'Nome...' id="input-name"/>
        <input type="password" name="password" placeholder="Senha..." id="input-password"/>
        <input type="email" name="email" placeholder="Email" id="input-email"/>
        <input type="date" name="date" placeholder="data" id="input-date"/>
        <button id="btn" onClick={register}>Cadastrar</button>
      </div>
    </div>
  )
}

