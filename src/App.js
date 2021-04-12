import React from 'react';
import react, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import MoviesData from './components/MoviesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
import AddMovie from './components/AddMovie';
import Rating from './components/Rating'
function App() {
     const [movies, setMovies] = React.useState(MoviesData)
     const [newMovie,setNewMovie] = React.useState({
     Title:"",
     Rating:"",
     Image:"",
     Description:"",

     })
     
     const [search, setSearch] =React.useState("")
     const Add = (newMovie) => {
       setMovies(
         [...movies,newMovie]
       )
     }
     const [rate,setRate]=React.useState(null)
return (

<div className='App'>
<Menu search= {search} setSearch ={setSearch}/>
<AddMovie Add={Add} newMovie= {newMovie} setNewMovie= {setNewMovie} />
<Rating rate={rate} setRate={setRate} />
<MovieList movies= {movies} setMovies= {setMovies}  search= {search} setSearch ={setSearch} rate={rate} />

</div>

  );
}
export default App; 