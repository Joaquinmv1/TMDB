import { AiOutlineSearch } from 'react-icons/ai';
import { CarouselContainer, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Ul } from './style';
import { useScroll } from "../../hooks";

export default function Navbar() {
  const scroll = useScroll();
  return (
    <CarouselContainer>
      <Header>
        <Nav scrolled={scroll}>
          <NavBarLeft>
            <h2>PicturePandemonium</h2>
            <Ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Series</li>
              <li>Anime</li>
              <li>Favoritos</li>
            </Ul>
          </NavBarLeft>
          <NavBarRight>
            <AiOutlineSearch />
            <InputSearch type="text" placeholder="Marvel, Naruto, Spider Man..." />
          </NavBarRight>
        </Nav>
      </Header>
    </CarouselContainer>
  )
}