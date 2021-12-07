import React from 'react'
import '../Eyewear/Eyewear.css'
import {Link,useHistory} from 'react-router-dom'
import coin from '../../images/product.png'
import heart from '../../images/heart.svg'
import bag from '../../images/bag.svg'



function Accessory() {
    const history=useHistory();
    const handleAddToCart=()=>{
        history.push('/cart')
    }

    return (
        <div className="main-container">
            <div className="categories">
                <span className="category-heading" style={{position:'relative',bottom:'25px'}}>Categories</span>
                <span className="category-item"><Link to="/accessories" className="link">Accessories</Link></span>
                <span className="category-item"><Link to="/eyewear" className="link">Eye Glasses</Link></span>
                <span className="category-item">Gender</span>
                <span className="sub-category-items"><Link to="/male" className="link">Male</Link></span>
                <span className="sub-category-items"><Link to="/female" className="link">Female</Link></span>
                <span className="sub-category-items"><Link to="/kids" className="link">Kids</Link></span>
                <span className="category-item"><Link to="/magic-lenses" className="link">Contact Lenses</Link></span>
                <span className="category-item">Reading Glasses</span>
                <span className="sub-category-items"><Link to="/bifocal" className="link">Bifocal</Link></span>
                <span className="sub-category-items"><Link to="/single-vision" className="link">Single vision</Link></span>
                <span className="category-item"><Link to="/sun-shades" className="link">Sun Shades</Link></span>
                <span className="category-item"><Link to="/trending" className="link">Trending</Link></span>
                
                
            </div>
            <div className="result">
                
                <span className="category-heading" style={{paddingLeft:'30px'}}>Accessories</span>
                <span className="desc">Home | Accessories</span>
                <span className="desc2">under this section we provide you with all the accessories required to help you taking care of your products</span>
                <span className="desc" style={{fontSize:'14px'}}>Showing all 2 results</span>
                <div className="card-container">
                    {/* <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/07/a1_19-300x133.jpg" alt="product" onClick={()=>history.push('/product/eyewear')}/>
                        <span style={{cursor:'pointer'}} onClick={()=>history.push('/product/eyewear')}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                        <span style={{textTransform:'uppercase',color:'black',cursor:'pointer'}} onClick={handleAddToCart}>Add to cart</span>
                    </div>
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/1_6427-300x133.jpg" alt="product" onClick={()=>history.push('/product/eyewear')}/>
                        <span style={{cursor:'pointer'}} onClick={()=>history.push('/product/eyewear')}>Black Cateye Style Metal Acetate Frame – Computer Spex (Zero Power)</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹1,799.00</span>
                        <span style={{textTransform:'uppercase',color:'black',cursor:'pointer'}} onClick={handleAddToCart}>Add to cart</span>
                    </div> */}
                        <div className="card">
                            <img src={coin} onClick={()=>history.push('/product/eyewear')}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}} onClick={()=>history.push('/product/eyewear')}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span onClick={handleAddToCart}><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={coin} onClick={()=>history.push('/product/eyewear')}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}} onClick={()=>history.push('/product/eyewear')}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span onClick={handleAddToCart}><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Accessory
