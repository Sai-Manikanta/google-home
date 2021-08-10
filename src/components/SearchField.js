import React, { useState } from 'react'

function SearchField() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleMicClick = () => {
        window.alert('You clicked on mic');
    }

    const handleFormSearch = e => {
        e.preventDefault();
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }

    return (
        <div className="flex rounded-l-3xl mt-6 shadow">
            <form onSubmit={handleFormSearch} className="flex-grow">
                <input 
                    type="text"
                    placeholder="Search Google or type a URL"
                    value={searchQuery}  
                    style={{
                            backgroundImage: `url('./images/search.svg')`
                    }}
                    className="w-full rounded-l-3xl pl-8 sm:pl-12 pr-0 sm:pr-2 py-2 outline-none placeholder-gray-500 bg-no-repeat icon-bg-position"
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </form>
            <button 
                className="flex-grow-0 px-2 rounded-r-3xl bg-white cursor-pointer"
                onClick={handleMicClick}
            >
                <img src="./images/googlemic.svg" alt="mic" />
            </button>
        </div>
    )
}

export default SearchField
