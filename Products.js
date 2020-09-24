import React,{useContext} from 'react'
import {DataContext} from './ProductProvider'
import {Link} from 'react-router-dom'
import './App.css'

function Products() {
    const [products] = useContext(DataContext).products
    const addCart = useContext(DataContext).addCart
    
    return (
              <div className='product'>
              {
                  products.map(product =>(
                       <div className='card' key={product._id}>
                        <Link to={`/products/${product._id}`} className='link'>
                            <img src={product.images[0]} alt=''/>
                        </Link>
                    <div className="box">
                            <h3 title={product.title}>
                                <Link to={`/products/${product._id}`} className='link'>
                                {product.title}
                                </Link>
                            </h3>
                            <p>{product.description}</p>
                            <h4>${product.price}</h4>
                            <button className='cart' onClick={()=>addCart(product._id)}>Add to cart</button>
                    </div>
                 </div>
                  ) )
         }
              
        </div>
         
    )
}

export default Products
