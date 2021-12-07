import React from 'react'
import AboutComponent from '../Aboutus/AboutComponent'
import Testimonials from '../Testimonials/Testimonials'
import './About.css'
import Awards from './Awards'
import Philosophy from './Philosophy'

function About() {
    return (
        <div className="about">
            {/* <div className="sub-container">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1547104442-9f0af4f37a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="about us"/>
                </div>
                <div className="text-container">
                    <h3 className="heading">About</h3>
                    <span className="bold-text">At S2S eyewear we bring you the latest design and trend at the earliest with all the products well tested by the designated team.
                    </span>
                    <p>We bring you the new innovation in spectacles, sunglasses, prescription sunglasses, computer protection glasses, frames and customized contact lenses &amp; other accessories. Our vision is to fulfil the blank spaces for optical stores and opticians required by today’s world and we are dedicated to provide you with best quality products and improve the way you see through your eyes. We provide you with all eyewear and eye care products in the shortest time possible with fast delivery and easy return policy.</p>
                </div>
            </div> */}
            <AboutComponent/>
            <Awards/>
            <Philosophy/>
            <Testimonials/>
        </div>
    )
}

export default About
