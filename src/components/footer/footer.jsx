import facebookDark from "../../assets/facebook-dark.svg";
import instgramDark from "../../assets/instgram-dark.svg";
import whatsappDark from "../../assets/whatsapp-dark.svg";
import phoneDrak from "../../assets/phone-dark.svg";
import emaildark from "../../assets/email-dark.svg";
import locationDark from "../../assets/location-dark.svg";
// import email from "../../assets/email.svg"
// import web from "../../assets//web.svg"
// import phone from "../../assets/phone.svg"
import "./footer.css";
import logo from "../../assets/header-logo.svg";
import { useState } from "react";
const Footer = () => {
  const [isLogged, setIsLogged] = useState(false);
  return isLogged ? (
    <></>
  ) : (
    // <div className="footer   absolute bottom-0 left-0 w-[100%]">
    //   <div className="container mx-auto px-[20px]  flex items-center justify-between h-[50px]">
    //     <div className="social-media flex items-center gap-[50px]">
    //       <img src={facebook} alt="facebook" className="  h-[20px] " />
    //       <img src={instgram} alt="instgram" className="h-[20px]" />
    //       <img src={whatsapp} alt="whatsapp" className="h-[20px]" />
    //     </div>
    //     <div className="email flex items-center">
    //       <img src={email} alt="email" className=" h-[17px] mr-[12px]" />
    //       <p>support.uranuscars.com</p>
    //     </div>
    //     <div className="web flex items-center">
    //       <img src={web} alt="web " className="h-[20px] mr-[12px]" />
    //       <p>uranuscars.com</p>
    //     </div>
    //     <div className="phone flex items-center">
    //       <img src={phone} alt="phone" className=" h-[20px] mr-[12px]" />
    //       <p>+971 50 293 7412</p>
    //     </div>
    //   </div>
    // </div>
    <div className="footer  border-t-[1px] border-t-[#353B42] ">
      <div className=" container mx-auto py-[40px] grid grid-cols-12 gap-[30px] ">
        <div className="col-span-3 text-center">
          <img
            src={logo}
            alt="logo"
            className="w-[180px] mb-[10px] mx-[auto]"
          />
          <p className="text-[#353B42] text-[16px] font-[700] mb-[35px]  ">
            Enjoy Car Rental!
          </p>
          <div className="flex justify-evenly ">
            <img src={facebookDark} alt="facebook" className="w-[22px]" />
            <img src={instgramDark} alt="instgram" className="w-[22px]" />
            <img src={whatsappDark} alt="whatsapp" className="w-[22px]" />
          </div>
        </div>

        <div className="col-span-5 ">
          <p className="text-[#E42E35] text-[17px] font-[700] mb-[15px]">
            URANUS RENT A CAR L.L.C
          </p>
          <div className="flex mb-[15px]">
            <img src={phoneDrak} alt="phone" className="w-[20px] mr-[8px]" />
            <p className="text-[15px]  font-[600]">+971-50-2937412</p>
          </div>
          <div className="flex mb-[15px]">
            <img src={emaildark} alt="email" className="w-[20px] mr-[8px]" />
            <p className="text-[15px]  font-[600]">support.uranuscars.com</p>
          </div>
          <div className="flex">
            <img
              src={locationDark}
              alt="location"
              className="w-[20px] mr-[8px]"
            />
            <p className="text-[13px]  font-[600]">
              ابوهيل -ملك خليفه عبدا على بن بليله المهيرى 02G مكتب رقم
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-[#E42E35] text-[17px] font-[700] mb-[15px]">
            Pages
          </p>
          <ul>
            <li className="mb-[10px] text-[#353B42] text-[15px] font-[600]">
              {" "}
              About Us{" "}
            </li>
            <li className="mb-[10px] text-[#353B42] text-[15px] font-[600]">
              Cars
            </li>
            <li className="text-[#353B42] text-[15px] font-[600]">Contact</li>
          </ul>
        </div>

        <div className="col-span-2">
          <p className="text-[#E42E35] text-[17px] font-[700] mb-[15px]">
            Information
          </p>
          <ul>
            <li className="mb-[10px] text-[#353B42] text-[15px] font-[600]">
              FAQ
            </li>
            <li className="mb-[10px] text-[#353B42] text-[15px] font-[600]">
              Rental Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
