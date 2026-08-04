import { useState } from "react";
import Shoes from "../data/Shoes";
import Card from "../components/Card";
import Cart from "../components/cartItem";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(shoe) {
    const item = cart.find((c) => c.id === shoe.id);

    if (!item) {
      setCart([
        ...cart,
        {
          ...shoe,
          quantity: 1,
        },
      ]);
    } else {
      setCart(
        cart.map((c) => {
          if (c.id === shoe.id) {
            return {
              ...c,
              quantity: c.quantity + 1,
            };
          } else {
            return c;
          }
        })
      );
    }
  }

  

  function increaseQuantity(id) {
    setCart(
      cart.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        } else {
          return c;
        }
      })
    );
  }

  

  function decreaseQuantity(id) {
    const item = cart.find((c) => c.id === id);

    if (item.quantity === 1) {
      setCart(cart.filter((c) => c.id !== id));
    } else {
      setCart(
        cart.map((c) => {
          if (c.id === id) {
            return {
              ...c,
              quantity: c.quantity - 1,
            };
          } else {
            return c;
          }
        })
      );
    }
  }

  

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      

      <div className="p-2 bg-gray-200 flex gap-9 items-center">
        <img
          className="h-10 w-10"
          src="https://cdn.vectorstock.com/i/preview-1x/20/61/letter-ma-or-am-logo-design-vector-46102061.jpg"
          alt="logo"
        />

        <p>Home</p>
        <p>Categories</p>
        <p>About Us</p>
      </div>

    

      <div className="flex gap-8 p-6">
       

        <div className="grid grid-cols-2 gap-8 w-3/4">
          {Shoes.map((shoe) => (
            <Card
              key={shoe.id}
              name={shoe.name}
              price={shoe.price}
              image={shoe.image}
              shoe={shoe}
              addToCart={addToCart}
            />
          ))}
        </div>

     
        <div className="bg-gray-100 w-1/4 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cart</h2>

          {cart.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            cart.map((item) => (
              <Cart
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))
          )}

          <h3 className="font-bold mt-5">Total : ${total}</h3>
        </div>
      </div>
    </>
  );
}

export default App;