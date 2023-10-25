import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./cars.css";
import React from "react";
import chevDark from "../../../assets/chev-dark.svg"
import seat from "../../../assets/seats.svg"
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg"
// import { Link } from "react-router-dom";
const Cars = () => {
  const [age, setAge] = React.useState("");
   const [price, setPrice] = React.useState("");
    const [brand, setBrand] = React.useState("");


  const handleChangeAge = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
   const handleChangePrice = (event) => {
     setPrice(event.target.value);
     console.log(price);
   };
    const handleChangeBrand = (event) => {
      setBrand(event.target.value);
      console.log(brand);
    };
  return (
    <div className=" cars py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h2 className=" text-[#E42E35] font-[700] text-[25px] font-[Quicksand] mb-[60px] ">
          Our Garage
        </h2>
        <p className="text-[#353B42] font-[700] text-[20px] mb-[30px]">
          Our cars
        </p>
        <div className="flex  gap-[40px]">
          <Box sx={{ minWidth: 140, borderRadius: "20px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChangeAge}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="prive"
                onChange={handleChangePrice}
              >
                <MenuItem value={10}>250</MenuItem>
                <MenuItem value={20}>450</MenuItem>
                <MenuItem value={30}>650</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Brand"
                onChange={handleChangeBrand}
              >
                <MenuItem value={10}>Chevrolet</MenuItem>
                <MenuItem value={20}>Mazda</MenuItem>
                <MenuItem value={30}>Kia</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <hr className="mt-[30px] h-[2px] mb-[50px]" />

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

export default Cars;
