import styled from "styled-components"

export const UlSearchContainer = styled.ul`
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  li {
    display: flex;
    gap: 12px;
    margin: .1rem 0
  }

  li p {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ButtonSearch = styled.button`
  background-color: rgb(67, 64, 63);
  color: #fff;
  width: 100%;
  border: none;
  padding: .3rem;
`