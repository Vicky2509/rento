import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Profile from "./pages/profile";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
