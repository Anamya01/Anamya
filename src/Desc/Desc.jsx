import React from 'react'
import './Desc.css';
import Image from '../Media/image.jpeg'
const data = {
    name : 'Anamya vats',
    discription : `I'm a  stupid developer based in India.
     I code for fun, creating silly scripts and web apps, and diving into all things tech before 2092. Oh, and music? It's my true passion and brings me so much joy!`,
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