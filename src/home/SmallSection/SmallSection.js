import React from 'react'

function SmallSection() {
  return (
    <div className='container'>
       <div className='small-sec row small-sec text-center col-md-12'>
         <h1>our products</h1>
        <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
        </div>
          <div className='small-sec'>
            <ul className="row mt-4">
            <div className='col-md-4'>
              <li><a href='/'>new arrivals</a></li>
            </div>
            <div className='col-md-4'>
              <li><a href='/'>top products</a></li>
            </div>
            <div className='col-md-4'>
              <li><a href='/'>top rated</a></li>
            </div>
        </ul>
          </div>     
    </div>
  )
}

export default SmallSection