import "./rentPayment.css";
import chevLogo from "../../../assets/chevLogo.svg";
import star from "../../../assets/green-star.svg";
import active from "../../../assets/active-step.svg";
import current from "../../../assets/current-step.svg";
import next from "../../../assets/next-step.svg";
import dots from "../../../assets/dots.svg";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.svg";
import frontSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-front-view.svg";
import backSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-rear-view.svg";
import seat from "../../../assets/dark-seat.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import angularSide from "../../../assets/2019-chevrolet-camaro-1lt-coupe-angular-rear.svg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { Form, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Switch, TextField } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";
import right from "../../../assets/right.svg";
import Redstar from "../../../assets/red-star.svg";
// import wrong from "../../../assets/false.svg";
import { Link, useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };
const RentPayment = () => {

  const navigate=useNavigate()
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    cardNumber: yup
      .string()
      .matches(/^[0-9]{3}$/, "Invalid card number")
      .required(),
    expiryDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Invalid expiry date")
      .required(),
    cvv: yup
      .string()
      .matches(/^[0-9]{3}$/, "Invalid CVV")
      .required(),
  });
  const validationSchemaCheck = yup.object().shape({
    promoCode: yup
      .string()
      .matches(/^[0-9]{6}$/, "Invalid card number")
      .required(),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckOut, setIsCheckout] = useState();
  const [isDone, setIsDone] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckout = () => {
    setIsCheckout(!isCheckOut);
  };
  const handledone = () => {
    setIsDone(!isDone);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className=" payment pt-[50px] pb-[80px]">
      <div className="container mx-auto px-[40px]">
        <div className="flex justify-between items-center flex-col lg:flex-row  gap-y-[40px]">
          <div className=" w-[90%] lg:w-[45%] self-start">
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

            <div className="flex gap-[30px] items-center mt-[20px] mb-[15px]">
              <div>
                <div className="flex items-center gap-[5px] mb-[10px]">
                  <p className="text-[#E42E35] font-[600]">Sat Aug 26 2023</p>
                  <p className="text-[#353B42] font-[600] text-[12px]">To</p>
                </div>
                <p className="text-[#E42E35] font-[600]">Wed Oct 11 2023</p>
              </div>

              <div className="flex items-center gap-[25px]">
                <p className="text-[#353B42] font-[600]">50 Days</p>
                <div className="flex gap-[5px]">
                  <p className="text-[#27C11A] font-[600]">+10,000</p>
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <div className="line h-[1px] relative left-[-10px]"></div>
            <div className="flex justify-between items-center mt-[15px] ">
              <p className="text-[#353B42] font-[600]">Driver</p>
              <p className="text-[#353B42] font-[600]">50 days</p>
              <p className="text-[#27C11A] font-[600]">10,000 A.E.D</p>
            </div>
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
                <img
                  src={current}
                  alt="current"
                  className="w-[25px] h-[25px]"
                />
                <p className="text-[#353B42] font-[600] text-[14px]">Payment</p>
              </div>
              <img src={dots} alt="dots" />

              <div className="flex gap-[5px]">
                <img src={next} alt="next" className="w-[25px] h-[25px]" />
                <p className="text-[#353B42] font-[600] text-[14px]">
                  Delivered
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="side-car w-[400px] h-[350px] md:w-[500px] md:h-[400px] m-[0] p-[0] relative ">
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
        <div className="mt-[50px] lg:mt-[15px] flex flex-col md:flex-row justify-evenly items-center lg:justify-start gap-[30px] ">
          <Link to="rent-proccess-location">
            <button className="bg-[#F5FAFF] cash text-[#353B42] py-[8px] w-[200px]  font-[700] ml-[30px] ">
              Cash on Delivery
            </button>
          </Link>
          <button
            className="bg-[#E42E35] text-[#F5FAFF] py-[8px] w-[200px]  font-[700] ml-[30px] "
            onClick={togglePopup}
          >
            Check out
          </button>
        </div>

        {isOpen && (
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
            onClick={togglePopup}
          >
            <div
              className=" popup w-[300px] p-[30px] h-[400px] flex flex-col  "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <p className="title">Payment Details</p>

              <div className="text-center grow ">
                <Formik
                  validationSchema={validationSchema}
                  initialValues={{
                    email: "",
                    cardNumber: "",
                    expiryDate: "",
                    cvv: "",
                  }}
                  // validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }, setSubmitting) => {
                    console.log({ values });
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => (
                    <Form className="h-[100%] flex flex-col justify-between ">
                      <div className="">
                        <div className="  ">
                          <Field
                            as={TextField}
                            name="email"
                            id="email"
                            label="Email "
                            variant="outlined"
                            error={formik.errors.email && formik.touched.email}
                            InputLabelProps={{
                              style: {
                                color: "#353B42",
                                fontSize: "15px",
                                fontWeight: "700",
                                opacity: "0.75",
                              },
                            }}
                            sx={{
                              borderRadius: "8px",
                              width: "100%",
                              marginTop: "25px",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&:hover fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&.Mui-focused fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                              },
                            }}
                          />
                          <ErrorMessage name="email">
                            {(msg) => (
                              <p className=" text-[14px] text-[red]">{msg}</p>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="w-[100%]">
                          <Field
                            as={TextField}
                            name="cardNumber"
                            id="cardNumber"
                            label="Card Number"
                            variant="outlined"
                            type="password"
                            error={
                              formik.errors.cardNumber &&
                              formik.touched.cardNumber
                            }
                            InputLabelProps={{
                              style: {
                                color: "#353B42",
                                fontSize: "15px",
                                fontWeight: "700",
                                opacity: "0.75",
                              },
                            }}
                            sx={{
                              borderRadius: "8px",
                              width: "100%",
                              marginTop: "25px",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&:hover fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&.Mui-focused fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                              },
                            }}
                          />
                          <ErrorMessage name="cardNumber">
                            {(msg) => (
                              <p className=" text-[14px] text-[red]">{msg}</p>
                            )}
                          </ErrorMessage>
                        </div>

                        <div className="flex w-[100%] mt-[25px] justify-between ">
                          <div className="w-[100%] ">
                            <Field
                              as={TextField}
                              type="string"
                              name="expiryDate"
                              id="expiryDate"
                              label="Expirey"
                              variant="outlined"
                              error={
                                formik.errors.expiryDate &&
                                formik.touched.expiryDate
                              }
                              InputLabelProps={{
                                style: {
                                  color: "#353B42",
                                  fontSize: "15px",
                                  fontWeight: "700",
                                  opacity: "0.75",
                                },
                              }}
                              sx={{
                                borderRadius: "8px",
                                height: "50%",
                                width: "90%",
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                  "&:hover fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                  "&.Mui-focused fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                },
                              }}
                            />
                            <ErrorMessage name="expiryDate">
                              {(msg) => (
                                <p className=" text-[14px] text-[red]">{msg}</p>
                              )}
                            </ErrorMessage>
                          </div>
                          <div className="w-[100%] ">
                            <Field
                              as={TextField}
                              type="password"
                              name="cvv"
                              id="cvv"
                              label="CVV"
                              variant="outlined"
                              error={formik.errors.cvv && formik.touched.cvv}
                              InputLabelProps={{
                                style: {
                                  color: "#353B42",
                                  fontSize: "15px",
                                  fontWeight: "700",
                                  opacity: "0.75",
                                },
                              }}
                              sx={{
                                borderRadius: "8px",
                                height: "50%",
                                width: "90%",
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                  "&:hover fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                  "&.Mui-focused fieldset": {
                                    border: "2px solid rgba(62, 63, 67, 0.60)",
                                    borderRadius: "12px",
                                  },
                                },
                              }}
                            />
                            <ErrorMessage name="cvv">
                              {(msg) => (
                                <p className=" text-[14px] text-[red]">{msg}</p>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="contained"
                        type="submit"
                        color="error"
                        sx={{
                          borderRadius: "12px",
                          width: "90%",
                          boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                          background: "var(--P1, #E42E35)",
                          color: "#F5FAFF",
                          fontSize: "15px",
                          fonrWeight: "700",
                          fontFamily: "Quicksand",
                          padding: "10px",
                          alignSelf: "center",
                          lineHeight: "normal",
                        }}
                        disabled={!formik.isValid || !formik.dirty}
                        onClick={() => {
                          handleChecked();
                          togglePopup();
                        }}
                      >
                        Confirm Card
                      </Button>
                    </Form>
                  )}
                </Formik>
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

        {isChecked && (
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
            onClick={handleChecked}
          >
            <div
              className=" popup w-[230px] p-[20px]  flex items-center flex-col justify-center gap-[10px] rounded-[15px] "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <div className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px] border-[#3D3C3C] ">
                <img src={right} alt="right" className="w-[30px]" />
              </div>
              <p className="text-[#3D3C3C] font-[700] text-[14px] mb-[20px]">
                Card Confirmed
              </p>
              <button
                className="w-[100%] bg-[#E42E35] text-[#F5FAFF] font-[700] py-[10px] text-[14px]"
                onClick={() => {
                  handleChecked();
                  handleCheckout();
                }}
              >
                Continue To Checkout
              </button>
            </div>
          </div>
        )}

        {isCheckOut && (
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
            onClick={handleCheckout}
          >
            <div
              className=" popup w-[350px] p-[30px]   rounded-[15px] "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <p className="text-[#3D3C3C] font-[700] text-[20px] mt-[15px] mb-[5px] ">
                Checkout
              </p>
              <p className="mb-[20px] text-[#3D3C3C]">Chevrolet Camaro</p>
              <div className="flex">
                <p className="text-[#E42E35] font-[700]">2,500 </p>
                <img src={Redstar} alt="star" className="w-[18px]" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#3D3C3C] font-[700]">Redeem from points</p>
                <Switch {...label} />
              </div>

              <div className="text-center grow ">
                <Formik
                  validationSchema={validationSchemaCheck}
                  initialValues={{
                    promoCode: "",
                  }}
                  // validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }, setSubmitting) => {
                    console.log({ values });
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => (
                    <Form className="h-[100%] flex flex-col justify-between ">
                      <div className="">
                        <div className="w-[100%]">
                          <Field
                            as={TextField}
                            name="promoCode"
                            id="promoCode"
                            label="Promo Code"
                            variant="outlined"
                            type="password"
                            error={
                              formik.errors.promoCode &&
                              formik.touched.promoCode
                            }
                            InputLabelProps={{
                              style: {
                                color: "#353B42",
                                fontSize: "15px",
                                fontWeight: "700",
                                opacity: "0.75",
                              },
                            }}
                            sx={{
                              borderRadius: "8px",
                              width: "100%",
                              marginTop: "25px",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&:hover fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                                "&.Mui-focused fieldset": {
                                  border: "2px solid rgba(62, 63, 67, 0.60)",
                                  borderRadius: "12px",
                                },
                              },
                            }}
                          />
                          <ErrorMessage name="promoCode">
                            {(msg) => (
                              <p className=" text-[14px] text-[red]">{msg}</p>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-[25px] mb-[8px]">
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          50 days rent
                        </p>
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          25,000 A.E.D
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-[8px]">
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          insurance deposit
                        </p>
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          500 A.E.D
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-[8px]">
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          Driver
                        </p>
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          6,000 A.E.D
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-[8px]">
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          points
                        </p>
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          - 5,644 A.E.D
                        </p>
                      </div>
                      <div className="w-[100%] bg-[#3D3C3C] h-[2px]"></div>
                      <div className="flex justify-between items-center  mb-[25px] mt-[15px]">
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          Total
                        </p>
                        <p className="text-[#3D3C3C] text-[14px] font-[600]">
                          31,000 A.E.D
                        </p>
                      </div>

                      <Button
                        variant="contained"
                        type="submit"
                        color="error"
                        sx={{
                          borderRadius: "12px",
                          width: "90%",
                          boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                          background: "var(--P1, #E42E35)",
                          color: "#F5FAFF",
                          fontSize: "15px",
                          fonrWeight: "700",
                          fontFamily: "Quicksand",
                          padding: "10px",
                          alignSelf: "center",
                          lineHeight: "normal",
                        }}
                        disabled={!formik.isValid || !formik.dirty}
                        onClick={() => {
                          handledone();
                          handleCheckout();
                        }}
                      >
                        Checkout
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}

        {/* {isDone ? (
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
            onClick={handledone}
          >
            <div
              className=" popup w-[230px] p-[20px] h-[200px] flex items-center flex-col justify-center gap-[10px] rounded-[15px] "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <div className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px] border-[#3D3C3C] ">
                <img src={right} alt="right" className="w-[30px]" />
              </div>
              <p className="text-[#3D3C3C] font-[700] text-[14px]">
                Payment Confirmed
              </p>
              <button
                className="w-[100%] bg-[#E42E35] text-[#F5FAFF] font-[700] py-[10px] text-[14px]"
                onClick={handledone}
              >
                Done!
              </button>
            </div>
          </div>
        ) : (
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
            onClick={handledone}
          >
            <div
              className=" popup w-[230px] p-[20px] h-[200px] flex items-center flex-col justify-center gap-[10px] rounded-[15px] "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <img src={wrong} alt="wrong" className="w-[50px]" />

              <p className="text-[#3D3C3C] font-[700] text-[14px] mb-[20px]">
                Payment Unsuccessful
              </p>
              <button
                className="w-[100%] bg-[#E42E35] text-[#F5FAFF] font-[700] py-[10px] text-[14px]"
                onClick={handledone}
              >
                Done!
              </button>
            </div>
          </div>
        )} */}

        {isDone && (
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
            onClick={handledone}
          >
            <div
              className=" popup w-[230px] p-[20px] h-[200px] flex items-center flex-col justify-center gap-[10px] rounded-[15px] "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <div className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px] border-[#3D3C3C] ">
                <img src={right} alt="right" className="w-[30px]" />
              </div>
              <p className="text-[#3D3C3C] font-[700] text-[14px] mb-[20px]">
                Payment Confirmed
              </p>
              <button
                className="w-[100%] bg-[#E42E35] text-[#F5FAFF] font-[700] py-[10px] text-[14px]"
                onClick={() => {
                  handledone();
                  navigate("/request");
                }}
              >
                Done!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentPayment;

// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: this.props.latitude,
//           lng: this.props.longitude
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
// })(MapContainer);

//    const [location, setLocation] = useState({});

//    useEffect(() => {
//      navigator.geolocation.getCurrentPosition((position) => {
//        setLocation({
//          latitude: position.coords.latitude,
//          longitude: position.coords.longitude,
//        });
//      });
//    }, []);
//    console.log(location);
// <p>Latitude: {location?.latitude}</p>
// <p>Longitude: {location?.longitude}</p>
