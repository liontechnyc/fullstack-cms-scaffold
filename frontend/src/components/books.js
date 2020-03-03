import React from "react"
import { useQuery } from "@apollo/react-hooks"
import LIST_ALL_BOOKS from "../api/queries/list-all-books.gql"

import { Loader } from "./ui"
 
const Books = ({}) => {
    const { data, loading, error } = useQuery(LIST_ALL_BOOKS)
    const books = !loading && !error ? data.books : [ null ]
    if(error) return <strong>Oof: could not query books</strong>
    return(
        <ul>
        {error || !loading ? 
            (books.map(
                ({ id, title }) => (
                    <li key={id.toString()}>
                        { title }
                    </li>    
                ))
            ) : <Loader fullscreen/>
        }
        </ul>
    )
}

export default Books