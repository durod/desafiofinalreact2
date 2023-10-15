import React, { useContext, useState, useEffect } from "react";
import { PizzaContext } from "../context/MyContext";
import "../App.css";
import Button from "react-bootstrap/Button";

export default function Car() {
  const { cart, setCart } = useContext(PizzaContext);
  const [displayedCart, setDisplayedCart] = useState({});
  const [pizzaQuantities, setPizzaQuantities] = useState({});

  useEffect(() => {
    const cartObj = {};
    const quantitiesObj = {};

    // Agrupar pizzas por id y contar sus cantidades
    cart.forEach((pizza) => {
      if (cartObj[pizza.id]) {
        cartObj[pizza.id].quantity++;
      } else {
        cartObj[pizza.id] = { ...pizza, quantity: 1 };
      }
      quantitiesObj[pizza.id] = cartObj[pizza.id].quantity;
    });

    setDisplayedCart(cartObj);
    setPizzaQuantities(quantitiesObj);
  }, [cart]);

  const handleRemoveFromCart = (pizzaId) => {
    if (pizzaQuantities[pizzaId] > 1) {
      const updatedQuantities = { ...pizzaQuantities, [pizzaId]: pizzaQuantities[pizzaId] - 1 };
      setPizzaQuantities(updatedQuantities);
    } else {
      const updatedCart = { ...displayedCart };
      delete updatedCart[pizzaId];
      setDisplayedCart(updatedCart);
    }
  };

  const totalPrice = Object.keys(displayedCart).reduce((total, pizzaId) => {
    const pizza = displayedCart[pizzaId];
    return total + pizza.price * pizzaQuantities[pizzaId];
  }, 0);

  return (
    <div className="pizza-detail-container row">
      <h2 className="card-titulo-home">Carrito de Compras</h2>
      <ul className="pizza-list">
        {Object.keys(displayedCart).length === 0 ? (
          <p className="text-nopizzas-car">No tienes pizzas en el carrito.</p>
        ) : (
          Object.keys(displayedCart).map((pizzaId) => {
            const pizza = displayedCart[pizzaId];
            return (
              <li key={pizzaId} className="pizza-item">
                <div className="pizza-img-container">
                  <img src={pizza.img} alt={pizza.name} className="pizza-img" />
                </div>
                <div className="pizza-details">
                  <h2 className="pizza-name">{pizza.name}</h2>

                  <p><strong>Cantidad:</strong> {pizzaQuantities[pizzaId]}</p>
                  
                  <div className="pizza-price">
                    <strong>Precio: ${pizza.price * pizzaQuantities[pizzaId]}</strong>
                  </div>
                  </div>
                  <div className="btn-eliminar-car">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(pizzaId)}
                  >
                    Eliminar Pizza
                  </Button>
                  </div>
                
              </li>
            );
          })
        )}
      </ul>
      <div className="pizza-car-elpago">
        <h3 className="titulo-pago-tuspizzas">Tus pizzas:</h3>
        
        <ul className="price-list">
          {Object.keys(displayedCart).map((pizzaId) => {
            const pizza = displayedCart[pizzaId];
            return (
              <li key={pizzaId}>
                {pizza.name} ({pizzaQuantities[pizzaId]}): ${pizza.price * pizzaQuantities[pizzaId]}
              </li>
            );
          })}
        </ul>
        <h3 className="totalprice-car">Total: ${totalPrice}</h3>
        <div className="caja-btnpagar-car">
        <Button variant="primary" size="md">
          Pagar 💸
        </Button>
        </div>
      </div>
    </div>
  );
}
