import React from 'react'
import '../styles/calendar.css'
import createCalendar from '../utils/createCalendar'
import {atom,useAtom} from "jotai"
import { countDay,countAddOpen,countDeleteOpen, countDayProfit } from '../utils/useAtom'
import { countOpen } from '../utils/useAtom'



function Row4() {
    const [day,setDay] = useAtom(countDay);
    const [open,setOpen] = useAtom(countOpen);

    const [addopen,setAddOpen] = useAtom(countAddOpen);
    const [deleteopen,setDeleteOpen] = useAtom(countDeleteOpen);

    const [dayProfit,setDayProfit] = useAtom(countDayProfit);

    const data = createCalendar(2023,5)
    const row4 = [
        data[21],
        data[22],
        data[23],
        data[24],
        data[25],
        data[26],
        data[27]
    ]

    for (let i = 0; i < 7; i++){
        if(row4[i].id === 'day'){
        if (dayProfit[i+21] > 0){
            row4[i].profit = "profit"
        }
        else if (dayProfit[i+21] < 0){
            row4[i].profit = "loss"
        }
        else {
            row4[i].profit = "void"
        }
    }
    }

    return (
        row4.map(item => {
            if(item.id === 'empty'){
                return (
                    <div className='empty-container'>
                        <div className={item.id}>

                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className={`day-container-${item.profit}`}>
                        <div className={item.id} 
                            id={item.day}
                                onClick={() => {
                                    if(addopen === true || deleteopen === true){
                                        setAddOpen(false);
                                        setDeleteOpen(false);
                                    }
                                    setDay(item.day);
                                    setOpen(!open);
                        }}>
                            <div className='top'>
                                {item.day}
                            </div>
                            <div className='bottom'>
                            ${dayProfit[item.day]}
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
}

export default Row4
