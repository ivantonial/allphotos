import Loginbox from './loginbox'
import './signin.css'

export const SignIn = () => {
  return (
    <>
      <Loginbox registerURL='http://localhost:3000/signup' fogotPasswordURL='localhost:3000/forgot' ></Loginbox>
    </>
  )
}