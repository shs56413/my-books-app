const Movie = (props) => {
  return (
    <div className="movie-card" id={props.movie.color}>
      <h1>{props.movie.title}</h1>
      <p>
        Runtime: {props.movie.hours}:{props.movie.minutes}
      </p>
      <a href={props.movie.link}>
        <img src={props.movie.poster} alt={props.movie.title} />
      </a>
    </div>
  )
}

export default Movie
