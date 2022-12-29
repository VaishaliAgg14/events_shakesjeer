import React from "react";
import Video from "./video";
import "./main.css";
import Card from "./card";
import Menu from "./menuApi";
const Main = () => {
  const [menuData] = React.useState(Menu);
  return (
    <div className="event-main">
    <div className="upcoming-events-heading-div">
      <div className="upcoming-events-heading-text">Upcoming Events</div>
    </div>
      {/* <Video /> */}
      <Card menuData={menuData} />
    <div className="past-events-heading-div">
      <div className="past-events-heading-text">Past Events...</div>
    </div>
    <Card menuData={menuData} />
    </div>
  );
};
export default Main;
