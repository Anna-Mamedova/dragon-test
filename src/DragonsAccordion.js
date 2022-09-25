import React from "react";
import AccordionTable from "./AccordionTable"
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
                    <AccordionTable info = {props.info[0]} img ={props.info[0].flickr_images[1]}/>
                    <p className="description">{props.info[0].description} Learn more on <a href={props.info[0].wikipedia} target="_blank" rel="noreferrer">Wikipedia.</a></p>
                </div>
            </div>
            <p>
                <button className="btn btn-dark w-100" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                {props.info[1].name}
                </button>
            </p>
            <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body bg-dark">
                    <AccordionTable info = {props.info[1]} img ={props.info[1].flickr_images[0]}/>
                    <p className="description">{props.info[1].description} Learn more on <a href={props.info[1].wikipedia} target="_blank" rel="noreferrer">Wikipedia.</a></p>
                </div>
            </div>
        </div>
    )
}