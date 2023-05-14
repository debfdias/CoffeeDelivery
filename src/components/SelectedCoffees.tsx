import React from "react";
import { useCart } from "../hooks/useCart";
import { CoffeeItemsCard } from "./CoffeeItemsCard";
import { formatMoney } from "./FormatterFunctions";
import { NavLink } from "react-router-dom";

export const SelectedCoffees = () => {
  const { cartItems, cartCalculation } = useCart();
  console.log(cartItems);
  const orderPrice = cartCalculation + 3.5;
  return (
    <section className="flex flex-col h-[600px]">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Selected coffees
      </h1>

      <div className="bg-base-card w-[448px] rounded-md rounded-bl-[36px] rounded-tr-[36px] ">
        {cartItems.map((coffee) => (
          <CoffeeItemsCard key={coffee.id} coffee={coffee} />
        ))}

        {cartItems.length === 0 ? (
          <div className="w-full mb-3 px-8 py-8">
            <p className="text-xl text-base-text">Cart is empty!</p>
            <NavLink to={"/"}>
              <button
                className="mt-3 
              border border-gray-500 rounded px-3 py-3 bg-yellow-light hover:bg-yellow ease-in-out"
              >
                Click here to return to shopping
              </button>
            </NavLink>
          </div>
        ) : (
          <>
            <div className="px-10">
              <div className="w-full flex justify-between mb-3">
                <span className="text-sm text-base-text">Total itens</span>
                <span>{formatMoney(cartCalculation)}</span>
              </div>
              <div className="w-full flex justify-between mb-3">
                <span className="text-sm text-base-text">Delivery</span>
                <span>R$ 3,50</span>
              </div>
              <div className="w-full flex justify-between mb-3">
                <span className="text-xl font-bold text-base-subtitle">
                  Total{" "}
                </span>
                <span className="text-xl font-bold text-base-subtitle">
                  {formatMoney(orderPrice)}
                </span>
              </div>

              <NavLink to={"/confirmation"}>
                <button className="bg-yellow hover:bg-yellow-dark text-white w-full p-3 rounded-md mb-10">
                  PLACE ORDER
                </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
