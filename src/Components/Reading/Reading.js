import React from 'react'
import './Reading.css'
import image from '../../images/reading.png'


function Reading() {
    return (
        <div className="reading-container">
            
            <div>
                <h3>Reading Eyewears</h3>
                <p>SINGLE VISION  |  BIFOCALS</p>
                <div className="black-line"></div>
                <div className="button">
                <span>Euismod mauris pulvinar quam bibendum ultrices sed. Egestas in mauris ut augue dictumst ullamcorper aliquet. Vitae, leo egestas sed venenatis.</span>
                    <button>View Collection</button>
                </div>
                
            </div>
            <img src={image} alt="trendy"/>
            
        </div>
    ) 
}

export default Reading
