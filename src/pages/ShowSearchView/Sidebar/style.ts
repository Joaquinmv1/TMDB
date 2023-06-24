import styled from "styled-components";

export const SidebarMain = styled.div`
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
