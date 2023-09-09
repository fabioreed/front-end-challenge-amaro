import { styled } from "styled-components";

export const MainHeaderContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  padding: 1rem;

  width: 100%;
  
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6em;
  }
`

export const LogoContainer = styled.figure`
  > img {
    width: 65px;
  }

  @media (min-width: 768px) {
    > img {
      width: 120px;
    }
  }
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1rem;

  > input {
    padding: .4rem 1rem;
    border-radius: 8px;

    border: 1px solid var(--light-gray);

    &::placeholder {
      font-size: .7rem;
    }
  }
`

export const CartLink = styled.button`
    display: flex;
    align-items: center;
    gap: .4rem;

    font-size: .7rem;
    color: var(--gray);

    cursor: pointer;

    background: transparent;

    position: relative;

    @media (min-width: 768px) {
      font-size: 1.1rem;
  }
`

export const Badge = styled.span`
  width: 16px;
  height: 16px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--alert-negative);

  color: var(--white);
  font-size: .6rem;

  position: absolute;
  top: -4px;
  right: -13px;
`