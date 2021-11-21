import { Movie } from './movies-popular.interface';
export interface AddFavoriteResponse {
    success:        boolean;
    status_code:    number;
    status_message: string;
}


export interface FavoriteMoviesResponse {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

