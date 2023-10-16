import React, { useState, createContext, useEffect, useContext } from "react";
import pizzasData from "../../public/pizzas.json";

export const PizzaContext = createContext();

export const usePizzaContext = () => {
  return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(pizzasData);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener datos de pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, cart, addToCart }}>
      {children}
    </PizzaContext.Provider>
  );
};
