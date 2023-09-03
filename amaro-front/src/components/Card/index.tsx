import { useContext } from "react"
import { products } from '../../../products.json'
import { CartContext } from '../../providers/CartContext'
import { CardAds, FigureImg, InfoCard, Prices, TitleAndPriceTag } from './style'
import { v4 as uuidv4 } from 'uuid'
import { IProduct } from "../../providers/@types"

const Card = () => {
  const { addToCart } = useContext(CartContext)

  const convertProductToCartProduct = (product: IProduct) => {
    // Crie um objeto ICartProduct com base no objeto de produto existente
    return {
      ...product,
      quantity: 1, // Defina a quantidade inicial como 1 ou qualquer valor desejado
    };
  }

  return (
    <>
      {products.map((product) => (
        <CardAds key={uuidv4()}>
          <FigureImg>
            <img src={product.image} alt={product.name} />
          </FigureImg>
          <InfoCard>
            <TitleAndPriceTag>
              <h4>{product.name}</h4>
              <span>{product.actual_price}</span>
            </TitleAndPriceTag>
            <Prices>
              <span>{product.on_sale}</span>
              <span>{product.installments}</span>
            </Prices>
          </InfoCard>
          <button onClick={() => addToCart(convertProductToCartProduct(product))}>Add to Cart</button>
        </CardAds>
      ))}
    </>
  )
}

export default Card