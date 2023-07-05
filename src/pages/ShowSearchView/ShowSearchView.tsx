import { AiTwotoneStar } from "react-icons/ai"
import { ContainerHeroShow, ContainerShow, ContainerSidebar, ContainerSvgs, ShowSearchContainer, Sidebar, Sort, UlContainer } from ".."
import { Movie } from "../../models/types"
import { BASE_URL } from "../../constants/const"
import { AiOutlineSearch } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"

interface Props {
  movies: Movie[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ShowSearchView = ({ movies, currentCategory, setCurrentCategory }: Props) => {
  return (
    <>
      <ShowSearchContainer>
        {/* <ContainerSidebar>
          <Sidebar
            selectedCategory={currentCategory}
            setSelectedCategory={setCurrentCategory}
          />
        </ContainerSidebar> */}
        <div>
          <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center', width: '95%', alignItems: 'center', flexDirection: 'column' }}>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', alignItems: 'center', width: '83%', marginBlock: '1rem' }}>
              <h3>Featured</h3>
              <ContainerSvgs>
                <AiOutlineSearch />
                <BsBookmark />
                <IoMdNotificationsOutline />
              </ContainerSvgs>
            </div> */}
            <ContainerHeroShow>
              <ContainerShow>
                <img src="harry potter.jpg" alt="" />
              </ContainerShow>
            </ContainerHeroShow>
            <Sort>
              <select>
                <option value="category">Category</option>
              </select>
              <select>
                <option value="category">Sort By Year</option>
              </select>
              <select>
                <option value="category">Sort By hours</option>
              </select>
              <select>
                <option value="category">Sort By Rates</option>
              </select>
            </Sort>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '82%' }}>
              <h3 style={{ marginBlock: '1rem', textAlign: 'start' }}>Just Added</h3>
            </div>
            <UlContainer>
              {movies?.map((movie: Movie) => {
                return (
                  <li key={movie.id}>
                    <img loading='lazy' src={`${BASE_URL}${movie.poster_path}`} alt="" />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '.5rem' }}>
                      <p>{movie.title || movie.name}</p>
                      <p style={{ fontSize: '.9rem' }} ><AiTwotoneStar /> {movie.vote_average} </p>
                    </div>
                  </li>
                )
              })}
            </UlContainer>
          </div>
        </div>
      </ShowSearchContainer>
    </>
  )
}