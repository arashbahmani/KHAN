import axios from "axios";

const SERVER_URL = "http://localhost:9000";

//  ----------   Books   ----------

//@desc Get All Books
//@route GET http://localhost:9000/books
export const getAllBooks = () => {
  const url = `${SERVER_URL}/books`;
  return axios.get(url);
};

//desc Get Single Book With Book ID
//@route GET http://localhost:9000/books/:bookId
export const getSingleBook = (bookId) => {
  const url = `${SERVER_URL}/books/${bookId}`;
  return axios.get(url);
};

//desc Create New Book
//@route POST http://localhost:9000/books
export const createBook = (book) => {
  const url = `${SERVER_URL}/books`;
  return axios.post(url, book);
};

//desc Update Book With Book ID
//@route PUT http://localhost:9000/books/:bookId
export const updateBook = (book, bookId) => {
  const url = `${SERVER_URL}/books/${bookId}`;
  return axios.put(url, book);
};

//desc Delete Book With Book ID
//@route DELETE http://localhost:9000/books/:bookId
export const deleteBook = (bookId) => {
  const url = `${SERVER_URL}/books/${bookId}`;
  return axios.delete(url);
};

//  ----------   Groups   ----------

//@desc Get All groups
//@route GET http://localhost:9000/groups
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};

//desc Get Single group With group ID
//@route GET http://localhost:9000/groups/:groupId
export const getSingleGroups = (groupsId) => {
  const url = `${SERVER_URL}/books/${groupsId}`;
  return axios.get(url);
};
