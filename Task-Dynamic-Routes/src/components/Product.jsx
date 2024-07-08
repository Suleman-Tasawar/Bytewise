import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({id,name,price,image}) => {
  return (
    <Link to={`product/${id}`}>
      <div className='lg:w-[50%] md:w-[50%] sm:w-[80%] shadow-inner cursor-pointer'>
          <div className="mt-2"><img className='object-contain w-48 h-48' src={image} alt="Product" /></div>
          <div className='px-5'>
              <h3 className='mt-2 text-xl font-bold text-gray-800'>{name}</h3>
              <h4 className='mt-2 text-lg text-gray-700 font-semibold'>{price}$</h4>
          </div>
      </div>
    </Link>
  )
}

export default Product
