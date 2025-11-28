import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider2 from '../../images/slider-2.png';
import Slider1 from '../../images/slider-1.png';

function Slider() {
  return (
    <div className='container slider-area'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className='row align-items-center'>
            <div className='slider-section col-md-6 text-center text-md-start mb-5 mb-md-0'>
              <h1>Flexible chair</h1>
              <p>
                Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor
                incididunt ut labore et dolore magna
              </p>
              <button className='btn btn-info mt-3'>Shop Now</button>
            </div>
            <div className='col-md-6 text-center'>
              <img
                src={Slider1}
                alt="First slide"
                className='img-fluid'
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='row align-items-center'>
            <div className='slider-section col-md-6 text-center text-md-start mb-5 mb-md-0'>
              <h1>Flexible Sofa</h1>
              <p>
                Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor
                incididunt ut labore et dolore magna
              </p>
              <button className='btn btn-info mt-3'>Shop Now</button>
            </div>
            <div className='col-md-6 text-center'>
              <img
                src={Slider2}
                alt="Second slide"
                className='img-fluid'
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
