import React, { useState } from 'react'
import './Login.css'
import {Alert, Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import image from '../../images/login.png'
import eye from '../../images/eye.png'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {login} from '../../features/userslice'

function Login() {
    const history=useHistory()
    const [type,setType]=useState('password');

    const [username,setusername]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [error,setError]=useState('');

    const dispatch=useDispatch();

    const handleEye=()=>{
        if(type==="password"){
            setType('text');
        }
        else{
            setType('password')
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
        if(!email || !password){
            setError('Please fill all the fields');
        }
        else{
            var data = JSON.stringify({
                
                "email": email,
                "password": password
            });

            var config = {
                method: 'post',
                url: 'http://s2seyewearfortesting.pythonanywhere.com/api/login/',
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
                    dispatch(login({
                        "username":email,
                        "password":response.data.sha,
                        "loggedIn":true
                    }))
                    localStorage.setItem('email',email);
                    localStorage.setItem('password',response.data.sha);
                    history.push('/')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    return (
        <div className="user-container">
            <div className="login-container"><h4>Login</h4>

            <input className="login-input" type="text" placeholder="Email/username" value={email} onChange={(e)=>setemail(e.target.value)}/>

            <input className="login-input" type={type} placeholder="Password" style={{height:'50px'}} value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <i className="far fa-eye eye" style={{color:'#EE9776'}} onClick={handleEye}></i>
            <button className="login" onClick={(e)=>handleSubmit(e)}>Login</button>
            {error && <Alert variant="danger">{error}</Alert>}
            <span className="or">Or</span>
            <button onClick={()=>history.push('/register')} className="outlined">Create one here</button></div>
            <img src={image}alt=""/>
        </div>
    )
}

export default Login
