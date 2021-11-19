import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  const searchHandler = () => {
    const enteredSearchTerm = searchValue.current.value;
    setSearchTerm(enteredSearchTerm)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={ handleSubmit }>
        <div className='form-control'>
          <label htmlFor='name'>
            search your favorite cocktail
          </label>
          <input
            type='text'
            id='name'
            ref={ searchValue }
            onChange={ searchHandler }
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
