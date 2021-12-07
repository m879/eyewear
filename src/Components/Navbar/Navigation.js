import React, { useState } from 'react'
import './Navbar.css'
import { Navbar, NavDropdown, Nav, Container, OverlayTrigger, Popover } from 'react-bootstrap'
import logo from '../../images/logo2.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../features/userslice'
import { logout } from '../../features/userslice'
import { useHistory } from 'react-router'

function Navigation() {

  const user = useSelector(selectUser)
  const [loggedin, setLoggedin] = useState();
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    localStorage.removeItem('email');
    localStorage.removeItem('password')
    history.push('/')

  }

  const popover = () => {
    return (
      <Popover>
        <div className="popover">
          <div className="cart-product">
            <img src="https://d1wwyfhxuarwk4.cloudfront.net/images/products/common/white/xl/4436-32-w_fun-shades-sunglasses-navy-blue4e76410a050c142b3b7a399cc8b96340.jpg" alt="glasses" />
            <span>White Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
          </div>
          <p className="price">1 x  ₹799</p>
          <p className="subtotal">Subtotal : ₹799</p>
          <p className="links">View Cart</p>
          <p className="links">Checkout</p>
        </div>
      </Popover>
    )
  }

  const searchpopover = () => {
    return (
      <Popover id="popover-basic" style={{ marginLeft: '200px', marginTop: '50px' }}>

        <input placeholder="Search" type="text" style={{ width: '100%', padding: '10px' }} />

      </Popover>
    )
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="#FFF1EC" variant="dark" style={{ background: '#FFF1EC', color: '#106894' }}>
      <Container>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Nav.Link href="/"><img src={logo} alt="logo" style={{ width: '80px' }} /></Nav.Link>
          </Nav>
          <OverlayTrigger trigger="click" placement="right" overlay={searchpopover}>
            <Navbar.Brand style={{ cursor: 'pointer' }}><i class="fas fa-search" style={{ color: '#106894', marginLeft: '20px' }}></i></Navbar.Brand>
          </OverlayTrigger>
          <Nav>
            {/* <Nav.Link href="#deets"><i class="fab fa-instagram"></i></Nav.Link>
      <Nav.Link href="#memes">
      <i class="fab fa-facebook"></i>
      </Nav.Link> */}
            <>
              <Nav className="me-auto" style={{ color: '#106894', marginLeft: '650px', marginTop: '3px' }}>
                <NavDropdown title={<span style={{ color: '#106894' }}>Shop</span>} id="collasible-nav-dropdown" style={{ color: '#106894' }}>
                  <NavDropdown.Item href="/eyewear">Eye Wear</NavDropdown.Item>
                  <NavDropdown.Item href="/sun-shades">Sunshades</NavDropdown.Item>
                  <NavDropdown.Item href="/bifocal">Reading Wear</NavDropdown.Item>
                  <NavDropdown.Item href="/magic-lenses">Contact Lenses</NavDropdown.Item>
                  <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="/contact" style={{ color: '#106894' }}>Contact</Nav.Link>
                <Nav.Link href="/about" style={{ color: '#106894', marginLeft: '20px' }}>About</Nav.Link>


              </Nav>
              <OverlayTrigger

                key="bottom"
                placement="bottom"
                overlay={
                  // <Tooltip id="tooltip-bottom">
                  //   cart
                  // </Tooltip>
                  popover()
                }
              >
                <Nav.Link href="/cart"><i class="fas fa-shopping-bag" style={{ fontSize: '30px', color: '#106894', marginLeft: '20px' }}></i></Nav.Link>
              </OverlayTrigger>

            </>


            <NavDropdown title={<i class="fas fa-user-circle" style={{ fontSize: '30px', color: '#106894', marginLeft: '20px' }}></i>} id="collasible-nav-dropdown">
              {user ? <><NavDropdown.Item onClick={(e) => handleLogout(e)}>Logout</NavDropdown.Item>
                <NavDropdown.Item href="/edit-profile">Edit Profile</NavDropdown.Item></> : <NavDropdown.Item href="/login">Login</NavDropdown.Item>}


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
