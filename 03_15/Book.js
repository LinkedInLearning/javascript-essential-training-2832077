class Book {
  constructor(
    title,
    author,
    ISBN,
    pubYear,
    pageNumber,
    currentPage,
    readStatus
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.pubYear = pubYear;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book;
