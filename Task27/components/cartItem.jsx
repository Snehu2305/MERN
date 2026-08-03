import React from 'react'


const cartItem = (props) => {
  return (
       <div className='flex gap-2'>
     <img className='h-10' src={props.item.image} alt="sneaker" />
     <div className='text-[10px]'>{props.item.name}</div>
     <div className='text-[10px]'>${props.item.price}</div>
     <button className='text-[10px] border black rounded w-8 h-5 bg-gray-400' onClick={() => props.increaseQuantity(props.item.id)}>+</button>
     <div className='text-[10px]'>{props.item.quantity}</div>
     <button className='text-[10px] border black rounded  w-8 h-5 bg-gray-400' onClick={() => props.decreaseQuantity(props.item.id)}>-</button>
     </div>

  )
}

export default cartItem