import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Travels(props) {
    return (
        <div className="card">
            <img src= {props.item.imageUrl} className="card--image" />
            <div className="card--details">
                <div className="card--header">
                   <p className="card--location"> <FontAwesomeIcon icon={faLocationDot} style={{color: "#ee1b1b", }} /> {props.item.location} </p>
                    <a href={props.item.googleMapsUrl} className="card-maps">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}