import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="w-full flex justify-center gap-5 p-5 text-lg">
      <input
        type="text"
        className="w-[70%] p-2 px-5 focus:outline-none rounded-full"
        placeholder="Search for a city"
      />
      <button className="rounded-full bg-white w-12 aspect-square p-3">
        <IoSearch className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
