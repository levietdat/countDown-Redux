import { createContext, useState } from "react";

const countDownContext = createContext()

const CountDownProvider = ({children}) => {
    const [title, setTitle] = useState("")
    const [dateValue, setDateValue] = useState([new Date()])
    const [dateCount, setDateCount] = useState({
      title: 'Đếm ngày....',
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      featureDateValue:"",
    })
    const value = {
        title,setTitle,dateValue,setDateValue,dateCount,setDateCount
    }
    return (
        <countDownContext.Provider value={value}>{children}</countDownContext.Provider>
      );
}

export {countDownContext,CountDownProvider}