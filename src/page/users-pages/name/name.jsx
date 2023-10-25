import "./name.css";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import nameIcon from "../../../assets/name-icon.svg";
// import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PropTypes from "prop-types";
// const validationSchema = yup.object({
//   name: yup.string("Enter your name").required("Name is required"),
//   phoneNumber: yup.string().required("Phone number is required"),
// });


const validationSchema = Yup.object().shape({
  name: Yup.string("Enter your name").required("Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  // Add your phone number validation logic here
});



const PhoneInputField = ({ field, form }) => {
  const handleOnChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <PhoneInput
      country={"us"}
      value={field.value}
      enableAreaCodes={true}
      onChange={handleOnChange}
    />
  );
};



const Name = () => {


  
  return (
    <div className="name-page flex items-center justify-center py-[50px]">
      <div className=" box text-center w-[500px] py-[40px] ">
        <div className=" flex justify-center items-center gap-[6px]">
          <img
            src={nameIcon}
            alt="name-icon"
            className="w-[18px]  opacity-75"
          />
          <p className="">Your account was successfully created</p>
        </div>

        <div className=" mt-[40px]">
          <p className="label">What’s your name?</p>
          <div className="mt-[30px]">
            <Formik
              initialValues={{
                name: "",
                phoneNumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ errors, touched, dirty, isValid }) => (
                <Form>
                  <div>
                    <Field
                      name="name"
                      as={TextField}
                      variant="outlined"
                      helperText={touched.name ? errors.name : ""}
                      error={touched.name && Boolean(errors.name)}
                      className="w-[566px] h-[58px] mt-[48px]"
                      sx={{
                        width: "400px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "3px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&:hover fieldset": {
                            border: "3px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&.Mui-focused fieldset": {
                            border: "3px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="label mt-[30px] mb-[30px]">
                      Enter your phone number
                    </p>
                    {/* <Field
                    name="phoneNumber"
                    as={PhoneInput}
                    variant="outlined"
                    helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    className="w-[566px] h-[58px] mt-[48px]"
                    sx={{
                      width: "400px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                        "&:hover fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                        "&.Mui-focused fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                      },
                    }}
                  /> */}

                    <Field name="phoneNumber" component={PhoneInputField} />
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
