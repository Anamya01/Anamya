import React from 'react'
import './Blogs.css'
import { useState, useEffect } from 'react'
import { fetchBlogs } from '../Axios';
import { Link } from 'react-router-dom';
import space from '../Media/space-.png';
function Blogs() {
  const [db , Setdb] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const data = await fetchBlogs();
      Setdb(data.data);
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