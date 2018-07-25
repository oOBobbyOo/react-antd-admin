import React from "react";
import PropTypes from "prop-types";

import SimpleChart from "./SimpleChart";
import ChartShowLoading from "./ChartShowLoading";
import ChartAPI from "./ChartAPI";
import ChartWithEvent from "./ChartWithEvent";
import ThemeChart from "./ThemeChart";
import DynamicChart from "./DynamicChart";
import MapChart from "./MapChart";

import AirportCoord from "./AirportCoord";
import Graph from "./Graph";
import Calendar from "./Calendar";
import Treemap from "./Treemap";
import Gauge from "./Gauge";
import GCalendar from "./GCalendar";
import LunarCalendar from "./LunarCalendar";
import Liquidfill from "./Liquidfill";
import BubbleGradient from "./BubbleGradient";
import TransparentBar3D from "./TransparentBar3D";
import Moon from "./Moon";

const EchartsComponent = ({ type }) => {
  if (type === "simple") return <SimpleChart />;
  if (type === "loading") return <ChartShowLoading />;
  if (type === "api") return <ChartAPI />;
  if (type === "events") return <ChartWithEvent />;
  if (type === "theme") return <ThemeChart />;
  if (type === "dynamic") return <DynamicChart />;
  if (type === "map") return <MapChart />;
  if (type === "airport") return <AirportCoord />;
  if (type === "graph") return <Graph />;
  if (type === "calendar") return <Calendar />;
  if (type === "treemap") return <Treemap />;
  if (type === "gauge") return <Gauge />;
  if (type === "gcalendar") return <GCalendar />;
  if (type === "lunar") return <LunarCalendar />;
  if (type === "liquid") return <Liquidfill />;
  if (type === "BubbleGradient") return <BubbleGradient />;
  if (type === "TransparentBar3D") return <TransparentBar3D />;
  if (type === "Moon") return <Moon />;
  return <SimpleChart />;
};

EchartsComponent.propTypes = {
  type: PropTypes.string
};

export default EchartsComponent;
