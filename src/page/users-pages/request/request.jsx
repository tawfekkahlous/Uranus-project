import chevLogo from "../../../assets/chevLogo.svg";
import star from "../../../assets/green-star.svg";
import seat from "../../../assets/dark-seat.svg";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg";
import frontSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-front-view.svg";
import backSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-rear-view.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import angularSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-angular-rear.svg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./request.css";
import { Link } from "react-router-dom";
const Request = () => {
  return (
    <div className="request py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h1 className=" text-[#E42E35] font-[700] text-[22px] font-[Quicksand] mb-[40px] ">
          Request
        </h1>
        <div className="flex justify-between items-center flex-col lg:flex-row  gap-y-[40px]">
          <div className=" w-[90%] lg:w-[45%] self-start">
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-[5px]">
                <img src={chevLogo} alt="" className="w-[40px]" />
                <p className="text-[#353B42] font-[600]">Chevrolet</p>
              </div>
              <div className="flex items-center self-end gap-[5px]">
                <img src={seat} alt="seat" className="w-[20px] " />
                <p className="text-[#353B42] font-[600] "> 4 Seats</p>
              </div>
            </div>
            <div className="flex gap-[8px]">
              <p className="text-[#353B42] font-[600]">Camaro</p>
              <p className="text-[#353B42] font-[600]">2022</p>
            </div>

            <div className="flex gap-[30px] items-center mt-[20px] mb-[15px]">
              <div>
                <div className="flex items-center gap-[5px] mb-[10px]">
                  <p className="text-[#E42E35] font-[600]">Sat Aug 26 2023</p>
                  <p className="text-[#353B42] font-[600] text-[12px]">To</p>
                </div>
                <p className="text-[#E42E35] font-[600]">Wed Oct 11 2023</p>
              </div>

              <div className="flex items-center gap-[25px]">
                <p className="text-[#353B42] font-[600]">50 Days</p>
                <div className="flex gap-[5px]">
                  <p className="text-[#27C11A] font-[600]">+10,000</p>
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <div className="line h-[1px] relative left-[-10px]"></div>
            <div className="flex justify-between items-center mt-[15px] ">
              <p className="text-[#353B42] font-[600]">Driver</p>
              <p className="text-[#353B42] font-[600]">50 days</p>
              <p className="text-[#27C11A] font-[600]">10,000 A.E.D</p>
            </div>
            <p className="font-[600] text-[#353B42] text-[20px] mt-[30px]">
              Delivered
            </p>
            <p className="font-[600] text-[#353B42] text-[20px] mt-[30px]">
              60 Days Left
            </p>
          </div>
          <div className=" ">
            <div className="side-car w-[600px] lg:w-[500px] h-[365px] m-[0] p-[0] relative ">
              <Swiper
                style={{
                  "--swiper-navigation-color": "blue",
                  "--swiper-pagination-color": "blue",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide className="">
                  <img src={chevrolet} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={frontSide} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={backSide} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={angularSide} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                // onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {/* <SwiperSlide>
                  <img src={chevrolet} />
                </SwiperSlide> */}
                <SwiperSlide>
                  <img src={frontSide} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={backSide} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={angularSide} />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex justify-between items-center">
              <p className="underline font-[500] text-[#353B42]">
                View All Images
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-[20px] mt-[30px]">
          {/* <button className=" bg-[#E42E35] text-[#F5FAFF] font-[700]">
            S.O.S
          </button> */}
          <Link to="report">
            <button className=" bg-[#E42E35] text-[#F5FAFF] font-[700]">
              Report a problem
            </button>
          </Link>
          <button className="renew text-[#F5FAFF] font-[700] ">Renew</button>
        </div>
      </div>
    </div>
  );
};

export default Request;
