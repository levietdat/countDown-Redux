import { Button, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CountDownItem = (props) => {
  const updateCountDownDate = ()=>{
    props.setTitle(props.dateCount.title)
    props.setDateValue(props.dateCount.featureDateMiliSeconds)
  }
  return (
        <ListItem id={props.dateCount.id}>
        <ListItemText
          primary = {`${props.dateCount.title?`${props.dateCount.title}`:'Số ngày còn lại'}`}
          secondary={`${props.dateCount.days} days ${props.dateCount.hours} hours ${props.dateCount.minutes} minutes ${props.dateCount.seconds} seconds`}
        ></ListItemText>
        <Button
          onClick={updateCountDownDate}
          style={{
            marginTop: "10px",
            marginLeft: "5px",
          }}
          gutters="small"
          variant="outlined"
        >
          UPDATE
        </Button>
      </ListItem>
      )
};

export default CountDownItem;
