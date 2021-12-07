import React from 'react'
import './Testimonials.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonials() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="test-container">
            <h3>Our customers are our biggest fans</h3>
           <Carousel responsive={responsive} className="review-carouesl">
                <div className="review-item">
                    <div className="user">
                        <img src="https://otakukart.com/wp-content/uploads/2021/05/noah-centineo.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>Noah Centineo</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                <div className="review-item">
                    <div className="user">
                        <img src="https://assets.popbuzz.com/2019/14/who-plays-hardin-scott-in-after-is-it-about-harry-styles-1555098962-view-0.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>Hardin Scott</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                <div className="review-item">
                    <div className="user">
                        <img src="https://otakukart.com/wp-content/uploads/2021/05/noah-centineo.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>Noah Centineo</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                <div className="review-item">
                    <div className="user">
                        <img src="https://cdn3.whatculture.com/images/2021/02/9238e3baabccfcad-600x338.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>Klaus Mikaelson</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                <div className="review-item">
                    <div className="user">
                        <img src="https://media.gq.com/photos/55d25378606992214f1ecc7d/16:9/w_2560%2Cc_limit/The-Weekend-GQ-2015-01.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>The Weeknd</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                <div className="review-item">
                    <div className="user">
                        <img src="https://otakukart.com/wp-content/uploads/2021/05/noah-centineo.jpg" alt="user"/>
                        <div className="user-detail">
                            <span>Noah Centineo</span>
                            <span>Miami | Florida</span>
                        </div>
                    </div>
                    <p>“Aliquet ultricies risus elit sollicitudin orci interdum amet, non orci. Consectetur dui nunc turpis vehicula cursus in commodo sed. A volutpat est eu ornare lacus massa et. Magna eu, hendrerit amet, integer ornare lobortis cursus. Euismod tristique nunc, lectus elementum gravida urna fermentum.”</p>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Testimonials
