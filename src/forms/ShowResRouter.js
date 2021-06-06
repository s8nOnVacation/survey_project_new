import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ShowResRouter() {
    let history = useHistory();
    const routeToShowResponses = () => {
        console.log("ssddsdq",history)
        if(!history.location.pathname.includes("responses"))
        history.push('./responses/');
    }
    return (
        <div className="base-container">
            {routeToShowResponses()}
        </div>
    )
}
