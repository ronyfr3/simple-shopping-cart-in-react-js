import React,{useContext,useState,useRef} from 'react'
import {DataContext} from './ProductProvider'
import {useParams,Link} from 'react-router-dom'
import Colors from './Colors'
import Sizes from './Sizes'
import Thumb from './Thumb'
import './App.css'

function ProductDetails() {
    const [products] = useContext(DataContext).products
    const addCart = useContext(DataContext).addCart
    const [index,setIndex] = useState(0)
    const {id} =useParams()
    const details = products.filter((product,index)=>{return product._id === id})
    const imgDiv = useRef()
    const handleMouseMove = e=>{
        const {left,top,width,height} =e.target.getBoundingClientRect()
        const x= (e.pageX -left)/width*100
        const y= (e.pageY -top)/height*100
        imgDiv.current.style.backgroundPosition=`${x}% ${y}`

    }
    return (
        <>
           {details.map(product=>(
               <div className="productD" key={product._id}>

                        <div className="thumbImage" 
                                onMouseMove={handleMouseMove}
                                ref={imgDiv}
                                onMouseLeave={()=>imgDiv.current.style.backgroundPosition=`center`}
                                style={{backgroundImage:`url(${product.images[index]})`}}>
                       </div>

                        <div className="box">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            <Colors colors={product.colors}/>
                            <Sizes  sizes={product.sizes}/>
                            <p className='des_content'>{product.description}</p>
                            <p className='des_content'>{product.content}</p>
                            <Thumb images={product.images} setIndex={setIndex}/>
                           <Link to='/cart' className="cart" onClick={()=>addCart(product._id)}>Add to cart</Link>
                     </div>
                </div>
             
           ))}
        </>
    )
}

export default ProductDetails
