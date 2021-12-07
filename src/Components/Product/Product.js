import React, { useState } from 'react'
import { Container,Tabs,Tab,Modal,Button } from 'react-bootstrap'
import StarRating from 'react-bootstrap-star-rating';
import { useHistory } from 'react-router';
import Options from '../Sunshades/Options';
import './Product.css'
import axios from 'axios'


function Product() {
    const history=useHistory();
    const [descShow,setDescShow]=useState(true);
    const [show, setShow] = useState(false);
    const [show2,setShow2]=useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const images=["https://s2seyewear.com/wp-content/uploads/2021/09/12_126-300x133.jpg","https://s2seyewear.com/wp-content/uploads/2021/09/13_118.jpg","https://s2seyewear.com/wp-content/uploads/2021/09/14_118.jpg"];
    const [selected,setSelected]=useState(images[0]);
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('email');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')

    const [quantity,setQuantity]=useState(1);
 
    if(quantity<0){
        setQuantity(0);
    }



 
    return (
        <div style={{background:'#FFF1EC'}}>
            <div className="product-header">
                <h3 className="product-heading">Product details</h3>
                <span className="size" onClick={handleShow}>Know your size</span>
            </div>
            
            <div className="productDetails-container">
                <div className="detail-container">
                <div className="product-images">
                    <div className="img-wrapper">
                        <img src={selected} className="selected"/>
                    </div>
                    
                    <div className="small-images">
                        {/* <img src={r3} style={{width:'100px'}}/>
                        <img src={r2} style={{width:'100px'}}/>
                        <img src={r1} style={{width:'100px'}}/> */}
                        
                        {images.map((img,idx)=>{
                            return(
                                <img src={img} style={{width:'200px'}} key={idx} onClick={()=>setSelected(img)}/>
                            )
                        })}
                    </div> 
                </div>
                <div className="details">
                    <span className="name">Black Oval Full Rim Acetate Frame With Gradient Grey UV Sun Lens</span>
                    <div className="characteristics">
                        <span>14 Day Return | Free Shipping | Quality Guaranteed</span>
                    </div>
                    <div className="prices">
                        <span>₹1,799.00</span>
                        <span className="striked">₹1,999.00</span>
                        
                    </div>
                    <div className="purchase">
                        <div>
                            <input placeholder="Enter quantity" type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                            <Button className='border-radius-0' onClick={()=>setQuantity(quantity+1)}>+</Button>
                            <Button className='border-radius-0' onClick={()=>setQuantity(quantity-1)}>-</Button>
                        </div>
                        <button className="outlined">Check</button>
                    </div>
                    <div className="purchase">
                        
                        <button className="addcart" onClick={()=>history.push('/cart')}>Add to cart</button>
                        <button className="addcart" onClick={()=>setShow2(true)}>Buy with prescription</button>
                        
                    </div>
                    

                    
                   
                </div>
                
                </div>
                
                
                
            </div>
            <div className="tabs">
                    {/* <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3" style={{fontSize:'24px'}}>
                        <Tab eventKey="description" title="Description" style={{fontSize:'20px'}}>
                            <div className="desc">
                                <span>Frame Features : </span>
                                <span>• Frame Size : Medium</span>
                                <span>• Gender : Women</span>
                                <span>• Age Group : Adult</span>
                                <span>• Frame Colour : Black Glossy</span>
                                <span>• Temple Colour : Black Glossy</span>
                                <span>• Lens Colour : Gradient Grey Black</span>
                                <span>Lens Features : </span>
                                <span>• Polarised Polycarbonate lenses</span>
                                <span>• UV 400 Protection</span>
                                <span>• Scratch resistance</span>
                                <span>• Crack resistance</span>
                                <span>• Very High Quality Finish</span>
                                <span>• Spring hinge</span>
                                <span>• 14 days replacement warranty against manufacturing defects.</span>
                                <span>Style : </span>
                                <span>Whether you’re a traveller or a day dreamer, it’s way too easy to protect your eyes now, thanks to the J-A30126-A1 that features Half-Rim acetate frame to maximize your comfort level offering premium quality gradient grey polarized UV sunlglasses that you can buy online to make sure that you can shine even in brightest sunshine. The oval lenses sets the benchmarks and looks super funky on every women with the perfect black glossy finish.</span>
                            </div>
                        </Tab>
                        <Tab eventKey="reviews" title="Reviews(0)">
                            <div className="reviews-container">
                                <div className="review-box">
                                    <h4 className="big-text">Reviews</h4>
                                    <span>There are no reviews yet.</span>
                                </div>
                                <div className="write-review">
                                    <span className="big-text">Be the first to review “Black Oval Full Rim Acetate Frame with Gradient Grey UV Sun Lens”</span>
                                    
                                    
                                    <span>Your review</span>
                                    <textarea placeholder="Your review" style={{width:'100%',height:'250px'}}/>
                                </div>
                            </div>
                        </Tab>
                        
                    </Tabs> */}
                    <div className="tab-buttons">
                        <button className={descShow?'active':''} onClick={()=>setDescShow(true)}>Description</button>
                        <button className={!descShow?'active':''} onClick={()=>setDescShow(false)}>Reviews(2)</button>
                    </div>
                    {descShow && 
                        <div className="desc">
                        <span><b>Frame Features : </b></span>
                        <span>• Frame Size : Medium</span>
                        <span>• Gender : Women</span>
                        <span>• Age Group : Adult</span>
                        <span>• Frame Colour : Black Glossy</span>
                        <span>• Temple Colour : Black Glossy</span>
                        <span>• Lens Colour : Gradient Grey Black</span>
                        <span><b>Lens Features : </b></span>
                        <span>• Polarised Polycarbonate lenses</span>
                        <span>• UV 400 Protection</span>
                        <span>• Scratch resistance</span>
                        <span>• Crack resistance</span>
                        <span>• Very High Quality Finish</span>
                        <span>• Spring hinge</span>
                        <span>• 14 days replacement warranty against manufacturing defects.</span>
                        <span><b>Style : </b></span>
                        <span>Whether you’re a traveller or a day dreamer, it’s way too easy to protect your eyes now, thanks to the J-A30126-A1 that features Half-Rim acetate frame to maximize your comfort level offering premium quality gradient grey polarized UV sunlglasses that you can buy online to make sure that you can shine even in brightest sunshine. The oval lenses sets the benchmarks and looks super funky on every women with the perfect black glossy finish.</span>
                    </div>
                    
                    }
                    {!descShow && 
                        <div className="reviews-container">
                        
                        <div className="write-review">
                            <span className="big-text">Let us know your views</span>
                            
                            
                            <textarea placeholder="Your review"/>
                            <button>Post review</button>
                        </div>
                        <div className="review-box">
                            <h4 className="big-text">Reviews</h4>
                            <div className="review-item">
                                <span className="user-name">Sanjay kumar</span>
                                <span className="verified">Verified buyer</span>
                                <span className="review-text">Leo posuere molestie in consequat quam. Nisl arcu etiam proin praesent porttitor dignissim ipsum. Arcu ullamcorper nam placerat dignissim aliquam ut pellentesque in elit. Lacinia sodales neque urna at neque, semper massa. Purus, mattis ultricies justo, sed nunc tempus iaculis.</span>
                            </div>
                            <div className="review-item">
                                <span className="user-name">deepak yadav</span>
                                <span className="verified">Verified buyer</span>
                                <span className="review-text">Leo posuere molestie in consequat quam. Nisl arcu etiam proin praesent porttitor dignissim ipsum. Arcu ullamcorper nam placerat dignissim aliquam ut pellentesque in elit. Lacinia sodales neque urna at neque, semper massa. Purus, mattis ultricies justo, sed nunc tempus iaculis.</span>
                            </div>
                        </div>
                    </div>
                    
                    }
            </div>
            
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    <div className="know-your-size">
                        <div className="sec">
                            <span><b>Measuring Frames with Ruler</b></span>
                            <span>There may be a possibility that the measurement on your current frames is faded or is not printed. In this case, you will need a millimeter ruler or a cloth measuring tape to measure the frame yourself. Find size as shown above and purchase your next set of eyeglasses or sunglasses without any hassle.</span>\
                            <img src="https://s2seyewear.com/wp-content/uploads/2021/09/size-guide_img_measuringframe_5jan18.jpg" alt="ruler"/>
                        </div>
                        <div className="sec">
                            <img src="https://s2seyewear.com/wp-content/uploads/2021/09/msedge_llntISG5ID-e1632715779168.png" alt="glass sizes"/>
                            <img src="https://s2seyewear.com/wp-content/uploads/2021/09/eyeglasses-size11jan-e1632715179131.jpg" alt="glass"/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal> 
            <Options show={show2} onHide={()=>setShow2(false)} quantity={quantity}/>

           
        </div>
    )
}

export default Product
