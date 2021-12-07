import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            {/* <div className="section">
                <p>At S2S eyewear we bring you the latest design and trend at the earliest with all the products well tested by the designated team.</p>
                <div className="icons">
                    <i class="fab fa-instagram"/>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                </div>

            </div> */}
            <div className="section">
                <h3>Quick Links</h3>
                <span>About</span>
                <span>Contact</span>
                <span>Refund and Returns policy</span>
                <span>Shipping dispatch policy</span>
                <span>How to read prescription</span>
            </div>
            <div className="section">
                <h3>Shop</h3>
                <span>Eye glasses</span>
                <span>sun glasses</span>
                <span>Reading glasses</span>
                <span>Magic lenses</span>
                <span>Accessories</span>
            </div>
            <div className="section">
                <h3>Locate us</h3>
                <span>123 Demo Blvd, Miami, FL 4567,</span>
                <span>United States</span>
                <span>+1 123-456-7890</span>
                <span>mail@example.com</span>
                
            </div>
        </div>
    )
}

export default Footer
