
function Card(props){

    return(
        <div className='text-sm '>
          <img className='w-70 h-60' src={props.image} alt="sneakers" />

        <div className='p-5 bg-amber-600 rounded-sm w-70  mt-2'>
            <h2 className='font-bold'>{props.name}</h2>
             <p className='text-center'>${props.price}</p>
             <button onClick={() => props.addToCart(props.shoe)} className='border border-black rounded-sm mx-14 p-1'>Add to Cart</button>
         </div>
        </div>
    )
}

export default Card
