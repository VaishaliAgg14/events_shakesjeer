import React from "react";
import "./card.css";
import CardItem from "./CardItem";
import "./CardItem.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io';
// const card = ({ menuData }) => {
//   return (
//     <div className="event-container">
//       {menuData.map((curElem) => {
//         return (
//           <div className="event-card1" style={{ backgroundColor: "#fdc912;" }}>
//             <div className="event-Maintitle">
//               <table>
//                 <tr>
//                   <td>
//                     <div className="month">{curElem.month}</div>
//                     <div className="month-date-devider"></div>
//                     <div className="date">{curElem.date}</div>
//                   </td>
//                   <td className="event-title">
//                     <img
//                       src={curElem.imgUrl}
//                       alt=""
//                       className="event-thumbnail"
//                     />
//                   </td>
//                 </tr>
//               </table>
//             </div>
//             <div className="event-title">
//               <h3>{curElem.title}</h3>
//             </div>
//             <div className="event-id">
//               <div className="event-location">{curElem.venue}</div>
//               <div className="event-time"> {curElem.time}</div>
//             </div>
//             <div className="event-quote">{curElem.quote}</div>
//             <div className="event-form">
//               <a href="www.google.com" className="event-formlink">
//                 Book Your Tickets
//               </a>
//             </div>
//             {/* <div className="eventsection-seemore">
//               <p>
//                 <div target="_blank" rel="noopener noreferrer">
//                   {" "}
//                   <i
//                     class="fas fa-lock"
//                     style={{
//                       color: "grey",
//                       transform: "scale(2)",
//                     }}
//                   ></i>
//                 </div>
//               </p>
//             </div> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropright
      className={className}
      style={{ ...style, display: "block" , color: "black"}}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleft
      className={className}
      style={{ ...style, display: "block" , color: "black"}}
      onClick={onClick}
    />
  );
}
function card() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="event-container">
      <Slider {...settings}>
        <div>
          <CardItem eventName="Moksha" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
        <div>
          <CardItem eventName="Moksha1" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
        <div>
          <CardItem eventName="Moksha2" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
        <div>
          <CardItem eventName="Moksha3" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
        <div>
          <CardItem eventName="Moksha4" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
        <div>
          <CardItem eventName="Moksha5" day="Sat" date="25 March 2022" time="6.00PM" location="Main Auditorium" formlink="www.google.com" />
        </div>
      </Slider>
    </div>

  );
}

export default card;
