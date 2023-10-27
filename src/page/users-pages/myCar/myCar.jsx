import chevDark from "../../../assets/chev-dark.svg";
import seat from "../../../assets/seats.svg"
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg";
import "./myCar.css"
import { useNavigate } from "react-router-dom";
const MyCar = () => {

  const navigate=useNavigate()
  return (
    <div className=" myCars py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h2 className=" text-[#E42E35] font-[700] text-[25px] font-[Quicksand] mb-[80px] ">
          My Cars
        </h2>
        <p className="font-[700] text-[#353B42]">Current</p>
        <hr className="mt-[15px] h-[2px] mb-[50px]" />
        <div className="grid grid-cols-12 gap-[20px] ">
          <div onClick={() => navigate("/car-info")} className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6 cursor-pointer">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
        </div>

        <p className="font-[700] text-[#353B42] mt-[50px]">All Cars</p>
        <hr className="mt-[15px] h-[2px] mb-[50px]" />
        <div className="grid grid-cols-12 gap-[20px] ">
          <div className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[450px] lg:h-[350px] xl:w-[500px] popular flex ml-[30px]  col-span-12  lg:col-span-6">
            <div className="info lg:w-[150px] xl:w-[191px] md:w-[200px] w-[150px]  ">
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
            <div className=" flex flex-col justify-between">
              <img
                src={chevrolet}
                alt="chevrolet"
                className="w-[300px] relative left-[-50px] z-[1] mt-[60px]"
              />
              <div className="mb-[25px] flex justify-around">
                <button className="price">550/daily</button>
                <button className="type">Camaro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCar;
