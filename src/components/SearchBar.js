import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    //arrow function useage is important automatic bind

    event.preventDefault(); // important disable default refresh method
    onFormSubmit(term);
  };
  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Videos</label>
          <input
            type='text'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
