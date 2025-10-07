import { useNavigate, useOutletContext } from "react-router";

export default function BookDetail() {
  const { selectedBook } = useOutletContext();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/books");
  };

  return selectedBook ? (
    <section className="book-detail">
      <button onClick={handleBackButton}>Back</button>
      <h2>{selectedBook.title}</h2>
      <h3>Author: {selectedBook.author}</h3>
      {/* <img src={selectedBook.coverimage} alt="" /> */}
      <p>
        Description: {selectedBook.description}
        <br />
        {selectedBook.available ? "Available" : "Out of Stock"}
      </p>
      <button className="book-reserve">Reserve Book</button>
    </section>
  ) : (
    <p>Please select a book to view more details</p>
  );
}
