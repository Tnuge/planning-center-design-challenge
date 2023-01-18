/* import listOfMovies from './MovieList' */

export default function AddMovies({movies}) {
  return (
    <>
    <div className="Add-movie-section">
      <label for="name">Name</label>
      <input id="name" type="text" placeholder='Name of the movie'/><br></br>
    </div>
    <div className="Add-movie-section">
    <label for="category">Category</label>
    <select id="category" name="category">
      <option value="Select a category">Select a category</option>
      <option value="1">Comedy</option>
      <option value="2">Drama</option>
      <option value="3">Action/Adventure</option>
      <option value="4">Thriller</option>
    </select><br></br>
    </div>
    <div className="Add-movie-section">
      <label for="rating">Rating</label>
      <div className='Star-rating'>
          <img src='star.svg'></img><img src='star.svg'></img><img src='star.svg'></img><img src='star.svg'></img><img src='star.svg'></img>
      </div><br></br>
    </div>
        
    <button>Add Movie</button><br></br>
    </>
  )
  
}
