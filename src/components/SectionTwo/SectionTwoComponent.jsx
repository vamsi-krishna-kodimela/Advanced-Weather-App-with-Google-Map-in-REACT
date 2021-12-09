import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapComponent from "./components/MapComponent";
import ExchangeRateComponent from "./components/ExchangeRateComponent";
import saveCoords from "../../redux/actions/save-coords";

const SectionTwoComponent = () => {
  const dispatch = useDispatch();
  const coords = useSelector((state) => state.coords);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let loc = pos.coords;
        dispatch(saveCoords({ lat: loc.latitude, lng: loc.longitude }));
      });
    } else {
      alert("Your device doesnot geolocation.");
    }
  }, [dispatch]);
  return (
    <div className="col-6">
      {coords ? <MapComponent coords={coords} /> : "Loading"}

      <ExchangeRateComponent />
    </div>
  );
};

export default SectionTwoComponent;
