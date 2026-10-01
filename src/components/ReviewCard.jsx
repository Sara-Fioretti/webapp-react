function ReviewCard  ({ id, text, vote, name })  {
    
    return (
        <div key={id} className="card mb-4">
            <div className="card-body">
                <p>{text}</p>
                <span><strong>Vote:</strong>{vote}</span>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}
export default ReviewCard;