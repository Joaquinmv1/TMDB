import { ButtonRight, CarouselContainer, Header, InputSearch, Nav, NavBarLeft, NavBarRight, Ul } from './style';
import { useScroll } from "../../hooks";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_KEY } from '../../constants/const';
import { SearchResults } from '..';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState<any | null>('');
  const [data, setData] = useState();
  const scroll = useScroll();

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}`);
        const json = await res.json();
        const mappedResult = json.results.map((data:any) => (
          {
            id: data.id,
            backdrop_path: data.backdrop_path,
            description: data.overview,
            title: data.title,
            name: data.name,
            type: data.media_type
          }
        ))
        setData(mappedResult);
      } else {

      }
    };

    fetchData();
  }, [searchTerm]);

  console.log(data);

  return (
    <>
      <CarouselContainer>
        <Header>
          <Nav scrolled={scroll}>
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
                <li>Movies</li>
                <li>Series</li>
                <li>Anime</li>
                <li>My List</li>
              </Ul>
            </NavBarLeft>
            <NavBarRight>
              <div>
                <InputSearch
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search..."
                />
                {/* <Link to='/movies'>
                <ButtonRight>Sign out</ButtonRight>
              </Link> */}
                <AiOutlineSearch />
                <SearchResults
                  data={data}
                  searchTerm={searchTerm} />
              </div>
            </NavBarRight>
          </Nav>
        </Header>
      </CarouselContainer>

    </>
  )
}
