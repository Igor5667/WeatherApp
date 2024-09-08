import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MainInfo from "./components/Main";
import FurtherInfo from "./components/FurtherInfo";
import Header from "./components/Header";

function App() {
  const [weatherData, setWeatherData] = useState<any>({});

  const isObjectEmpty = (object: Object) => {
    return Object.keys(object).length !== 0;
  };

  return (
    <div
      className="h-svh w-screen lg:h-[95vh] lg:w-[110%]
                 lg:rounded-xl lg:border lg:shadow-black
                 flex justify-center flex-col items-center
                 bg-main-background text-white py-[10%] lg:py-2"
    >
      {!isObjectEmpty(weatherData) && <Header />}
      <SearchBar setWeatherData={setWeatherData} />
      {isObjectEmpty(weatherData) && (
        <>
          <MainInfo weatherData={weatherData} className="flex-1" />
          <FurtherInfo weatherData={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
