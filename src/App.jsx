/* eslint-disable no-undef */
import { Home } from "./Pages/Home/Home";
import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Video } from "./Pages/videos/Video";
import { Uploaded } from "./Pages/Upload/Uploaded";
import { Login } from "./Components/LoginandSignUp/Login";
import { SignUp } from "./Components/LoginandSignUp/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos" element={<Video />} />
          <Route path="upload" element={<Uploaded />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
