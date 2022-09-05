import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CountDownItem from "./CountDownItem";
const CountDownList = () => {
  const countDownDate = useSelector(
    (state) => state.countDownReducer.countDownDate
  );
  const [newState,setNewState] = useState([])
  const mapState = countDownDate.map((countdown) => {
    const featureDateMiliSeconds = new Date(
      countdown.dateCountDown
    ).getTime();
    const titleOfCountDown = countdown.title;
    return {
      titleOfCountDown:titleOfCountDown,
      featureDateMiliSeconds:featureDateMiliSeconds
    }
  });
  
  console.log(mapState)
useEffect(()=> {
  setInterval(setNewState(mapState),1000)
  return ()=>{
  }
},[])
  return newState.map((dateCount) => (
    <CountDownItem key={dateCount.id} id={dateCount.id}  />
  ));
};

export default CountDownList;
