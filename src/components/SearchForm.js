import React from "react";

function SearchForm({search, setSearch}) {

    return (
        <form id="search-form">
            <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search Transaction" id="search-input" 
            value={search}/>
            <button >Search</button>
        </form> 
        
    )
} 

export default SearchForm