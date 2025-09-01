import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {  useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmIyMTQ0MWQzOTEyMjlmMzczN2U3ZTFhY2M5OGRhMCIsIm5iZiI6MTc1NjUwNjQzNy44MTc5OTk4LCJzdWIiOiI2OGIyMjk0NTdjZTk5NzliOTEzOTcyNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._AuLFqCQlNEEMh6SyrZOLn0_DW_ua8R5C01MjnOnIvg'
  }
};
useEffect(()=>{
  fetch(url, options)
  .then(res => res.json())
  .then(json => setApiData(json.results[0]))
  .catch(err => console.error(err));
})

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} className='w-12 h-12 cursor-pointer absolute top-5 left-5'/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}title='trailer' allowFullScreen frameborder="0" className='w-[90%] h-[90%] rounded-[10px]'></iframe>
      <div className='flex items-center justify-between w-[90%]'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
     
        
      
    </div>
  )
}

export default Player
