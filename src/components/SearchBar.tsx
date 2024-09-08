import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  setWeatherData: (data: any) => void;
}

function SearchBar({ setWeatherData }: SearchBarProps) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const fetchApi = async (location: string) => {
    console.log("fetching for", location);

    const key = "756edc072ecb1a813e71e3ffd09e683c"; //don't panic I'll delete this key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

    await fetch(url)
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
    fetchApi(searchPhrase);
  };

  return (
    <div className="w-full flex justify-center gap-5 p-5 text-lg text-black">
      <input
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        type="text"
        className="w-[70%] p-2 px-5 focus:outline-none rounded-full"
        placeholder="Search for a city"
      />
      <button
        className="rounded-full bg-white w-12 aspect-square p-[.78rem]"
        onClick={handleSearch}
      >
        <IoSearch className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
