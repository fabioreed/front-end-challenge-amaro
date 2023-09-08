import { useContext, useEffect } from 'react'
import { CartContext } from '../../providers/CartContext'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { BackgroundModalContainer, CardContainer, CartList, ColorAndSize, ImageContainer, InfoProductOnCart, QuantityAndProductPrice, TitleAndCloseBtnCard, TitleAndCloseBtnContainer, TotalPrice } from './style'
import { ICartProduct } from '../../providers/@types'

const Cart = () => {
  const { currentSale, setModal, modal, removeToCart, convertPriceStringToNumber, setCurrentSale, setCartTotal } = useContext(CartContext)
  
  const calculateTotalPrice = () => {
    const total = currentSale.reduce((acc, item) => {
      const actualPriceAsNumber = convertPriceStringToNumber(item.actual_price)
      
      if (!isNaN(actualPriceAsNumber)) {
        return acc + actualPriceAsNumber * item.quantity;
      } else {
        // Lide com casos em que a conversão falhou (por exemplo, log de erro ou tratamento adequado)
        console.error(`Erro na conversão de preço: ${item.actual_price}`)
        return acc
      }
    }, 0)

    return total.toFixed(2)
  }

  useEffect(() => {
    const saleTotalValue = calculateTotalPrice()

    setCartTotal(saleTotalValue)
  }, [currentSale])

  const handleDecreaseQuantity = (item: ICartProduct) => {
    if (item.quantity > 1) {
      // Reduza a quantidade se for maior que 1
      const updatedCart = [...currentSale]
      const itemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name)
      updatedCart[itemIndex].quantity--

      setCurrentSale(updatedCart)
    } else {
      // Se a quantidade for igual ou menor que 1, remova o item do carrinho
      removeToCart(item)
    }
  }

  const handleIncreaseQuantity = (item: ICartProduct) => {
    // Aumente a quantidade
    const updatedCart = [...currentSale]
    const itemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name)
    updatedCart[itemIndex].quantity++

    setCurrentSale(updatedCart)
  }

  return (
    <>
      <BackgroundModalContainer>
        <CartList>
          <TitleAndCloseBtnContainer>
            <span onClick={() => setModal(!modal)}><BsChevronCompactLeft /></span>
            <h4>Sacola ({currentSale.length})</h4>
          </TitleAndCloseBtnContainer>
          {currentSale.map((item, index) => (
            <CardContainer key={index}>
              <ImageContainer>
                <img src={item.image} alt={item.name} />
              </ImageContainer>
              <InfoProductOnCart>
                <TitleAndCloseBtnCard>
                  <h4>{item.name}</h4>
                  <button onClick={() => removeToCart(item)}>X</button>
                </TitleAndCloseBtnCard>
                <ColorAndSize>
                  <span>{item.color}</span>
                  <span>Tamanho P</span>
                </ColorAndSize>
                <QuantityAndProductPrice>
                  <div>
                    <span onClick={() => handleDecreaseQuantity(item)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => handleIncreaseQuantity(item)}>+</span>
                  </div>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    }).format(convertPriceStringToNumber(item.actual_price) * item.quantity)}
                  </span>
                </QuantityAndProductPrice>
              </InfoProductOnCart>
            </CardContainer>
          ))}
          <TotalPrice>
            <span>Total a pagar</span>
            <span>{Number(calculateTotalPrice()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </TotalPrice>
        </CartList>
      </BackgroundModalContainer>
    </>
  )
}

export default Cart