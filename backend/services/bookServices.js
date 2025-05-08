import Book from "../models/bookmodel.js";

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};
export { getBooks };
