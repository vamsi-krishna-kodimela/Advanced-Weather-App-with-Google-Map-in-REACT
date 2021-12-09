import { useSelector } from "react-redux";

const LocationComponent = () => {
  const city = useSelector((state) => state.weather?state.weather.city:"...");

  let dateFormater = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
  });
  let timeFormater = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  });
  return (
    <div className="align-self-center d-flex flex-column align-items-center">
      <span className="text-danger">
        {timeFormater.format(Date.now()).toLowerCase()},{" "}
        {dateFormater.format(Date.now())}
      </span>
      <h2>{city}</h2>
    </div>
  );
};

export default LocationComponent;
