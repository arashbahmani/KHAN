import BookCard from "./BookCard";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Link } from "react-router-dom";

const BooksList = () => {
  const { filteredBooks } = useContext(BookContext);

  return (
    <div className="me-2 ms-3" style={{ marginTop: "12vh" }}>
      {filteredBooks.map((book) => (
        <Link to={`/books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
  );
};
export default BooksList;
