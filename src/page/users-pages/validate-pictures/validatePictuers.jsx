import "./validatePictures.css";
import welcomeLogo from "../../../assets/welcome-Logo.png";
import React from "react";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import passport from "../../../assets/passport.svg";
import driver from "../../../assets/driver.svg";
import visa from "../../../assets/visa.svg";
import leftSide from "../../../assets/left-angle.svg";
import rightSide from "../../../assets/rigth-angle.svg";
import frontSide from "../../../assets/front-angle.svg";
import { styled } from "@mui/styles";

const uploadSteps = [
  { src: passport, alt: "passport", text: "Upload Passport" },
  { src: driver, alt: "driver's license", text: "Upload Driver's License" },
  { src: visa, alt: "visa", text: "Upload VISA" },
];

const textSteps = [
  { text: "Passport", color: "#E42E35" },
  { text: "Driver", color: "#E42E35" },
  { text: "Visa", color: "#E42E35" },
  { text: "pictures of you at different angles", color: "black" },
];

const sideImages = [
  { src: leftSide, alt: "left-side" },
  { src: frontSide, alt: "front-side" },
  { src: rightSide, alt: "right-side" },
];

const steps = ["", "", "", ""];




const ValidatePictures = () => {

  const inputRef = React.useRef();
  const handleUpload = (event) => {
    const file = event.target.files[0];
    // handle your file upload here
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  console.log(activeStep);
  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="validationPic flex items-center justify-center gap-x-[32px] ">
      <div className="leftBox py-[40px]">
        <img src={welcomeLogo} alt="welcome-logo" className="logo" />
        <p>
          Please upload
          {activeStep !== 3 && " a picture of your"}
          <span className={`ml-[8px] text-[${textSteps[activeStep].color}]`}>
            {textSteps[activeStep].text}
          </span>
        </p>
      </div>

      <div className="rightBox flex justify-center py-[40px] ">
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "space-around",
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label} </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep !== 3 && (
                <div className="upload" style={{ cursor: "pointer" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleUpload}
                    ref={inputRef}
                  />
                  <p
                    className="text-[#000] text-[14px] font-[Quicksand] font-[300]"
                    onClick={() => inputRef.current.click()}
                  >
                    Click to upload
                  </p>
                  {uploadSteps.map((step, index) => {
                    return (
                      activeStep === index && (
                        <div className="flex flex-col items-center">
                          <img
                            src={step.src}
                            alt={step.alt}
                            className="w-[50px] "
                          />
                          <p className="text-[#000] text-[13px] font-[Quicksand] font-[300]">
                            {step.text}
                          </p>
                        </div>
                      )
                    );
                  })}
                </div>
              )}

              {activeStep === 3 && (
                <div className="text-center h-[189px]">
                  <div className="flex justify-evenly items-center mt-[30px]">
                    {sideImages.map((image, index) => (
                      <div className="angles cursor-pointer" key={index}>
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleUpload}
                          ref={inputRef}
                        />
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-[40px] "
                          onClick={() => inputRef.current.click()}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-[25px] text-[#000] font-[Quicksand] font-[300] text-[15px]">
                    press on the side you want to upload
                  </p>
                </div>
              )}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    width: "80px",
                    borderRadius: "12px",
                    background:
                      activeStep === 0 ? "#CDCDCD" : "var(--P1, #E42E35)",
                    boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                    color: "var(--N2, #F5FAFF)",
                    cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip}>
                    Skip
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  sx={{
                    width: "80px",
                    borderRadius: "12px",
                    background: "var(--P1, #E42E35)",
                    boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                    color: "var(--N2, #F5FAFF)",
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ValidatePictures;
