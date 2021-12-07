import React from 'react'
import './Products.css'
import coin from '../../images/product.png'
import heart from '../../images/heart.svg'
import bag from '../../images/bag.svg' 

function Products() {
    return (
        <>
        <h2 className="green-heading">Top selling</h2>
        <div className="card-container">
        <div className="card">
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
            <div className="card">
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
            <div className="card">
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
            
            <div className="card">
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}}>Blue Oval Full Rim TR-90 Frame-Computer Spex (Zero Power)</span>
                            
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
            
        </div>
        </>
    )
}

export default Products
