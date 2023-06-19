import { CastContainer, CastContent } from "./style";

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
interface CastProps {
  detail: any
}

export const CastList = ({ detail }: CastProps) => {
  return (
    <>
      <CastContainer>
        <h3>Cast:</h3>
        <CastContent>
          {detail.creditsData.cast.slice(0, 5).map((member: any) => {
            const castImageUrl = `${BASE_URL}${member.profile_path}`;
            return (
              <li key={castImageUrl}>
                <img src={castImageUrl} alt={member.name} />
                <p>{member.name}</p>
              </li>
            );
          })}
        </CastContent>
      </CastContainer>
    </>
  )
}