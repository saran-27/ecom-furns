import React from 'react'
import Card1 from '../../images/gall-1.jpeg'
import Card2 from '../../images/card-gallery-2.jpeg'
import Card3 from '../../images/card-gallery-3.jpeg'

function CardGallery() {
    const CardGallery=[
        {id:1,name:'new flower pots',image:Card1,buy:'shop now'},
         {id:2,name:'new living room',image:Card2,buy:'shop now'},
          {id:3,name:'new children room',image:Card3,buy:'shop now'}
    ]
  return (
    <div className='container'>
        <div className='row CardGallery'>
            {CardGallery.map((cards)=>(
                <div className='Card-gallery-1 col-md-4' key={cards.id}>
                <div className='card-1'>
                    <img className='card-img' src={cards.image}
                    alt='flowerpot'
                    />
                    <div className='CardGalleryContent'>
                        <h5>{cards.name}<br></br> collection</h5>
                       <a href="/">{cards.buy}</a>
                    </div>
                </div>
        </div>
            ))}
    </div>
</div>
  )
}

export default CardGallery