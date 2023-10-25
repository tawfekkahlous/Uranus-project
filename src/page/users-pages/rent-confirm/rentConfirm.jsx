import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "./rentConfirm.css";
import { Switch } from "@mui/material";
import blackNote from "../../../assets/blackNote.svg";
import map from "../../../assets/map.svg";
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
import { Link } from "react-router-dom";
const RentConfirm = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className=" comfirm pt-[50px] pb-[80px]">
      <div className="container mx-auto px-[40px]">
        <div className="flex justify-between items-center flex-col lg:flex-row  gap-y-[40px]">
          <div className="  w-[90%] lg:w-[40%] ">
            <div className="flex items-center gap-[30px]">
              <p className="text-[#353B42] font-[600]">From</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="" />
                </DemoContainer>
              </LocalizationProvider>
              <p className="text-[#353B42]">
                <span className="font-[700] text-[#353B42] text-[20px]">
                  50
                </span>{" "}
                Days
              </p>
            </div>
            <div>
              <div className="flex items-center gap-[30px]">
                <p className="text-[#353B42] font-[600] w-[39px]">To</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex items-center mt-[20px] gap-x-[30px]">
              <p className="text-[#353B42] font-[600] ">Send a Driver</p>
              <Switch {...label} defaultChecked />
            </div>
            <div className="flex items-center gap-x-[5px] mt-[20px]">
              <img src={blackNote} alt="note" className="w-[15px]" />
              <p className="text-[#353B42] font-[600]">
                Driver fees are 200 A.E.D per day
              </p>
            </div>
            <div className="">
              <p className="text-[#353B42] font-[600] mt-[20px]">
                Please Set a pickup location
              </p>
              <img
                src={map}
                alt="map"
                className="w-[500px] relative left-[-28px] top-[-5px]"
              />
            </div>
            <div className="line h-[1px] relative left-[-10px]"></div>
            <div className="flex justify-between items-center mt-[15px] ">
              <p className="text-[#353B42] font-[600]">Driver</p>
              <p className="text-[#353B42] font-[600]">50 days</p>
              <p className="text-[#27C11A] font-[600]">10,000 A.E.D</p>
            </div>
          </div>

          <div className=" w-[80%] lg:w-[40%]">
            <div className="side-car  w-[600px] lg:w-[500px] h-[400px] m-[0] p-[0] relative ">
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
                  <img src={chevrolet}  />
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

        <Link to="rent-proccess-payment">
          <button className="bg-[#E42E35] text-[#F5FAFF] py-[8px] w-[200px] rounded-[12px] font-[700] ml-[30px] mt-[25px]">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RentConfirm;
