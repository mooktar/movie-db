import React from 'react'

function Search({ onSubmit, term, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const value = form.search.value
    const searchTerm = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${value}`

    if (searchTerm && searchTerm !== '') {
      onSubmit(searchTerm)
    }
  }

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
        <input type="text" name='search' value={term} onChange={handleChange} className="search" placeholder="Search" />
    </form>
  )
}

export default Search