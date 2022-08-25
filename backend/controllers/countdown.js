import { Countdown } from "../models/countdown.js"
export const getDateCountDown =  async (req,res) => {
  try{
    const data = await Countdown.find()
    res.status(200).json(data)
  }
  catch(err){
    
    res.status(500).json(err)
}
}

export const createDateCountDown = async (req,res) => {
    try{
        const newCountDownDate = req.body
        console.log(newCountDownDate)
        const postCountDownDate = await Countdown(newCountDownDate)
        res.status(200).json(postCountDownDate)
        postCountDownDate.save()
      }
      catch(err){
        res.status(500).json(err)
    }
}

export const updateDateCountDown = async (req,res) => {
    try{
        const id = req.params.id
        const updateCountDownDate = await Countdown.findOneAndUpdate({_id:id} ,req.body,{new:true})
        updateCountDownDate.save()
        res.status(200).json(updateCountDownDate)
      }
      catch(err){
        res.status(500).json(err)
    }
}
export const deleteDateCountDown = async (req,res) => {
    try{
        const id = req.params.id
        const deleteDateCountDown = await Countdown.findOneAndDelete(id ,{new:true})
        res.status(200).json(deleteDateCountDown)
      }
      catch(err){
        res.status(500).json(err)
    }
}