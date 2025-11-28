import React from 'react';
import img from '../images/zoomImage.jpeg';
import TopHeader from '../home/TopHeader/TopHeader';
import NavBars from'../NavBars';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Counter from './Counter';
import ProductsCard from '../home/ProductsCard/ProductsCard';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import FooterSection from '../home/FooterSection/FooterSection'


function Products() {
  return (
    <div>
      <TopHeader></TopHeader>
      <NavBars></NavBars>
      <div className='container mt-3 pt-3'>
        <div className='row align-items-center'>
          <div className='product-header mt-3 col-6 col-md-6'>
          <h1>1.single seater sofa</h1>
        </div>
        <div className=' col-6 col-md-6 mt-3' >
           <Breadcrumb className='d-flex justify-content-start p-3'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                1.single seater sofa
              </Breadcrumb.Item>
            </Breadcrumb>
        </div>
        </div>
      </div>
      <div className='container mt-4'>     
        <div className='row justify-content-between'>
          <div className='productZoom col-md-6'>
            <Zoom>
              <img
                alt="Product"
                src={img}
                className="img-fluid"
              />
            </Zoom>
      </div>
      <div className='product-left-side-info col-md-6'>
        <h4>1.single seater sofa</h4>
        <h5>$100<span className='old-price'><del>$200</del></span></h5>
        <p> single-seater sofa is a stylish, space-saving, and comfortable seating solution that works well in both small and large homes.</p>
        <Counter></Counter>
        <button className='btn products-buttons-1'>Add  to cart</button>
        <button className='btn products-buttons-2'>Buy it now</button>
        <ul>
          <li className='d-flex justify-content-start align-items-center'><span className='products-wishlist'><i class="fa fa-heart"></i></span><a href='#'>Add to wishlist</a></li>
        </ul>
        <h2>SKU: 1510</h2>
        <ul className='product-share d-flex justify-content-start align-items-center'>
          <li>Share:</li>
          <li><a href='/'><i class="fa fa-facebook-square"></i></a></li>
          <li><a href='/'><i class="fa fa-twitter-square"></i></a></li>
          <li><a href='/'><i class="fa fa-pinterest-square"></i></a></li>
        </ul>
      </div>
        </div>
      </div>
      <div className='container mt-3 pt-3'>
        <div className='related-product-head mb-3 mx-2 '>
            <h1>related products</h1> 
        </div>
        <ProductsCard></ProductsCard>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}

export default Products;
