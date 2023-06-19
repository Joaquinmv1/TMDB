import { AiOutlineSearch } from 'react-icons/ai';
import { ButtonRight, CarouselContainer, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Ul } from './style';
import { useScroll } from "../../hooks";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const scroll = useScroll();
  return (
    <CarouselContainer>
      <Header>
        <Nav scrolled={scroll}>
          <NavBarLeft>
            <h2>PicturePandemonium</h2>
            <Ul>
              <Link className='link' to='/'>
                <li>
                  Home
                </li>
              </Link>
              <li>Movies</li>
              <li>Series</li>
              <li>Anime</li>
              <li>Favoritos</li>
            </Ul>
          </NavBarLeft>
          <NavBarRight>
            <ButtonRight>Sign out</ButtonRight>
            {/* <AiOutlineSearch />
            <InputSearch type="text" placeholder="Marvel, Naruto, Spider Man..." /> */}
          </NavBarRight>
        </Nav>
      </Header>
    </CarouselContainer>
  )
}