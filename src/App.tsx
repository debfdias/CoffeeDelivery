import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./routes";
import { Header } from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="max-w-[1120px] mx-auto">
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
