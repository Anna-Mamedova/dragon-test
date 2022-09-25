import axios from "axios";
import React, { useState } from "react";
import DragonImage from "./DragonImage"
import "./Dragon.css"

export default function Dragon() {
    const [ dragonInfo, setDragonInfo] = useState({})
    const [ready, setReady] = useState(false);

    function handleResponse(response){
        setDragonInfo(response.data)
        setReady(true)
    }

    function search(){
        let dragonApiUrl = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f'
        axios.get(dragonApiUrl).then(handleResponse)
    }
    if(ready){
        return(
            <div className="Dragon row">
                <DragonImage image = {dragonInfo.flickr_images} alt = {dragonInfo.name}/>
                <div className="dragonInfo col-lg">
                    <h1>{dragonInfo.name}</h1>
                    <p>{dragonInfo.description} Learn more on <a href={dragonInfo.wikipedia} target="_blank" rel="noreferrer">Wikipedia.</a></p>
                    <br />
                    <table>
						<tbody>
							<tr>
								<td className="text-start">Maiden launch</td>
								<td className="text-end">{dragonInfo.first_flight}</td>
							</tr> 
                            <tr>
								<td className="text-start">Height</td>
								<td className="text-end">{dragonInfo.height_w_trunk.meters} m <span>/ {dragonInfo.height_w_trunk.feet} ft</span></td>
							</tr>
							<tr>
								<td className="text-start">Diameter</td>
								<td className="text-end">{dragonInfo.diameter.meters} m <span>/ {dragonInfo.diameter.feet} ft</span></td>
							</tr>
							<tr> 
								<td className="text-start">Dry mass</td>
								<td className="text-end">{dragonInfo.dry_mass_kg} kg <span>/ {dragonInfo.dry_mass_lb} lb</span></td>
							</tr>
						</tbody>
					</table>
                </div>
            </div>
        )
    } else {
        search()
        return 'Loading'
    }
}