import { Box, Radio, RadioGroup, Switch, TextField } from "@mui/material";
import "./report.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Report = () => {
  const inputRef = useRef();
  // const [value, setValue] = useState('');
  //  const handleChange = (event) => {
  //    setValue(event.target.value);
  //  };
 const [radioValue, setRadioValue] = useState("car");
 const [isUrgent, setIsUrgent] = useState(false);

   const handleRadioChange = (event) => {
     setRadioValue(event.target.value);
   };

   const handleSwitchChange = (event) => {
     setIsUrgent(event.target.checked);
   };
  const handleButtonClick = () => {
    event.preventDefault();
    console.log(inputRef.current.value);
    console.log("Radio Value:", radioValue);
    console.log("Is Urgent:", isUrgent);
  };

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      color: theme.palette.primary.main,
    },
  }));
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    value: PropTypes.any,
  };

  return (
    <div className="report py-[50px]">
      <div className="container mx-auto px-[40px]">
        <h1 className=" text-[#E42E35] font-[700] text-[22px] font-[Quicksand] mb-[40px]  ">
          Report
        </h1>
        <div className="">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                width: { xs: "90%", sm: "40ch", md: "40ch", lg: "50ch" },
              },
              display: "flex",
              // flexDirection: { md: "row", sm: "column-reverse;" },
              justifyContent: "space-evenly",
              gap:"30px"
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-textarea"
              //   label="Describe more"
              placeholder="Describe more"
              multiline
              rows={8}
              inputRef={inputRef}
            />
            <div className="flex flex-col justify-between ">
              <div className="flex ">
                <RadioGroup
                  name="use-radio-group"
                  defaultValue="Car"
                  value={radioValue}
                  onChange={handleRadioChange}
                >
                  <div className="flex gap-[15px]">
                    <MyFormControlLabel
                      value="car"
                      label="Car"
                      control={<Radio />}
                    />
                    <MyFormControlLabel
                      value="driver"
                      label="Driver"
                      control={<Radio />}
                    />
                  </div>
                  <div className="flex gap-[15px] mt-[15px]">
                    <MyFormControlLabel
                      value="price"
                      label="Price"
                      control={<Radio />}
                    />
                    <MyFormControlLabel
                      value="other"
                      label="Other"
                      control={<Radio />}
                    />
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center gap-[40px]">
                <p>Urgent</p>
                <Switch
                  {...label}
                  checked={isUrgent}
                  onChange={handleSwitchChange}
                />
              </div>
              <button className="report-button" onClick={handleButtonClick}>
                Report
              </button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Report;

{
  /* 
          <div className=" flex flex-col justify-between   ">
            <div>
              <div className="flex gap-[15px] mb-[20px]">
                <button className="bg-[#E42E35] text-[#F5FAFF]">Car</button>
                <button className="bg-[F5FAFF] text-[#353B42]">Driver</button>
              </div>
              <div className="flex gap-[15px]">
                <button className="bg-[F5FAFF] text-[#353B42]">Price</button>
                <button className="bg-[F5FAFF] text-[#353B42]">Other</button>
              </div>
            </div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio className={classes.hiddenRadio} />}
                  label={
                    <FormLabel
                      className={value === "female" ? classes.redLabel : ""}
                    >
                      Female
                    </FormLabel>
                  }
                />
                <FormControlLabel
                  value="male"
                  control={<Radio className={classes.hiddenRadio} />}
                  label={
                    <FormLabel
                      className={value === "male" ? classes.redLabel : ""}
                    >
                      Male
                    </FormLabel>
                  }
                />
                <FormControlLabel
                  value="other"
                  control={<Radio className={classes.hiddenRadio} />}
                  label={
                    <FormLabel
                      className={value === "other" ? classes.redLabel : ""}
                    >
                      Other
                    </FormLabel>
                  }
                />
              </RadioGroup>
            </FormControl>
            <div className="flex justify-between mt-[20px] md:mt-[0px] w-[50%] "></div>
          </div> */
}
