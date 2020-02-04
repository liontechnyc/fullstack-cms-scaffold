import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const BOOKS = gql`
    query listBooks{
        books {
            id,
            title
        }
    }
`

const Books = ({}) => {
    const { data, loading, error } = useQuery(BOOKS)
    console.log(data)
    if(error){ return <strong>Oof: could not fetch books</strong> }
    if(loading){ return <span>Loading <i>le</i> books ;) ...</span> }
    return(
        <ul>
        {data.books.map(
            ({ id, title }) => (
                <li key={id.toString()}>
                    { title }
                </li>    
            ))
        }
        </ul>
    )
}

export default Books