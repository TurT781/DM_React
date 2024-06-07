import {useState} from "react";

const Launch = () => {
    let [launch, setLaunch] = useState();

    fetch('https://api.spacexdata.com/v4/launches/latest')        
        .then =((response) => response.json())
        .then =((launch) => {
            setLaunch(launch);
            console.log(launch);
});
    if (!launchData) 
        return 
        <div> Il N'y a pas de donnée correspondantes à {launchData}</div>
};    


export default Launch;