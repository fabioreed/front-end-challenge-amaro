import { styled } from "styled-components";

export const CardAds = styled.li`
  display: flex;
  flex-direction: column;

  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  > button {
    align-self: center;
    
    padding: .4rem;

    color: var(--white);

    width: 80%;

    background: var(--black);

    transition: .2s ease;

    &:hover {
      background: var(--light-gray);
    }
  }

  @media (min-width: 768px) {
    width: 240px;
  }
`

export const FigureImg = styled.figure`
  width: 220px;
  
  > img {
    width: 100%;

    object-fit: contain;

    border-radius: 6px 6px 0 0;

  }

  @media (min-width: 768px) {
    width: 100%;

    height: 300px;
    
    > img {
      height: 100%;
      height: fit-content;
      width: 100%;
    }
  }
`

export const TitleAndPriceTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;

  > h4 {
    font-size: .7rem;
    color: var(--gray);
    letter-spacing: .6px;
  }
`

export const InfoCard = styled.div`
  padding: 1rem;

  display: flex;

  flex-direction: column;

  gap: 1rem;
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