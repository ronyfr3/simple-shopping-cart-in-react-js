import React,{createContext,useState,useEffect} from 'react'
export const DataContext = createContext()

export const DataProvider=(props)=> {
    const [products,setProducts] = useState([
         {
            "_id": "1",
            "title": "product 01",
            "images": [
                        "https://th.bing.com/th/id/OIP.nBHz-nJNb_COHqAEVjArrAHaFj?w=210&h=180&c=7&o=5&pid=1.7",
                        "https://th.bing.com/th/id/OIP._aBak23VxE5j8rpzPC3_BAAAAA?w=138&h=176&c=7&o=5&pid=1.7",                 
                        "https://th.bing.com/th/id/OIP.YsMmEBmOzEqmkV45onlzqQHaEK?w=280&h=180&c=7&o=5&pid=1.7"

                      ],
             "description": "well",
             "content": "good",
             "colors": ["black","gray","blue"],
             "sizes":["xl", "L", "M"],
             "price": 10,
             "count": 1
            },
         {
            "_id": "2",
            "title": "product 02",
            "images": [
                "https://th.bing.com/th/id/OIP._aBak23VxE5j8rpzPC3_BAAAAA?w=138&h=176&c=7&o=5&pid=1.7",                 
                "https://th.bing.com/th/id/OIP.nBHz-nJNb_COHqAEVjArrAHaFj?w=210&h=180&c=7&o=5&pid=1.7",
                "https://th.bing.com/th/id/OIP.YsMmEBmOzEqmkV45onlzqQHaEK?w=280&h=180&c=7&o=5&pid=1.7"
              ],
             "description": "nice",
             "content": "excellent",
             "colors": ["black","gray","yellow"],
             "sizes":["xl", "L", "xxl"],
             "price": 20,
             "count": 1
          } 
      ])
      const [cart,setCart] =useState([])
      const addCart = (id)=>{
        const check = cart.every(item=>{
          return item.id === id
        })
        if(check){
          const data = products.filter(product=>{
            return product._id === id
          })
          setCart([...cart,...data])
        }
        else{
          alert("the product is already added to the cart")
        }
      }
      useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
      },[])
      useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
      },[cart])
      const  value={
        products:[products,setProducts],
        cart:[cart,setCart],
        addCart: addCart
      }

    return (
        <DataContext.Provider value={value}>
             {props.children}
        </DataContext.Provider>
    )
}
