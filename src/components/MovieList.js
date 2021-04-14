import React from 'react'
import MovieCard from './MovieCard'
import './card.css'



function movieList({movies, search,rate}) {
    return (
        <div className="list">
            {movies
            .filter(movie => ((movie.Title.toLowerCase().trim().includes(search.toLowerCase().trim()))) ).map(movie => <MovieCard movie={movie}/>) }
            
       
        </div>
    )
}

export default movieList
