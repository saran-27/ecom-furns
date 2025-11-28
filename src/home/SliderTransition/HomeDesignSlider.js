import React from 'react'
import img1 from '../../images/ST-1.jpeg'
import img2 from '../../images/ST-2.jpeg'
import img3 from '../../images/ST-3.jpeg'


function HomeDesignSlider() {
  const homedesign=[
    {id:1,image:img1,date:'jan 27,2027',tittle:'luxary home design',detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',button:'Read More'},
    {id:2,image:img2,date:'feb 14,2027',tittle:'luxary home design',detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',button:'Read More'},
    {id:3,image:img3,date:'july 12,2025',tittle:'luxary home design',detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',button:'Read More'}

  ]

  return (
    <div className='container'>
      <div className='row HomeDesign mt-4 p-0 p-md-5'>
        {homedesign.map((home)=>(
            <div className='HD-1 col-md-4' key={home.id}>
              <img src={home.image} alt='homeinterior'></img>
              <div className='HD-content mt-2'>
                <a href='/'>{home.date}</a>
                <h4>{home.tittle}</h4>
                <p> {home.detail}</p>
                <button className='btn slider-btn-1 bg-info'>{home.button}</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeDesignSlider