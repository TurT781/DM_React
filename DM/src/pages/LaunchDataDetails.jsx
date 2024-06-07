import { useState } from 'react';

const LaunchDataDetails = () => {
    let  [launchData, setLaunchData] = useState(null)

    fetch('https://api.spacexdata.com/v4/launches/latest')
    .then =((response) => response.json())
    .then =((launchData) => {
        setLaunchData(launchData);
        console.log(launchData);
});

    if (!launchData) return 
    <div> Il N'y a pas de donnée correspondantes à {launchData}</div>

};

export default LaunchDataDetails;