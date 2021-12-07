import React, { useEffect, useState } from 'react'
import {Form, Modal, InputGroup, Button} from 'react-bootstrap'
import LensOptions from './LensOptions';
import './Options.css'
import Prescription from './Prescription';

function Lens(props) {
    const [progress,setProgress]=useState(2);

    const [option,setOption]=useState("1");
    
    const modalData=()=>{
        if(localStorage.getItem("option")==1){
            //console.log('hiiii')
            return(
                <LensOptions pid={props.pid}/>
            )
        }
        else if(localStorage.getItem("option")==2 || localStorage.getItem("option")==3){
            return(
                <Prescription/>
            )
        }
    }

    //console.log(option)

    const handleSubmit=()=>{ 

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
                    <div className="progress" style={{height:'50px',width:'50px',background:'grey',textAlign:'center',borderRadius:'50%'}}>
                        <i class="far fa-eye" style={{fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}></i>
                    </div>
                    <div className="progress-line"></div>
                    <div className="progress" style={{height:'50px',width:'50px',background:"grey",textAlign:'center',borderRadius:'50%'}}>
                        <i class="fas fa-microscope" style={{fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}></i>
                    </div>
                    <div className="progress-line"></div>
                    <div className="progress" style={{height:'50px',width:'50px',background:progress===3?"grey":"white",textAlign:'center',borderRadius:'50%'}}>
                        <i class="fas fa-shopping-bag" style={{fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}></i>
                    </div>
                </div>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalData()}
                
            </Modal.Body>
        </Modal>
    )
}

export default Lens
