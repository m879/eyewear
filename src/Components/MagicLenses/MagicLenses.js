import React from 'react'
import './MagicLenses.css'
import acc from '../../images/acc2.png'
import acc2 from '../../images/acc3.png'

function MagicLenses() {
    return (
        <div className="lenses-container">
            <div className="lense" style={{background:`url(${acc})`,backgroundSize:'cover'}}>
                <h3>Magic Lenses</h3>
                
            </div>
            <div className="lense" style={{background:`url(${acc2})`,backgroundSize:'cover'}}>
                <h3>Accessories</h3>
                
            </div>
        </div>
    )
}

export default MagicLenses
