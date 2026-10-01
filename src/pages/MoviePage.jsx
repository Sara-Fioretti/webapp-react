import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function MoviePage() {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])
    const fetchReviews = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data)
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
                        {movie.image && <img className="movie-img" src={movie.image} alt={movie.title} style={{ height: "200px" }} />}
                    </div>
                    <div className="col-4">
                        <h3 className="text-success">{movie.title}</h3>
                        <h5 className=" text-muted"><em>By: {movie.director}</em></h5>
                    </div>
                    <p className="col-4">{movie.abstract}</p>

                </div>
            </header>

            <section id="review" className="text-start mx-3 ">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="text-success">Our community reviews</h4>
                    {movie && <span><em>Avarage vote:</em> {movie.average_vote}</span>}
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

            <section>
                {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchReviews} />}
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link to="/" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                </Link>
            </footer>
        </>
    )
}

export default MoviePage;