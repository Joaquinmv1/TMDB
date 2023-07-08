import { AiTwotoneStar } from "react-icons/ai"
import { ButtonPagination, ContainerHeroShow, ContainerShow, ContainerSidebar, ContainerSvgs, InputContainer, ShowSearchContainer, Sidebar, Sort, UlContainer } from ".."
import { Movie } from "../../models/types"
import { BASE_URL } from "../../constants/const"
import { AiOutlineSearch } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"

interface Props {
  movies: Movie[];
  pagination: (cal: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
  currentPage: number;
  result: string;
  setCurrentCategory: (category: string) => void;
}

const SUM = 'sum';
const RES = 'res';

export const ShowSearchView = ({ movies, handleChange, category, currentPage, result, pagination, setCurrentCategory}: Props) => {
  const disableButton = currentPage === 1
  return (
    <>
    <ShowSearchContainer>
      <div>
        <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center', width: '95%', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', alignItems: 'center', width: '83%', marginBlock: '1rem' }}>
            <h3>Featured</h3>
            <ContainerSvgs>
              <AiOutlineSearch />
              <BsBookmark />
              <IoMdNotificationsOutline />
            </ContainerSvgs>
          </div>
          <ContainerHeroShow>
            <ContainerShow>
              <img src="harry potter.jpg" alt="" />
            </ContainerShow>
          </ContainerHeroShow>
          <Sort>
            <select value={category} onChange={(e) => setCurrentCategory(e.target.value)} >
              <option value="movie,tv,serie">Category</option>
              <option value="movie">Movies</option>
              <option value="tv">Series</option>
              <option value="person">Actors</option>
              <option value="35">Comedy</option>
            </select>
            <InputContainer>
              <input onChange={handleChange} type="text" value={result} placeholder="Search..." />
              <AiOutlineSearch style={{ position: 'relative', right: '30px' }} />
            </InputContainer>
          </Sort>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '82%' }}>
            <h3 style={{ marginBlock: '1rem', textAlign: 'start' }}>Just Added</h3>
          </div>
          <UlContainer>
            {movies?.map((movie: Movie) => {
              return (
                <li key={movie.id}>
                  <img loading='lazy' src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`} alt="" />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '.5rem' }}>
                    <p>{movie.title || movie.name}</p>
                    <p style={{ fontSize: '.9rem' }} ><AiTwotoneStar /> {movie.vote_average} </p>
                  </div>
                </li>
              )
            })}
          </UlContainer>
          <ButtonPagination>
            {!disableButton && <button onClick={() => pagination('res')}>{'<'}</button>}
            <button onClick={() => pagination('sum')}>{'>'}</button>
          </ButtonPagination>
        </div>
      </div>
    </ShowSearchContainer>
  </>
  )
}