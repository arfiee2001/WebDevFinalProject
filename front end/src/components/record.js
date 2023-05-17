import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { countDB, countDayProfit} from '../utils/useAtom';


function Record() {
    const [db, setDb] = useAtom(countDB);
    

   
    let win  =0;
    let loss = 0;
    let v = 0;

    db.map(item =>{
        if(item.Win === "Win"){
            win++
        }
        else if(item.Win === "Loss"){
            loss++;
        }
        else{
            v++;
        }
   })

  

    return (
        <div>
            {win} - {loss} - {v}
        </div>
     
    )
}

export default Record
