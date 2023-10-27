// import Swiper React components;
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import welcomeLogo from "../../../assets/welcome-Logo.png";
import rectangle from "../../..//assets/Rectangle 1452 (1).png";
import { Link } from "react-router-dom";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="welcome flex justify-center flex-col-reverse md:flex-row items-center gap-[32px] p-[30px]">
      <div className="uranus py-[60px] w-[350px] sm:w-[400px]">
        <div className="">
          <img src={welcomeLogo} alt="welcome-logo" className="logo " />
        </div>
        <div className=" form-login text-center mt-[80px]">
          <Link to="login">
            <button className="login">Login</button>
          </Link>
          <Link to="signup">
            <button className="signup  mt-[15px]">Signup</button>
          </Link>
        </div>
      </div>
      <div className="w-[370px] sm:w-[420px]  left  h-[455px] ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          className="left"
        >
          <SwiperSlide>
            <div className="swiperr h-[400px]">
              <img src={rectangle} alt="rectangle" />
              <h2 className="text-black  "> Welcome to Uranus </h2>
              <p>your best option for car rental services in U.A.E</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={rectangle} alt="rectangle" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rectangle} alt="rectangle" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rectangle} alt="rectangle" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};


export default Welcome;