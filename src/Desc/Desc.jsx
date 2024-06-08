import React from 'react'
import './Desc.css';
import Image from '../Media/image.jpeg'
const data = {
    name : 'Anamya vats',
    discription : `I'm a stupid developer based in India. I code for fun, creating web apps & dying trying! navigating my way through the tech cosmos. A Cinephile at heart. Embrace the chaos and code on! `,
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
