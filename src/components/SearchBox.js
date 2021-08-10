import SearchField from "./SearchField";

function SearchBox() {
    return (
        <div className="max-w-xl mx-auto mt-40 px-8">
            <img 
                src="./images/google_logo.svg" 
                alt="google logo" 
                className="mx-auto w-48 sm:w-64"
            />
            <SearchField />
        </div>
    )
}

export default SearchBox
