import React from 'react'
import Category from './Categories/Category'
import Cover from './Cover/Cover'
import MagicLenses from './MagicLenses/MagicLenses'
import Products from './Products/Products'
// import Newsletter from './Newsletter/Newsletter'
import Reading from './Reading/Reading'
import Testimonials from './Testimonials/Testimonials'
import Trendy from './Trendy/Trendy'

function Home() {
    return (
        <div style={{background:'#FFF1EC'}}>
          <Cover/>  
          <Category/>
          <Trendy/>
          <Products/>
          <MagicLenses/>
          <Reading/>
          <Testimonials/>
          {/* <About/> */}
          {/* <Newsletter/> */}
        </div>
    )
}

export default Home
