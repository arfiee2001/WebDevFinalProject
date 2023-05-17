import React from 'react'
import '../styles/calendar.css'
import Row1 from './row1'
import Row2 from './row2'
import Row3 from './row3'
import Row4 from './row4'
import Row5 from './row5'

function Rows() {
    return (
        <div className='row-container'>
            <div className='row1'>
                <Row1/>
            </div>
            <div className='row2'>
                <Row2/>
            </div>
            <div className='row3'>
                <Row3/>
            </div>
            <div className='row4'>
                <Row4/>
            </div>
            <div className='row5'>
                <Row5/>
            </div>
        </div>
    )
}

export default Rows
