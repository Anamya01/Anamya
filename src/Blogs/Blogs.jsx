import React from 'react'
import './Blogs.css'
import { useState, useEffect } from 'react'
import { fetchBlogs } from '../Axios';
import { Link } from 'react-router-dom';
import space from '../Media/space-.png';
const data = [
    {
        title : 'The Space Blog',
        blog : `"What we know is a drop and what we don't is an ocean". 
        Our solar system is but a tiny speck in the Milky Way galaxy, which itself is one of trillions in the observable universe.
        Imagine each galaxy, like our Milky Way, as a vast collection of stars, planets, and other celestial bodies. The enormity of this number is hard to grasp, and it opens up incredible possibilities. Just as our solar system isn't the only one in our galaxy, our galaxy isn't the only one in this universe.
        Even our universe might be just one of many, each potentially harboring different laws of physics and alternate versions of ourselves.
        While this is still a theoretical concept, it is a fascinating one
        These alternate versions of ourselves who might have made different choices, leading to entirely different life paths.
        In the grand scheme of things, what we know is indeed just a drop. But this drop is precious.`,
        tags : 'universe',
    },

]
function Blogs() {
  const [db , Setdb] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      // const data = await fetchBlogs();
      Setdb(data);
    }
    fetchData();
  },[]);
  console.log(db);
  return (
    <div className='blogs-bg'>
    <p className='blog-heading'>//Bl<i>o</i>gs</p>
   { db != null ? <div className='blog-list'>{db.map((data,index) =>{
    return(
      <div className='blog' key={data.id}>
      <div className='title'>{data.id}){data.title}</div>
      <div className='blog-image'><img src={space} alt="" /></div>
      <div className='blog-data'>{data.blog}</div>
      </div>
    )
   })}</div> : 
   <div className='error'><i>O</i><i>o</i>ps N<i>o</i>thing Here t<i>o</i>See</div> }
   <div className='routes red'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
    </div>
   </div>
  )
}
export default Blogs
//https://source.unsplash.com/random
