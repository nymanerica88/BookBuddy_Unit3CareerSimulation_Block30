import { Outlet, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { getBookDetails } from "../api/books";

const bookList = [
  {
    id: 37,
    title: "Animal Farm",
    author: "George Orwell",
    description:
      'Set on a farm where the animals overthrow their human masters, "Animal Farm" is a satirical allegory that tells the story of how power corrupts and how revolutions can end up betraying their original ideals. The novel explores themes of revolution, class struggle, and the dangers of totalitarianism.',
    coverimage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Animal_Farm_-_1st_edition.jpg/440px-Animal_Farm_-_1st_edition.jpg",
    available: true,
  },
];

export default function List() {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(undefined);
  const handleSelectBook = (event) => {
    const id = event.target.id;
    const book = getBookDetails(id);
    setSelectedBook(book);
    navigate(`${id}`);
  };

  const context = {
    selectedBook,
  };

  return (
    <>
      <h1>List</h1>
      <ul>
        {bookList.map((book) => {
          return (
            <li key={book.id}>
              {book.title}
              <button id={book.id} onClick={handleSelectBook}>
                Details
              </button>
            </li>
          );
        })}
      </ul>
      <Outlet context={context} />
    </>
  );
}
