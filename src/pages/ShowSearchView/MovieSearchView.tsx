// import styled from "styled-components"
import { API_KEY, filterOptions } from '../../constants/images'
import { useEffect, useState } from "react"
import { Sidebar, SidebarContainer, UlContainer } from ".";

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const ShowSearchView = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/16/movies?api_key=${API_KEY}&with_genres=16`);
    const json = await res.json();
    console.log(json.results);
    setMovies(json.results)
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <SidebarContainer>
        <Sidebar>
          <h3>Nuestras categorias</h3>
          <ul>
            {filterOptions.map((value) => {
              return (
                <li key={value.label}>
                  <p>{value.label}</p>
                </li>
              )
            })}
          </ul>
          <div style={{margin: '0 auto'}}>
            Copyright 2023 @TMDB
          </div>
        </Sidebar>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UlContainer>
            {movies?.map((movie: any) => {
              return (
                <li key={movie.id}>
                  <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
                  {/* <p >{movie.name}</p> */}
                </li>
              )
            })}

          </UlContainer>
        </div>
      </SidebarContainer>
    </>
  )
}