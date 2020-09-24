import React from 'react'

function ImageContainer() {
    return (
        <div className="img_container" 
        onMouseMove={handleMouseMove}
        ref={imgDiv}
        onMouseLeave={()=>imgDiv.current.style.backgroundPosition=`center`}
        style={{backgroundImage:`url(${product.images[index]})`}}>
    </div>
    )
}

export default ImageContainer
