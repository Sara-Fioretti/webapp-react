import { Link } from "react-router-dom";

function MovieCard({ id, title, director, genre, release_year, abstract, image })  {

    return (
        <div className="card" style={{width: "18rem"}}>
            {image && <img src={image} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h3 className="card-title text-danger"><strong>{title}</strong></h3>
                <h5>Director: {director || "unknown"}</h5>
                <span>Genre: <em>{genre}</em></span>
                <p className="card-text">{abstract}</p>
                <span>Release year: {release_year}</span>
                <br />
                <Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard;