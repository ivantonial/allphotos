import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import './signup.css'

export function SignUp() {
    return (   
    <div class="main-content">
    <div class="img">
    </div>
  <div id="container">
    <h1>Registrar</h1>
    <input type="text" name="Nome" placeholder= 'Nome...' id="input-name"/>
    <input type="password" name="password" placeholder="Senha..." id="input-password"/>
    <input type="email" name="email" placeholder="Email" id="input-email"/>
    <input type="date" name="date" placeholder="data" id="input-date"/>
    <button id="btn">Entrar</button>
  </div>
  </div>
    )
  }