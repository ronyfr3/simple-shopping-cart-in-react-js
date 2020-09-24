import React from 'react'
import './App.css'

function Thumb({images,setIndex}) {
    return (
        <div className="thumb">
        {
            images.map((img,index)=>(
                <img 
                  className='thumb'
                  src={img} 
                  alt='' 
                  key={index}
                  onClick={()=>setIndex(index)}
                  />
            ))
        }
    </div>
    )
}

export default Thumb
