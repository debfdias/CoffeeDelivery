import { Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ShoppCartWhite from "../public/cartwhite.svg";

export interface CoffeeItem {
  id: number;
  span: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeProps {
  coffee: CoffeeItem;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function addCoffeeQuantity() {
    setQuantity((state) => state + 1);
  }

  function removeCoffeeQuantity() {
    setQuantity((state) => state - 1);
  }

  const { addNewCoffeeToCart } = useContext(CartContext);

  function addCoffeeToCart() {
    const addCoffee = {
      ...coffee,
      quantity,
    };
    setQuantity((state) => 1);
    addNewCoffeeToCart(addCoffee);
  }

  return (
    <div className=" bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px] mb-10">
      <div className="flex justify-center ">
        <div className="mt-[-1.25rem]">
          <img
            alt=""
            src={`/coffesImgs/${coffee.image}`}
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        {coffee.span.map((span) => (
          <span
            key={`${coffee.id}.${span}`}
            className="px-2 py-1 mx-1 text-yellow bg-yellow-light rounded-full text-[10px]"
          >
            {span}
          </span>
        ))}
      </div>

      <h2 className="flex justify-center font-baloo2 mt-4 font-bold text-xl text-base-subtitle">
        {coffee.name}
      </h2>
      <div className="h-16">
        <p className="flex text-center justify-center text-sm text-base-label mx-2 mt-2">
          {coffee.description}
        </p>
      </div>
      <div className="h-[38px] mt-[33px] mb-5 mx-4 flex items-center justify-center">
        <span className="font-extrabold font-baloo2 text-xl text-base-text whitespace-nowrap">
          R$ 9,90
        </span>
        <div className="ml-[23px] mr-2 h-full bg-base-button gap-2 rounded-md whitespace-nowrap">
          <button
            className="ml-2 mr-1 my-3"
            onClick={addCoffeeQuantity}
            disabled={quantity <= 1}
          >
            <Minus size={14} color="#8047F8" />
          </button>
          <span>{quantity}</span>
          <button className="ml-1 mr-2 my-3 " onClick={removeCoffeeQuantity}>
            <Plus size={14} color="#8047F8" />
          </button>
        </div>

        <button
          className=" bg-purple-dark flex items-center justify-center ml-2 w-full rounded-md h-full"
          onClick={addCoffeeToCart}
        >
          <img alt="" src={ShoppCartWhite} width={22} height={22} />
        </button>
      </div>
    </div>
  );
}
