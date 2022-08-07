import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import "../index.css";


export default function Books(props) {
  const books = props.books;
  const {bookid} = useParams()
  const thisBook = books.find(book => book.id.toString() === bookid)
 
  return thisBook === undefined ? (
    <NotFound />
  ) : (
    <div>
      <article
        key={thisBook.id}
        className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5"
      >
        <div>
          <img
            className="block mx-auto w-1/2"
            src={thisBook.image}
            alt={thisBook.title}
          />
        </div>
        <div>
          <h3 className="font-bold my-2 text-2xl">{thisBook.title}</h3>
        </div>
        <div>
          <h4 className="font-bold my-2 text-xl">{thisBook.subtitle}</h4>
        </div>
        <div>
          <p className="mb-4">{thisBook.description}</p>
          <p>
            <span className="font-bold">Author:</span> {thisBook.author}
          </p>
        </div>

        <ul className="mb-4">
          <li>
            <span className="font-bold">Publisher:</span>{" "}
            {thisBook.publisher}
          </li>
          <li>
            <span className="font-bold">Pages:</span> {thisBook.pages}
          </li>
          <li>
            <span className="font-bold">ISBN:</span> {thisBook.isbn}
          </li>
          <li>
            <span className="font-bold">Release Date:</span>{" "}
            {thisBook.releaseDate}
          </li>
          <li>
            <a
              href={thisBook.website}
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              Website
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}


// export default function Books(props) {
//   const books = props.books;  

//   const { bookid } = useParams();

//   return bookid > books.length - 1 ? (
//     <NotFound />
//   ) : (
//     <div>
//       <article
//         key={thisBook.id}
//         className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5"
//       >
//         <div>
//           <img
//             className="block mx-auto w-1/2"
//             src={thisBook.image}
//             alt={thisBook.title}
//           />
//         </div>
//         <div>
//           <h3 className="font-bold my-2 text-2xl">{thisBook.title}</h3>
//         </div>
//         <div>
//           <h4 className="font-bold my-2 text-xl">{thisBook.subtitle}</h4>
//         </div>
//         <div>
//           <p className="mb-4">{thisBook.description}</p>
//           <p>
//             <span className="font-bold">Author:</span> {thisBook.author}
//           </p>
//         </div>

//         <ul className="mb-4">
//           <li>
//             <span className="font-bold">Publisher:</span>{" "}
//             {thisBook.publisher}
//           </li>
//           <li>
//             <span className="font-bold">Pages:</span> {thisBook.pages}
//           </li>
//           <li>
//             <span className="font-bold">ISBN:</span> {thisBook.isbn}
//           </li>
//           <li>
//             <span className="font-bold">Release Date:</span>{" "}
//             {thisBook.releaseDate}
//           </li>
//           <li>
//             <a
//               href={thisBook.website}
//               target="_blank"
//               rel="noreferrer"
//               className="font-bold"
//             >
//               Website
//             </a>
//           </li>
//         </ul>
//       </article>
//     </div>
//   );
// }