export interface Genre {
  id: number
  name: string
}

export interface Components {
  [key: string]: React.ReactNode;
  overview: React.ReactNode;
  trailers: React.ReactNode;
  'more like this': React.ReactNode;
}