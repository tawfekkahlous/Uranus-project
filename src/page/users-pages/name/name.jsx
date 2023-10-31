import { useState } from "react";
import "./name.css";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import nameIcon from "../../../assets/name-icon.svg";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// const validationSchema = yup.object({
//   name: yup.string("Enter your name").required("Name is required"),
//   phoneNumber: yup.string().required("Phone number is required"),
// });

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter your name").required("Name is required"),
  // phoneNumber: Yup.string().required("Phone number is required"),
  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .matches(
  //     /^[0-9]{10}$/,
  //     "Phone number is not valid - it should be exactly 10 digits"
  //   ),

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
});

const Name = () => {
  const [value, setValue] = useState("");

  return (
    <div className="name-page flex items-center justify-center py-[50px]">
      <div className=" box text-center  w-[330px] md:w-[450px] py-[40px]   flex flex-col ">
        <div className=" flex justify-center items-center gap-[6px]">
          <img
            src={nameIcon}
            alt="name-icon"
            className="w-[18px]  opacity-75"
          />
          <p className="">Your account was successfully created</p>
        </div>

        <div className=" mt-[40px]">
          <p className="label">More info</p>
          <div className="mt-[30px]">
            <Formik
              initialValues={{
                name: "",
                phoneNumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log({
                  name: values.name,
                  phoneNumber: value,
                });
                setSubmitting(false);
              }}
            >
              {({ errors, touched, dirty, isValid, setFieldValue }) => (
                <Form>
                  <div>
                    <Field
                      name="name"
                      as={TextField}
                      label="Name"
                      variant="outlined"
                      helperText={touched.name ? errors.name : ""}
                      error={touched.name && Boolean(errors.name)}
                      className="w-[566px] h-[58px] mt-[48px]"
                      sx={{
                        width: "80%",
                        marginBottom:"15px",
                        marginTop:"40px",
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
                  </div>
                  <div className="m-auto text-center">
                    <PhoneInput
                      name="phoneNumber"
                      value={value}
                      onChange={(value) => {
                        setValue(value);
                        setFieldValue("phoneNumber", value);
                      }}
                      placeholder="Enter phone number"
                      defaultCountry="AE"
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                    />
                  </div>
                  {/* <Link to="validate"> */}
                  <div className=" mt-[70px] ">
                    <Button
                      variant="contained"
                      type="submit"
                      color="error"
                      sx={{
                        borderRadius: "12px",
                        width: "250px",
                        boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                        background: "var(--P1, #E42E35)",
                        color: "#F5FAFF",
                        fontSize: "15px",
                        fonrWeight: "700",
                        fontFamily: "Quicksand",
                        padding: "10px",
                        lineHeight: "normal",
                      }}
                      disabled={!isValid || !dirty}
                    >
                      Continue
                    </Button>
                  </div>
                  {/* </Link> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
