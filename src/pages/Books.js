import React from "react"
import {useParams} from "react-router-dom"
import "../index.css"

export default function Books(props){
  const books = props.books;

  const {bookid} = useParams()

  return (
    <div>
       <article key={books[bookid].id} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
              
              <div>
                <img className="block mx-auto w-1/2" src={books[bookid].image} alt={books[bookid].title} />
                
              </div>
              <div>
              
                <h3 className="font-bold my-2 text-2xl">{books[bookid].title}</h3>
                
              </div>
              <div>
                <h4 className="font-bold my-2 text-xl">{books[bookid].subtitle}</h4>
              </div>
              <div>
                <p className="mb-4">{books[bookid].description}</p>
                <p><span className="font-bold">Author:</span> {books[bookid].author}</p>
              </div>

              <ul className="mb-4">
                <li><span className="font-bold">Publisher:</span> {books[bookid].publisher}</li>
                <li><span className="font-bold">Pages:</span> {books[bookid].pages}</li>
                <li><span className="font-bold">ISBN:</span> {books[bookid].isbn}</li>
                <li><span className="font-bold">Release Date:</span> {books[bookid].releaseDate}</li>
                <li><a href={books[bookid].website} target="_blank" rel="noreferrer" className="font-bold">Website</a></li>
              </ul>
              
            </article>
    </div>
  )
}