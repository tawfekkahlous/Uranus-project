import "./profile.css";
import star from "../../../assets/star.svg";
import contact from "../../../assets/contact.svg";
import car from "../../../assets/car.svg";
import note from "../../../assets/note.svg";
import pen from "../../../assets/pen.svg";
import flag from "../../../assets/flag.svg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="account  py-[50px]">
        <div className="container mx-auto px-[40px]">
          <h2 className=" text-[#E42E35] font-[700] text-[20px] font-[Quicksand] mb-[50px] ">
            Your Account
          </h2>

          <div className=" flex  flex-col gap-y-[50px] justify-between sm:flex-row sm:justify-between items-center sm:items-start ">
            <div className="flex flex-col gap-y-[30px] sm:w-[45%] lg:w-[40%] w-[90%]  ">
              <div className="points  p-[20px] w-[100%] ">
                <div className="flex gap-[15px] items-center justify-center mb-[15px]">
                  <p className="  text-[#353B42] text-[18px] font-[700] ">
                    My Points
                  </p>
                  <img src={star} alt="star" className="w-[20px] " />
                </div>

                <p className="text-[#353B42] font-[600] text-[15px] mb-[15px] ml-[15px]">
                  the more you count, the best you get
                </p>

                <div className="">
                  <div className="flex justify-between items-center mx-[60px] ">
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

              <Link to="my-car">
              <div className="my-cars flex items-center gap-[10px] w-[100%] px-[20px] py-[10px]">
                <img src={car} alt="car" className="w-[20px]" />
                <p className="font-[700] text-[#353B42]">My Cars</p>
              </div>
              </Link>
              <div className="my-cars flex items-center gap-[10px] w-[100%] px-[20px] py-[10px]">
                <img src={contact} alt="contact" className="w-[20px]" />
                <p className="font-[700] text-[#353B42]">Contact us</p>
              </div>
              <div className="my-cars flex items-center gap-[10px] w-[100%]  px-[20px] py-[10px]">
                <img
                  src={note}
                  alt="note"
                  className="w-[20px] text-[#E42E35]"
                />
                <p className="font-[700] text-[#E42E35]">Report Problem</p>
              </div>
            </div>

            <div className="info  sm:w-[45%] lg:w-[40%] w-[90%]">
              <div className=" flex justify-between items-center mb-[40px]">
                <p className="text-[#353B42] font-[600] text-[20px]">
                  John Smith
                </p>
                <img src={pen} alt="pen" className="w-[50px]" />
              </div>

              <div className="mb-[15px]">
                <p className="text-[#353B42] font-[600] text-[18px] mb-[10px] ">
                  User Name
                </p>
                <p className="text-[17px] text-[#353B42] font-[300] ">
                  john_smith_99
                </p>
              </div>
              <div className="mb-[15px]">
                <p className="text-[#353B42] font-[600] text-[18px] mb-[10px] ">
                  Email
                </p>
                <p className="text-[17px] text-[#353B42] font-[300] ">
                  john22smith@gmail.com
                </p>
              </div>
              <div className="mb-[15px]">
                <p className="text-[#353B42] font-[600] text-[18px] mb-[10px] ">
                  Number
                </p>
                <div className=" flex gap-[8px] items-center">
                  <img src={flag} alt="flag" className="w-[20px]" />
                  <p className="text-[17px] text-[#353B42] font-[300] ">
                    +971 50 293 7412
                  </p>
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default Profile;
