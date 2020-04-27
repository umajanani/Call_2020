import React from 'react';
import ReactVR from "./ReactVR";
import React360 from "./React360";
import ReactAndRuntime from "./R&R";
import Executors from "./Executors";
import Surfaces from "./Surfaces";
import Locations from "./Locations";
import Components from "./Components";
import CovidIndiaStats from "./CovidIndiaStats";
import RegionalStats from "./RegionalStats";
import LocationStat from "./LocationStat ";

const getSection = (section) => {
  switch (section) {
    case "React VR":
      return <ReactVR />;
    case "React 360":
      return <React360 />;
    case "Runtime":
      return <ReactAndRuntime />;
    case "Executors":
      return <Executors />;
    case "Surfaces":
      return <Surfaces />;
    case "Locations":
      return <Locations />;
    case "Components":
      return <Components />;
    case "CovidIndiaStats":
    return <CovidIndiaStats />;
    case "RegionalStats":
    return <RegionalStats />;
    case "LocationStat":
      return <LocationStat />;
    default:
      return ReactVR;
  }
};

export default getSection;
