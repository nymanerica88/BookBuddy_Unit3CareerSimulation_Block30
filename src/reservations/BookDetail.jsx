// import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function BookDetail({ selectedBook }) {
  // const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const book = {
    id: 37,
    title: "Animal Farm",
    author: "George Orwell",
    description:
      'Set on a farm where the animals overthrow their human masters, "Animal Farm" is a satirical allegory that tells the story of how power corrupts and how revolutions can end up betraying their original ideals. The novel explores themes of revolution, class struggle, and the dangers of totalitarianism.',
    coverimage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Animal_Farm_-_1st_edition.jpg/440px-Animal_Farm_-_1st_edition.jpg",
    available: true,
  };
  selectedBook = book;
  return (
    <section className="book-detail">
      <button>Back</button>
      <h2>{selectedBook.title}</h2>
      <h3>Author: {selectedBook.author}</h3>
      {/* <img src={selectedBook.coverimage} alt="" /> */}
      <p>
        Description: {selectedBook.description}
        <br />
        {selectedBook.available ? "Available" : "Out of Stock"}
      </p>
      <button>Reserve Book</button>
    </section>
  );
}
