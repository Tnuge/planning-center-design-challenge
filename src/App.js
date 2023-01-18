import React, { useState } from 'react';
import './App.css';
import AddMovies from './AddMovies';
import MovieList from './MovieList'


function App() {
  const [movies, setMovies] = useState(['movie1', 'movie2','movie3'])
  const arrayOfMovies = [
    {name: 'Iron Man', category:'Action/Adventure', rating: 4},
    {name:'Toy Story', category:'Drama', rating: 3},
    {name:'Kung Pow', category:'Comedy', rating: 5}
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
