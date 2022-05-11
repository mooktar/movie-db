import React from 'react'
import Eye from '../UI/Eye'
import Star from '../UI/Star'
import Calendar from '../UI/Calendar'

function Movie({ movie }) {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const getClassByRate = vote => {
      return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red'
  }
  
  return (<>
    <div className='movie' key={movie.id}>
        <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <div className='movie-info-stats'>
                <span className={getClassByRate(movie.vote_average)}>
                    <Star />
                    {movie.vote_average}
                </span>
                <span>
                    <Eye />
                    {movie.vote_count}
                </span>
                <span>
                    <Calendar />
                    {movie.release_date}
                </span>
            </div>
        </div>
        <div className='overview'>
            <h3>Overview</h3>
            {movie.overview}
        </div>
    </div>
  </>
  )
}

export default Movie