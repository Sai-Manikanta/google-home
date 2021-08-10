import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Suggetions from './Suggetions';

function SearchField() {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggetions, setSuggetions] = useState([]);
    const [isQueryFromSuggs, setIsQueryFromSuggs] = useState(false);

    const isSuggsAvail = suggetions.length > 0;
    const cssRadiusLeft = isSuggsAvail ? 'rounded-tl' : 'rounded-l-3xl';
    const cssRadiusRight = isSuggsAvail ? 'rounded-tr' : 'rounded-r-3xl'

    // Fetch auto suggetions 
    useEffect(() => {
        const queryLetterCount = searchQuery.length;
        if((queryLetterCount >= 3) && !(queryLetterCount % 3)){
            axios.post('https://still-brook-58447.herokuapp.com/suggs', {
                query: searchQuery
            })
             .then(res => setSuggetions(res.data.data.suggetions.set))
             .catch(err => console.log(err))
        }

        if(queryLetterCount === 0){
            setSuggetions([]);
        }
    }, [searchQuery])

    const handleSearch = e => {
        e.preventDefault();
        
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }

    // If query selected from suggtions set window.href
    useEffect(() => {
        if(isQueryFromSuggs){
            window.location.href = `https://www.google.com/search?q=${searchQuery}`;
        }
    }, [isQueryFromSuggs, searchQuery])

    const handleMicClick = () => {
        window.alert('You clicked on mic');
    }

    return (
        <div className="relative">
            <div className={`flex mt-6 shadow ${cssRadiusLeft}`}>
                <form onSubmit={handleSearch} className="flex-grow">
                    <input 
                        type="text"
                        placeholder="Search Google or type a URL"
                        value={searchQuery}  
                        style={{
                                backgroundImage: `url('./images/search.svg')`
                        }}
                        className={`w-full pl-8 sm:pl-12 pr-0 sm:pr-2 py-2 outline-none placeholder-gray-500 bg-no-repeat icon-bg-position ${cssRadiusLeft}`}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </form>
                <button 
                    className={`flex-grow-0 px-2 bg-white cursor-pointer ${cssRadiusRight}`}
                    onClick={handleMicClick}
                >
                    <img src="./images/googlemic.svg" alt="mic" />
                </button>
            </div>

            {isSuggsAvail && (
                <Suggetions 
                    list={suggetions} 
                    setSearchQuery={setSearchQuery} 
                    setIsQueryFromSuggs={setIsQueryFromSuggs}
                />
            )}
        </div>
    )
}

export default SearchField
