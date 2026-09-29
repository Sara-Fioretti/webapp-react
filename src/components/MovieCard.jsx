import { Link } from "react-router-dom";

const MovieCard = ({book}) =>{
    const {id, title, director, genre, release_year, abstract, image } = book
    return (
        <div className="card" style="width: 18rem;">
           {image && <img src={image} class="card-img-top" alt="..." />}
            <div class="card-body">
                <h5 className="card-title">{title}</h5>
                <h3><strong>Director: {director || "unknown"}</strong></h3>
                <span><em>{genre}</em></span>
                <p class="card-text">{abstract}</p>
                <span>{release_year}</span>
                <Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard;