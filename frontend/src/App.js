import './App.css';
import CountDownForm from './components/CountDownForm';
import Container from '@mui/material/Container'
import { useEffect,useContext } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCountDown } from './redux/countDownSlice';
import CountDownItem from './components/CountDownItem';
import { countDownContext } from './Context';
const App = () => {
  const context = useContext(countDownContext)
  const dispatch = useDispatch()
  const countDownDate = useSelector(
    (state) => state.countDownReducer.countDownDate)
  const startTimer = () => {
    const nowDateValue = new Date().getTime()
    const featureDateValue = new Date(countDownDate[countDownDate.length - 1].dateCountDown).getTime()
      const diff = featureDateValue - nowDateValue;
      context.setDateCount({
        featureDateValue:featureDateValue,
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
      <CountDownForm  />
      <CountDownItem  />
    </Container>

  );
}

export default App;
