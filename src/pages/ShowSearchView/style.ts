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
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;

  li{
    /* background-color: rgb(27, 120, 128); */
    /* background-color: #48c3db; */
    width:15%;
    height: 300px;
  }

  li p{
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
    cursor: pointer;
  }
`