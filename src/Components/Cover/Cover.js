import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Cover.css'
import c1 from '../../images/cover1.jpeg'
import c2 from '../../images/banner.png'

function Cover() {
    return (
        <div className="cover">
          <img src={c2} alt="cover"/>
        </div>
    )
}

export default Cover
