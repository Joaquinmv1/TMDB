import { AiOutlinePlus } from "react-icons/ai"
import { SlOptionsVertical } from "react-icons/sl"
import { Link } from "react-router-dom"
import { CardsComing, Coming, ContainerComing, ContentComing, Details, Score, SectionComing } from "./style"

export const ComingSoon = () => {
  return (
    <>
      <ContainerComing>
        <Coming>
          <h2>Coming Soon...</h2>
          <Link className="link" to='movies'>
            <p>More</p>
          </Link>
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
              <p>PG | 3h 00min | Animation </p>
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
      {/* <div style={{display: 'flex', justifyContent: 'center' ,width: '100%'}}>
        <picture style={{width: '100%'}}>
          <img src="923d383e-a523-4563-b3a0-9680a9d1adca.png" alt="" />
        </picture>
      </div> */}
    </>
  )
}

