import React from 'react'
import './App.css'

function Colors({colors}) {
    return (
        <div className="colors">
        {
            colors.map((color,index)=>(
                <button 
                      className='color'
                      key={index}
                      style={{background:color}}>                                         
                </button>
              )
            )
          }
    </div>
    )
}

export default Colors
