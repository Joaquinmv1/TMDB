export const API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
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
    name: 'spider man across the spider verse',
    description: 'Spider-Man: Across the Spider-Verse,  is an upcoming animated superhero film and sequel to the critically acclaimed, The movie continues the story of Miles Morales, a young Afro-Latino teenager who becomes the Spider-Man of his reality. In this new installment, Miles discovers the existence of multiple dimensions and crosses paths with various versions of Spider-Man from different universes. Together, they face new threats and embark on a thrilling and visually stunning adventure that explores the concept of the Spider-Verse. The film promises to deliver a unique and groundbreaking animation style, along with an engaging storyline that expands the Spider-Man mythos.',
    image: 'SPIDERMAN.png'
  }
];


export const categoriesCarrousel = ['ultimos estrenos', 'Anime', 'Películas', 'Series', 'calificacion']

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
];

export const filterOptions = [
  { icon: 'IoMdHome', label: "Home", value: "now_playing" },
  { icon: 'BiCameraMovie', label: "Películas", value: "movies" },
  { icon: 'PiTelevisionSimpleBold', label: "Series", value: "series" },
  { icon: '', label: "Anime", value: "anime" },
  { icon: '', label: "Mejor Calificados", value: "top_rated" },
  { icon: '', label: "Más Populares", value: "popular" },
  { icon: '', label: "Próximos Lanzamientos", value: "upcoming" },
  { icon: '', label: "Acción", value: "action" },
  { icon: '', label: "Aventura", value: "adventure" },
  { icon: '', label: "Comedia", value: "comedy" },
  { icon: '', label: "Drama", value: "drama" },
  { icon: '', label: "Suspenso", value: "thriller" },
  { icon: '', label: "Ciencia Ficción", value: "sci-fi" },
  { icon: '', label: "Fantasía", value: "fantasy" },
  { icon: '', label: "Animación", value: "animation" },
  { icon: '', label: "Romance", value: "romance" },
];

export const categoryUrls: any = {
  movies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  series: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  anime: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  all_movies: `https://api.themoviedb.org/3/movie?api_key=${API_KEY}`,
  all_series: `https://api.themoviedb.org/3/series?api_key=${API_KEY}`,
  all_seasons: `https://api.themoviedb.org/3/seasons?api_key=${API_KEY}`,
};

export const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 2 },
  exit: { opacity: 0 }
};

export const options = {
  root: null,
  rootMargin: "0px",
  threshold: .5
};