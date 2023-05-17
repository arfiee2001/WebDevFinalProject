import React from 'react'
import '../styles/calendar.css'
import Buttons from './buttons'
import {atom,useAtom} from "jotai"
import { countHistoryOpen,countOpen } from '../utils/useAtom';

function Middle(prop) {
  const [historyOpen,setHistoryOpen] = useAtom(countHistoryOpen);
  const [open,setOpen] = useAtom(countOpen);


  const onEjectClick = () => {
    window.location.replace('https://www.indeed.com/')
  }

  const onHistoryClick = () =>{
    if(open === true){
      setOpen(!open);
    }
    setHistoryOpen(!historyOpen)
  }
 
    return (
      <div className='middle-container'>
        <Buttons label={'Bet History'} onClick={onHistoryClick}/>
        <Buttons label={'Eject'} onClick={onEjectClick}/>
      </div>  
    )
}

export default Middle
