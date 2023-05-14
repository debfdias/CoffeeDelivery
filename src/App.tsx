import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./routes";
import "./styles/global.css";

function App() {
  return (
    <div className="max-w-[1120px] mx-auto">
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
