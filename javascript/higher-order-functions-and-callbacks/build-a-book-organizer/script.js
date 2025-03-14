const books = [
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "Catch-22", authorName: "Joseph Heller", releaseYear: 1961 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "Beloved", authorName: "Toni Morrison", releaseYear: 1987 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);

// console.log(filteredBooks);

const filteredBooksSorted = filteredBooks.sort(sortByYear);

console.log(filteredBooksSorted);
