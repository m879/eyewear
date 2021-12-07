import React from 'react'
import './About.css'
import award from '../../images/award.png'

function Awards() {
    return (
        <div>
            <span className="awards">Awards and achievements</span>
            <div className="awards-container">
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
                <div className="award">
                    <img src={award} alt="award"/>
                </div>
            </div>
        </div>
    )
}

export default Awards
