import React from 'react'
import './Trendy.css'
import image from '../../images/bigimage.png'

function Trendy() {
    return (
        <div className="trendy-container">
            <img src={image} alt="trendy"/>
            <div>
                <h3>Trendy arrivals</h3>
                <div className="black-line"></div>
                <div className="button">
                <span>Euismod mauris pulvinar quam bibendum ultrices sed. Egestas in mauris ut augue dictumst ullamcorper aliquet. Vitae, leo egestas sed venenatis.</span>
                    <button>View Collection</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Trendy
