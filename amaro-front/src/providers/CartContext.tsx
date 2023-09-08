import { createContext, useState, useEffect } from "react";
import { ICartContext, ICartProduct, IDefaultProviderProps, IProduct } from "./@types";
import { toast } from "react-toastify";

export const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([])
  const [currentSale, setCurrentSale] = useState<ICartProduct[]>([])
  const [cartTotal, setCartTotal] = useState<number | string>(0)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('currentSale')
    if (savedCart) {
      setCurrentSale(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (item: IProduct | ICartProduct) => {
    const existingItemIndex = currentSale.findIndex((cartItem) => cartItem.name === item.name)
    let updatedCart: ICartProduct[]

    if (existingItemIndex !== -1) {
      // Se o item já existe no carrinho, atualize apenas a quantidade
      updatedCart = [...currentSale]
      updatedCart[existingItemIndex].quantity++
    } else {
      // Caso contrário, adicione o item ao carrinho com quantidade 1
      updatedCart = [...currentSale, { ...item, quantity: 1 }]

      toast.success('Produto adicionado!')
    }

    // Atualize o estado com o novo carrinho
    setCurrentSale(updatedCart)

    // Atualize o localStorage com o novo carrinho
    localStorage.setItem("currentSale", JSON.stringify(updatedCart))
  }

  const removeToCart = (itemProduct: ICartProduct) => {
    const remove = currentSale.filter((item) => {
      return item.name !== itemProduct.name
    })

    localStorage.setItem('currentSale', JSON.stringify(remove))

    setCurrentSale(remove)

    toast.success('Produto removido!')
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

  const clearCart = () => {
    setCurrentSale([])

    localStorage.removeItem('currentSale')
  }

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
      convertPriceStringToNumber,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

