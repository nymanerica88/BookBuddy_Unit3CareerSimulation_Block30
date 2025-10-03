// import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function BookDetail({ selectedBook }) {
  // const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };
  return (
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
  );
}
