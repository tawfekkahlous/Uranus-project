import "./user.css";
import flag from "../../../assets/flag.svg";
import car from "../../../assets/car.svg"
import face from "../../../assets/face.svg"
import drive from "../../../assets/drive.svg"
import visa from "../../../assets/visa.svg"
import passport from "../../../assets/passport.svg"

const User = () => {
  return (
    <>
      <div className="w-[100%] user">
        <div className="flex gap-4 items-center justify-between w-[full]">
          <p className="userName">John Smith</p>
          <div className="flex gap-4">
            <button className="delete">Delete</button>
            <button className="verify text-[#f5faff] bg-[#e42e35]">
              Verify
            </button>
          </div>
        </div>

        <div className="info flex flex-col justify-between w-[100%] gap-y-[20px]">
          <div className="flex justify-between items-center mt-[20px]">
            <p className="name  ml-[60px]">john_smith_99</p>
            <div className="flex items-center gap-4 ">
              <img src={flag} className="w-[29px] h-[29px]" />
              <p className="number mr-[75px]  ">+971 50 293 7412</p>
            </div>
          </div>
          <p className="email  ml-[60px] mb-[20px] ">john22smith@gmail.com</p>
        </div>

        <div className="cont-point flex mt-[38px] justify-between w-[100%] ">
          <div className="points w-[50%]  ">
            <p className=" mt-[15px]  ml-[60px] mb-[25px]">Points</p>

            <div className="point">
              <div className="flex justify-between items-center mx-[60px] ">
                <p> {"2500"} </p>
                <p> {"5000"} </p>
              </div>
              <div className="bar mt-[7px] mb-[25px] mx-[auto]"> </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[45%]">
            <div className="car flex  items-center ">
              <img
                src={car}
                alt="car"
                className="w-[35px] h-[35px] ml-[30px] mr-[10px]"
              />
              <p>Cars</p>
            </div>
            <div className="empty"></div>
          </div>
        </div>

        {/* <div className="pictures  mb-[50px]">
          <div className="flex justify-evenly ">
            <img src={face} alt="face" className="my-[85px] " />
            <img src={passport} alt="passport" className="" />
          </div>
          <div className="flex justify-evenly">
            <img src={drive} alt="drive" className=" " />
            <img src={visa} alt="visa" className="" />
          </div>
        </div> */}

        <div className=" pictures w-[100%] mt-[35px] flex justify-between">
          <div className="one w-[22%]">
            <img src={face} alt="face" />
          </div>
          <div className="one w-[22%]">
            <img src={passport} alt="passport" />
          </div>
          <div className="one w-[22%]">
            <img src={drive} alt="drive" />
          </div>
          <div className="one w-[22%]">
            <img src={visa} alt="visa" />
          </div>
        </div>
      </div>
      <style>
        {`
            .bar{
              position : relative;
              width: 85%;
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
  );
};

export default User;
