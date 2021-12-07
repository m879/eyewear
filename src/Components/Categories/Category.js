import React from 'react'
import './Category.css' 
import category from '../../images/category.png'
import {Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const categoryName=[
    {name:'Men eyewear'},
    {name:'Women eyewear'},
    {name:'Kids eyewear'},
    {name:'Men sunglasses'},
    {name:'Women sunglasses'},
    {name:'Kids sunglasses'}
]

function Category() {
    return (
        <>
        <h2 className="green-heading">Categories</h2>
        <div className="category-container">
                <Row>
                    {
                        categoryName.map((row) => (
                            <Col lg={4} xs={12}>
                                <NavLink to='/eyewear' style={{textDecoration:'none'}}>
                                <div className="category">
                                    <img src={category} alt="men" />
                                    <span>{row.name}</span>
                                </div>
                                </NavLink>
                            </Col>
                        ))
                    }
                </Row>
            {/* <div className="category">
                <img src={category} alt="men"/>
                <span>Women eyewear</span>
            </div>
            <div className="category">
                <img src={category} alt="men"/>
                <span>Kids eyewear</span>
            </div>
            <div className="category">
                <img src={category} alt="men"/>
                <span>Men sunglasses</span>
            </div> */}
        </div>
        </>
    )
}

export default Category
