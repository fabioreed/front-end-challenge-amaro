import { keyframes, styled } from "styled-components";

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

  padding: .3rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const slideInRightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${slideInRightToLeft} .4s ease;

  z-index: 1000;

  @media (max-width: 768px) {
    height: 80vh;
    width: 100%;
  }
`

export const CartList = styled.ul`
  background: var(--white);

  width: 100%;
  height: 98vh;
  /* height: auto; */

  display: flex;
  flex-direction: column;
  gap: .8rem;

  overflow-y: auto;

  position: relative;

  padding-top: .7rem;

  @media (min-width: 768px) {
    width: 460px;
    height: 470px;

    padding-top: 1.2rem;

    padding-right: 1.5rem;
  }
`

export const CardContainer = styled.li`
  display: flex;

  border: 1px solid rgba(0, 0, 0, 0.09);

  border-radius: 6px;

  position: relative;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export const TitleAndCloseBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  position: sticky;
  top: 0;

  background: var(--white);

  z-index: 10;

  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  > span {
    cursor: pointer;
  }

  > h4 {
    font-size: .7rem;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    padding: 1.7rem 1.2rem;
  }
`

export const TitleAndCloseBtnCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    right: 4px;
    top: -7px;

    &:hover {
      background: var(--light-gray);
    }
    
    @media (min-width: 768px) {
      top: -6px;
      right: 4px;
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
      width: 105px;

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

    width: 100%;

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

  background: var(--black);

  color: var(--white);

  width: 100%;
  padding: 2rem;

  > span {
    font-size: .6rem;
    font-weight: 600;
  }

  position: sticky;
  bottom: 0px;
  right: 0;
  @media (min-width: 768px) {
    bottom: 0px;
    z-index: 10;

    > span {
      font-size: .8rem;
    }
  }
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--gray);
  font-style: italic;
  font-weight: 300;
`