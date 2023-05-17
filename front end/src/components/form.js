import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { countDay,countDB } from '../utils/useAtom';
import Mongo from './mongo';

function Form() {
    const [day,setDay] = useAtom(countDay);

    const [description,setDescription] = useState('');
    const [odds, setOdds] = useState('');
    const [wager,setWager] = useState('');
    const [win,setWin] = useState('');
    const [profit,setProfit] = useState(0);

    const [db, setDb] = useAtom(countDB);

    const fecthData = async () =>{
        const {data} = await axios.get('http://localhost:3001/db/find/BetTracker/BetTracker/')
        setDb(data)
    }

    

    const j = (event) =>{
        const target = event.target;
        const value = target.value;
        setWin(value);
        let output = 0;
        if (value === 'Win'){
            output = (odds * 0.01)
            if(output < 0){
                output *= -1;
                let m = (wager / output);
                m = m.toFixed(2)
                setProfit(m);
            }
            else{
                let m = (wager * output)
                m = m.toFixed(2)
                setProfit(m);
            }
        }
        else if (value === "Loss") {
            output -= wager;
            setProfit(output)
        }
        else {
            setProfit(output);
        }
    }
    
    const payload = {
        DayNumber: day,
        Description: description,
        Odds: odds,
        Wager: wager,
        Win: win,
        Profit: profit
    }

  

    const submit = (event) =>{
        //event.preventDefault();
        
        axios({
            url: 'http://localhost:3001/db/save/BetTracker/BetTracker/',
            method: 'POST',
            data: payload
        })
        setDescription('')
        setOdds('')
        setWager('')
        setWin('')
    }


    console.log(profit)
    
    return (
        <form className='form'>
            <div>
                Description:
            </div>
            <input type='text' value={description} placeholder='Description' onChange={(event) =>{
                const target =event.target;
                const value = target.value;
                setDescription(value);
            }}></input>
            <div>
                Odds:
            </div>
            <input type='number' value={odds} placeholder='Odds' onChange={(event) =>{
                const target =event.target;
                const value = target.value;
                setOdds(value);
                }}></input>
            <div>
                Wager:
            </div>
            <input type='number' value={wager} min={0} step={"any"} placeholder='Wager' onChange={(event) =>{
                const target =event.target;
                const value = target.value;
                setWager(value);
                }}></input>

            <div>
            
            <div>
                Win, Loss, or Void:
            </div>
            <select  onChange={j}>
                <option>--Select--</option>
                <option value={"Win"} className='select' >Win</option>
                <option value={"Loss"} className='select' >Loss</option>
                <option value={"Void"} className='select' >Void</option>
            </select>
            </div>

            <input type='submit' onClick={submit} value={'Add'}/>

        </form>
    )
}

export default Form
