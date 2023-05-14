import { CurrencyDollar, Path } from "phosphor-react";
import Timer from "../assets/timer.svg";
import ConfirmationImg from "../assets/ImgConfirmation.png";

export function Confirmation() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-yellow-dark text-[32px] font-baloo2 font-extrabold mb-1">
          Yay! Order confirmed!
        </h1>
        <p className="text-base-subtitle text-xl mb-10">
          Now just wait for the coffee to come to you soon
        </p>
      </div>
      <div className="flex ">
        <div className="p-0.5 bg-gradient-to-r from-yellow to-purple rounded-md rounded-bl-[36px] rounded-tr-[36px] mr-24">
          <div className="w-[526px] h-[296px] bg-white rounded-md rounded-bl-[36px] rounded-tr-[36px]">
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-purple rounded-full w-8 h-8 flex items-center justify-center">
                <Path color="white" />
              </div>
              <div className="w-[310px]">
                <p className="text-base-text">
                  Delivery at <b>Pingeon St, 40 </b> Bed Stuy - Atlanta, GA
                </p>
              </div>
            </div>
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-yellow rounded-full w-8 h-8 flex items-center justify-center">
                <img src={Timer} color="white" alt={""} />
              </div>
              <div className="w-[310px]">
                <p className="text-base-text">
                  Delivery forecast{" "}
                  <p>
                    <b> 20 min - 30 min </b>
                  </p>
                </p>
              </div>
            </div>
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-yellow-dark rounded-full w-8 h-8 flex items-center justify-center">
                <CurrencyDollar color="white" />
              </div>
              <div className="w-[310px]">
                <p className="text-base-text">
                  Payment at delivery{" "}
                  <p>
                    <b>Credit card</b>{" "}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img width={492} height={293} src={ConfirmationImg} alt={""} />
      </div>
    </>
  );
}
