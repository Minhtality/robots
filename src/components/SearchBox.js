import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2 dib shadow-2'>
            <input className='bg-lightest-blue ' type="search" placeholder="search robo" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;
