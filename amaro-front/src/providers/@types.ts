export interface ICartContext {
  addToCart: (item: ICartProduct) => void
  product: IProduct[]
  setProduct: React.Dispatch<React.SetStateAction<IProduct[]>>
  currentSale: ICartProduct[]
  setCurrentSale: React.Dispatch<React.SetStateAction<ICartProduct[]>>
  removeToCart: (itemProduct: ICartProduct) => void
  cartTotal: number | string
  setCartTotal: React.Dispatch<React.SetStateAction<number | string>>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  convertPriceStringToNumber: (priceString: string) => number
  clearCart: () => void
}

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface Size {
  available: boolean
  size: string
  sku: string
}

export interface IProduct {
  name: string
  style: string
  code_color: string
  color_slug: string
  color: string
  on_sale: boolean
  regular_price: string
  actual_price: string
  discount_percentage: string
  installments: string
  image: string
  sizes: Size[]
}

export interface ICartProduct extends IProduct {
  quantity: number
}