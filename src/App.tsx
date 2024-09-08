import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState<any>({});

  const fetchApi = async () => {
    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=756edc072ecb1a813e71e3ffd09e683c" //don't panic I'll delete this key
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((err) => console.log("HUSTON MAMY PROBLEM", err));
  };

  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center bg-main-background">
      <button
        className="bg-red-600 text-white text-2xl font-semibold p-5 rounded-lg hover:bg-red-700 shadow-sm 
        active:translate-y-[5px] active:shadow-none transition"
        onClick={fetchApi}
      >
        CLICK ME AND CHECK OUT DOWN HERE
      </button>

      <li className="text-wrap list-none">
        {weatherData["name"] ?? "NO DATA YET"}
      </li>

      <li className="text-wrap list-none">
        {weatherData?.main?.temp
          ? `${weatherData?.main?.temp.toFixed(0)} °C`
          : "NO DATA YET"}
      </li>

      <li className="text-wrap list-none">
        {weatherData?.weather?.[0]?.main ? (
          <h1 className="text-xl">
            to będzie img: {weatherData?.weather?.[0]?.main.toLowerCase()}.png
          </h1>
        ) : (
          "NO DATA YET"
        )}
      </li>

      <li className="text-wrap list-none">
        {weatherData?.main?.humidity
          ? `${weatherData?.main?.humidity} %`
          : "NO DATA YET"}
      </li>

      <li className="text-wrap list-none">
        {weatherData?.wind?.speed
          ? `${weatherData?.wind?.speed} m/s`
          : "NO DATA YET"}
      </li>
    </div>
  );
}

export default App;
