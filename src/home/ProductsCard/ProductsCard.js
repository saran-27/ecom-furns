import React from 'react'
import Img1 from '../../images/PC-1.jpeg'
import Img2 from '../../images/PC-2.jpeg'
import Img3 from '../../images/PC-3.jpeg'
import Img4 from '../../images/PC-4.jpeg'
import Img5 from '../../images/PC-5.jpeg'
import Img6 from '../../images/PC-6.jpeg'
import Img7 from '../../images/PC-7.png'
import Badge from 'react-bootstrap/Badge';

function ProductsCard() {
    const ProductsItem=[
        {id:1,tittle:'SmallTable',detail:'1. Variable with soldout product',Price:150.00,OldPrice:'300.00',img:Img1,Discount:-20,Offer:'Sale'},
        {id:2,tittle:'Table',detail:'2.Variable with soldout product',Price:200.00,OldPrice:'370.00',img:Img2,Discount:-10,Offer:'Limited'},
        {id:3,tittle:'Table Lamp',detail:'3.Variable with soldout product',Price:90.00,OldPrice:'110.00',img:Img3,Discount:-5,Offer:'Sale'},
        {id:4,tittle:'Single person Sofa',detail:'4.Variable with soldout product',Price:500.00,OldPrice:'700.00',img:Img4,Discount:-50,Offer:'NO Stock'},
        {id:5,tittle:'Mulitiple Rack',detail:'5.Variable with soldout product',Price:1000.00,OldPrice:'1500.00',img:Img5,Discount:-50,Offer:'Sale'},
        {id:6,tittle:'Flower pots',detail:'6.Variable with soldout product',Price:200.00,OldPrice:'400.00',img:Img7,Discount:-10,Offer:'Limited'},
        {id:7,tittle:'Mini Table',detail:'7.Variable with soldout product',Price:650.00,OldPrice:'700.00',img:Img2,Discount:-10,Offer:'Limited'},
        {id:8,tittle:'Flower pots',detail:'8.Variable with soldout product',Price:450.00,OldPrice:'670.00',img:Img6,Discount:-10,Offer:'No Stock'}

    ]
  return (
   <div className='container'>
    <div className='row'>
        {ProductsItem.map((Item)=>(
             <div className='thumb-img col-md-3  mb-4' key={Item.id}>
            <img className='thumb-img-1' src={Item.img} alt='SmallTable'></img>
            <div className='Products-card-content'>
            <ul className='p-0'>
                <li><a href='/'><i class="fa fa-heart-o"></i></a></li>
                <li><a href='/'><i class="fa fa-search-plus"></i></a></li>
                <li><a href='/'><i class="fa fa-cart-arrow-down"></i></a></li>
            </ul>
            </div>
            <div className='left-side'>
                <h6 className='fs-5'><Badge bg="success">{Item.Discount}%</Badge></h6>
                <h6 className='fs-5'><Badge bg="danger">{Item.Offer}</Badge></h6>
            </div>
            <div className='Products_details'>
                <h3>{Item.detail}</h3>
                <h5>${Item.Price}<span className='old-price'><del>${Item.OldPrice}</del></span></h5>
            </div>
         </div>
        ))}
    </div>
   </div>
  );
}

export default ProductsCard;