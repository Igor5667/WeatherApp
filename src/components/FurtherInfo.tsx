import { LiaWaterSolid } from "react-icons/lia";
import { LuWind } from "react-icons/lu";

interface FurtherInfoProps {
  weatherData: any;
  className?: string;
}

function FurtherInfo({ weatherData, className }: FurtherInfoProps) {
  return (
    <div className={`flex justify-between w-[70%] text-3xl ${className}`}>
      <Section description="Humidity">
        <LiaWaterSolid />
        {weatherData?.main?.humidity
          ? `${weatherData?.main?.humidity} %`
          : "NO DATA YET"}
      </Section>

      <Section description="Wind">
        <LuWind />
        {weatherData?.wind?.speed
          ? `${weatherData?.wind?.speed} m/s`
          : "NO DATA YET"}
      </Section>
    </div>
  );
}

interface SectionProps {
  children: any;
  description: string;
}

function Section({ children, description }: SectionProps) {
  return (
    <div className="flex flex-col gap-3 border p-5 rounded-2xl">
      <div className="flex flex-row items-center gap-3 ">{children}</div>
      <div className="text-sm text-center -mt-2">{description}</div>
    </div>
  );
}

export default FurtherInfo;
