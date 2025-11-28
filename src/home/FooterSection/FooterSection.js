import React from 'react'

function FooterSection() {
  return (
    <div className='container-fluid'>
        <div className='row footer-sec text-center text-md-start'>
            <div className='Footer-Section col-md-4 mt-3'>
                <h4>ABOUT US</h4>
                <p>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <ul className='foot-sec-1'>
                    <li><i class="fa fa-facebook-f"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-google-plus"></i></li>
                    <li><i class="fa fa-youtube-play"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                </ul>
            </div>
            <div className='Footer-Section col-md-3 mt-3'>
                <h4>INFORMATION</h4>
                <ul className='mt-3'>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Delivery Information</a></li>
                    <li><a href='/'>Privacy & Policy</a></li>
                    <li><a href='/'>Terms & Condition</a></li>
                    <li><a href='/'>Manufactures</a></li>
                </ul>
            </div>
            <div className='Footer-Section col-md-3 mt-3'>
                <h4>MY ACCOUNT</h4>
                <ul className='mt-3'>
                    <li><a href='/'>My Account</a></li>
                    <li><a href='/'>My Cart</a></li>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/'>Wishlist</a></li>
                    <li><a href='/'>Checkout</a></li>
                </ul>
            </div>
            <div className='Footer-Section col-md-2 mt-3'>
                <h4>NEWSLETTER</h4>
                <form action="#">
                    <input class='last-foot' name='Email' type='text' placeholder='Enter Your Email'></input>
                </form>
                <button className='btn bg-info last-btn'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default FooterSection