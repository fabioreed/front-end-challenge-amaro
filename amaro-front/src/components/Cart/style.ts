import { styled } from "styled-components";

export const BackgroundModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: flex-end;

    padding: 0;
  }
`

export const CartList = styled.ul`
  padding: 1rem;

  background: var(--white);

  width: 95%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  border-radius: 6px;

  overflow-y: auto;

  @media (min-width: 768px) {
    width: 33%;
    height: 100vh;

    padding: 1rem;

    padding-right: 2rem;
  }
`

export const CardContainer = styled.li`
  display: flex;

  border: 1px solid var(--light-gray);

  border-radius: 6px;

  @media (min-width: 768px) {
    gap: 1rem;

    justify-content: space-between;
  }
`

export const TitleAndCloseBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    cursor: pointer;
  }
`

export const TitleAndCloseBtnCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .3rem; // Necessario?

  position: relative;

  > h4 {
    color: var(--gray);
    font-size: .65rem;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--black);

    width: 17px;
    height: 17px;

    border-radius: 50%;

    color: var(--white);
    font-weight: 600;
    font-size: .6rem;

    cursor: pointer;

    transition: .2s ease;

    position: absolute;
    top: -19px;
    right: -19px;

    &:hover {
      background: var(--light-gray);
    }
  }
`

export const ImageContainer = styled.figure`
  > img {
    width: 78px;

    border-radius: 6px 0 0 6px;
  }

  @media (min-width: 768px) {
    > img {
      width:95px;

      object-fit: cover;

      height: 100%;
    }
  }
`

export const InfoProductOnCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
    
    padding: .8rem;
  }
  `

export const ColorAndSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  > span {
    color: var(--gray);
    font-size: .7rem;
  }

  @media (min-width: 768px) {
    gap: .6rem;
  }
`

export const QuantityAndProductPrice = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: .3rem;

    > span {
      color: var(--gray);
      font-size: .8rem;

      &:nth-child(1), &:nth-child(3) {
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--light-gray);

        width: 14px;
        height: 14px;

        border-radius: 50%;

        transition: .2s ease;

        cursor: pointer;

        &:hover {
          background: var(--gray);

          color: var(--white);
        }
      }
    }
  }

  > span {
    font-size: .8rem;
    font-weight: 600;
    color: var(--gray);
  }

`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  bottom: 0;

  background: var(--white);

  width: 100%;

  > span {
    font-size: .8rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    > span {
      font-size: 1rem;
    }
  }
`