import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Books = () =>{

  const [books, setBooks] = useState([])

  useEffect(() =>{
    const fetchBooks = async() => {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY }`
      )
      setBooks(res.data.results.books)
      
    }

    fetchBooks()
  },[])

  return(
    <>
      <h1>Books</h1>
      <section>
        {books.map((book) => {
          const {age_group, author, book_image, buy_links, description, price, primary_isbn10, publisherm, rank, title} = book

          return(
            <article key={rank}>
              <div>
                <img src={book_image} alt={title}/>
                {book.title}
                23.19
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Books