import styled from "styled-components"

export const CarouselContainer = styled.div`
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
`

export const FullViewportImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
  aspect-ratio: 16/9;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Nav = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  z-index: 100;
  color: #fff;
  transition: background-color 0.3s ease;

  ${({ scrolled }) =>
    scrolled &&
    `
    background-color: rgb(0, 0, 0);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  `}

  & h2 {
    cursor: pointer;
  }
  
  & input{
    padding: 10px;
    font-weight: bold;
    color: #fff;
    background-color: transparent;
  }
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
`