import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (
        <div className="newletter-container">
            <div className="qualities">
                <div className="element">
                    <i class="fas fa-parachute-box"></i>
                    <span>Easy returns</span>
                </div>
                <div className="element">
                    <i class="fas fa-truck"></i>
                    <span>Free shipping</span>
                </div>
            </div>
            <div className="newsletter">
                <span>Newsletter sign up</span>
                <div className="input">
                    <input placeholder="Email" type="text"/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
