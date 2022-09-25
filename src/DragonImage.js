import React from "react";
import "./DragonImage.css"

export default function DragonImage(props) {
        return (
            <div className="DragonImage col-md">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={props.image[0]} className="d-block w-100" alt={props.alt} />
                    </div>
                    <div className="carousel-item">
                    <img src={props.image[1]} className="d-block w-100" alt={props.alt} />
                    </div>
                    <div className="carousel-item">
                    <img src={props.image[2]} className="d-block w-100" alt={props.alt} />
                    </div>
                    <div className="carousel-item">
                    <img src={props.image[3]} className="d-block w-100" alt={props.alt} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
    
            </div>
        )
}