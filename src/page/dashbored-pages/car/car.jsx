import "./car.css";
import chevrolet from "../../../assets/Chevrolet-Camaro-398x206 1.png";
import station from "../../../assets/station 2296.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MenuItem, TextField, InputAdornment } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import white from "../../../assets/white.svg";
import red from "../../../assets/red.svg"
import black from "../../../assets/black.svg"
import { Link } from "react-router-dom";

const Car = () => {
  const images = [chevrolet, chevrolet, chevrolet, chevrolet, chevrolet]; // Replace with your image URLs

  const [isOpenImage,setIsOpenImage]=useState(false)
  
console.log(isOpenImage);
  const handleOpenImages=() => {
    setIsOpenImage(!isOpenImage)
  }


  const currencies = [
    {
      value: "chevrolet",
      label: "chevrolet",
    },
    {
      value: "kia",
      label: "kia",
    },
    {
      value: "honda",
      label: "honda",
    },
    {
      value: "bmw",
      label: "bmw",
    },
  ];
  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Email is required"),
  //   brand: Yup.string().required("Password is required"),
  // });
  return (
    <>
      <div className="autocar w-[100%] ">
        <div className="flex justify-between items-center  mb-[40px]  ">
          <p className="title">Car</p>
          <button className="delete">Delete</button>
        </div>
        <div className="w-[100%]">
          <div className="flex items-end  justify-between   ">
            <p className="subtitle">Media</p>
            <Link to="edit-car">
              <button className="edit">Edit</button>
            </Link>
          </div>
          <div className="line   "></div>
        </div>

        <div className="w-[100%] swiperCar">
          <Swiper
            cssMode={true}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            className="mySwipe p-[15px] "
          >
            {images.map((url, index) => (
              <SwiperSlide
                key={index}
                className="ml-[20px] w-[30%] flex justify-center items-center"
              >
                {/* <div className="content mt-[20px] mb-[70px] ml-[20px] mr-[20px]"> */}
                <div className="content w-[90%] h-[90%]">
                  <img src={url} alt={`Slide ${index}`} className="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-[100%] ">
          <div className="flex justify-between items-end  ">
            <p className="subtitle ">Details</p>
            <Link to="edit-car">
              <button className="edit">Edit</button>
            </Link>
          </div>
          <div className="line mb-[30px]  "></div>
          <div className="w-[100%]">
            <Formik
              // validationSchema={validationSchema}
              initialValues={{
                name: "kia",
                brand: "honda",
                distance: "100",
                year: "2015",
                monthlyprice: "test",
                yearlyprice: "test",
                dailyprice: "test",
              }}
              onSubmit={(values) => {
                console.log({ values });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="w-[100]">
                    <div className=" flex justify-between items-center w-[80%] mb-[15px]">
                      <div className=" w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          name="name"
                          id="name"
                          label="Name"
                          variant="outlined"
                          error={errors.email && touched.email}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                           
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className=" w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          select
                          name="brand"
                          id="outlined-select-currency"
                          label="Brand"
                          variant="outlined"
                          error={errors.email && touched.email}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          name="distance"
                          id="outlined-end-distance"
                          label="Distance"
                          variant="outlined"
                          error={errors.email && touched.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    color: "#3D3C3C",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                  }}
                                >
                                  km
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        />

                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="">
                        <div
                          onClick={handleOpenImages}
                          className="cursor-pointer pos relative"
                        >
                          <img src={station} className="w-[30px] h-[30px]  " />
                          <div
                            className={` ${
                              isOpenImage ? "block" : "hidden"
                            } absolute top-30px left-0 flex flex-col gap-y-[5px]`}
                          >
                            <img
                              src={white}
                              alt="white"
                              className="w-[30px] h-[30px] mt-[5px] "
                            />
                            <img
                              src={red}
                              alt="red"
                              className="w-[30px] h-[30px] "
                            />
                            <img
                              src={black}
                              alt="black"
                              className="w-[30px] h-[30px] "
                            />
                            {/* <img
                              src={green}
                              alt="green"
                              className="w-[40px] h-[40px] "
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center w-[80%]  mb-[15px]">
                      <div className=" w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          name="year"
                          id="year"
                          label="Year"
                          variant="outlined"
                          error={errors.email && touched.email}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className=" w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          name="monthlyprice"
                          id="outlined-end-Monthly-Price"
                          label="Monthly Price"
                          variant="outlined"
                          error={errors.email && touched.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    color: "#3D3C3C",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                  }}
                                >
                                  A.E.D
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        />

                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className=" w-[25%] h-[50px]">
                        <Field
                          as={TextField}
                          name="yearlyprice"
                          id="outlined-end-yearly-price"
                          label="Yearly Price"
                          variant="outlined"
                          error={errors.email && touched.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    color: "#3D3C3C",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                  }}
                                >
                                  A.E.D
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        />

                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="w-[40px] h-[40px] "></div>
                    </div>
                    <div className=" flex justify-between items-center w-[80%]">
                      <div className=" w-[25%]">
                        <Field
                          as={TextField}
                          name="dailyprice"
                          id="outlined-end-daily-price"
                          label="Daily Price"
                          variant="outlined"
                          error={errors.email && touched.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    color: "#3D3C3C",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                  }}
                                >
                                  A.E.D
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            borderRadius: "12px",
                            margin: "10px 0px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&:hover fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                              "&.Mui-focused fieldset": {
                                border: "2px solid #E42E35",
                                borderRadius: "12px",
                              },
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#3D3C3C",
                              fontSize: "16px",
                              fontWeight: "700",
                            },
                          }}
                        />

                        <ErrorMessage name="email">
                          {(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  {/* <Button
                    variant="contained"
                    type="submit"
                    color="error"
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      width: "fit-content",
                      marginTop: "15px",
                    }}
                  >
                    Save
                  </Button> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* <div className="mt-[130px] mb-[50px]">
        <div className="flex items-end  justify-between container   ">
          <p className="subtitle">Analytics</p>
          <button className="edit">Edit</button>
        </div>
        <div className="line container  "></div>
      </div> */}
      </div>
    </>
  );
};

export default Car;
