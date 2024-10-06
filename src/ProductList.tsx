import { useEffect, useState } from "react"
import { Product,productsUrl } from "./contstants"

export const ProductList =()=>{
  const [products,setProducts] = useState<Product[] | null>(null)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch(productsUrl).then(response => {
      if(response.ok){
        return response.json()
      }
      throw Error()
    }).then(setProducts).finally(()=>setLoading(false))
  },[])
  return <main>
    <h1>Products</h1>
    {loading && <div role="status" aria-label="loading">salom</div> }
    {
      products !== null && <ul>
        {
          products.map((item,index)=> (
            <li key={index}>{item.title}</li>
          ))
        }
      </ul>
    }
  </main>
}


