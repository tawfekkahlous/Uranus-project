import "./car.css";
import chevroletLogo from "../../../assets/chevLogo.svg";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg"
import star from "../../../assets/star.svg";
import frontSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-front-view.svg"
import backSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-rear-view.svg"
import angularSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-angular-rear.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const UserCar = () => {
     const [thumbsSwiper, setThumbsSwiper] = useState("");
  return (
    <div className="  py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h2 className=" text-[#E42E35] font-[700] text-[25px] font-[Quicksand] mb-[10px] ">
          My Cars
        </h2>
        <div className="flex justify-between ">
          <div className="ml-[30px] mt-[30px]">
            <div className="flex items-center gap-2 mb-[10px]">
              <img src={chevroletLogo} alt="" className="w-[30px]" />
              <p className="text-[#353B42] text-[20px] font-[600]">Chevrolet</p>
            </div>
            <div className="flex items-center gap-x-3 mb-[20px] ">
              <p className="text-[#353B42] text-[15px] font-[700]">Camaro</p>
              <p className="text-[#353B42] text-[15px] font-[700]">2022</p>
            </div>
            <p className="text-[#353B42] font-[600] mb-[20px]">20,000KM</p>
            <div className="flex items-center mb-[10px]">
              <p className="text-[#353B42] font-[600]">5500</p>
              <img src={star} alt="star" className="w-[15px]" />
              <p className="text-[#353B42] font-[600]">/day</p>
            </div>
            <div className="flex items-center mb-[25px]">
              <p className="text-[#27C11A] text-[12px] font-[600]">+10,000</p>
              <img src={star} alt="star" className="w-[15px]" />
            </div>
            <div className="flex gap-x-[20px]">
              <div className="py-[20px] border-[1px] border-[#27C11A] border-[solid] rounded-[15px] w-[130px] bg-[#FAFAFA] flex flex-col items-center gap-y-[20px]">
                <p className="text-[13px] font-[600] text-[#353B42] ">Daily</p>
                <div className="flex flex-col items-center">
                  <p className="text-[#27C11A] text-[11px] font-[600]">500</p>
                  <p className="text-[#27C11A] text-[12px] font-[600]">A.E.D</p>
                </div>
              </div>
              <div className="py-[20px] border-[1px] border-[#27C11A] border-[solid] rounded-[15px] w-[130px] bg-[#FAFAFA] flex flex-col items-center gap-y-[20px]">
                <p className="text-[13px] font-[600] text-[#353B42] ">
                  Monthly
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-[#353B42] text-[11px] font-[600]">12500</p>
                  <p className="text-[#353B42] text-[12px] font-[600]">A.E.D</p>
                </div>
              </div>
              <div className="py-[20px] border-[1px] border-[#27C11A] border-[solid] rounded-[15px] w-[130px] bg-[#FAFAFA] flex flex-col items-center gap-y-[20px]">
                <p className="text-[13px] font-[600] text-[#353B42] ">Yearly</p>
                <div className="flex flex-col items-center">
                  <p className="text-[#353B42] text-[11px] font-[600]">
                    110,000
                  </p>
                  <p className="text-[#353B42] text-[12px] font-[600]">A.E.D</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="side-car w-[500px] h-[400px] m-[0] p-[0] relative ">
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
                <SwiperSlide>
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
              <div className="flex justify-between w-[130px] items-center ">
                <div className="w-[20px] h-[20px] bg-[red] rounded-[4px] border-[3px] border-[#bbb] "></div>
                <div className="w-[20px] h-[20px] bg-[white] rounded-[4px] border-[3px] border-[#bbb]"></div>
                <div className="w-[20px] h-[20px] bg-[black] rounded-[4px] border-[3px] border-[#bbb]"></div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#E42E35] text-[#F5FAFF] py-[8px] px-[80px] rounded-[15px] font-[700] ml-[30px]">Rent</button>
      </div>
    </div>
  );
};

export default UserCar;
