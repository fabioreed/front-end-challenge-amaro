import { useContext } from 'react'
import { CartContext } from '../../providers/CartContext'
import { Badge, CartLink, ListContainer, LogoContainer, MainHeaderContainer } from './style'
import { BsCart3 } from 'react-icons/bs'

const Header = () => {
  const { modal, setModal, currentSale, setSearch } = useContext(CartContext)

  return (
    <MainHeaderContainer>
      <LogoContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Logotipo_da_Amaro.svg/1280px-Logotipo_da_Amaro.svg.png" alt="logo" />
      </LogoContainer>
      <ListContainer>
        <input type="text" placeholder='O quê você está procurando?' onChange={(e) => setSearch(e.target.value)}/>
        <CartLink onClick={() => setModal(!modal)}><BsCart3 />
          Cart
          {currentSale.length > 0 ? <Badge>{currentSale.length}</Badge> : null}
        </CartLink>
      </ListContainer>
    </MainHeaderContainer>
  )
}

export default Header