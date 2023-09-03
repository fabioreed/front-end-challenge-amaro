import { styled } from "styled-components";

export const CardList = styled.ul`
  display: flex;
  gap: .7rem;
  
  overflow-x: auto;

  padding: .7rem 1rem;

  @media (min-width: 768px) {
    overflow: hidden;

    flex-wrap: wrap;

    padding: 2rem 6rem;

    justify-content: space-between;
  }
`