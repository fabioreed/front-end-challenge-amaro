import { Routes, Route } from "react-router-dom"
import Catalog from "./pages/Catalog"
import { CartProvider } from "./providers/CartContext"

const AppRoutes = () => {

  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Catalog />} />
      </Routes>
    </CartProvider>
  )
}

export default AppRoutes