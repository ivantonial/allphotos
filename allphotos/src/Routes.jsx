import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Coisa from "./pages/Signin/loginbox";
import { SignUp } from "./pages/Signup/index";
import { Home } from "./pages/Home/home";
import { EditProfile } from "./pages/EditProfile/index";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Coisa registerURL="./signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
};