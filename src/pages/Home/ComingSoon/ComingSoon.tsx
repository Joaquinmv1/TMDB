import { AiOutlinePlus } from "react-icons/ai"
import { CardsComing, ContentComing, Details, Score, SectionComing, Coming, ContainerComing } from "./style"
import { SlOptionsVertical } from "react-icons/sl"

export const ComingSoon = () => {
  return (
    <>
      <ContainerComing>
        <Coming>
          <h2>Coming Soon...</h2>
          <p>More</p>
        </Coming>
        <CardsComing>
          <img src="card-sp.jpg" alt="" />
          <img src="One-Piece-Live-action-Netflix.jpg" alt="" />
          <img src="bc-movie.jpg" alt="" />
          <img src="Black-Mirror-Season-6-Poster.jpg" alt="" />
        </CardsComing>
        <SectionComing>
          <img src="SV2_wbs0040.1001_lm_v1-H-2023.jpg" alt="" />
          <ContentComing>
            <h3>Spider Man Across The Spider Verse  (2023)</h3>
            <div style={{ width: '50%', marginBlock: '.5rem', gap: '10px', display: 'flex', flexDirection: 'column' }}>
              <p>PG | 3h 00min | </p>
              <p>After meeting Gwen Stacy, the friendly neighborhood full-time Spiderman from Brooklyn, he is catapulted through the multiverse, where he encounters a team of spider people entrusted with protecting their very existence.</p>
            </div>
            <Score>
              <img src="star-removebg-preview (1).png" alt="" />
              <div>4.0</div>
            </Score>
            <Details>
              <button>Watch Trailer</button>
              <button>View Info</button>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                <AiOutlinePlus /> Favorites
                <SlOptionsVertical />
              </div>
            </Details>
          </ContentComing>
        </SectionComing>
      </ContainerComing>
    </>
  )
}

