import React from 'react'
import '../Eyewear/Eyewear.css'
import {Link} from 'react-router-dom'

function Bifocal() {
    return (
        <div className="main-container">
            <div className="categories">
                <span className="category-heading">Categories</span>
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
                <span className="desc">Home / Reading Glasses / Bifocal</span>
                <span className="category-heading">Bifocal</span>
                <span className="desc">under this section we provide you with all the accessories required to help you taking care of your products</span>
                <span className="desc">Showing all 2 results</span>
                <div className="products">
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/bio_true_1_1-300x133.jpg" alt="product"/>
                        <span>Bio true 60 ml</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                    </div>
                    <div className="product" style={{border:'none'}}>
                        <img src="https://s2seyewear.com/wp-content/uploads/2021/09/bio_true_1_1-300x133.jpg" alt="product"/>
                        <span>Bio true 60 ml</span>
                        <span style={{color:'rgb(34, 114, 160)'}}>₹799.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bifocal
