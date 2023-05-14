import { CoffeeCard } from "./CoffeeCard";
import { coffees } from "../data/coffees";

export function Catalog() {
  return (
    <div className=" mt-16">
      <h1 className="mb-[54px] font-baloo2  text-base-subtitle text-3xl">
        Our coffees
      </h1>
      <div className="grid sm:grid-cols-4 gap-4 mb-1">
        {coffees.map((coffeeItem) => (
          <CoffeeCard key={coffeeItem.id} coffee={coffeeItem} />
        ))}
      </div>
    </div>
  );
}
