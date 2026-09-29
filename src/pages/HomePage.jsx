import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function HomePage() {
    const [movies, setMovies] = useState([])
    const fetchMovie = () => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.error(error) })
    }

    useEffect(() => {
        fetchMovie()
    }, [])
    return (
        <>
            <div>
                <h1>Movie Forum</h1>
                <h3><em>Welcome to the movies comunity</em></h3>
            </div>
            <div className="d-flex flex-wrap gap-2 p-5">
                
                    {
                        movies.map((movie) => (
                            <div key={movie.id} >
                                <MovieCard
                                   
                                    id={movie.id}
                                    title={movie.title}
                                    director={movie.director}
                                    genre={movie.genre}
                                    release_year={movie.release_year}
                                    abstract={movie.abstract}
                                    image={movie.image}
                                />
                            </div>
                        )
                        )}

               
            </div>
        </>
    )
}

export default HomePage;