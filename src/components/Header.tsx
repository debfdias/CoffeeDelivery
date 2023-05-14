import Logo from "../assets/logo.svg";
import MapPing from "../assets/mappin.svg";
import ShopCart from "../assets/cart.svg";
import { useCart } from "../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <div className="mx-auto my-8">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <NavLink to={"/"}>
            <a>
              <img src={Logo} alt="" />
            </a>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex bg-purple-light gap-1 p-2 rounded-md">
            <img src={MapPing} alt="" />
            <p className="text-purple-dark text-sm">Atlanta, GA</p>
          </div>
          <NavLink to={"/checkout"}>
            <a>
              <div className="bg-yellow-light w-[39px] h-[38px] flex items-center justify-center rounded-md cursor-pointer relative">
                {cartQuantity >= 1 && (
                  <div className="w-5 h-5 bg-yellow-dark rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
                    <span className="text-white text-sm">{cartQuantity}</span>
                  </div>
                )}
                <img src={ShopCart} alt="" />
              </div>
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
