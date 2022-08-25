import './App.css';
import CountDownForm from './components/CountDownForm';
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCountDown } from './redux/countDownSlice';
import CountDownItem from './components/CountDownItem';
const App = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState()
  const [dateValue, setDateValue] = useState([])
  const [dateCount, setDateCount] = useState({
    title: 'Đếm ngày....',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    featureDateMiliSeconds:"",
  })
  const countDownDate = useSelector(
    (state) => state.countDownReducer.countDownDate)
  const startTimer = () => {
    const nowDateMiliseconds = new Date().getTime()
    const featureDateMiliSeconds = new Date(countDownDate[countDownDate.length - 1].dateCountDown).getTime()
      const diff = featureDateMiliSeconds - nowDateMiliseconds;
       setDateCount({
        featureDateMiliSeconds:featureDateMiliSeconds,
        title: countDownDate[countDownDate.length - 1].title,
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
  }
  useEffect(() => {
    dispatch(fetchCountDown())
    if (countDownDate.length>=1) {
      setInterval(startTimer(),1000)
    }
  },[countDownDate] )
  return (
    <Container style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginTop: '1rem'
    }} maxWidth="sm">
      <CountDownForm title={title} setTitle={setTitle} setDateCount={setDateCount} dateCount={dateCount} setDateValue={setDateValue} dateValue={dateValue} />
      <CountDownItem setTitle={setTitle} dateCount={dateCount} dateValue={dateValue} setDateValue={setDateValue} />
    </Container>

  );
}

export default App;
