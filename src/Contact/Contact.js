import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import TopHeader from '../home/TopHeader/TopHeader'
import NavBars from'../NavBars';
import FooterSection from '../home/FooterSection/FooterSection';

 
export class Contact extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         email:"",
         comments:"",
         subject:"",
      }
    }
  handleChange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      });
    };

  handlesSubmit=(event)=>{
    event.preventDefault();
    alert(`${this.state.username} ${this.state.email} ${this.state.subject} ${this.state.comments}`)
  }

  render() {
    return (
      <div className=''>
        <TopHeader></TopHeader>
        <NavBars></NavBars>
        <div className='row mt-4'>
          <div className='contact-info col-6 col-md-6'>
            <h2>contact us</h2>
          </div>
          <div className='current-page col-6 col-md-6'>
            <Breadcrumb className='d-flex justify-content-start justify-content-md-center'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                Contact us
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className=' container map mt-5 col-md-12'>
          <iframe  title="Office location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124458.46407346186!2d100.84035788953801!3d12.886682417703923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310295924d31d7e3%3A0xa97ff301a9bd10ff!2sPattaya%20City%2C%20Bang%20Lamung%20District%2C%20Chon%20Buri%2020150%2C%20Thailand!5e0!3m2!1sen!2sin!4v1763913599838!5m2!1sen!2sin" width="1300" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className=' form-start row mt-5'>
          <div className='col-md-4 contact-side'>
            <h2>contact info</h2>
            <div className='contact-detail-left'>
              <h2>phone:</h2>
              <div className='contact-detail-right'>
              <h4>+012 345 678 102<br></br>+012 345 678 102</h4>
            </div>
            </div> 
            <div className='contact-detail-left'>
             <h2>email:</h2>
             <div className='contact-detail-right'>
              <h4>thailand@gmail.com<br></br>thailand@gmail.com</h4>
             </div>
            </div>
            <div className='contact-detail-left'>
             <h2>address:</h2>
             <div className='contact-detail-right'>
              <h4>pattaya walking<br></br>st thailand</h4>
             </div>
            </div>
            <div className='contact-footer'>
            <h5>follow us</h5>
            <ul className='contact-icons'>
              <li><i class="fa fa-facebook-f"></i></li>
               <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-google-plus"></i></li>
                    <li><i class="fa fa-youtube-play"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
            </ul>
          </div>
          </div>
          <div className='register-form col-md-8'>
            <div className='register-detail'>
              <h2>Get In touch</h2>
              <div className='register-input'>
                <form action='#' onSubmit={this.handlesSubmit}>
                  <div className='form-head row align-items-center'>
                  <div className='col-md-6 mb-2'>
                    <input type='text' name='username' placeholder='Your Name*' onChange={this.handleChange} value={this.state.username}></input>
                  </div>
                  <div className='col-md-6'>
                     <input type='text' name='email' placeholder='Your Email*' onChange={this.handleChange} value={this.state.email}></input>
                  </div>
                  </div>
                  <div className='form-mid'>
                    <input type='text' name="subject" placeholder='Subject'onChange={this.handleChange} value={this.state.subject}></input>
                  </div>
                  <div className='form-end'>
                    <textarea placeholder='Type Your Msg' name='comments' onChange={this.handleChange} value={this.state.comments}></textarea>
                  </div>
                  <div className='row justify-content-center m-0 align-items-center'>
                    <div>
                    <button className='btn bg-info contact-btn-1' name='button' onChange={this.handleChange} value={this.state.button}>Submit</button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <FooterSection></FooterSection>
      </div>
    )
  }
}

export default Contact