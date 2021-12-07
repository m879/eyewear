import React, { useState } from 'react'
import './Options.css'
import {Alert, Button} from 'react-bootstrap'
import { useHistory } from 'react-router'
import axios from 'axios'

function LensOptions(props) {
    const history=useHistory()
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('email');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')
    
    // const handleProceed=()=>{

    //     history.push('/cart')
    // }

    const [active1,setActive1]=useState(true)
    const [active2,setActive2]=useState(false)
    const [active3,setActive3]=useState(false)
    const [active4,setActive4]=useState(false)

    const [option,setOption]=useState(1);

    const handleActive1=(e)=>{
        e.preventDefault();
        setActive1(true);
        setOption(1)
        setActive2(false);
        setActive3(false);
        setActive4(false);
    }

    const handleActive2=(e)=>{
        e.preventDefault();
        setActive2(true);
        setOption(2)
        setActive1(false);
        setActive3(false);
        setActive4(false);
    }
    const handleActive3=(e)=>{
        e.preventDefault();
        setActive3(true);
        setOption(3)
        setActive2(false);
        setActive1(false);
        setActive4(false);
    }
    const handleActive4=(e)=>{
        e.preventDefault();
        setActive4(true);
        setOption(4)
        setActive2(false);
        setActive3(false);
        setActive1(false);
    }

    const [success,setSuccess]=useState("")

    const addtocart=(e)=>{
        e.preventDefault();
        setSuccess("");
        var data = JSON.stringify({
            "pid":props.pid,
            "quantity":1,
            "option_id":option,
            "Text":"Nothing"

          });
          
          var config = {
            method: 'post',
            url: 'http://s2seyewearfortesting.pythonanywhere.com/api/addcart/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.success){
                //history.push('/cart')
                setSuccess("Product added to cart");
            }
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    



    return (
        <>
        <div className="lens-cards">
            <div className={`lens-card ${active1?"active":""}`} onClick={(e)=>handleActive1(e)}>
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className={`lens-card ${active2?"active":""}`} onClick={(e)=>handleActive2(e)}>
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className={`lens-card ${active3?"active":""}`} onClick={(e)=>handleActive3(e)}>
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>
            <div className={`lens-card ${active4?"active":""}`} onClick={(e)=>handleActive4(e)}>
                <div className="blue-part">
                    <span>Frame + Lens ₹3600</span>
                    <span>1 year warranty</span>
                    <button>Add to Cart</button>
                </div>
                <span className="green-text">Buy 1 and get 1 free</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
                <span className="grey-text">Blue block and anti-glare</span>
            </div>

            
        </div>
        <Button type="primary" style={{marginTop:'20px'}} onClick={(e)=>addtocart(e)}>Submit</Button>
        {success && <Alert variant="success" style={{marginTop:'30px'}}>{success}</Alert>}
        </>
    )
}

export default LensOptions
