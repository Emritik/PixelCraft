/* eslint-disable react/prop-types */
import CountUp from "react-countup";
const StatItem = ({number, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-extrabold text-purple-600">
      <CountUp end={number} duration={8} className="text-8xl font-extrabold text-highlight" />+
      </div>
      <div className="text-xl font-normal text-gray-900">{label}</div>
    </div>
  );


  export default StatItem;