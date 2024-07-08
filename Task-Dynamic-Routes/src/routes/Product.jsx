import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  let {prodId} = useParams()
  const [product,setProduct] = useState()
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${prodId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
  },[prodId])

  return (
    <main className='mt-10 text-gray-800 flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center items-center w-full font-serif'>
      {
        product ?(
        <>
            <div className='lg:w-[40%] md:w-[50%] sm:w-[80%] p-10'>
              <h1 className="mt-5 text-3xl">{product.title}</h1>
              <h2 className="mt-5 text-2xl font-thin">Only in {product.price}$</h2>
              <h3 className='mt-5 w-28 h-10 bg-gray-500 text-white rounded-lg py-2 px-1'>{product.category}</h3>
            <p className='mt-5'>{product.description}</p>
            <button className="mt-5 w-48 h-10 bg-slate-600 text-white">Add to cart</button>
            </div>
            <div className='mt-5 sm:p-5'>
              <img className='lg:w-[60%] md:w-[50%] sm:w-[80%] object-contain' src={product.image} alt="product information" />
            </div>
        </>
        )
          :
          (
            <h1 className='text-xl text-green-600 font-serif mt-10'>Loading...</h1>
          )
      }
      
    </main>
  )
}

export default Product
