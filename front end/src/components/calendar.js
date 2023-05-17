import React from 'react'
import Header from './header'
import '../styles/calendar.css'
import Middle from './middle'
import CalendarContainer from './calendarContainer'
import axios from 'axios'
import { useAtom,atom } from 'jotai'
import { countDB, countDayProfit } from '../utils/useAtom'
import { useEffect } from 'react'
import Profit from './profit'


function Calendar() {
    const [db, setDb] = useAtom(countDB);
    const [dayProfit,setDayProfit] = useAtom(countDayProfit);
    

    const fecthData = async () =>{
        const {data} = await axios.get('http://localhost:3001/db/find/BetTracker/BetTracker/')
        setDb(data)
    }
   useEffect(()=>{
    fecthData();
   },[])


    return (
        <div className='calendar'>
            <Header/>
            <Middle/>
            <CalendarContainer/>
            <Header/>
        </div>
    )
}

export default Calendar
