import book from "../Model/book_model.js";
export const getBook = async (req, res) => {
  try {
    const book_detail = await book.find();
    res.status(200).json(book_detail);
  } catch (error) {
    console.log("Error to find book", error);
    res.status(500).json(error);
  }
};
