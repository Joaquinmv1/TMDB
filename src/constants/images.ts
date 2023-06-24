export const API_KEY = 'eded4ee4b78f79328cc20b65cd4c2b94';
export const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const imageCarrousel = [
  {
    name: 'One Piece',
    description: 'One Piece narra la historia de un joven llamado Monkey D. Luffy, que inspirado por su amigo pirata Shanks, comienza un viaje para alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá encontrar el tesoro One Piece dejado por el anterior rey de los piratas Gol D. Roger.',
    image: 'onepiece.jpg'
  },
  {
    name: 'Harry Potter',
    description: 'Harry Potter is a series of books written by J.K. Rowling that tells the adventures of a young wizard named Harry Potter and his friends at the Hogwarts School of Witchcraft and Wizardry. The story follows Harry as he discovers his identity as a wizard, faces dangerous enemies, and becomes involved in a battle against the evil wizard Lord Voldemort. Throughout the books, themes such as friendship, love, courage, and the importance of making the right choices are explored. The series has been widely popular and has spawned movies, plays, and a large community of fans worldwide.',
    image: 'harry potter.jpg'
  },
  {
    name: 'Black Clover',
    description: 'Black Clover is a manga and anime series created by Yūki Tabata. It follows the story of Asta, a young orphan who lives in a world where magic is everything, but he has no magical abilities himself. Despite this, Asta dreams of becoming the Wizard King, the most powerful mage in the kingdom. With his determination and the help of his friends, Asta joins the Black Bulls, a squad of misfit mages, and embarks on a journey to prove himself and protect his kingdom from dark forces. Black Clover combines elements of fantasy, adventure, and friendship, delivering an action-packed and inspiring story.',
    image: '20524-Asta-Black-Clover.jpg'
  },
  {
    name: 'Asta Fan Art',
    description: 'Description for Asta Fan Art',
    image: 'wallpapersden.com_asta-fan-art-black-clover-2022_3000x1500.jpg'
  }
];


export const categoriesCarrousel = ['ultimos estrenos', 'Anime', 'Películas', 'Series', 'calificacion', 'popular']

export const categories = [
  {
    apiUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    category: 'ultimos estrenos',
    type: 'movie'
  },
  {
    apiUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
    category: 'Anime',
    type: 'tv'
  },
  {
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    category: 'Películas',
    type: 'movie'
  },
  {
    apiUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
    category: 'Series',
    type: 'tv',
  },
  {
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&vote_average.gte=8`,
    category: 'calificacion',
    type: 'movie'
  },
  {
    apiUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`,
    category: 'popular',
    type: 'tv'
  }
];

export const filterOptions = [
  { label: "Películas", value: "movies" },
  { label: "Series", value: "series" },
  { label: "Anime", value: "anime" },
  { label: "Mejor Calificados", value: "top_rated" },
  { label: "Más Populares", value: "popular" },
  { label: "Próximos Lanzamientos", value: "upcoming" },
  { label: "En Cartelera", value: "now_playing" },
  { label: "Todas las Películas", value: "all_movies" },
  { label: "Todas las Series", value: "all_series" },
  { label: "Todas las Temporadas", value: "all_seasons" },
  { label: "Acción", value: "action" },
  { label: "Aventura", value: "adventure" },
  { label: "Comedia", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Suspenso", value: "thriller" },
  { label: "Ciencia Ficción", value: "sci-fi" },
  { label: "Fantasía", value: "fantasy" },
  { label: "Animación", value: "animation" },
  { label: "Romance", value: "romance" },
];