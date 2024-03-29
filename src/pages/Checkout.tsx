import { Form } from "../components/Form";
import { PaymentMethod } from "../components/PaymentMethod";
import { SelectedCoffees } from "../components/SelectedCoffees";

export function Checkout() {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <Form />
          <PaymentMethod />
        </div>
        <SelectedCoffees />
      </div>
    </div>
  );
}
