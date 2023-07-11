import { AiOutlineSearch, AiTwotoneStar } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"
import { CarrouselDetail, ContainerSvgs, InputContainer, ShowSearchContainer, Sort, UlContainer } from ".."
import { BASE_URL } from "../../constants/const"
import { Movie } from "../../models/types"

interface Props {
  movies: Movie[];
  pagination: (cal: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
  currentPage: number;
  result: string;
  setCurrentCategory: (category: string) => void;
  moviesRef: any
}

export const ShowSearchView = (props: Props) => {
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
            <CarrouselDetail />
            <Sort>
              <select value={props.category} onChange={(e) => props.setCurrentCategory(e.target.value)} >
                <option value="movie,tv,serie">Category</option>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
                <option value="person">Actors</option>
                <option value="35">Comedy</option>
              </select>
              <InputContainer>
                <input onChange={props.handleChange} type="text" value={props.result} placeholder="Search..." />
                <AiOutlineSearch style={{ position: 'relative', right: '30px' }} />
              </InputContainer>
            </Sort>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '82%' }}>
              <h3 style={{ marginBlock: '1rem', textAlign: 'start' }}>Just Added</h3>
            </div>
            <UlContainer>
              {props.movies?.map((movie: Movie, i:number) => {
                return (
                  <li key={`${movie.id} ${i}`}>
                    <img loading='lazy' src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`} alt="" />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '.5rem' }}>
                      <p>{movie.title || movie.name}</p>
                      <p style={{ fontSize: '.9rem' }} ><AiTwotoneStar /> {movie.vote_average} </p>
                    </div>
                  </li>
                )
              })}
            <li style={{height: '100px'}} ref={props.moviesRef}>asdasddas</li>
            </UlContainer>
            {/* <ButtonPagination>
              {!disableButton && <button onClick={() => props.pagination('res')}>{'<'}</button>}
              <button onClick={() => props.pagination('sum')}>{'>'}</button>
            </ButtonPagination> */}
          </div>
        </div>
      </ShowSearchContainer>
    </>
  )
}