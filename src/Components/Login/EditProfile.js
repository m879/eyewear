import React, { useEffect, useState } from 'react'
import './Login.css'
import {Alert, Button,Modal} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';

//add address
function MyVerticallyCenteredModal(props) {
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('email');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [add1,setAdd1]=useState();
    const [add2,setAdd2]=useState();
    const [city,setCity]=useState();
    const [postCode,setPcode]=useState();
    const [state,setState]=useState();
    const [country,setCountry]=useState()
    const [telephone,setTelephone]=useState();
    const [message,setMessage]=useState('');
    const [email,setEmail]=useState();



    const handleAdd=(e)=>{
        e.preventDefault();
        setMessage('');
        var data = JSON.stringify({
          "first_name": firstname,
          "last_name": lastname,
          "telephone": telephone,
          "email": email,
          "company": "none",
          "address_1": add1,
          "address_2": add2,
          "city": city,
          "state": state,
          "pin_code": parseInt(postCode),
          "country": country,
          "set_default": true
        });
        
        var config = {
          method: 'post',
          url: 'http://s2seyewearfortesting.pythonanywhere.com/api/addaddress/',
          headers: { 
            'Authorization': `Basic ${token}`, 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

          props.onHide()
          

    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="login-row">
                        <div className="login-input">
                            
                            <input placeholder="First name" type="text" value={firstname} onChange={(e)=>setFname(e.target.value)}/>
                            
                        </div>
                        <div className="login-input">
                            
                            <input placeholder="Last name" type="text" value={lastname} onChange={(e)=>setLname(e.target.value)}/>
                            
                        </div>
                    </div>
                            <div className="login-row">
                        <div className="login-input">
                            
                            <input placeholder="Postal code" type="text" value={postCode} onChange={(e)=>setPcode(e.target.value)}/>
                            
                        </div>
                        <div className="login-input">
                            <input placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        </div>
                    <div className="login-row">
                    <div className="login-input">
                        <input placeholder="Address line 1" type="text" value={add1} onChange={(e)=>setAdd1(e.target.value)}/>
                        </div>
                        <div className="login-input">
                        <input placeholder="Address line 2" type="text" value={add2} onChange={(e)=>setAdd2(e.target.value)}/>
                        </div>
                    
                    </div>

                    
                    
                    <div className="login-row">
                    <div className="login-input">
                        <input placeholder="City" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                        
                        
                    </div>
                    <div className="login-input">
                            
                            <input placeholder="State" type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
                            
                        </div>
                    </div>
                    <div className="login-row">
                    <div className="login-input">
                            
                            <input placeholder="Mobile number" type="text" onChange={(e)=>setTelephone(e.target.value)} value={telephone}/>
                            
                        </div>
                    
                    
                        <div className="login-input">
                            
                            <input placeholder="Country" type="text" onChange={(e)=>setCountry(e.target.value)} value={country}/>
                            
                        </div>
                        
                        
                    </div>
                                
        </Modal.Body>
        <Modal.Footer>
            {message && <Alert variant="success">{message}</Alert>}
            <Button onClick={handleAdd}>Add address</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

    }

function EditProfile() {
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('email');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')
    const [details,setDetails] =useState({});
    const [userName,setUsername]=useState();
    const [address,setAddress]=useState([])

    const [email,setEmail]=useState();

    const [telephone,settelephone]=useState();

    const [firstname,setfirstname]=useState();

    const [lastname,setlastname]=useState()

    var config = {
        method: 'post',
        url: 'http://s2seyewearfortesting.pythonanywhere.com/api/getuserdetails/',
        headers: { 
          'Authorization': `Basic ${token}`
        }
      };

      var config2 = {
        method: 'post',
        url: 'http://s2seyewearfortesting.pythonanywhere.com/api/getaddress/',
        headers: { 
          'Authorization': `Basic ${token}`
        }
      };
    useEffect(()=>{
        axios(config)
        .then((res)=>{
            console.log(res.data.Details);
            setDetails(res.data.Details);
            setUsername(res.data.Details.username);
            setEmail(res.data.Details.email);
            localStorage.setItem('completeEmail',res.data.Details.email)
            settelephone(res.data.Details.telephone)
            setfirstname(res.data.Details.first_name);
            setlastname(res.data.Details.last_name)
        })
        .catch(err=>{
            console.log(err);
        })

        axios(config2)
        .then(res=>{
            console.log(res);
            setAddress(res.data.Address)
        })
        .catch(err=>{
            console.log(err)
        })


    },[])
    //console.log(details.username)
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
        setSuccess('');
        var data = JSON.stringify({
            "email": email,
            "telephone": telephone,
            "first_name": firstname,
            "last_name":lastname,
            "username":userName

          });
          
          var config = {
            method: 'post',
            url: 'http://s2seyewearfortesting.pythonanywhere.com/api/editCustomer/',
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
                setSuccess('Profile updated successfully')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSubmit2=()=>{

    }


    const handleDeleteAddress=(aid,e)=>{
        e.preventDefault();
        var data = JSON.stringify({
            "address_id": parseInt(aid)
          });
          
          var config = {
            method: 'post',
            url: 'http://s2seyewearfortesting.pythonanywhere.com/api/deleteaddress/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            history.push('/edit-profile')
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    const [modalShow, setModalShow] = React.useState(false);
    const handleAddAdress=(e)=>{
        e.preventDefault();
        setModalShow(true)
        
    }
    





    const history=useHistory()
    return (
        <div className="login-container" style={{width:'100%',backgroundColor: '#FFF1EC'}}>
            <h4 style={{width:'100%',display:'flex',justifyContent:'left',paddingLeft:'200px'}}>Edit Profile</h4>
            
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
                <input className="login-input" placeholder="Username" type="text" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="row-input">
                <label>Email</label>
                <input className="login-input" placeholder="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Mobile no.</label>
                <input className="login-input" placeholder="Mobile no." type="text" value={telephone} onChange={(e)=>settelephone(e.target.value)}/>
                </div>
                {/* <div className="row-input">
                <label>Company</label>
                <input className="login-input" placeholder="Company" type="text"/>
                </div> */}
            </div>
            {/* <div className="login-row">
                <div className="row-input">
                <label>Password</label>
                <input className="login-input" placeholder="Password" type="password"/>
                </div>
                <div className="row-input">
                <label>Confirm Password</label>
                <input className="login-input" placeholder="Confirm Password" type="password"/>
                </div>
            </div> */}
            {success && <Alert variant="success" style={{marginTop:'30px'}}>{success}</Alert>}
            <button className="outlined" onClick={handleSubmit}>Save Changes</button>
            <span className="or">Address</span>
            {address.map((add,idx)=>{
                return(
                    <>
                    <div className="login-row">
                <div className="row-input">
                <label>Firstname</label>
                <input className="login-input" placeholder="Flat No./House No./Apartment Name" type="text" value={add.first_name}/>
                </div>
                <div className="row-input">
                <label>Lastname</label>
                <input className="login-input" placeholder="Street/Area" type="text" value={add.last_name}/>
                </div>
            </div>
                <div className="login-row">
                    <div className="row-input">
                    <label>Mobile no.</label>
                    <input className="login-input" placeholder="Street/Area" type="text" value={add.telephone}/>
                    </div>
                </div>
                    <div className="login-row">
                <div className="row-input">
                <label>Address line 1</label>
                <input className="login-input" placeholder="Flat No./House No./Apartment Name" type="text" value={add.address_1}/>
                </div>
                <div className="row-input">
                <label>Address line 2</label>
                <input className="login-input" placeholder="Street/Area" type="text" value={add.address_2}/>
                </div>
            </div>
            
            <div className="login-row">
                <div className="row-input">
                <label>City</label>
                <input className="login-input" placeholder="City" type="text" value={add.city}/>
                </div>
                <div className="row-input">
                <label>State</label>
                <input className="login-input" placeholder="State" type="text" value={add.state}/>
                </div>
            </div>
            <div className="login-row">
                <div className="row-input">
                <label>Country</label>
                <input className="login-input" placeholder="Country" type="text" value={add.country}/>
                </div>
                <div className="row-input">
                <label>Pincode</label>
                <input className="login-input" placeholder="Pincode" type="text" value={add.pin_code}/>
                </div>
            </div>
            <div className="login-row">
            <button className="outlined" onClick={(e)=>handleDeleteAddress(add.address_id,e)}>Delete address</button>
            </div>
            </>
                )
            })}
            
                
                <button onClick={()=>history.push('/change-password')} className="login">Change Password</button>
                <button className="outlined" onClick={handleAddAdress}>Add address</button>
                
           
            
                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

export default EditProfile
