import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button, Container } from "@mui/material";
import { addCountDown, fetchCountDown } from "../redux/countDownSlice";
import { useDispatch } from "react-redux";
const CountDownForm = (props) => {
  const nowDate = new Date();
  const dispatch = useDispatch();
  const handleChangeTitle = (e) => {
    props.setTitle(e.target.value);
  };
  const handleAddCountDown = () => {
    if (props.title !== "" && props.dateValue > nowDate) {
      dispatch(
        addCountDown({
          dateCountDown: props.dateValue,
          title: props.title,
        })
      );
      props.setTitle("")
      props.setDateValue(nowDate)
      
    } else {
      alert("invalid date or title");
      props.setDateCount({
        title: "Đếm ngày....",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    }
  };
  return (
    <Container maxWidth="sm">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="CountDownDate"
          onChange={(newValue) => props.setDateValue(newValue)}
          value={props.dateValue}
        />
        <TextField
          onChange={handleChangeTitle}
          style={{ marginLeft: "30px" }}
          id="outlined-basic"
          label="title"
          variant="outlined"
          value={props.title}
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
