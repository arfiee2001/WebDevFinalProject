import React, { useState } from 'react'
import Rows from './rows'
import DropdownItem from './dropdownItem'
import {atom,useAtom} from "jotai";
import { countAddOpen, countViewOpen, countDay, countHistoryOpen } from '../utils/useAtom'
import { countOpen } from '../utils/useAtom'
import Form from './form';
import Mongo from './mongo';
import Record from './record';
import Profit from './profit';
import Chart from './chart';


function CalendarContainer(prop) {
    const [day,setDay] = useAtom(countDay);
    const [open,setOpen] = useAtom(countOpen);

    const [addopen,setAddOpen] = useAtom(countAddOpen);
    
    const [viewOpen, setViewOpen] = useAtom(countViewOpen);

    const [historyOpen,setHistoryOpen] = useAtom(countHistoryOpen);
 


    const onAddClick = () => {
        if(viewOpen === true){
            setViewOpen(false);
        }
        setAddOpen(!addopen)
    }

    const onViewClick = () =>{
        if(addopen === true){
            setAddOpen(false)
        }
        setViewOpen(!viewOpen);
    }

    return (
        <div className='a'>
            <div className='calendar-container'>

                <div className='buttondrop'>
                    <div className={`historydrop ${historyOpen? 'active' : 'inactive'}`}>
                        <Chart/>
                    </div>

                </div>

                <div className='calendar-header'>
                    <Record/>
                    <h2 className='month-record'>
                      May 2023
                    </h2>
                    <Profit/>
                </div>

                <div className='day-names'>
                    <div className='days-of-week'>Sun</div>
                    <div className='days-of-week'>Mon</div>
                    <div className='days-of-week'>Tue</div>
                    <div className='days-of-week'>Wed</div>
                    <div className='days-of-week'>Thu</div>
                    <div className='days-of-week'>Fri</div>
                    <div className='days-of-week'>Sat</div>
                </div>

                <Rows/>

            </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <h2>Selected Day: May {day}, 2023</h2>
                <ul>
                    <DropdownItem text={'Add'} onClick={onAddClick}/>
                    
                    <DropdownItem text={'View'} onClick={onViewClick}/>
                </ul>
                
                <div className={`add ${addopen? 'active' : 'inactive'}`}>
                    <Form/>
                </div>
                
                <div className={`view ${viewOpen? 'active' : 'inactive'}`}>
                    <Mongo/>
                </div>
            
            </div>
        </div>
    )
}

export default CalendarContainer
