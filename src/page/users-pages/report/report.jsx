import { Box, Switch, TextField } from "@mui/material";
import "./report.css";
import { useState } from "react";
import { useRef } from "react";


const label = { inputProps: { "aria-label": "Switch demo" } };
const Report = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
  };
// console.log(inputRef.current.value);


  return (
    <div className="report py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h1 className=" text-[#E42E35] font-[700] text-[22px] font-[Quicksand] mb-[40px]  ">
          Report
        </h1>

        <div className="flex gap-[25px] justify-evenly flex-col-reverse md:flex-row  m-[auto] pl-[40px] lg:pl-[0px] ">
          <div className="">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                 
                  width: { xs: "90%", sm: "40ch", md: "50ch", lg: "50ch" },
                 
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-textarea"
                //   label="Describe more"
                placeholder="Describe more"
                multiline
                rows={8}
                inputRef={inputRef}
              />
            </Box>
          </div>

          <div className=" flex flex-col justify-between   ">
            <div>
              <div className="flex gap-[15px] mb-[20px]">
                <button className="bg-[#E42E35] text-[#F5FAFF]">Car</button>
                <button className="bg-[F5FAFF] text-[#353B42]">Driver</button>
              </div>
              <div className="flex gap-[15px]">
                <button className="bg-[F5FAFF] text-[#353B42]">Price</button>
                <button className="bg-[F5FAFF] text-[#353B42]">Other</button>
              </div>
            </div>

            <div className="flex justify-between mt-[20px] md:mt-[0px] w-[50%] ">
              <p>Urgent</p>
              <Switch {...label} />
            </div>
            <button className="report-button" onClick={handleButtonClick}>
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
