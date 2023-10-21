import facebook from "../../assets/facebook.svg"
import instgram from "../../assets/instgram.svg"
import whatsapp from "../../assets/whatsapp.svg"
import email from "../../assets/email.svg"
import web from "../../assets//web.svg"
import phone from "../../assets/phone.svg"
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer   absolute bottom-0 left-0 w-[100%]">
      <div className="container mx-auto px-[20px]  flex items-center justify-between h-[50px]">
        <div className="social-media flex items-center gap-[50px]">
          <img src={facebook} alt="facebook" className="  h-[20px] " />
          <img src={instgram} alt="instgram" className="h-[20px]" />
          <img src={whatsapp} alt="whatsapp" className="h-[20px]" />
        </div>
        <div className="email flex items-center">
          <img
            src={email}
            alt="email"
            className=" h-[17px] mr-[12px]"
          />
          <p >support.uranuscars.com</p>
        </div>
        <div className="web flex items-center">
          <img src={web} alt="web " className="h-[20px] mr-[12px]" />
          <p>uranuscars.com</p>
        </div>
        <div className="phone flex items-center">
          <img
            src={phone}
            alt="phone"
            className=" h-[20px] mr-[12px]"
          />
          <p>+971 50 293 7412</p>
        </div>
      </div>
    </div>
  );
}

export default Footer