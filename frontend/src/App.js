// CSS
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Signup from "./components/SignupPage";
import Login from "./components/SigninPage";
import GetMe from "./components/GetMePage";
import SignOut from "./components/SignoutPage";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route index element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="getMe" element={<GetMe />} />
          <Route path="signout" element={<SignOut />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
