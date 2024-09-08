interface MainProps {
  weatherData: any;
  className?: string;
}

function MainInfo({ weatherData, className }: MainProps) {
  return (
    <div className={`${className}`}>
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
    </div>
  );
}

export default MainInfo;
