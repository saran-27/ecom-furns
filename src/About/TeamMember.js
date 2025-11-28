import React from 'react'
import img1 from '../images/box1.jpeg'
import img2 from '../images/box2.webp'
import img3 from '../images/box3.webp'
import img4 from '../images/box4.webp'

function TeamMember() {
    const TeamImage=[
        {id:1,img:img1,name:'Lisa Antonia',role:'developer'},
        {id:2,img:img2,name:'john wick',role:'Founder'},
        {id:3,img:img3,name:'Lisa Antonia',role:'CEO'},
        {id:4,img:img4,name:'john snow',role:'hacker'}
    ]
  return (
    <div className='container bg-light mt-5'>
        <div className='row OurTeam'>
            {TeamImage.map((ourTeam)=>(
              <div className='teams col-md-3' key={ourTeam.id}>
                <div className='team-img'>
                    <img src={ourTeam.img} alt='girl-image'></img>
                <div className='roles'>
                    <h4>{ourTeam.name}</h4>
                    <p>{ourTeam.role}</p>
                </div>
                </div>
            </div>  
            ))}
        </div>
    </div>
  )
}

export default TeamMember
