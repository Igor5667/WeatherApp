interface SearchResultsProps {
  searchResults: string[];
  setSearchInputValue: (string: string) => void;
  setShowSearchResults: (boolean: boolean) => void;
}

function SearchResults({
  searchResults,
  setSearchInputValue,
  setShowSearchResults,
}: SearchResultsProps) {
  return (
    <ul className="absolute top-[100%] w-[70%] mt-2 rounded-2xl overflow-auto h-min max-h-[150px]">
      {searchResults.map((city: string) => (
        <li
          key={city}
          className="cursor-pointer bg-white py-2 px-5 hover:bg-gray-200"
          onClick={() => {
            setSearchInputValue(city);
            setShowSearchResults(false);
          }}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
