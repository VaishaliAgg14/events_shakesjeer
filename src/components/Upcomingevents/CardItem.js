import React from 'react'
import "./CardItem.css"

export default function CardItem(props) {
    return (
        <div>
            <div className="event-card">
                {/* <img className="banner" src="./imgaes/banner.jpeg" alt="banner.jpg"/> */}
                <div className="banner"></div>
                <div className="event-content">
                    <h2>{props.eventName}</h2>
                    <div className="details">
                        <div className="date">
                            <div className="date-img"></div> <span>{props.day} {props.date} | {props.time}</span>
                        </div>
                        <div className="location">
                            <div className="location-img"></div> <span>{props.location}</span>
                        </div>
                    </div>
                    <button className="register">Register Now</button>
                    <hr className='separator' size="2" noshade="" />
                    <div className="tags">
                        <div className="tag">
                            <span>Open Mic</span>
                        </div>
                        <div className="tag">
                            <span>Poetry</span>
                        </div>
                        <div className="tag">
                            <span>Music</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
