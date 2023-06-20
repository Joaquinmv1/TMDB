import styled from "styled-components"

export const CastContainer = styled.div`
  display: flex;
  padding-block:1rem;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CastContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */

  li img {
    padding-block: .6rem;
    width: 120px;
    border-radius: 15px;
  }

  li p {
    width:130px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
`

export const ImageCast = styled.img`


`