import { useState, useRef } from "react";
import headerLogo from "../../assets/Logo.png";
import "./header.css";
import star from "../../assets/star.svg";
// import search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  // const [search, setSearch] = useState();
  const searchRef = useRef();
    const handleSearch = () => {
      console.log(searchRef.current.value);
    };
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className=" header relative ">
      <div className=" container mx-auto  flex flex-col items-center justify-around gap-[20px] md:flex-row md:items-center  md:justify-between md:h-[50px] p-[20px] md:px-[20px]">
        <div className="flex items-center   ">
          <img
            src={headerLogo}
            alt="header-logo"
            className="w-[120px] md:w-[80px] h-[38px]   mr-[13px] "
          />
          <p className="title font-[Quicksand]"> URANUS RENT A CAR L.L.C</p>
        </div>
        <ul className="flex gap-x-[60px]  ">
          <NavLink to="home">
            <li> Home </li>
          </NavLink>
          <NavLink to="cars">
            <li> Cars </li>
          </NavLink>
          <NavLink to="profile">
            <li> Profile </li>
          </NavLink>
        </ul>
        <div className="flex justify-between gap-[10px] items-center">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 150,
              height: "30px",
              borderRadius: "10px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder=""
              inputProps={{ "aria-label": "search google maps" }}
              inputRef={searchRef}
              // onChange={(e) => searchRef(e.current.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <img
            src={star}
            alt="star"
            className="h-[20px] cursor-pointer"
            onClick={handlePopup}
          />
        </div>
      </div>
      {popup && (
        <>
          <div className="w-[300px]  popup absolute top-[54px] right-[50px] p-[20px] z-10 ">
            <div className="flex gap-[2px] items-center mb-[5px]">
              <p className="text-[#353B42] font-[700] text-[18px] ">
                My Points
              </p>
              <img src={star} alt=" star" className="w-[20px]" />
            </div>
            <p className="text-[15px] text-[#353B42]  font-[600] mb-[10px]">
              the more you count ,the pest you get
            </p>
            <div className="">
              <div className="flex justify-between items-center mx-[15px] ">
                <p className="font-[700] text-[14px] text-[#353B42]">
                  {" "}
                  {"2500"}{" "}
                </p>
                <p className="font-[700] text-[14px] text-[#353B42]">
                  {" "}
                  {"5000"}{" "}
                </p>
              </div>
              <div className="bar mt-[7px]  mx-[auto]"> </div>
            </div>
          </div>

          <style>
            {`
            .bar{
              position : relative;
              width: 90%;
              height: 10px;
              flex-shrink: 0;
              border-radius: 37px;
              background: #9BA5B7;
              overflow : hidden;
            }
            .bar:after{
              position : absolute;
              left :0;
              top: 0;
              content : "";
              height : 100%;
              width: ${(2500 * 100) / 5000}%;
              border-radius: 37px;  
              background : #e42e35;
            }
          `}
          </style>
        </>
      )}

      {/* {popup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10000",
          }}
          onClick={handlePopup}
        >
          <div
            className=" popup w-[300px] p-[30px] h-[200px] flex flex-col  "
            // onClick={(event) => {
            //   handleButtonClick(event);
            // }}
          >
            <div className="flex">
              <p> My points</p>
              <img src={star} alt="star" />
            </div>
          </div>

          <style>
            {`
              body{
                overflow:hidden
              }
              `}
          </style>
        </div>
      )} */}
    </div>
  );
};

export default Header;
