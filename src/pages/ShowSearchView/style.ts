import styled from "styled-components"

export const ShowSearchContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 1; 
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  li{
    background-color: #48c3db;
    background-color: rgb(27, 120, 128);
    
  }

  li p{
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img{
    padding: .1rem;
    width: 250px;
    cursor: pointer;
  }
`