import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";

function MoviePage() {
    const { id } = useParams()
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const fetchReviews = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovies(response.data)
                setReviews(response.data.reviews || [])
            })
            .catch(error => { console.error(error) })
    }

    useEffect(() => {
        fetchReviews()
    }, [id])


    return (
        <>

            <header id="movie" className=" container my-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-4">
                        {movies.image && <img className="movie-img" src={movies.image} alt={movies.title} style={{ height: "200px" }} />}
                    </div>
                    <div className="col-4">
                    <h3 >{movies.title}</h3>
                    <h5 className=" text-muted">By: {movies.director}</h5>
                    </div>
                    <p className="col-4">{movies.abstract}</p>

                </div>
            </header>

            <section id="review" className="text-start">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                    {movies && <span>Avarage vote: {movies.average_vote}</span>}
                </header>
                {
                    reviews.map((review) => (
                        <div key={review.id} >
                            <ReviewCard
                                id={review.id}
                                text={review.text}
                                vote={review.vote}
                                name={review.name}
                            />
                        </div>
                    ))
                }
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link to="/" className="btn btn-primary">Back to Home Page</Link>
            </footer>
        </>
    )
}

export default MoviePage;