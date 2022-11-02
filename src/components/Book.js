const Book = (props) => {
  return (
    <div className="book-card" id={props.book.color}>
      <h1>{props.book.title}</h1>
      <p>
        By: {props.book.Author}{props.book.minutes}
      </p>
      <p>
        Pages: {props.book.Pages}
      </p>

      <a href={props.book.link}>
        <img src={props.book.poster} alt={props.book.title} />
      </a>
    </div>
  )
}

export default Book


