function MoviePage() {
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <h1>Titolo film</h1>
                <h3 className="text-muted">By nome autore</h3>
                <p></p>
            </header>
            <section id="review">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link to="/" className="btn btn-primary">Back to Home Page</Link>
            </footer>
        </>
    )
}

export default MoviePage;