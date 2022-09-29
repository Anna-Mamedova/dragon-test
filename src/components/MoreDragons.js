import React, { useState } from "react";
import axios from "axios";
import DragonsAcordion from "./DragonsAccordion"

export default function MoreDragons() {
    const [ dragonsInfo, setDragonsInfo] = useState({})
    const [ready, setReady] = useState(false);

    function handleResponse(response){
        setDragonsInfo(response.data)
        setReady(true)
    }

    function search(){
        let dragonApiUrl = 'https://api.spacexdata.com/v4/dragons'
        axios.get(dragonApiUrl).then(handleResponse)
    }
    if(ready){
        return(
            <DragonsAcordion info = {dragonsInfo}/>
        )
    } else {
        search()
        return 'Loading'
    }
}