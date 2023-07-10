import { useState } from "react"
import { AiOutlineSearch, AiTwotoneStar } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"
import { ButtonPagination, CarrouselDetail, ContainerSvgs, InputContainer, ShowSearchContainer, Sort, UlContainer } from ".."
import { BASE_URL } from "../../constants/const"
import { Movie } from "../../models/types"

const carrouselImgs = ['black-mirror-cr.jpg', 'harry potter.jpg', 'SPIDER-MAN ACROSS THE SPIDER-VERSE_Thumb.jpg'];

interface Props {
  movies: Movie[];
  pagination: (cal: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
  currentPage: number;
  result: string;
  setCurrentCategory: (category: string) => void;
}

export const ShowSearchView = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(carrouselImgs[0]);

  const disableButton = props.currentPage === 1;

  const selectedImg = () => {
    const condition = selectedIndex < carrouselImgs.length - 1;
    const newIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setCurrentImg(carrouselImgs[selectedIndex]);
  }

  const previousImg = () => {
    const condition = selectedIndex > carrouselImgs.length - 1;
    const newIndex = condition ? selectedIndex - 1 : carrouselImgs.length - 1;
    setSelectedIndex(newIndex);
    setCurrentImg(carrouselImgs[selectedIndex]);
  }

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
              {props.movies?.map((movie: Movie) => {
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
              {!disableButton && <button onClick={() => props.pagination('res')}>{'<'}</button>}
              <button onClick={() => props.pagination('sum')}>{'>'}</button>
            </ButtonPagination>
          </div>
        </div>
      </ShowSearchContainer>
    </>
  )
}