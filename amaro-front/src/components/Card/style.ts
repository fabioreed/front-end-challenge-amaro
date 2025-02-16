import { styled } from "styled-components";

export const CardAds = styled.li`
  display: flex;
  flex-direction: column;

  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (min-width: 768px) {
    width: 222px;
  }
`

export const FigureImg = styled.figure`
  width: 140px;
  height: 70%;

  > img {
    width: 100%;
    height: auto; 

    object-fit: cover;

    border-radius: 6px 6px 0 0;

    height: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const TitleAndPriceTag = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: .7rem;
    color: var(--gray);
    letter-spacing: .6px;

    white-space: nowrap; /* Impede a quebra de linha */
    overflow: hidden; /* Oculta o texto que estiver além do contêiner */
    text-overflow: ellipsis; /* Adiciona três pontos (...) no final do texto que for cortado */
    max-width: 15ch; /* Limita o texto a 13 caracteres */

    @media (min-width: 768px) {
      max-width: 32ch;
    }
  }
`

export const InfoCard = styled.div`
  padding: 1rem;

  display: flex;

  flex-direction: column;

  gap: .4rem;

  > button {
    align-self: center;
    
    padding: .4rem;

    color: var(--white);

    width: 100%;

    background: var(--black);

    transition: .2s ease;

    &:hover {
      background: var(--light-gray);
    }
  }
`

export const Prices = styled.div`
  :nth-child(1) {
    font-size: .8rem;
    color: var(--black);
    font-weight: 700;
  }

  :nth-child(2) {
    font-size: .68rem;
    color: var(--gray);
  }
`