import React from 'react'
import './App.css'

function Sizes({sizes}) {
    return (
        <div className='size_z'>
            {
                sizes.map((size,index)=>(
                <button 
                    className='size_Z'
                    key={index}>
                    {size}
                </button>
                ))
            }
        </div>
    )
}

export default Sizes
