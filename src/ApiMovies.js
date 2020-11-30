import { API_KEY } from '@env';
export default {

    gelAllMovies: async (page) => {
        const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`);
        const json = await req.json();
        return json;
        console.log(json);
    },    
    getMovie: async (id) => {
        const req = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        const json = await req.json();
        return json;
    },

    getCredits: async (id) => {
        const req = await fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`);
        const json = await req.json();
        return json;
        
    },
    getSearch: async (movie) => {
        const req = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`);
        const json = await req.json();
        return json;
    },
    getFavorited: async (id) => {
        const req = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        const json = await req.json();
        return json;    
    }
};