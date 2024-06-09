import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LaunchDetails = () => {
    const [launches, setLaunches] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        .then(response => response.json())
        .then(data => {
            setLaunches(data);
            console.log(data);
        });
    }, [id]);

    if (!launches) {
        return <div>Il n'y a pas de données correspondantes pour lancement avec l'ID {id}</div>;
    }

    return (
        <div className='launch_details'>
        <h1>{launches.name}</h1>
        <img src={launches.links.patch.large} alt="photo_lancement_spaceX" />
        <p>{launches.details}</p>
        <ul>
            <li><a href={launches.links.reddit.campaign} target="_blank" rel="noopener noreferrer">Reddit Campaign</a></li>
            <li><a href={launches.links.reddit.launches} target="_blank" rel="noopener noreferrer">Reddit launches</a></li>
            <li><a href={launches.links.reddit.media} target="_blank" rel="noopener noreferrer">Reddit Media</a></li>
            <li><a href={launches.links.reddit.recovery} target="_blank" rel="noopener noreferrer">Reddit Recovery</a></li>
            <li><a href={launches.links.presskit} target="_blank" rel="noopener noreferrer">Press Kit</a></li>
            <li><a href={launches.links.webcast} target="_blank" rel="noopener noreferrer">Webcast</a></li>
            <li><a href={launches.links.article} target="_blank" rel="noopener noreferrer">Article</a></li>
            <li><a href={launches.links.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
        </ul>
        </div>
    );
};

export default LaunchDetails;
