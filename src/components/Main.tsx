interface MainProps {
  weatherData: any;
  className?: string;
}

function MainInfo({ weatherData, className }: MainProps) {
  return (
    <div
      className={`w-[80%] flex flex-col justify-center items-center gap-4 lg:gap-0 text-6xl ${className}`}
    >
      <li className="text-wrap list-none text-center">
        {weatherData["name"] ?? "NO DATA"}
      </li>

      <img
        src={`${weatherData?.weather?.[0]?.main.toLowerCase()}.png`}
        alt={weatherData?.weather?.[0]?.main.toLowerCase()}
        className="w-[50%]"
      />

      <li className="text-wrap list-none">
        {weatherData?.main?.temp
          ? `${weatherData?.main?.temp.toFixed(0)} °C`
          : "NO DATA"}
      </li>
    </div>
  );
}

export default MainInfo;
