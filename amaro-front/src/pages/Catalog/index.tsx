import { useContext } from 'react'
import Card from "../../components/Card"
import Header from "../../components/Header"
import { CartContext } from "../../providers/CartContext"
import { CardList } from "./style"
import Cart from '../../components/Cart'

const Catalog = () => {
  const { modal } = useContext(CartContext)

  return (
    <div>
      <Header />
      <CardList>
        <Card />
      </CardList>
      {modal && <Cart />}
    </div>
  )
}

export default Catalog