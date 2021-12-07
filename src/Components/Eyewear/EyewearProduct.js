import React, { useState } from 'react'
import { Container,Tabs,Tab,Modal,Button } from 'react-bootstrap'
import StarRating from 'react-bootstrap-star-rating';
import { useHistory } from 'react-router';
import Options from '../Sunshades/Options';
import Lens from './Lens'


function EyewearProduct() {
    const history=useHistory();
    const [show, setShow] = useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);

    const handleClose = () => setShow3(false);
    const handleShow = () => setShow3(true);

    const handleAddToCart=()=>{
        setShow(true);
        
    }

    const closeModal=(success,e)=>{
        // e.preventDefault()
        setShow(false);
        if(success){
            setShow2(true);
        }    
    }



    const images=["https://s2seyewear.com/wp-content/uploads/2021/09/12_126-300x133.jpg","https://s2seyewear.com/wp-content/uploads/2021/09/13_118.jpg","https://s2seyewear.com/wp-content/uploads/2021/09/14_118.jpg"];
    const [selected,setSelected]=useState(images[0]);
 
    return (
        <>
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
                    <span className="name">Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)
</span>
                    <div className="prices">
                        <span className="striked">₹1,999.00</span>
                        <span>₹1,799.00</span>
                    </div>
                    <div className="purchase">
                        <input placeholder="Quantity" type="text"/>
                        <button className="addcart" onClick={handleAddToCart}>Add to cart</button>
                        <span className="size" onClick={handleShow}>Know your size</span>
                    </div>
                    <div className="characteristics">
                        <span>14 Day Return | Free Shipping | Quality Guaranteed</span>
                    </div>

                    
                   
                </div>
                
                </div>
                
                
                
            </div>
            <div className="tabs">
                    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3" style={{fontSize:'24px'}}>
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
                                    {/* <span>Your rating</span> */}
                                    
                                    <span>Your review</span>
                                    <textarea placeholder="Your review" style={{width:'100%',height:'250px'}}/>
                                </div>
                            </div>
                        </Tab>
                        
                    </Tabs>
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
            <Options show={show} onHide={(e)=>closeModal(1,e)}/>
            <Lens show={show2} onHide={()=>setShow2(false)}/>

           
        </>
    )
}

export default EyewearProduct
