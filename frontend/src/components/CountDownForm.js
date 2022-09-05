import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button, Container } from "@mui/material";
import { addCountDown } from "../redux/countDownSlice";
import { useDispatch } from "react-redux";
import { countDownContext } from "../Context";
const CountDownForm = (props) => {
  const context = useContext(countDownContext)
  const nowDate = new Date();
  const dispatch = useDispatch();
  const handleChangeTitle = (e) => {
    context.setTitle(e.target.value);
  };
  const handleAddCountDown = () => {
    if (context.title !== "" && context.dateValue > nowDate) {
      dispatch(
        addCountDown({
          dateCountDown: context.dateValue,
          title: context.title,
        })
      );
      context.setTitle("")
      context.setDateValue(nowDate)
      
    } else {
      alert("invalid date or title");
    }
  };
  return (
    <Container maxWidth="sm">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="CountDownDate"
          value={context.dateValue}
          onChange={(newValue) => context.setDateValue(newValue)}
          renderInput={(context) => <TextField {...context} />}
        />
        <TextField
          style={{ marginLeft: "30px" }}
          id="outlined-basic"
          label="title"
          variant="outlined"
          value={context.title || ""}
          onChange={handleChangeTitle}

        />
      </LocalizationProvider>
      <Button
        onClick={handleAddCountDown}
        style={{
          marginTop: "10px",
        }}
        gutters="small"
        variant="outlined"
      >
        COUNTDOWN
      </Button>
    </Container>
  );
};

export default CountDownForm;
