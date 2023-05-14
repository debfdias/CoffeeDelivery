import CartWhite from "../assets/cartwhite.svg";
import HeroImg from "../assets/ImgHero.png";
import packageImg from "../assets/package.svg";
import teacup from "../assets/teacup.svg";
import timer from "../assets/timer.svg";

export function Intro() {
  return (
    <div className="mt-[94px] mb-16 flex">
      <div className="mb-16 mr-14">
        <div className="mb-16 w-[580px]">
          <h1 className="mb-4 font-baloo2 text-[48px] text-base-title font-extrabold leading-[62px]">
            Find the perfect coffee for any moment of your day
          </h1>
          <p className="text-xl">
            With Coffee Delivery you get your coffee anywhere and anytime
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-dark rounded-full h-8 w-8 flex items-center justify-center">
              <img src={CartWhite} />
            </div>
            <p className="text-base-text">Easy and safe</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-base-text rounded-full h-8 w-8 flex items-center justify-center">
              <img src={packageImg} />
            </div>
            <p className="text-base-text">Packaging keeps the coffee intact</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow rounded-full h-8 w-8 flex items-center justify-center">
              <img src={timer} />
            </div>
            <p className="text-base-text">Fast and tracked delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple rounded-full h-8 w-8 flex items-center justify-center">
              <img src={teacup} />
            </div>
            <p className="text-base-text">Coffee arrives still hot and warm</p>
          </div>
        </div>
      </div>
      <div>
        <img width={476} height={360} src={HeroImg} />
      </div>
    </div>
  );
}
