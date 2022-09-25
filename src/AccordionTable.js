import  React from "react";
import "./AccordionTable.css"

export default function AccordionTable(props){
    return (
        <div className="AccordionTable row">
        <div className="col-md dragon-img">
        <img src={props.img} alt = {props.info.name} className="img-fluid rounded"/>
        </div>
        <div className="col-md dragonInfo">
            <table>
                <tbody>
                    <tr>
                        <td>Maiden launch</td>
                        <td className="text-end">{props.info.first_flight}</td>
                    </tr> 
                    <tr>
                        <td>Height</td>
                        <td className="text-end">{props.info.height_w_trunk.meters} m <span>/ {props.info.height_w_trunk.feet} ft</span></td>
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td className="text-end">{props.info.diameter.meters} m <span>/ {props.info.diameter.feet} ft</span></td>
                    </tr>
                    <tr>
                        <td>Capsul volume</td>
                        <td className="text-end">{props.info.pressurized_capsule.payload_volume.cubic_meters} m <span>/ {props.info.pressurized_capsule.payload_volume.cubic_feet} ft</span></td>
                    </tr>
                    <tr>
                        <td>Trunk volume</td>
                        <td className="text-end">{props.info.trunk.trunk_volume.cubic_meters} m <span>/ {props.info.trunk.trunk_volume.cubic_feet} ft</span></td>
                    </tr>
                    <tr> 
                        <td>Dry mass</td>
                        <td className="text-end">{props.info.dry_mass_kg} kg <span>/ {props.info.dry_mass_lb} lb</span></td>
                    </tr>
                    <tr> 
                        <td>Launch payload mass</td>
                        <td className="text-end">{props.info.launch_payload_mass.kg} kg <span>/ {props.info.launch_payload_mass.lb} lb</span></td>
                    </tr>
                    <tr> 
                        <td>Return payload mass</td>
                        <td className="text-end">{props.info.return_payload_mass.kg} kg <span>/ {props.info.return_payload_mass.lb} lb</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
    )
}