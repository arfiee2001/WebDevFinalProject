import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { countDB, countDay, countDayProfit} from '../utils/useAtom';

function Profit() {

    const [db, setDb] = useAtom(countDB);
    const [dayProfit, setDayProfit] = useAtom(countDayProfit);
    const [allTime,setAllTime] = useState(0)

    useEffect(()=>{
        setDayProfit(arr);
    },[dayProfit])

    let day1Profit = 0;
    let day2Profit = 0;
    let day3Profit = 0;
    let day4Profit = 0;
    let day5Profit = 0;
    let day6Profit = 0;
    let day7Profit = 0;
    let day8Profit = 0;
    let day9Profit = 0;
    let day10Profit = 0;
    let day11Profit = 0;
    let day12Profit = 0;
    let day13Profit = 0;
    let day14Profit = 0;
    let day15Profit = 0;
    let day16Profit = 0;
    let day17Profit = 0;
    let day18Profit = 0;
    let day19Profit = 0;
    let day20Profit = 0;
    let day21Profit = 0;
    let day22Profit = 0;
    let day23Profit = 0;
    let day24Profit = 0;
    let day25Profit = 0;
    let day26Profit = 0;
    let day27Profit = 0;
    let day28Profit = 0;
    let day29Profit = 0;
    let day30Profit = 0;
    let day31Profit = 0;

    db.map(item => {
        if(item.DayNumber === 1){
            day1Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 2){
            day2Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 3){
            day3Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 4){
            day4Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 5){
            day5Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 6){
            day6Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 7){
            day7Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 8){
            day8Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 9){
            day9Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 10){
            day10Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 11){
            day11Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 12){
            day12Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 13){
            day13Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 14){
            day14Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 15){
            day15Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 16){
            day16Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 17){
            day17Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 18){
            day18Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 19){
            day19Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 20){
            day20Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 21){
            day21Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 22){
            day22Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 23){
            day23Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 24){
            day24Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 25){
            day25Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 26){
            day26Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 27){
            day27Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 28){
            day28Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 29){
            day29Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 30){
            day30Profit += Number(item.Profit);
        }
        else if(item.DayNumber === 31){
            day31Profit += Number(item.Profit);
        }
    })

    let arr = [
        0,
        day1Profit, 
        day2Profit,
        day3Profit, 
        day4Profit, 
        day5Profit,
        day6Profit, 
        day7Profit, 
        day8Profit, 
        day9Profit ,
        day10Profit, 
        day11Profit ,
        day12Profit ,
        day13Profit ,
        day14Profit,
        day15Profit,
        day16Profit,
        day17Profit,
        day18Profit,
        day19Profit ,
        day20Profit ,
        day21Profit ,
        day22Profit,
        day23Profit ,
        day24Profit ,
        day25Profit ,
        day26Profit ,
        day27Profit ,
        day28Profit ,
        day29Profit ,
        day30Profit ,
        day31Profit
    ]

    
    let sum = 0;
    db.map(item => {
        sum += Number(item.Profit)
        
    })
    sum = sum.toFixed(2)
    let plus = '';
    if (sum > 0){
        plus += '+$';
        plus += sum;
    }
    else{
        plus += '$'
        plus += sum;
    }

    return (
        <div>
            {plus}
        </div>
    )
}

export default Profit
