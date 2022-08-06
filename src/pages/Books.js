import React from "react"
import {useParams} from "react-router-dom"
import "../index.css"

export default function Books(props){
  const books = props.books;
  
  let possition = 0;

  const {bookid} = useParams()
  
  
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookid)
      console.log(books[i].title)
      possition = i;

  }

//  console.log(books[1].title)

  // const thisBook = books[1]
  // console.log(thisBook)

  return (
    <div>
      {possition}
    </div>
  )
}