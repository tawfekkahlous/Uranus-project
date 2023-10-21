
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const LayoutUser = () => {
  return (
    <>
      <Header />
      <Outlet  />
      <Footer />
    </>
    
  );
};

export default LayoutUser;
