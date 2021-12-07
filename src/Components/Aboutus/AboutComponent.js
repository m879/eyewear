import React from 'react'
import './About.css'
import image from '../../images/aboutus.png'

function AboutComponent() {
    return (
        <div className="about-container">
            <img src={image} alt="about us"/>
            <div className="about-text">
                <h3>About<br/> us</h3>
                <div className="horizontal-line"></div>
                <p>At S2S eyewear we bring you the latest design and trend at the earliest with all the products well tested by the designated team. We bring you the new innovation in spectacles, sunglasses, prescription sunglasses, computer protection glasses, frames and customized contact lenses &amp; other accessories. Our vision is to fulfil the blank spaces for optical stores and opticians required by today’s world and we are dedicated to provide you with best quality products and improve the way you see through your eyes. We provide you with all eyewear and eye care products in the shortest time possible with fast delivery and easy return policy.</p>
            </div>
        </div>
    ) 
}

export default AboutComponent
