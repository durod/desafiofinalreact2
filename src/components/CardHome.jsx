import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/MyContext";
import "../App.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardHome() {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleDetailsClick = (pizzaId) => {
    navigate(`DetallesPizza/${pizzaId}`);
  };

  const handleAddToCartClick = (pizza) => {
    addToCart(pizza);
    alert(`¡${pizza.name} se ha añadido al carrito!`);
  };

  return (
    <div className="pizza-detail-container row">
      <h2 className="card-titulo-home">Nuestras Pizzas</h2>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col-md-4 mb-4">
          <Card className="pizza-card">
            <Card.Img
              variant="top"
              src={pizza.img}
              alt={pizza.name}
              className="card-img-top"
            />
            <Card.Body className="card-body-home">
              <Card.Title className="card-name-home">
                <h2>{pizza.name}</h2>
              </Card.Title>
              <Card.Text>
                <strong>Ingredientes:</strong>
                <ul>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕{ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Text className="h2-card-home-price">
                <h2>
                  <strong>${pizza.price}</strong>
                </h2>
              </Card.Text>
              <div className="btnhome">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => handleDetailsClick(pizza.id)}
                  style={{ marginTop: "10px" }}
                >
                  Ver Más👀
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleAddToCartClick(pizza)}
                >
                  Añadir 🛒
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
