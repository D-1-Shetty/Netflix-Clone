import React, { useRef, useEffect, useState } from 'react'

import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({ title, category }) => {
  const cardRef = useRef();
  const [apidata,setApidata]=useState([])
  
  const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmIyMTQ0MWQzOTEyMjlmMzczN2U3ZTFhY2M5OGRhMCIsIm5iZiI6MTc1NjUwNjQzNy44MTc5OTk4LCJzdWIiOiI2OGIyMjk0NTdjZTk5NzliOTEzOTcyNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._AuLFqCQlNEEMh6SyrZOLn0_DW_ua8R5C01MjnOnIvg'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY || event.deltaX;
  }
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setApidata(json.results))
      .catch(err => console.error(err));
    cardRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='mt-12 mb-8'>
      <h2 className='mb-2 font-extrabold'>{title ? title : "Popular on Netflix"}</h2>


      <div className='flex gap-2.5 overflow-x-scroll w-screen scrollbar-hide' ref={cardRef} >
        {apidata.map((card, index) => {
          return <div key={index} className='w-60 rounded-b-sm relative  shrink-0' style={{ background: 'red' }}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className='cursor-pointer ' />
            <p className='absolute bottom-2.5 right-2.5'>{card.original_title}</p>
          </div>
        })}
      </div>


    </div>
  )
}

export default TitleCards
