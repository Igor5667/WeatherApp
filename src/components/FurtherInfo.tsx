interface FurtherInfoProps {
  weatherData: any;
  className?: string;
}

function FurtherInfo({ weatherData, className }: FurtherInfoProps) {
  return (
    <div className={`${className}`}>
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

export default FurtherInfo;
