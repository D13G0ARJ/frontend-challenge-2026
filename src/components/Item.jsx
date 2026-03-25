import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='group relative'>
      <Link to={`/products/${product?.id}`}>
      <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none  lg:h-80 h-96 border border-gray-700/50'>
        <div className='pointer-events-none absolute inset-0 z-10 bg-gray-300/60 mix-blend-multiply -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out'/>
        <img src={product?.image} alt={product?.name} className='h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-out group-hover:scale-110' />
      </div>
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
            <h3 className='text-sm text-foreground'>
                <Link to={`/products/${product?.id}`}>
                <span aria-hidden="true" className='inset-0'>{product?.name}</span>
                </Link>
            </h3>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
      </div>
    </div>
  )
}

export default Item
