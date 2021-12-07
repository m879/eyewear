import React, { useState } from 'react'
import './Login.css'
import {Alert, Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'


function Register() {
    const history=useHistory()


    const [type,setType]=useState('password');
    const [type2,setType2]=useState('password');

    const handleEye=()=>{
        if(type==="password"){
            setType('text');
        }
        else{
            setType('password')
        }
    }

    const handleEye2=()=>{
        if(type2==="password"){
            setType2('text');
        }
        else{
            setType2('password')
        }
    }

    const [firstname,setfirstname]=useState();
    const [lastname,setlastname]=useState();
    const [username,setusername]=useState();
    const [email,setemail]=useState();
    const [mobile,setmobile]=useState();
    const [company,setcompany]=useState();
    const [password,setpassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [address1,setaddress1]=useState();
    const [address2,setaddress2]=useState();
    const [city,setCity]=useState();
    const [state,setstate]=useState();
    const [pincode,setpincode]=useState();
    const [country,setCountry]=useState();
    const [error,setError]=useState('');
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('')
        if(password!==confirmPassword){
            setError('New and confirm passwords are different')
        }
        else if(!password || !confirmPassword){
            setError('Please fill all the fields')
        }
        else{
            var data = JSON.stringify({
                "first_name": firstname,
                "last_name": lastname,
                "username":username,
                "email": email,
                "telephone": mobile,
                "company": company,
                "address_1": address1,
                "address_2": address2,
                "city": city,
                "pin_code": parseInt(pincode),
                "country":country,
                "password": password,
                "state":state
            });

            console.log(password)
            
            var config = {
                method: 'post',
                url: 'http://s2seyewearfortesting.pythonanywhere.com/api/register/',
                headers: { 
                'Content-Type': 'application/json'
                },
                data : data
            };
            
            axios(config)
            .then(function (response) {
                console.log(response);
                if(response.data.error){
                    setError(response.data.error)
                }
                else{
                
                    history.push('/login')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        

    }




    return (
    
    <div className="login-container" style={{width:'100%',backgroundColor: '#FFF1EC'}}>
            <h4 style={{width:'100%',display:'flex',justifyContent:'left',paddingLeft:'200px'}}>Register</h4>
            {/* <span>Already a member?<Link to="/login">Login</Link></span> */}
            <div className="login-row">
                <div className="row-input">
                    <label>Firstname</label>
                    <input className="login-input" placeholder="Firstname" type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Lastname</label>
                <input className="login-input" placeholder="Lastname" type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Username</label>
                <input className="login-input" placeholder="Username" type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Email</label>
                <input className="login-input" placeholder="email" type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Mobile no.</label>
                <input className="login-input" placeholder="Mobile no. with country code" type="text" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Company</label>
                <input className="login-input" placeholder="Company" type="text" value={company} onChange={(e)=>setcompany(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Password</label>
                <input className="login-input" placeholder="Password" type={type} value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <i className="far fa-eye eye" style={{color:'#EE9776',bottom:'0',left:'0',top:'10px',right:'50px'}} onClick={handleEye}></i>
                </div>
                <div className="row-input">
                <label>Confirm Password</label>
                <input className="login-input" placeholder="Confirm Password" type={type2} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <i className="far fa-eye eye" style={{color:'#EE9776',bottom:'0',left:'0',top:'10px',right:'80px'}} onClick={handleEye2}></i>
                </div>
            </div>
            <span className="or">Address</span>
            <div className="login-row">
                <div className="row-input">
                <label>Address line 1</label>
                <input className="login-input" placeholder="Flat No./House No./Apartment Name" type="text" value={address1} onChange={(e)=>setaddress1(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Address line 2</label>
                <input className="login-input" placeholder="Street/Area" type="text" value={address2} onChange={(e)=>setaddress2(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>City</label>
                <input className="login-input" placeholder="City" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>State</label>
                <input className="login-input" placeholder="State" type="text" value={state} onChange={(e)=>setstate(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Country</label>
                <input className="login-input" placeholder="Country" type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Pincode</label>
                <input className="login-input" placeholder="Pincode" type="text" value={pincode} onChange={(e)=>setpincode(e.target.value)}/>
                </div>
            </div>
            <button onClick={(e)=>handleSubmit(e)} className="login">Register</button>
            {error && <Alert variant="danger" style={{marginTop:'30px'}}>{error}</Alert>}
            <span className="or">Or</span>
            <button onClick={()=>history.push('/login')} className="outlined">Login</button>

        </div>
    )
}

export default Register
