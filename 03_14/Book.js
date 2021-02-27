class Book {
  constructor(
    name,
    year,
    author,
    publisherName,
    publisherCountry,
    haveRead,
    yearRead
  ) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.publisher = {
      publisherName: publisherName,
      publisherCountry: publisherCountry,
    };
    this.haveRead = haveRead;
    this.yearRead = yearRead;
  }
  toggleRead(a) {
    this.haveRead = a;
  }
  setYear(year) {
    this.year = year;
  }
}

export default Book;
