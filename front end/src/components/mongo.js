import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { countDB, countDay,} from '../utils/useAtom';

function Mongo() {
    const [day,setDay] = useAtom(countDay);
    const [db, setDb] = useAtom(countDB);
 


    const fecthData = async () =>{
        const {data} = await axios.get('http://localhost:3001/db/find/BetTracker/BetTracker/')
        setDb(data)
    }
   useEffect(()=>{
    fecthData();
   },[])



    return (
       db.map(item=>{
        if(item.DayNumber === day){
            if(item.Win === "Win"){
                return(
                    <ul>
                        <li className='bet-container'>
                            <div className='bets'>
                                <div className='description'>{item.Description}</div>
                                <div>{item.Odds}</div>
                                <div>{item.Wager}</div>
                            </div>
                            <div className='pic'>
                                <img src='https://em-content.zobj.net/thumbs/120/htc/37/chart-with-upwards-trend_1f4c8.png' width={50}></img>
                            </div>
                        </li>
                    </ul>
                )
            }
            else {
                return(
                    <ul>
                        <li className='bet-container'>
                            <div className='bets'>
                                <div className='description'>{item.Description}</div>
                                <div>{item.Odds}</div>
                                <div>{item.Wager}</div>
                            </div>
                            <div className='pic'>
                                <img src='https://em-content.zobj.net/thumbs/120/htc/37/chart-with-downwards-trend_1f4c9.png' width={50}></img>
                            </div>
                        </li>
                    </ul>
                )
            }
        }
       })
    )
}

export default Mongo
