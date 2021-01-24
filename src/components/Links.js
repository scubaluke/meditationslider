import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

export default function Links() {
    return (<div className="list-of-links">
        <Link className="link" to="/" >Home</Link>
        <Link className="link" to="/fear" >Overcoming Fear</Link>
        <Link className="link" to="/woa" >Words of Affirmations</Link>
        <Link className="link" to="/nsfw" >NSFW</Link>
        </div>
    )
}
