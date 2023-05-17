import React from 'react'
import '../styles/calendar.css'

function Buttons(prop) {
    return (
        <div className='button' onClick={prop.onClick}>
            <h2>
                {prop.label}
            </h2>
            
        </div>
    )
}

export default Buttons
