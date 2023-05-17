import React from 'react'
import { useEffect,useState } from 'react';
import {atom,useAtom} from "jotai";
import { countAddOpen, countDay } from '../utils/useAtom'
import { countOpen } from '../utils/useAtom'

function DropdownItem(prop) {
 
    

    return (
        <li className='dropdownItem' >
            <div onClick={prop.onClick}>
                {prop.text}
            </div>
        </li>
    )
}

export default DropdownItem
