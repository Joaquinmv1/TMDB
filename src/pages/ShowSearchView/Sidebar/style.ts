import styled from "styled-components";

export const SidebarMain = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 10px;
  background-color: #000;
  z-index: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aaa;
  
  &::-webkit-scrollbar {
    width: 2px; /* Ancho del scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #000; /* Color de fondo del scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #48c3db; /* Color del thumb del scrollbar */
    border-radius: 4px; /* Borde del thumb del scrollbar */
  }
  ul li{
    padding: .7rem 1rem;
    cursor: pointer;
    font-size: .9rem;

  }

  h3{
    margin: 0 auto;
  }
`

export const HeaderSidebar = styled.div`
  width: 100%;
  text-align: center;
  margin-block: 1rem;

  img{
    width:50%;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const SidebarLi = styled.li`
  margin-left: 1.2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease;

  :hover{
    background-color: #5694a1;
    border-radius: 10px;
    color: #648e97;
  }
`

export const ContainerSidebar = styled.div`
  width: 40%;
`