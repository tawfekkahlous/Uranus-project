import "./profile.css";
import star from "../../../assets/star.svg";
import contact from "../../../assets/contact.svg";
import car from "../../../assets/car.svg";
import note from "../../../assets/note.svg";
import pen from "../../../assets/pen.svg";
import flag from "../../../assets/flag.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import facebook from "../../../assets/facebook-dark.svg";
import whatsapp from "../../../assets/whatsapp-dark.svg";
import instagram from "../../../assets/instgram-dark.svg";
import * as Yup from "yup";
import { Button, MenuItem, TextField } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";

const currencies = [
  {
    value: "A.E.D",
    label: "A.E.D",
  },
  {
    value: "U.S.D",
    label: "U.S.D",
  },
  {
    value: "E.U.R",
    label: "E.U.R",
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[0-9]{12}$/,
      "Phone number is not valid - it should be exactly 10 digits"
    )
    .transform((value) => value.replace(/\D/g, ""))
    .test(
      "length",
      "Phone number is not valid - it should be exactly 10 digits",
      (value) => value && value.length === 12
    ),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  currency: Yup.string().required("Name is required"),
});

const Profile = () => {
  const [openContuct, setOpenContuct] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [value, setValue] = useState("");
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleOpenContuct = () => {
    setOpenContuct(!openContuct);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
  };
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
              <div
                onClick={handleOpenContuct}
                className="my-cars flex items-center gap-[10px] w-[100%] px-[20px] py-[10px] cursor-pointer"
              >
                <img src={contact} alt="contact" className="w-[20px]" />
                <p className="font-[700] text-[#353B42]">Contact us</p>
              </div>
              <Link to="/report">
                <div className="my-cars flex items-center gap-[10px] w-[100%]  px-[20px] py-[10px]">
                  <img
                    src={note}
                    alt="note"
                    className="w-[20px] text-[#E42E35]"
                  />
                  <p className="font-[700] text-[#E42E35]">Report Problem</p>
                </div>
              </Link>
            </div>

            <div className="info  sm:w-[45%] lg:w-[40%] w-[90%]">
              <div className=" flex justify-between items-center mb-[40px]">
                <p className="text-[#353B42] font-[600] text-[20px]">
                  John Smith
                </p>
                <img
                  src={pen}
                  alt="pen"
                  className="w-[50px]"
                  onClick={handleOpenEdit}
                />
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

        {openContuct && (
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
          >
            <div
              className=" popup w-[280px] md:w-[400px] px-[20px] md:px-[30px] py-[30px] flex flex-col  "
              // onClick={(event) => {
              //   handleButtonClick(event);
              // }}
            >
              <p className="text-[#E42E35] font-[700] text-[20px] text-center mb-[20px]">
                Contact us
              </p>
              <div className="mb-[25px]">
                <p className="text-[#353B42] font-[600]">Our Website </p>
                <div className="website text-[#353B42] font-[600] text-[14px]">
                  uranuscars.com
                </div>
              </div>
              <div className="mb-[25px]">
                <p className="text-[#353B42] font-[600]">Email </p>
                <div className="website text-[#353B42] font-[600] text-[14px]">
                  support.uranuscars.com
                </div>
              </div>
              <div className="mb-[25px]">
                <p className="text-[#353B42] font-[600]">Phone </p>
                <div className="website text-[#353B42] font-[600] text-[14px] flex gap-[8px]">
                  <img src={flag} alt="" className="w-[20px]" />
                  +971 50 293 7412
                </div>
              </div>

              <div className="">
                <p className="text-[#353B42] font-[600] mb-[10px] ">
                  Social Media
                </p>
                <div className="flex gap-[40px] justify-center ">
                  <div className="w-[40px] h-[40px] rounded-[10px] social flex justify-center items-center">
                    <img src={facebook} alt="" className="w-[20px]" />
                  </div>
                  <div className="w-[40px] h-[40px] rounded-[10px] social flex justify-center items-center">
                    <img src={instagram} alt="" className="w-[20px]" />
                  </div>
                  <div className="w-[40px] h-[40px] rounded-[10px] social flex justify-center items-center">
                    <img src={whatsapp} alt="" className="w-[20px]" />
                  </div>
                </div>
                <div className="text-center mt-[20px]">
                  <button
                    className="close text-[#F5FAFF] py-[6px] px-[40px] rounded-[10px]"
                    onClick={handleOpenContuct}
                  >
                    Close
                  </button>
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

        {openEdit && (
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
              zIndex: "10",
            }}
            onClick={(event) => {
              handleOpenEdit();
              handleButtonClick(event);
            }}
          >
            <div
              className=" popup w-[280px] md:w-[500px] px-[20px] md:px-[20px] py-[30px] flex flex-col  "
              onClick={(event) => {
                handleButtonClick(event);
              }}
            >
              <p className="text-[#353B42] font-[700]  text-[18px] text-center mb-[30px]">
                Edit My Account
              </p>
              <div className=" text-center z-10000111 relative   ">
                <Formik
                  // validationSchema={validationSchema}
                  initialValues={{
                    name: "",
                    phoneNumber: "",
                    username: "",
                    email: "",
                    password: "",
                    currency: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }, setSubmitting) => {
                    console.log({
                      name: values.name,
                      phoneNumber: value,
                      username: values.username,
                      password: values.password,
                      currency: values.currency,
                      email: values.email,
                    });
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => (
                    <Form className="h-[100%] grid grid-cols-12">
                      <div className="  col-span-12 md:col-span-6 ">
                        <Field
                          as={TextField}
                          name="name"
                          id="name"
                          label="Name "
                          variant="outlined"
                          error={formik.errors.name && formik.touched.name}
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
                            width: "90%",
                            marginBottom: "25px",
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
                        <ErrorMessage name="name">
                          {(msg) => (
                            <p className=" text-[14px] text-[red]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className=" col-span-12 md:col-span-6">
                        <Field
                          as={TextField}
                          name="username"
                          id="username"
                          label="Username"
                          variant="outlined"
                          error={
                            formik.errors.username && formik.touched.username
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
                            width: "90%",
                            marginBottom: "25px",
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
                        <ErrorMessage name="username">
                          {(msg) => (
                            <p className=" text-[14px] text-[red]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                  
                      <PhoneInput
                        name="phoneNumber"
                        value={value}
                        onChange={(value) => {
                          setValue(value);
                          formik.setFieldValue("phoneNumber", value);
                        }}
                        placeholder="Enter phone number"
                        defaultCountry="SY"
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber
                            ? formik.errors.phoneNumber
                            : ""
                        }
                        className="col-span-12 md:col-span-6 mb-[25px]"
                      />
                      <div className="col-span-12 md:col-span-6">
                        <Field
                          as={TextField}
                          name="email"
                          id="email"
                          label="Email"
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
                            width: "90%",
                            marginBottom: "25px",
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

                      <div className=" col-span-12 md:col-span-6">
                        <Field
                          as={TextField}
                          type="password"
                          name="password"
                          id="password"
                          label=" Password"
                          variant="outlined"
                          error={
                            formik.errors.password && formik.touched.password
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
                            width: "90%",
                            marginBottom: "25px",
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
                        <ErrorMessage name="password">
                          {(msg) => (
                            <p className=" text-[14px] text-[red]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className=" col-span-12 md:col-span-6">
                        <Field
                          as={TextField}
                          select
                          name="currency"
                          id="currency"
                          label="Currency"
                          variant="outlined"
                          sx={{
                            background: "var(--N2, #F5FAFF)",
                            backdropFilter: "blur(2px)",
                            boxShadow: "0px 4px 33px 0px rgba(0, 0, 0, 0.25)",
                            borderRadius: "12px",
                            width: "90%",
                            margin: "auto",
                            position: "relative",
                            zIndex: "10000000",
                            marginBottom: "25px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "6px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "6px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "6px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#353B42",
                              fontSize: "15px",
                              fontWeight: "700",
                            },
                          }}
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            getContentAnchorEl: null,
                          }}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <ErrorMessage name="Currency">
                          {(msg) => <p className=" text-[14px]">{msg}</p>}
                        </ErrorMessage>
                      </div>
                      <div className="text-center col-span-12">
                        <Button
                          variant="contained"
                          type="submit"
                          color="error"
                          sx={{
                            borderRadius: "12px",
                            background: "var(--P1, #E42E35)",
                            color: "#F5FAFF",
                            fontSize: "15px",
                            fonrWeight: "700",
                            fontFamily: "Quicksand",
                            padding: "10px",
                            // marginTop: "83px",
                            lineHeight: "normal",
                            width: "150px",
                          }}
                          disabled={!formik.isValid || !formik.dirty}
                        >
                          Save
                        </Button>
                      </div>
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
