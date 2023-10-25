import "./automotives.css";
import { useNavigate } from "react-router-dom";
import autoLogo from "../../../assets/auto-logo.svg";
import ArrowRight from "../../../assets/arrowRigth.svg";
import add from "../../../assets/add.svg";
import { useState } from "react";
import brandLogo from "../../../assets/brandLogo.svg";
import chevLogo from "../../../assets/chevLogo.svg";
import fordLogo from "../../../assets/fordLogo.svg";
import kiaLogo from "../../../assets/kiaLogo.svg";
import mazdaLogo from "../../../assets/mazdaLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import note from "../../../assets/note.svg";
const Automotives = () => {
  const header = ["Car", "Brand", "year", "Distance", "Color"];
  const [isAdd, setIsAdd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  const toggleAdd = () => {
    setIsAdd(!isAdd);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("car");
  };

  const handleAddCar = () => {
    navigate("add-car");
  };

  return (
    <div className="automotives w-[100%]">
      <p className="title ">Automotives</p>
      <div
        onClick={togglePopup}
        className="w-[100%]  box  flex justify-between  items-center mb-[40px] px-[13px] py-[15px] cursor-pointer "
      >
        <div className="flex items-center">
          <img
            src={autoLogo}
            alt="autoLogo"
            className=" logo ml-[10px] mr-[15px]"
          />
          <p className="brand">Brands</p>
        </div>
        <div className="flex">
          <img
            src={ArrowRight}
            alt="arrowRight"
            className="w-[25px] hmr-[10px]"
          />
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={togglePopup}
        >
          <div
            className="popup px-[50px]  "
            onClick={(event) => {
              handleButtonClick(event);
            }}
          >
            <div className="flex  items-center justify-between  mt-[50px] ">
              <div className="flex">
                <img src={brandLogo} alt="brand-logo" />
                <p className="brand">Brands</p>
              </div>
              <div className="flex  items-center">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                    background: "#F5FAFF",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search Google Maps"
                    // inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <div
                  onClick={(event) => {
                    toggleAdd();
                    handleButtonClick(event);
                  }}
                  className="flex justify-center items-center w-[50px] h-[30px] add cursor-pointer"
                >
                  <img src={add} alt=" add" className="w-[18px] h-[18px]" />
                </div>
              </div>
            </div>
            <div className="line mb-[15px]"></div>
            <div className="flex items-center">
              <img src={note} alt="note" className="h-[15px] mr-[10px]" />
              <p className="note">
                please insure that brand logos are 360px X 360px with no
                background (PNG files)
              </p>
            </div>

            <div className="wrapper">
              <div className="scroll ">
                {isAdd && (
                  <div className="box flex items-center justify-between w-[100%]">
                    <div className="flex items-center">
                      <img src={add} alt="add " className="w-[40px] h-[40px]" />
                      <p className="addVehicle">Type Name Here</p>
                    </div>
                    <button>Add Vehicle</button>
                  </div>
                )}

                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={chevLogo} alt="chevrolet-logo" />
                    <p>Cheverolet</p>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={fordLogo} alt="chevrolet-logo" />
                    <p>Ford</p>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={kiaLogo} alt="chevrolet-logo" />
                    <p>Kia</p>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={mazdaLogo} alt="chevrolet-logo" />
                    <p>Mazda</p>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={mazdaLogo} alt="chevrolet-logo" />
                    <p>Mazda</p>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="box flex items-center justify-between mt-[26px]">
                  <div className="flex items-center">
                    <img src={mazdaLogo} alt="chevrolet-logo" />
                    <p>Mazda</p>
                  </div>
                  <button>Edit</button>
                </div>
              </div>
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
      )}

      <div
        onClick={handleAddCar}
        className="w-[100%]  box  flex justify-between  items-center mb-[40px] px-[13px] py-[15px]  cursor-pointer"
      >
        <div className="flex items-center">
          <img
            src={add}
            alt="add"
            className="w-[30px] h-[30px] ml-[10px] mr-[15px]"
          />
          <p className="add">Add</p>
        </div>
        <div className="flex">
          <img
            src={ArrowRight}
            alt="arrowRight"
            className="w-[25px]  mr-[10px]"
          />
        </div>
      </div>
      <table className="table w-[100%] rounded-tl-[21px] rounded-tr-[21px] rounded-br-[21px] rounded-bl-[21px] overflow-hidden">
        <thead>
          <tr>
            {header.map((item, key) => (
              <th key={key}> {item} </th>
            ))}
          </tr>
        </thead>
        <tbody className="body">
          <tr onClick={handleClick} className="cursor-pointer">
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td>
          </tr>

          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Automotives;
