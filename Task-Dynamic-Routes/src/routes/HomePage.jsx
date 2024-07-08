import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const HomePage = () => {

  const [productData,setProductData] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductData(json))
  },[])


  const displayProducts = productData?.map((data)=>{
    return <Product 
      key={data.id}
      id={data.id}
      name={data.title}
      price={data.price}
      image={data.image}
    />
  })

  return (
    <main className='mt-5 flex flex-col justify-center items-center'>
      <div className='font-serif mt-5 text-center w-[50%]'>
        <h1 className='text-3xl text-gray-900 font-serif'>Feeling like buy something useless</h1>
        <p className="mt-5 text-gray-700 text-lg ">Well you my friend are in luck because you stumbled on to the most useless
          merchent shop that has ever existed
        </p>
        <button className="mt-5 w-[200px] h-[35px] bg-gray-700 text-white rounded">Look Around</button>
      </div>
      <div className="mx-5 mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center content-center">
        {displayProducts? displayProducts : (<h1 className='text-center text-3xl font-mono text-purple-950'>Seems like something is wrong</h1>)}
      </div>
    </main>
  )
}

export default HomePage
