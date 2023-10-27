import chevLogo from "../../../assets/chevLogo.svg";
import seat from "../../../assets/dark-seat.svg";
import location from "../../../assets/location.svg";
import active from "../../../assets/active-step.svg";
import current from "../../../assets/current-step.svg";
import next from "../../../assets/next-step.svg";
import dots from "../../../assets/dots.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import angularSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-angular-rear.svg";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg";
import frontSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-front-view.svg";
import backSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-rear-view.svg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const rentLocation = () => {
  return (
    <div className=" payment pt-[50px] pb-[80px]">
      <div className="container mx-auto px-[40px]">
        <div className="flex justify-between items-center flex-col lg:flex-row  gap-y-[40px]">
          <div className="w-[40%]">
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
            <img
              src={location}
              alt="location"
              className="w-[450px] relative left-[-22px]"
            />

            <div className="flex justify-between items-center mt-[40px]  ">
              <div className="flex items-center  gap-[5px] ">
                <div className="w-[25px] h-[25px] border-[2px] border-[#E42E35] rounded-[50%] flex justify-center items-center ">
                  <img src={active} alt="active" />
                </div>
                <p className=" text-[#353B42] font-[600] text-[14px]">
                  Requested
                </p>
              </div>
              <div className="w-[40px] h-[2px] bg-[#E42E35]"></div>

              <div className="flex gap-[5px] items-center ">
                <div className="w-[25px] h-[25px] border-[2px] border-[#E42E35] rounded-[50%] flex justify-center items-center ">
                  <img src={active} alt="active" />
                </div>
                <p className="text-[#353B42] font-[600] text-[14px]">Payment</p>
              </div>
              <img src={dots} alt="dots" />

              <div className="flex gap-[5px]">
                <img
                  src={current}
                  alt="current"
                  className="w-[25px] h-[25px]"
                />
                <p className="text-[#353B42] font-[600] text-[14px]">
                  Delivered
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="side-car w-[600px] lg:w-[500px] h-[400px] m-[0] p-[0] relative ">
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
      </div>
    </div>
  );
};

export default rentLocation;
