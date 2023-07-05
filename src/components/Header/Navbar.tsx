import { Header } from './style';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_KEY } from '../../constants/const';
import { Nav } from './Nav';
import { Search } from './types';
import { Movie } from '../../models/types';
import { fetchSearchResult } from '../../services/tmdb.api';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cleanInput, setCleanInput] = useState<boolean>(false);
  const [data, setData] = useState<Array<Movie> | null>(null);

  const detectedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (searchTerm) {
      setCleanInput(true);
    }
  }

  const clearInputValue = () => {
    setSearchTerm('');
  }

  useEffect(() => {
    fetchSearchResult(searchTerm).then((res) => setData(res))
  }, [searchTerm]);

  return (
    <>
      <Header>
        <Nav
          searchTerm={searchTerm}
          data={data}
          cleanInput={cleanInput}
          detectedChange={detectedChange}
          clearInputValue={clearInputValue}
        />
      </Header>
    </>
  )
}
