import styled from "styled-components"

export const ContainerComing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`

export const Coming = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-block: 1rem;
`

export const CardsComing = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 1rem;
  /* padding-inline:1.5rem; */
  width: 100%;
  gap: 20px;

  img {
    width: 24%;
    height: 550px;
    object-fit: cover;
    object-position: bottom;
    border-radius: 1rem;
    cursor: pointer;
  }
`

export const SectionComing = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3{
    font-size: 2.45rem;
  }

  img{
    position: relative;
    width: 100%;
    height: 500px;
    object-fit:cover;
    margin-block: 1rem;
    border-radius: 20px;
  }
`

export const ContentComing = styled.div`
  position: absolute;
  left: 10%;
  img{
    width: 15%;
    height: 35px;
    margin-bottom: 1rem;
  }
`

export const Score = styled.div`
  display: flex;
  /* align-items: center; */
  text-align: center;
  margin-left: -1.1rem;
  
  div{
    background-color:transparent;
    margin-block: 1.2rem;
    border: 2px solid rgb(72, 195, 219);;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
    font-weight: bold;
  }


`

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

button{
    display: block;
    width: 8rem;
    padding: .5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease;
  }


button:first-child {
    color: #fff;
    background-color: #48c3db;
  }

  button:first-child:hover {
    background-color: #40A0A8;
  }

  button:nth-child(2):hover {
    color: #fff;
    background-color: #C4C9C9;
  }

`
