import facebookDark from "../../assets/facebook-dark.svg";
import instgramDark from "../../assets/instgram-dark.svg";
import whatsappDark from "../../assets/whatsapp-dark.svg";
import phoneDrak from "../../assets/phone-dark.svg";
import emaildark from "../../assets/email-dark.svg";
import locationDark from "../../assets/location-dark.svg";

import "./footer.css";
import logo from "../../assets/header-logo.svg";
const Footer = () => {
  return (
    <div className="footer  border-t-[1px] border-t-[#353B42] ">
      <div className=" container mx-auto  grid grid-cols-12 gap-[30px] p-[25px] md:py-[40px] md:px-[0px] ">
        <div className="  col-span-12  col-start-4 col-end-11 sm:col-span-6 md:col-span-3 md:text-center">
          <img
            src={logo}
            alt="logo"
            className="w-[180px] mb-[10px] md:mx-[auto]"
          />
          <p className="text-[#353B42] text-[16px] font-[700] mb-[35px]  ">
            Enjoy Car Rental!
          </p>
          <div className="flex md:justify-evenly gap-[30px]  ">
            <img src={facebookDark} alt="facebook" className="w-[22px]" />
            <img src={instgramDark} alt="instgram" className="w-[22px]" />
            <img src={whatsappDark} alt="whatsapp" className="w-[22px]" />
          </div>
        </div>

        <div className=" col-span-12 sm:col-span-6 col-start-4 col-end-11 md:col-span-5">
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

        <div className="col-span-12 sm:col-span-6 col-start-4 col-end-11 md:col-span-2">
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

        <div className="col-span-12 sm:col-span-6 col-start-4 col-end-11 md:col-span-2">
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
