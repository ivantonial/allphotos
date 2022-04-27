import LoginBox from './signin/loginbox.jsx'
import BackGroundTemplate from './signin/backgroundtemplate.jsx'
import './signin/signin.css'




export function SignIn() {
  return (
    <>
      <BackGroundTemplate  ></BackGroundTemplate>
      <LoginBox registerURL = 'localhost:3000/signup' forgotPasswordURL = 'localhost:3000/forgot'></LoginBox>
    </>
  )
}