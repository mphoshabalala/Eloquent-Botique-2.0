import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ItemDetails from "./pages/ItemDetails";
import Signup from "./pages/Signup";
import { ItemsProvider } from "./contexts/ItemsContext";
import AppLayout from "./components/AppLayout";
import { CartProvider } from "./contexts/useCart";

function App() {
  return (
    <ItemsProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path=":id" element={<ItemDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ItemsProvider>
  );
}

export default App;
