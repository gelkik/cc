import React from "react";

function SearchBar({ searchQ,setSearchQ }) {


  return (
    <div className="search">
      <input 
        type="text" 
        className="searchTerm" 
        value={searchQ}
        onChange={(e)=>setSearchQ(e.target.value)}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
