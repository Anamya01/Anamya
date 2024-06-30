import React from 'react';
import './Work.css';
import img from '../Media/image.jpeg'
import vistaio from '../Media/vistaio.png'
import emart from '../Media/E-mart.png'
import { Link } from 'react-router-dom';
const work = [
    {title : 'Vistaio',
     description : 'Small streaming website for latest movies & TV shows.',
     link : 'www.google.com',
     image : vistaio,
     github : 'https://github.com/Anamya01/Vistaio-',
     live : '/',
    },
    {
        title : 'E-Mart',
        description : 'Frontend project',
        link : 'www.github.com',
        image : emart,
        github : 'https://github.com/Anamya01/E-Mart',
        live : '',
    },
    {
        title : 'Anamya',
        description : 'Personal portfolio',
        link : 'www.github.com',
        image : img,
        github : '',
        live : '',
    },
]
function Work() {
    const HandleMouseOver= () =>{
        console.log('working');
    }
  return (
    <div className=''>
    <div className='gradient-top'></div>
    <div className='project-page'>
        <p className='projects'>//Pr<i>o</i>jects</p>
    <div className='work-section'>{work.map((data, index) => {
        return (<div className='works'>
            <div className='all-info'>
            <div className='title' onMouseOver={HandleMouseOver}>{index + 1} ) {data.title}</div>
            <div className='about-project'>{data.description}</div>
            <div className='livelink'>
                <a href={data.live} target='blank'>Live</a>
                <a href={data.github} target='blank'>View</a>
            </div>
            </div>
            <div className='project-image'> <img src={data.image} alt="OOps"/> </div>
        </div>)
    })}</div>
    <div className='routes'>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blogs</Link>
    </div>
    </div>
    <div className='gradient-bottom'></div>
    </div>
  )
}

export default Work
