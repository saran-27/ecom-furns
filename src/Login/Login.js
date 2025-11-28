
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import TopHeader from '../home/TopHeader/TopHeader';
import NavBars from'../NavBars';
import FooterSection from '../home/FooterSection/FooterSection';


import React, { Component } from 'react'

export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        email:"",
        password:""
    }

   
  }
   handleChange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      });
    }

    handleSubmit=(event)=>{
      event.preventDefault();
      alert(`${this.state.email} ${this.state.password}`)
    }
  render() {
    return (
      <div className='row  Login-form-head'>
        <TopHeader></TopHeader>
        <NavBars></NavBars>
          <div className='login-head mt-3 d-flex justify-content-center'>
              <div className='contact-info mt-3 col-md-6'>
            <h2>Login/sign up</h2>
          </div>
          <div className='current-page mt-3 col-md-6'>
            <Breadcrumb className='d-flex justify-content-center'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                Login
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          </div>
            <div className='login-body'>
                 <div className='login-forms-detail'>
            <h4>Login</h4>
            <p>Please login using account detail bellow.</p>
            <form action="#" onSubmit={this.handleSubmit}>
              <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}></input>
              <br></br>
              <input type='text' name='password' placeholder='Enter Your Password' value={this.state.password} onChange={this.handleChange}></input>
                <div className='login-form-end'>
                <div>
                    <button className='btn bg-info' onChange={this.handleChange} value={this.state.button}>Submit</button>
                </div>            <ul>
              <li><a href='/'>forgot password?</a></li>
            </ul>
          </div>
            </form>
          </div>
            </div>
            <FooterSection></FooterSection>
        </div>
    )
  }
}

export default Login