import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  setWeatherData: (data: any) => void;
}

function SearchBar({ setWeatherData }: SearchBarProps) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const fetchApi = async () => {
    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=756edc072ecb1a813e71e3ffd09e683c" //don't panic I'll delete this key
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((err) => console.log("ERROR WHILE FETCHING", err));
  };

  const handleSearch = () => {
    let searchPhrase = searchInputValue.trim();
    if (searchPhrase === "") return;
    fetchApi();
  };

  return (
    <div className="w-full flex justify-center gap-5 p-5 text-lg">
      <input
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        type="text"
        className="w-[70%] p-2 px-5 focus:outline-none rounded-full"
        placeholder="Search for a city"
      />
      <button
        className="rounded-full bg-white w-12 aspect-square p-3"
        onClick={handleSearch}
      >
        <IoSearch className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
