import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountDownItem from "./CountDownItem";
const CountDownList = (props) => {
  const nowDateMiliseconds = new Date().getTime()
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
    <CountDownItem key={dateCount.id} id={dateCount.id} dateCount={dateCount} />
  ));
};

export default CountDownList;
