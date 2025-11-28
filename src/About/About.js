
import React from 'react'
import TopHeader from '../home/TopHeader/TopHeader';
import NavBars from'../NavBars';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img1 from '../images/ST-4.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TeamMember from './TeamMember';
import SlickSlider from './SlickSlider';
import FooterSection from '../home/FooterSection/FooterSection'



function About() {
  return (
    <div>
      <TopHeader></TopHeader>
      <NavBars></NavBars>
       <div className='login-head mt-5 d-flex justify-content-center'>
              <div className='contact-info mt-3 col-md-6'>
            <h2>about us</h2>
          </div>
          <div className='current-page mt-3 col-md-6'>
            <Breadcrumb className='d-flex justify-content-center'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                About
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          </div>
          <div className='container'>
              <div className='row aboutus-info'>
                <div className='col-md-6 aboutus-img'>
                  <img src={img1} alt='home design'></img>
                </div>
                <div className='aboutus-content col-md-6'>
                  <h2>Welcome To Furns</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus dolorum voluptate, animi libero officiis eveniet accusamus recusandae. Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro suscipit. Quibusdam culpa asperiores exercitationem architecto quo distinctio sed dolorem!
Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora iusto eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam accusantium minus repellendus laudantium provident quod recusandae exercitationem natus dignissimos.</p>
                
                </div>
              </div>
          </div>
          <div className='container bg-light'>
            <div className='trend'>
            <div class="row justify-content-evenly align-items-center">
              <div className='trend-left col-md-6'>
                  <h4>Functionality Meets Perfection</h4>
                  <p>In today’s day and age, one cannot underestimate the importance of design, the art of creating striking visuals to move and captivate your audience. And as the world becomes more and more digitized with each passing second, the importance of graphic design has been rocketed to the top.</p>
              </div>
              <div className='trend-right mt-3  col-md-6'>
                  <div className='trend-bars'>
                    <h2>front end dev</h2>
                    <ProgressBar variant="success" now={40} />
                    <h2>back end dev</h2>
                    <ProgressBar variant="info" now={60} />
                    <h2>full stack dev</h2>
                    <ProgressBar variant="warning" now={80} />
                </div>
              </div>
            </div>
          </div>
          </div>
          <TeamMember></TeamMember>
          <SlickSlider></SlickSlider>
          <br></br>
          <FooterSection></FooterSection>
    </div>
  )
}

export default About