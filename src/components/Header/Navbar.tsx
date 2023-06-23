import { ButtonRight, CarouselContainer, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Ul } from './style';
import { useScroll } from "../../hooks";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  const scroll = useScroll();
  return (
    <CarouselContainer>
      <Header>
        <Nav scrolled={scroll}>
          <NavBarLeft>
            <Link className='link' to='/'>
              <h2>PicturePandemonium</h2>
            </Link>
            <Ul>
              <Link className='link' to='/'>
                <li>
                  Home
                </li>
              </Link>
              <li>Movies</li>
              <li>Series</li>
              <li>Anime</li>
              <li>My List</li>
            </Ul>
          </NavBarLeft>
          <NavBarRight>
            <AiOutlineSearch />
            <InputSearch type="text" placeholder="Marvel, Naruto, Spider Man..." />
            <Link to='/login'>
              <ButtonRight>Sign out</ButtonRight>
            </Link>
          </NavBarRight>
        </Nav>
      </Header>
    </CarouselContainer>
  )
}