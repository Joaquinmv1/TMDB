import styled from "styled-components"

export const ContainerMovies = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 20px;
  margin: 0 auto;
`

export const ContainerMoviesLi = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    & img {
    box-shadow: 0px 0px 30px #000;
    width: 100%;
    height:450px;
    object-fit: cover;
    border-radius: 8px;
  }

  & h3{
    width: 300px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`