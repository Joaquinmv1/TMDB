import styled from "styled-components"

export const ComingSoon = () => {
  return (
    <>
      <SectionComing>
        <h2>Coming Soon...</h2>
        <img src="fivenight.jpg" alt="" />
        <ContentComing>
          <h2>Five Nights At Freddy's (2023)</h2>
          <p>PG | 3h 00min | </p>
        </ContentComing>
      </SectionComing>
    </>
  )
}

export const SectionComing = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    position: relative;
    width: 90%;
    height: 600px;
    object-fit:cover;
  }
`

export const ContentComing = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
