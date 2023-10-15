import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/MyContext";
import Button from "react-bootstrap/Button";

export default function PizzaDetail() {
  const { id } = useParams();

  const { pizzas, addToCart } = useContext(PizzaContext);

  const handleAddToCartClick = (pizza) => {
    addToCart(pizza);
  };

  const selectedPizza = pizzas.find((pizza) => pizza.id === id);
  if (!selectedPizza) {
    // Manejar el caso en el que no se encuentra la pizza
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="pizza-info-container">
      <div className="pizza-info-card" key={selectedPizza.id}>
        <div className="pizza-info-image">
          <img
            src={selectedPizza.img}
            alt={selectedPizza.name}
            className="pizza-info-image"
          />
        </div>
        <div className="pizza-info-text">
          <h2 className="h2-infocard-name">
            <strong>{selectedPizza.name}</strong>
          </h2>
          <p className="card-pizzadetail-descripcion">{selectedPizza.desc}</p>
          <h2>INGREDIENTES:</h2>
          <ul>
            {selectedPizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕{ingredient}</li>
            ))}
          </ul>
          <div className="pizza-info-price-btn">
            <h2 className="h2-infocard-price">
              <strong>Precio: ${selectedPizza.price}</strong>
            </h2>
            <div>
              <Button
                variant="danger"
                size="lg"
                onClick={() => handleAddToCartClick(selectedPizza)}
              >
                Añadir 🛒
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
