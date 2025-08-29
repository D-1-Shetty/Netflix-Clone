import React,{ useRef,useEffect } from 'react'

import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title,category}) => {
  const cardRef=useRef();

  const handleWheel=(event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft+=event.deltaY||event.deltaX;
  }
    useEffect(()=>
    {
      cardRef.current.addEventListener('wheel',handleWheel)
    },[])
  
  return (
    <div className='mt-12 mb-8'>
      <h2 className='mb-2 font-extrabold'>{title?title:"Popular on Netflix"}</h2>
      
      
      <div className='flex gap-2.5 overflow-x-scroll w-screen scrollbar-hide' ref={cardRef} >
        {cards_data.map((card,index)=>{
          return <div key={index}className='w-60 rounded-b-sm relative  shrink-0' style={{background:'red'}}>
            <img src={card.image} alt="" className='cursor-pointer '/>
            <p className='absolute bottom-2.5 right-2.5'>{card.name}</p>
          </div>
        })}
      </div>
      
      
    </div>
  )
}

export default TitleCards
