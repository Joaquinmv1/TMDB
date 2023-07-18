import styled from "styled-components"

export const ShowSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 80px;
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 15px;

  li{
    width:20%;
  }

  li p{
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img{
    width: 100%;
    object-fit: contain;
    cursor: pointer;
    transition: .3s ease;
  }

  img:hover{
    transform: scale(1.1);
  }
`


export const ContainerSvgs = styled.div`
  display: flex;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
  svg {
    font-size: 1rem;

  }
`

export const Sort = styled.div`
  /* background-color: #191919 ; */
  width: 85%;
  /* height: 100px; */
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  /* padding:0 3rem; */
  align-items: center;

  select{
    padding: .8rem 3rem;
    margin-left: 1.4rem;
    border: none;
    outline: none;
    border-color:#282828;
    background-color: #222222 ;
    color: #fff;

    /* border: 1px solid #ccc; */
    border-radius: 4px;
  
    /* appearance: none; */
  /* -webkit-appearance: none; */
  /* -moz-appearance: none; */
  }
`

export const ButtonPagination = styled.div`
  display: flex;
  gap: 10px;
  margin-block:1rem;

  button{
    padding:.5rem 1rem;
    border: none;
    outline: none;
    background-color: rgb(72, 195, 219);
    color: #fff;
    /* border-radius: 5px; */
    cursor: pointer;
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  
  input{
    padding: .5rem 1rem;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    position: relative;
    color: #ffff;
  }
`

