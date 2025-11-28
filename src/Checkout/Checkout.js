
import TopHeader from '../home/TopHeader/TopHeader';
import NavBars from'../NavBars';
import img1 from '../images/paypal.png'
import img2 from '../images/shopping.png'
import img3 from '../images/visa.png'
import FooterSection from '../home/FooterSection/FooterSection';


import React from 'react'

function Checkout() {
  return (
    <div>
      <TopHeader></TopHeader>
      <NavBars></NavBars>
      <div className='container p-0 p-md-5'> 
        <div className='paymentpage row'>
          <div className='payment-method col-md-5'>
            <h3>ways to pay</h3>
            <ul className='payment-type p-0 px-md-3'>
              <li><i class="fa fa-credit-card-alt"></i>
              <h2>card</h2>
              </li>
              <li><i class="fa fa-bank"></i>
               <h2>bank transfer</h2></li>
              <li><i class="fa fa-qrcode"></i>
               <h2>pay with qr</h2></li>
              <li><i class="fa fa-money"></i>
               <h2>cash on delivery</h2></li>

            </ul>
          </div>
          <div className='payment-side col-md-6'>
            <h3>pay with card</h3>
            <h4>enter your card details</h4>
            <div className='payment-plateform'>
                <img src={img1} alt='paypal'></img>
                <img src={img2} alt='shopping'></img>
                <img src={img3} alt='paypal'></img>

            </div>
            <div className='payment-input mt-3'>
                <form action='#'>
                  <label for=''>card number</label><br></br>
                  <input type='text' placeholder='0000 0000 0000 0000' name='card-number'></input>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>expiry date</label>
                  <br></br>
                  <input type='text' placeholder='MM/YY' name='expiry'></input>
                  </div>
                  <div className='col-md-6'>
                  <label>cvv</label>
                  <br></br>
                  <input type='text' placeholder='123' name='cvv'></input>
                </div>
                </div>
                </form>
            </div>
            <div className='payment-button'>
              <button className='btn pay-button'>pay now</button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  )
}

export default Checkout