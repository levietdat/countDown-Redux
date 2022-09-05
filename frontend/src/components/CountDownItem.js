import { Button, ListItem, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { countDownContext } from "../Context";

const CountDownItem = () => {
  const context = useContext(countDownContext)
  const updateCountDownDate = ()=>{
    context.setTitle(context.dateCount.title)
    context.setDateValue(context.dateCount.featureDateValue)
  }
  return (
        <ListItem id={context.dateCount.id}>
        <ListItemText
          primary = {`${context.dateCount.title?`${context.dateCount.title}`:'Số ngày còn lại'}`}
          secondary={`${context.dateCount.days} days ${context.dateCount.hours} hours ${context.dateCount.minutes} minutes ${context.dateCount.seconds} seconds`}
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
