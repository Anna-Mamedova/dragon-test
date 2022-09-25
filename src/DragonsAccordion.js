import React from "react";
import "./DragonsAccordion.css"

export default function DragonAccordion(props) {

    return (
        <div className="DragonsAccordion">
            <h2>Read more obout other Dragons</h2>
            <p>
                <button className="btn btn-dark w-100" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                {props.info[0].name}
                </button>
            </p>
            <div className="collapse multi-collapse mb-3" id="multiCollapseExample1">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md dragon-img">
                        <img src={props.info[0].flickr_images[1]} alt = {props.info[0].name} className="img-fluid rounded"/>
                        </div>
                        <div className="col-md dragonInfo">
                            <p>{props.info[0].description} Learn more on <a href={props.info[0].wikipedia} target="_blank" rel="noreferrer">Wikipedia.</a></p>
                            <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Maiden launch</td>
                                        <td className="text-end">{props.info[0].first_flight}</td>
                                    </tr> 
                                    <tr> 
                                        <td>Dry mass</td>
                                        <td className="text-end">{props.info[0].dry_mass_kg}kg <span>/ {props.info[0].dry_mass_lb}lb</span></td>
                                    </tr>
                                    <tr>
                                        <td>Diameter</td>
                                        <td className="text-end">{props.info[0].diameter.meters}m <span>/ {props.info[0].diameter.feet}ft</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
            <p>
                <button className="btn btn-dark w-100" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                {props.info[1].name}
                </button>
            </p>
            <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md dragon-img">
                        <img src={props.info[1].flickr_images[0]} alt = {props.info[1].name} className="img-fluid rounded"/>
                        </div>
                        <div className="col-md dragonInfo">
                            <p>{props.info[1].description} Learn more on <a href={props.info[1].wikipedia} target="_blank" rel="noreferrer">Wikipedia.</a></p>
                            <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Maiden launch</td>
                                        <td className="text-end">{props.info[1].first_flight}</td>
                                    </tr> 
                                    <tr> 
                                        <td>Dry mass</td>
                                        <td className="text-end">{props.info[1].dry_mass_kg}kg <span>/ {props.info[1].dry_mass_lb}lb</span></td>
                                    </tr>
                                    <tr>
                                        <td>Diameter</td>
                                        <td className="text-end">{props.info[1].diameter.meters}m <span>/ {props.info[1].diameter.feet}ft</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}