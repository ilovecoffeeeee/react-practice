const API_KEY = "55c98bfda716f7dcd9c418fccbfd7d4b";
const BASE_PATH = "https://api.themoviedb.org/3";


interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export async function getMovies() {
    return await fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`).then(
        (response) => response.json()  
    );
}

