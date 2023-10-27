// import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg";
import chevDark from "../../../assets/chev-dark.svg";
import "./home.css";
import seat from "../../../assets/seats.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home py-[50px]">
      <div className="container mx-auto px-[40px]">
        <div className="  mb-[40px]">
          <h1 className=" text-[#E42E35] font-[700] text-[25px] font-[Quicksand] mb-[10px] ">
            Hi Guest
          </h1>
          <p className=" text-[#353B42] font-[700] text-[15px] font-[Quicksand] relative top-[-7px]">
            you can see some example of our cars
          </p>
        </div>
        <div>
          <p className="mb-[15px] font-[700]">Popular</p>
          <div className="h-[1px] bg-[#353B42] mb-[40px]"></div>
          <div className="w-[100%] ">
            <Swiper
              cssMode={true}
              navigation={true}
              modules={[Navigation]}
              // spaceBetween={}
              // slidesPerView={2.5}
              className="home-swiper"
            >
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
              <Link to="/car-info">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <p className="mb-[15px] font-[700]">Recents</p>
          <div className="h-[1px] bg-[#353B42] mb-[40px]"></div>
          <div className="w-[100%] ">
            <Swiper
              cssMode={true}
              navigation={true}
              modules={[Navigation]}
              // slidesPerView={1.7}
              className="home-swiper"
            >
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] md:!w-[70%] lg:!w-[45%] ">
                <div className=" popular flex ml-[30px]">
                  <div className="info">
                    <img src={chevDark} alt="chevrolet-logo" />
                    <div className="bg-[#F5FAFF] rounded-[50%] w-[25px] h-[25px]"></div>
                    <div className="text-center">
                      <img src={seat} alt="seat" />
                      <p className="text-[#F5FAFF] font-[700]">4</p>
                    </div>
                    <p className="text-white">2021</p>
                    <ul className="list-disc text-[#F5FAFF] text-[12px] w-[74%]">
                      <li>Four engine options</li>
                      <li>The 1LE track package is available on all trims</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-evenly ">
                    <img
                      src={chevrolet}
                      alt="chevrolet"
                      className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
                    />
                    <div className="mt-[55px] flex justify-around">
                      <button className="price">550/daily</button>
                      <button className="type">Camaro</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <ul className=" flex justify-between w-[600px] ml-[50px] mt-[35px]">
  <NavLink to="recent">
    <li className="option"> recent </li>
  </NavLink>
  <NavLink to="Popular">
    <li className="option"> Popular </li>
  </NavLink>
  <NavLink to="all">
    <li className="option"> All </li>
  </NavLink>
</ul> */
}
