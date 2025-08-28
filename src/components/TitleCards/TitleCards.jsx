import React from 'react'
import cards_data from '../../assets/cards/Cards_data'
const TitleCards = () => {
  return (
    <div className='mt-12 mb-8'>
      <h2 className='mb-2'>Popular on Netflix</h2>
      
      
      <div className='flex gap-2.5 overflow-x-scroll w-screen scrollbar-hide' >
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
