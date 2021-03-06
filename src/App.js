import React,{useEffect} from 'react';
import './App.css';
import Copyright from './Components/Footer/Copyright';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Eyewear from './Components/Eyewear/Eyewear';
import Accessory from './Components/Accessories/Accessory';
import Mlenses from './Components/Mlenses/Mlenses';
import Bifocal from './Components/ReadingGlasses/Bifocal';
import Single from './Components/ReadingGlasses/Single';
import Male from './Components/Gender/Male';
import Female from './Components/Gender/Female';
import Kids from './Components/Gender/Kids'
import Sunshades from './Components/Sunshades/Sunshades';
import Trending from './Components/Trending/Trending';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import EyewearProduct from './Components/Eyewear/EyewearProduct';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import EditProfile from './Components/Login/EditProfile';
import ChangePassword from './Components/Login/ChangePassword';
import {login} from './features/userslice'
import { useDispatch } from 'react-redux'


function App() {

  const dispatch=useDispatch();
  

  useEffect(()=>{
    if(localStorage.getItem('email')){
    dispatch(login({
      email:localStorage.getItem('email'),
      password:localStorage.getItem('password'),
      loggedIn:localStorage.getItem('loggedIn')
    }))
  }
  },[])


  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/eyewear" component={Eyewear}/>
        <Route exact path="/accessories" component={Accessory}/>
        <Route exact path="/magic-lenses" component={Mlenses}/>
        {/* <Route path="/bifocal" component={Bifocal}/>
        <Route path="/single-vision" component={Single}/>
        <Route path="/male" component={Male}/>
        <Route path="/female" component={Female}/>
        <Route path="/kids" component={Kids}/> */}
        <Route exact path="/sun-shades" component={Sunshades}/>
        <Route exact path="/trending" component={Trending}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/product/eyewear" component={EyewearProduct}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/edit-profile" component={EditProfile}/>
        <Route exact path="/change-password" component={ChangePassword}/>
      </Switch>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;
