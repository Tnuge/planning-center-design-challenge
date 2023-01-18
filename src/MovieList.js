import React from 'react'

export default function MovieList() {
  return (
    <div>
        <div className='Movie-row'>
            <div className='Avatar-initals'><p>DBH</p></div>
            <h2>Death Becomes Her</h2>
            {/* <p className='Subtitles'>Comedy</p> */}
            <div className='Star-rating'><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='star.svg'></img><img src='star.svg'></img></div>
        </div>
        <p className='Subtitles'>Comedy</p>
        <div className='Movie-row'>
            <div className='Avatar-initals'><p>G</p></div>
            <h2>Ghost Busters</h2>
            {/* <p className='Subtitles'>Comedy</p> */}
            <div className='Star-rating'><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img></div>
        </div>
        <p className='Subtitles'>Comedy</p>
        <div className='Movie-row'>
            <div className='Avatar-initals'><p>HPS</p></div>
            <h2>Harry Potter - Socercer's Stone</h2>
            {/* <p className='Subtitles'>Drama</p> */}
            <div className='Star-rating'><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='star.svg'></img></div>
        </div>
        <p className='Subtitles'>Drama</p>
        <div className='Movie-row'>
            <div className='Avatar-initals'><p>JP</p></div>
            <h2>Jurrassic Park</h2>
            {/* <p className='Subtitles'>Action/Adventure</p> */}
            <div className='Star-rating'><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='star.svg'></img></div>
        </div>
        <p className='Subtitles'>Action/Adventure</p>
        <div className='Movie-row'>
            <div className='Avatar-initals'><p>S</p></div>
            <h2>The Sandlot</h2>
            {/* <p className='Subtitles'>Comedy</p> */}
            <div className='Star-rating'><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='filled-star.svg'></img><img src='star.svg'></img></div>
        </div>
        <p className='Subtitles'>Comedy</p>
    </div>
  )
}
