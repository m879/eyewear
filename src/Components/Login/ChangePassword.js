import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import image from '../../images/cp.png'
import { useDispatch } from 'react-redux'
import {login} from '../../features/userslice'

function ChangePassword() {
    const dispatch=useDispatch();
    const email=localStorage.getItem('completeEmail');
    const [old,setOld]=useState();
    const [newP,setNew]=useState();
    const [confirm,setConfirm]=useState()
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')
    const history=useHistory()

    const postData={
        email:email,
        old_password:old,
        new_password:newP
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
        setSuccess('');

        if(!old||!newP||!confirm){
            setError('Please fill all the fields')
        }
        else if(newP!==confirm){
            setError('New and confirm password fields are not same');
        }
        else{
        axios.post('http://s2seyewearfortesting.pythonanywhere.com/api/editPassword',postData)
        .then(res=>{
            console.log(res.data);
            if(res.data.success){
                setSuccess('Password updated successfully')
                localStorage.setItem('password',newP)
                var data = JSON.stringify({
                
                    "email": email,
                    "password": newP
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
                    
                    
                        dispatch(login({
                            "username":email,
                            "password":response.data.sha,
                            "loggedIn":true
                        }))
                        localStorage.setItem('email',email);
                        localStorage.setItem('password',response.data.sha);
                        
                
                })
                .catch(function (error) {
                    console.log(error);
                });
            
                history.push('/')

            }
            else{
                setError(res.data.error)
            }
            
        })
        .catch(err=>{
            setError('Error updating password');
            console.log(err);
        })
        }
    }




    return (
        <div className="user-container">
        <div className="login-container">
            <h4>Change Password</h4>
            
            <div className="row-input">
                
                <input className="login-input" placeholder="Old Password" type="password" value={old} onChange={(e)=>setOld(e.target.value)}/>
            </div>
            <div className="row-input">
                
                <input className="login-input" placeholder="New Password" type="password" value={newP} onChange={(e)=>setNew(e.target.value)}/>
            </div>
            <div className="row-input">
                
                <input className="login-input" placeholder="Confirm Password" type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <button className="login" onClick={(e)=>handleSubmit(e)}>Update Password</button>
        </div>
        <img src={image} alt=""/>
        </div>
    )
}

export default ChangePassword
