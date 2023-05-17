import React from 'react'
import { useAtom } from 'jotai';
import { countDB, countDayProfit} from '../utils/useAtom';


function Chart() {
    const [dayProfit, setDayProfit] = useAtom(countDayProfit);

    let uri = '';
    for (let i = 0; i < 31; i++){
        uri += dayProfit[i];
        uri += ',';
    }

    return (
        <img src={`https://quickchart.io/chart/render/zm-4ff53e51-f764-41e0-ac4d-706d69df3a58?data1=${uri}`}></img>
    )
}

export default Chart
