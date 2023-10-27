import "./loginFooter.css"
import facebook from "../../assets/facebook.svg";
import instgram from "../../assets/instgram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import web from "../../assets/web.svg"
const LoginFooter = () => {
  return (
    <div className="login-footer  md:absolute md:left-0 md:bottom-0 w-[100%]  ">
      <div className="container mx-auto md:px-[20px] p-[20px] md:py-[0px]  flex items-center justify-between flex-col md:flex-row gap-[20px] md:gap-[0px]  md:h-[50px]">
        <div className="social-media flex items-center gap-[50px]">
          <img src={facebook} alt="facebook" className="  h-[20px] " />
          <img src={instgram} alt="instgram" className="h-[20px]" />
          <img src={whatsapp} alt="whatsapp" className="h-[20px]" />
        </div>
        <div className="email flex items-center">
          <img src={email} alt="email" className=" h-[17px] mr-[12px]" />
          <p className="text-[#F5FAFF]">support.uranuscars.com</p>
        </div>
        <div className="web flex items-center">
          <img src={web} alt="web " className="h-[20px] mr-[12px]" />
          <p className="text-[#F5FAFF]">uranuscars.com</p>
        </div>
        <div className="phone flex items-center">
          <img src={phone} alt="phone" className=" h-[20px] mr-[12px]" />
          <p className="text-[#F5FAFF]">+971 50 293 7412</p>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
