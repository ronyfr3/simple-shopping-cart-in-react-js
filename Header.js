import React,{useState,useContext} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {DataContext} from './ProductProvider';


export default function Header() {
   const[menu,setMenu]=useState(false)
   const value = useContext(DataContext)
   const [cart] = value.cart
   const toggleMenu=()=>{setMenu(!menu)}
   const styleMenu = {
       left:menu ? 0 : '-100%'
   }
    return (

           <header>
                <div className='menu' onClick={toggleMenu}>
                    <Link to='/' className='link'>
                      <FaBars/>
                    </Link>
                </div>
               <div className='logo'>
                  <h2 className='h2'><Link to='/products'>Fr3</Link></h2>
               </div>
               
                <ul style={styleMenu}>
                    <li>
                        <Link 
                            to='/products'
                            className='link'>
                            Products
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/' className='link'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                </ul>
                <div className='cart-icon'>
                <span className='span'>{cart.length}</span>
                    <Link to='/cart'>
                        <BiCart/>
                    </Link>
                </div>
                
      </header>
    )
}
