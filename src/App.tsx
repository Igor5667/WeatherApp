import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MainInfo from "./components/Main";
import FurtherInfo from "./components/FurtherInfo";

function App() {
  const [weatherData, setWeatherData] = useState<any>({});

  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center bg-main-background">
      <SearchBar setWeatherData={setWeatherData} />
      <MainInfo weatherData={weatherData} />
      <FurtherInfo weatherData={weatherData} />
    </div>
  );
}

export default App;
