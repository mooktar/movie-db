import React, { useState, useEffect } from 'react'
import './App.css';
import Movie from './components/Movie';
import Search from './components/Search';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

function App() {
  const [movies, setMovies] = useState(null)
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async (url) => {
    try {
      setLoading(true)
      let response = await fetch(url)
      let data = await response.json()
      setMovies(data.results)
      setLoading(false)
    } catch(e) {
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData(API_URL)
  }, [])

  const handleSubmit = (term) => {
    fetchData(term)
  }
  
  return (<>
    <header>
      <nav className="container">
        <a href="/" className='logo'>MovieDB</a>
        <Search term={term} onSubmit={handleSubmit} onChange={setTerm} />
      </nav>
    </header>
    <main>
      <div className='container'>
        {loading
          ? <h2 className='loading'>Loading...</h2>
          : movies 
            ? <div className='movie-wrapper'>
                {movies.map(movie => <Movie movie={movie} key={movie.id} />)}
              </div>
            : <h2 className='loading'>No movies found 😢</h2>
        }
      </div>
    </main>
  </>
  );
}

export default App;
