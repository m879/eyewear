import React, { useState } from 'react'
import {Form, Modal, InputGroup, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import './Options.css'

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
                    <div className="progress" style={{height:'50px',width:'50px',background:progress===3?"grey":"white",textAlign:'center',borderRadius:'50%'}}>
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

                <div className="option-container">
                    <h4>Select power type</h4>
                    <Form>
                        <InputGroup className="input">
                            <Form.Check name="option" value="1" label="Zero power(basic lenses just for protection and fashion)" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                            {/* <Form.Label style={{marginLeft:'30px'}}>Zero power(basic lenses just for protection and fashion)</Form.Label> */}
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check name="option" value="2" label="Single vision(for distance or near)" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check label="Bifocal(krip-top)(both near and distance in a single eye wear)" value="3" name="option" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                            
                        </InputGroup>
                        <InputGroup className="input">
                            <Form.Check label="Only frame(with just dummy lenses)" value="4" name="option" inline type="radio" onClick={(e)=>setOption(e.target.value)}/>
                            
                        </InputGroup>
                        <Button type="primary" style={{marginTop:'30px'}} onClick={(e)=>handleSubmit(e)}>Submit</Button>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Options
