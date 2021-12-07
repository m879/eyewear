import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import LensOptions from './LensOptions';
import './Options.css'

function Prescription() {

    const [hide,setHide]=useState(false);

    const handleHide=()=>{
        
        if(hide===false){
            return(
                <div style={{width:'100%'}}>
                    
                    
                    <div className="prescription-header"><span>What about my eye power</span></div>
                    <div className="prescription-text">
                        <span style={{fontSize:'20px'}}>You can submit your eye power after payment step</span>
                        <span>Using any of the followng methods</span>
                        <span>Enter manually</span>
                        <span>Upload prescription</span>
                        <span>Take a photo of your prescription</span>
                        <span>Get phone assisstance from our optometrist</span>
                    </div>
                    <Button onClick={()=>setHide(true)}>Proceed</Button>
                </div>
            )
        }
        else{
            return(
                <LensOptions/>
            )
        }
    }


    return (
        <div>
            {handleHide()}
        </div>
    )
}

export default Prescription
