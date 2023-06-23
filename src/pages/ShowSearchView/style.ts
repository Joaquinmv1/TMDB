import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: flex;
  
  /* position: absolute; */
  /* top: 10%; */
  width: 100%;
  z-index: 1; 
`

export const Sidebar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  gap: 10px;
  background-color: #000;
  overflow-y: auto;
  z-index: 1;

  ul li{
    padding: .7rem 1rem;
    cursor: pointer;
    font-size: .9rem;

  }

  h3{
    margin: 0 auto;
  }
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  /* position: relative;
  z-index: 1111; */

  li{
    /* width: 20%; */
  }

  img{
    width: 250px;
    cursor: pointer;
  }
`