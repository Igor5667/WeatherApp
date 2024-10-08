import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchResults from "./SearchResults";
import cityArray from "../../data/cities";

interface SearchBarProps {
  setWeatherData: (data: any) => void;
}

function SearchBar({ setWeatherData }: SearchBarProps) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchResults, setSearchResults] = useState(cityArray);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const fetchApi = async (location: string) => {
    console.log("fetching for", location);

    const key = "756edc072ecb1a813e71e3ffd09e683c"; //don't panic I'll delete this key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.message == "city not found") {
          alert(`City ${location} not found`);
          return;
        }
        setWeatherData(data);
        console.log(data);
      });
  };

  const handleSearch = () => {
    let searchPhrase = searchInputValue.trim();
    if (searchPhrase === "") return;
    fetchApi(searchPhrase);
    setSearchInputValue("");
  };

  const removeDiacritics = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleChangeInput = (inputValue: string) => {
    setSearchInputValue(inputValue);

    console.log(inputValue);
    const results = cityArray.filter((city: string) =>
      removeDiacritics(city.toLowerCase()).includes(
        removeDiacritics(inputValue.toLowerCase())
      )
    );
    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  };

  useEffect(() => {
    if (searchInputValue === "") {
      setShowSearchResults(false);
    }
  }, [searchInputValue]);

  return (
    <div className="w-full flex justify-center gap-5 p-5 pb-0 text-lg text-black relative">
      <input
        value={searchInputValue}
        onChange={(e) => handleChangeInput(e.target.value)}
        type="text"
        className="w-[70%] p-2 px-5 focus:outline-none rounded-full shadow-lg"
        placeholder="Search for a city"
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        onBlur={() => setShowSearchResults(false)}
      />

      {showSearchResults && (
        <SearchResults
          searchResults={searchResults}
          setSearchInputValue={setSearchInputValue}
          setShowSearchResults={setShowSearchResults}
        />
      )}

      <button
        className="rounded-full bg-white w-12 aspect-square p-[.78rem] shadow-lg"
        onClick={handleSearch}
      >
        <IoSearch className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
