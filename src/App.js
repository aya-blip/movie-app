import React from 'react';
import react, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import MoviesData from './components/MoviesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
import AddMovie from './components/AddMovie';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Description from './components/Description';

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
     
return (

<div className='App'>
 
<Menu search= {search} setSearch ={setSearch}/>
<BrowserRouter>
<AddMovie Add={Add} newMovie= {newMovie} setNewMovie= {setNewMovie} />
<Route path="/Description/:id" render= { (props) => <Description {...props} movies={movies}/> } />

<MovieList movies= {movies} setMovies= {setMovies}  search= {search} setSearch ={setSearch}  />
</BrowserRouter>
</div>

  );
}
export default App; 