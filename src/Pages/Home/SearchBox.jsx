import React from 'react';
import './SearchBox.css'; // Assuming your CSS file is correctly linked

function SearchBox() {
  return (
    <div className="app-container">
      <div className="column one">
        <img src='/logo/mapl.jpeg' alt="Logo" className="logo-img" />
        <p className='maptext'>New Delhi</p>
      </div>
      <div className="column two">
        <img src='/logo/searchimg.png' alt="Logo" className="search-img" />
        <p className='searchtext'>Search doctors, clinics, hospitals etc</p>
      </div>
    </div>
  );
}

export default SearchBox;
