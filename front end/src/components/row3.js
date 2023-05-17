import React from 'react'
import '../styles/calendar.css'
import createCalendar from '../utils/createCalendar'
import {atom,useAtom} from "jotai"
import { countDay,countAddOpen,countDeleteOpen, countDayProfit } from '../utils/useAtom'
import { countOpen } from '../utils/useAtom'

function Row3() {
    const [day,setDay] = useAtom(countDay);
    const [open,setOpen] = useAtom(countOpen);

    const [addopen,setAddOpen] = useAtom(countAddOpen);
    const [deleteopen,setDeleteOpen] = useAtom(countDeleteOpen);

    const [dayProfit,setDayProfit] = useAtom(countDayProfit);

    const data = createCalendar(2023,5)
    const row3 = [
        data[14],
        data[15],
        data[16],
        data[17],
        data[18],
        data[19],
        data[20]
    ]

    for (let i = 0; i < 7; i++){
        if(row3[i].id === 'day'){
        if (dayProfit[i+14] > 0){
            row3[i].profit = "profit"
        }
        else if (dayProfit[i+14] < 0){
            row3[i].profit = "loss"
        }
        else {
            row3[i].profit = "void"
        }
    }
    }

    return (
        row3.map(item => {
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

export default Row3
