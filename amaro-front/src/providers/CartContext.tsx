import { createContext, useState, useEffect } from "react";
import { ICartContext, ICartProduct, IDefaultProviderProps, IProduct } from "./@types";

export const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([])
  const [currentSale, setCurrentSale] = useState<ICartProduct[]>([])
  const [cartTotal, setCartTotal] = useState<number | string>(0)
  const [modal, setModal] = useState(false)

  const addToCart = (item: IProduct | ICartProduct) => {
    const existingItemIndex = currentSale.findIndex((cartItem) => cartItem.name === item.name)
    if (existingItemIndex !== -1) {
      // Se o item já existe no carrinho, atualize apenas a quantidade
      const updatedCart: any = [...currentSale]

      updatedCart[existingItemIndex].quantity++

      setCurrentSale(updatedCart)
    } else {
      // Caso contrário, adicione o item ao carrinho com quantidade 1
      setCurrentSale([...currentSale, { ...item, quantity: 1 }]);
    }
  }

  const removeToCart = (itemProduct: ICartProduct) => {
    const remove = currentSale.filter((item) => {
      return item.name !== itemProduct.name
    })

    setCurrentSale(remove)

    console.log('Produto removido!')
  }

  const convertPriceStringToNumber = (priceString: string) => {
    // Remove o símbolo "R$" e a vírgula, depois converte para número de ponto flutuante
    return parseFloat(priceString.replace("R$", "").replace(",", "."));
  }

  useEffect(() => {
    const saleTotalValue = currentSale.reduce((acc, current) => {
      const actualPriceAsNumber = (convertPriceStringToNumber(current.actual_price))
      return acc + actualPriceAsNumber
    }, 0)

    setCartTotal(saleTotalValue)
  }, [currentSale])

  return (
    <CartContext.Provider value={{
      addToCart,
      product,
      setProduct,
      currentSale,
      setCurrentSale,
      removeToCart,
      cartTotal,
      setCartTotal,
      modal,
      setModal,
      convertPriceStringToNumber
    }}>
      {children}
    </CartContext.Provider>
  )
}

