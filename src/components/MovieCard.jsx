import { Link } from "react-router-dom";

function MovieCard({ id, title, director, genre, release_year, abstract, image }) {

    return (
        <div className="card" style={{ width: "18rem" }}>
            {image && <img src={image} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h3 className="card-title text-primary"><strong>{title}</strong></h3>
                <h6>Director: <em>{director || "unknown"}</em></h6>
                <p>Genre: <em>{genre}</em></p>
                <p>Release year: <em>{release_year}</em></p>
                <br />
                <p className="card-text">{abstract}</p>
                <br />
                <Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard;