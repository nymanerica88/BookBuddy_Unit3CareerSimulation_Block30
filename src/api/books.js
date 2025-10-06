const API = import.meta.env.VITE_API;

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

export function getBookDetails(id) {
  try {
    const book = bookList.filter((book) => book.id === Number(id));
    return book[0];
  } catch (error) {
    console.error(error);
  }
}
