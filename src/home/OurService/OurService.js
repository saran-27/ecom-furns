import React from 'react'
import img1 from '../../images/vintage.jpg'
import img2 from '../../images/rust.jpg'
import img3 from '../../images/luxary.jpg'
import img4 from '../../images/scandinavian.webp'

function OurService() {
  const ServiceSlide=[
    {name:'vintage',image:img1,text:'Vintage Design'},
     {name:'rust',image:img2,text:'Rust Design'},
      {name:'luxary',image:img3,text:'Luxary Design'},
       {name:'scandinavian',image:img4,text:'Scandinavian Design'}
  ]

  return (
    <div className="container">
      <div className='row'>
        {ServiceSlide.map((design)=> (
          <div className='col-md-3' key={design.name}>
            <div className='OS-card'>
               <img src={design.image} alt="Avatar" class="OS-image"></img>
          <div class="overlay">
            <div class="text">{design.text}</div>
          </div>  
        </div>
        </div>
         ))}
    </div>
</div>
  )
}

export default OurService