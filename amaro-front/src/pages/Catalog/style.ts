import { styled } from "styled-components";

export const CardList = styled.ul`
  display: flex;
  gap: .7rem;
  
  overflow-x: auto;

  padding: .7rem 1rem;

  @media (min-width: 768px) {
    gap: 1rem;

    overflow: hidden;

    flex-wrap: wrap;

    padding: 2rem 5rem;

    justify-content: space-between;
  }
`