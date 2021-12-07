import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Eyewear.css'
import Options from './Options';
import Lens from './Lens'
import coin from '../../images/product.png'
import heart from '../../images/heart.svg'
import bag from '../../images/bag.svg'
import axios from 'axios';

function Eyewear() {
    const history=useHistory()
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);


    const [pid,setPid]=useState();
    const handleAddToCart=(id)=>{
        setShow(true);
        setPid(id);
        
    }

    const closeModal=(success,e)=>{
        // e.preventDefault()
        setShow(false);
        if(success) setShow2(true)
    }


    
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.post('http://s2seyewearfortesting.pythonanywhere.com/api/products/')
        .then(res=>{
            //console.log(res)
            setProducts(res.data.Products)
        })
        .catch(err=>console.log(err))
    },[products])


    const [gender,setGender]=useState("all")
    


    const genderData={
    "Gender":gender

    }

    // const showProducts=()=>{
    //     if(gender==="all"){
    //         axios.post('http://s2seyewearfortesting.pythonanywhere.com/api/products/')
    //         .then(res=>{
    //             console.log(res.data.Products)
    //             setProducts(res.data.Products);
    //         }
    //         )
    //         .catch(err=>console.log(err))
    //     }

    //     else{
    //         axios.post('http://s2seyewearfortesting.pythonanywhere.com/api/products_by_gender/',genderData)
    //         .then(res=>{
    //             console.log(res)
    //             setProducts(res.data.Products);
    //         }
    //         )
    //         .catch(err=>console.log(err))
    //     }

        
    // }




    return (
        <div className="main-container">
            <div className="categories">
                <span className="category-heading" style={{position:'relative',bottom:'25px'}}>Categories</span>
                <span className="category-item"><Link to="/accessories" className="link">Accessories</Link></span>
                <span className="category-item"><Link to="/eyewear" className="link">Eye Glasses</Link></span>
                {/* <span className="category-item">Gender</span>
                <span className="sub-category-items"><Link to="/male" className="link">Male</Link></span>
                <span className="sub-category-items"><Link to="/female" className="link">Female</Link></span>
                <span className="sub-category-items"><Link to="/kids" className="link">Kids</Link></span> */}
                <span className="category-item"><Link to="/magic-lenses" className="link">Contact Lenses</Link></span>
                {/* <span className="category-item">Reading Glasses</span>
                <span className="sub-category-items"><Link to="/bifocal" className="link">Bifocal</Link></span>
                <span className="sub-category-items"><Link to="/single-vision" className="link">Single vision</Link></span> */}
                <span className="category-item"><Link to="/sun-shades" className="link">Sun Shades</Link></span>
                <span className="category-item"><Link to="/trending" className="link">Trending</Link></span>
                
                
            </div>
            <div className="result">
                
                <span className="category-heading" style={{paddingLeft:'30px'}}>Eyewear</span>
                <span className="desc">Home | Eyewear</span>
                <span className="desc2">under this section we provide you with all the accessories required to help you taking care of your products</span>
                <span className="desc" style={{fontSize:'14px'}}>Showing all 2 results</span>
                <div className="filters">
                    <select value={gender} onChange={(e)=>setGender(e.target.value)}> 
                        <option value="Male" name="men">Men</option>
                        <option value="Female" name="women">Women</option>
                        <option value="Kids" name="kids">Kids</option>
                        <option value="all" name="all">All</option>
                    </select>
                </div>
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
                        
                        {/* <div className="card">
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
                        </div> */}
                        {
                            products.map((item,idx)=>{
                                return(
                                    <div className="card">
                                                <img src={coin} onClick={()=>history.push('/product/eyewear')}/>
                                                <hr className="line"/>
                                                <span style={{fontSize:'12px'}} onClick={()=>history.push('/product/eyewear')}>{item.name}</span>
                                                
                                                
                                                <span className="price1">{item.after_sale_price}</span>
                                                <span className="price2">{item.actual_price}</span>
                                                <hr className="line"/>
                                                <div className="buy-options">
                                                    <span onClick={()=>handleAddToCart(item.pid)}><img src={bag}/></span>
                                                    <div className="vertical-line"></div>
                                                    <span><img src={heart}/></span>
                                                </div>
                                            </div>
                                )
                            })
                        }
                </div>
            </div>
            <Options show={show} onHide={(e)=>closeModal(1,e)}/>
            <Lens show={show2} onHide={()=>setShow2(false)} pid={pid}/>
        </div>
    )
}

export default Eyewear
