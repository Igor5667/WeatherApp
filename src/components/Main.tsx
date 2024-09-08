interface MainProps {
  weatherData: any;
  className?: string;
}

function MainInfo({ weatherData, className }: MainProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 text-3xl ${className}`}
    >
      <li className="text-wrap list-none">
        {weatherData["name"] ?? "NO DATA YET"}
      </li>

      <img
        src={`${weatherData?.weather?.[0]?.main.toLowerCase()}.png`}
        alt={weatherData?.weather?.[0]?.main.toLowerCase()}
        width={100}
      />

      <li className="text-wrap list-none">
        {weatherData?.main?.temp
          ? `${weatherData?.main?.temp.toFixed(0)} °C`
          : "NO DATA YET"}
      </li>
    </div>
  );
}

export default MainInfo;
