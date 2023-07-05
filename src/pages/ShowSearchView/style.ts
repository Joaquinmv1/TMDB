import styled from "styled-components"

export const ShowSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* z-index: 1;  */
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 15px;

  li{
    /* background-color: rgb(27, 120, 128); */
    /* background-color: #48c3db; */
    width:20%;
    /* height: 300px; */
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

export const ContainerHeroShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  img{
    height: 450px;
    object-fit: cover;
    display: block;
    padding: 1rem;
    border-radius:30px;
    width: 100%;
    width: 87%;
  }
`

export const ContainerShow = styled.div`
  width: 98%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #191919 ;
  width: 83.5%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: .9rem;

  select{
    text-align: start;
    padding: .8rem 3rem;
    border: none;
    outline: none;
    border-color:#282828;
    background-color: #222222 ;
    color: #fff;
  }
`