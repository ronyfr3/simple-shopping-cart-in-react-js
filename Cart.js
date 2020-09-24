import React,{useContext,useState,useRef,useEffect} from 'react'
import {DataContext} from './ProductProvider'
import Colors from './Colors'
import Sizes from './Sizes'

function Cart() {
    const [cart,setCart] = useContext(DataContext).cart
    const [total,setTotal] = useState(0)
    const imgDiv = useRef()
    const handleMouseMove = e=>{
        const {left,top,width,height} =e.target.getBoundingClientRect()
        const x= (e.pageX -left)/width*100
        const y= (e.pageY -top)/height*100
        imgDiv.current.style.backgroundPosition=`${x}% ${y}`

    }

    useEffect(()=>{
        const totalPrice=()=>{
            const res = cart.reduce((prev,item)=>{
                return prev+(item.price*item.count)
            },0)
            setTotal(res)
        }
        totalPrice()
    },[cart])
    if (cart.length===0)
        return <h2 style={{textAlign: 'center',fontSize: '5rem'}}>Cart Empty</h2>
    const reduction=id=>{
        cart.forEach(item=>{
            if(item._id===id){
                item.count===1? item.count=1:item.count-=1;
            }
        })
        setCart([...cart])
    }
    const increase=id=>{
        cart.forEach(item=>{
            if(item._id===id){
                item.count+=1;
            }
        })
        setCart([...cart])
    }
    const removeProduct=id=>{
        if(window.confirm("Do you want to CLose this product?")){
            cart.forEach((item,index)=>{
                if(item._id===id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
        }
    }
    return (
        <>
           {cart.map(product=>(
               <div className="product" key={product._id}>

                        <div className="thumbImage" 
                                onMouseMove={handleMouseMove}
                                ref={imgDiv}
                                onMouseLeave={()=>imgDiv.current.style.backgroundPosition=`center`}
                                style={{backgroundImage:`url(${product.images[0]})`}}>
                       </div>

                        <div className="box">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            <Colors colors={product.colors}/>
                            <Sizes  sizes={product.sizes}/>
                            <p className='des_content'>{product.description}</p>
                            <p className='des_content'>{product.content}</p>
                            <div className='amount'>
                                <button className='btn' onClick={()=>reduction(product._id)}>-</button>
                                <span>{product.count}</span>
                                <button className='btn' onClick={()=>increase(product._id)}>+</button>
                            </div>
                            <div className='delete' onClick={()=>removeProduct(product._id)}>X</div>
                     </div>
                </div>
             
           ))}
           <div className='total'>
               <h3>Total:${total}</h3>
           </div>
        </>
    )
}

export default Cart
