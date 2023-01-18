import React, { useState } from 'react';
import './App.css';
import AddMovies from './AddMovies';
import MovieList from './MovieList'


function App() {
  const [movies, setMovies] = useState(['Death Becomes Her', 'Ghost Busters', "Harry Potter - Sorcerer's Stone", 'Jurassic Park', 'The Sandlog'])
  const arrayOfMovies = [
    {name: 'Death Becomes Her', category:'Comedy', rating: 3},
    {name:'Ghost Busters', category:'Comedy', rating: 5},
    {name:"Harry Potter - Sorcerer's Stone", category:'Drama', rating: 4},
    {name:'Jurassic Park', category:'Action/Adventure', rating: 4},
    {name:'The Sandlog', category:'Comedy', rating: 4}
  ];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Screen It</h1>
        </header>
        <div className="Add-movies">
        <AddMovies movies = { movies }/>
        </div>
        <MovieList arrayOfMovies = { arrayOfMovies }/>
      </div>
    </>
  );
}

export default App;
