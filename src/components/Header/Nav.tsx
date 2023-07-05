import { Link } from "react-router-dom"
import { ButtonLeft, ButtonRight, InputSearch, NavBarLeft, NavBarRight, Navv, SearchResults, Ul } from ".."
import { AiOutlineSearch } from "react-icons/ai"
import { useScroll } from "../../hooks";
import { NavProps } from "./types";

export const Nav = ({ searchTerm, data, detectedChange, cleanInput, clearInputValue }: NavProps) => {
  const scroll = useScroll();
  return (
    <>
      <Navv scrolled={scroll}>
        <NavBarLeft>
          <Link className='link' to='/'>
            <img src="logo.png" alt="" />
          </Link>
          <Ul>
            <Link className='link' to='/'>
              <li>
                Home
              </li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Movies</li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Series</li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Anime</li>
            </Link>
            <li>My List</li>
          </Ul>
        </NavBarLeft>
        <NavBarRight>
          <div>
            <InputSearch
              value={searchTerm}
              onChange={(e) => detectedChange(e)}
              type="text"
              placeholder="Search..."
            />
            {searchTerm &&
              <button
                onClick={clearInputValue}
                style={{ position: 'absolute', right: '230px', top: '50%', transform: 'translateY(-50%)' }}>
                x
              </button>}
            <AiOutlineSearch style={{ position: 'absolute', right: '210px', top: '50%', transform: 'translateY(-50%)' }} />
            <SearchResults
              data={data}
              searchTerm={searchTerm}
              cleanInput={cleanInput}
              clearInputValue={clearInputValue}
            />
          </div>
          <div>
            <Link to='/movies'>
              <ButtonLeft>Sign In</ButtonLeft>
            </Link>
            <Link to='/movies'>
              <ButtonRight>Sign out</ButtonRight>
            </Link>
          </div>
        </NavBarRight>
      </Navv>
    </>
  )
}