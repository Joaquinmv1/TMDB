import { CarouselContainer, Header } from './style';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_KEY } from '../../constants/const';
import { Nav } from './Nav';
import { Search } from './types';
import { Movie } from '../../models/types';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [data, setData] = useState<Array<Movie> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}`);
        const json = await res.json();
        const mappedResult = json.results.map((data: Search) => (
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
        setData(null)
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <CarouselContainer>
        <Header>
          <Nav
            searchTerm={searchTerm}
            data={data}
            setSearchTerm={setSearchTerm}
          />
        </Header>
      </CarouselContainer>
    </>
  )
}
