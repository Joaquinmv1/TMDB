import styled from "styled-components"

export const CarouselContainer = styled.div`
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #fff;
`

export const Overlay = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow:wrap column;
  gap: 10px;
  color: white;
  z-index: 2;
  transition: opacity 0.3s ease;

  h3 {
    font-size: 5rem;
  }

  p {
    font-size: 24px;
  }

  button{
    display: block;
    width: 8rem;
    padding: .5rem;
    border: none;
    cursor: pointer;
  }
`;

export const FullViewportImage = styled.div`
  position: relative;
  width: 100%;
  max-height: 90vh;
  object-fit: cover;
  background-color: #fff;
  aspect-ratio: 16/9;
  overflow: hidden;
  z-index: 100;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  p{
    width: 500px;
    font-size: 1rem;
  }
`;

export const Nav = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
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

  &::before {
      content: "";
      position: absolute;
      top: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }

  & h2 {
    cursor: pointer;
  }
`

export const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  cursor: pointer;
`

export const InputSearch = styled.input`
  background-color: transparent;
  font-weight: bold;
  color: #fff;
  border: none;
`

export const ButtonRight = styled.button`
  background-color: #48c3db;
  color: #fff;
  padding: .65rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 20px;
`