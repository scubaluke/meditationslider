import React, { useState, useEffect, useRef } from 'react'
import './Hamburger.css'
import Links from './Links'

// import { Router ,Link } from 'react-router-dom'

export default function Hamburger() {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return;
              }
                  setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick, { capture: true })
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

  
            return (
                <div onClick={() => setOpen(!open)} className="Hamburger" >
                    <div className={`hamburger-dropdown ${open ? 'show' : ''}`} >
                       <Links />
                    </div>
                </div>
               
            )
}



