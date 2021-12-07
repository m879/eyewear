import React, { useState } from 'react'
import {Form, Modal, InputGroup, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import LensOptions from '../Eyewear/LensOptions';


function Options(props) {
    const [progress,setProgress]=useState(2);

    const [option,setOption]=useState("1");

    //console.log(option)
    const history=useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(option==4){
            history.push('/cart')
        }
        else{
        localStorage.setItem("option",option);
        props.onHide()
        }
    }

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
                <div className="option-container">
                    <h4>Select Lens Color</h4>
                    <LensOptions/>
                </div>
            )
        }
    }


    return (
        <Modal show={props.show} size="lg" onHide={props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <div className="progress-container">
                    <div className="progress" style={{height:'50px',width:'50px',background:"grey",textAlign:'center',borderRadius:'50%'}}>
                        <i class="fas fa-glasses" style={{fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}></i>
                    </div>
                
                    <div className="progress-line"></div>
                    
                    <div className="progress" style={{height:'50px',width:'50px',background:progress===3?"grey":"white",textAlign:'center',borderRadius:'50%'}}>
                        <i class="fas fa-microscope" style={{fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}></i>
                    </div>
                </div>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {handleHide()}
                
            </Modal.Body>
        </Modal>
    )
}

export default Options
