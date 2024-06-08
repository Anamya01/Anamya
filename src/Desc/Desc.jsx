import React from 'react'
import './Desc.css';
import Image from '../Media/image.jpeg'
const data = {
    name : 'Anamya vats',
    discription : `Hi I'm a stupid developer based in India. Creating web apps( dying trying ).  Cinephile at heart. `,
}
function Desc() {
  return (
    <div className='Description'>
       <div className='description-heading'>Hi!</div>
       <div className='description-para'>{data.discription}</div>
       <div className="shape"></div>
       <img src={Image} alt="" className='image'/>
    </div>
  )
}

export default Desc
