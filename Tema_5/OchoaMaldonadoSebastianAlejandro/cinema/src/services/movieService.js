import axios from 'axios';
import {API_ENDPOINT, API_URL, API_KEY} from "../utils/constants";

const fetchMovies = async (pageNumber = 1) => {
    try {
        const response = await axios.get(`${API_URL}${API_ENDPOINT}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            params: {
                language: 'es-Es',
                page: pageNumber,
            }
        });
        if (response.status === 200) {
            return response.data.results;
        }
    } catch (error) {
        console.error('Error al obtener peliculas:', error);
        return [];
    }
}
export default fetchMovies;