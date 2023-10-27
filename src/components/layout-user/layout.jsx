
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import LoginFooter from "../login-footer/loginFooter";
import { useState } from "react";

const LayoutUser = () => {

  const [isLogged,setIsLogged]=useState(true)
  return (
    <>
      <Header />
      <Outlet />
      {isLogged ? <Footer /> : <LoginFooter />}
    </>
  );
};

export default LayoutUser;
