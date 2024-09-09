interface MainProps {
  weatherData: any;
  className?: string;
}

function MainInfo({ weatherData, className }: MainProps) {
  return (
    <div
      className={`w-[80%] flex flex-col justify-center items-center gap-4 lg:gap-0 text-6xl ${className}`}
    >
      <div className="text-wrap list-none text-center">
        {weatherData["name"] ?? "NO DATA"}
      </div>

      <img
        src={`${weatherData?.weather?.[0]?.main.toLowerCase()}.png`}
        alt={weatherData?.weather?.[0]?.main.toLowerCase()}
        className="w-[50%]"
      />

      <div className="text-wrap list-none">
        {weatherData?.main?.temp
          ? `${weatherData?.main?.temp.toFixed(0)} °C`
          : "NO DATA"}
      </div>
    </div>
  );
}

export default MainInfo;
