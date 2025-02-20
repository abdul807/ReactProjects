const API_KEY = 'a719757a6e428f8591dee2158e30f816';
const BASE_URL ='https://api.themoviedb.org/3';


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
    
}

export async function searchMovies(query) {
    try {
        console.log("Searching for:", query);
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json();
        console.log("API Response:", data);
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

