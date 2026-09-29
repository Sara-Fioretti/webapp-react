const ReviewCard = ({ review }) => {
    const { id, text, vote, name } = review
    return (
        <div key={id} className="card">
            <div className="card-body">
                <p>{text}</p>
                <span><strong>Vote:</strong>{vote}</span>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}
export default ReviewCard;