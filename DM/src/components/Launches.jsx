import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const launches = [
  {
    id: 1,
    name: "CCtCap Demo Mission 2",
    details: "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station...",
    links: {
      patch: {
        large: "https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png"
      },
      reddit: {
        campaign: "https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/",
        launch: "https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general",
        media: "https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/",
        recovery: "https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/"
      },
      presskit: "https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf",
      webcast: "https://youtu.be/xY96v0OIcK4",
      article: "https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/",
      wikipedia: "https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2"
    }
  },
  // Ajouter d'autres lancements si nécessaire
];

const Launches = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilter = searchParams.get("nameContains");
  const launchesToShow = launches.filter(
    (launch) =>
      !nameFilter ||
      launch.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase())
  );
  const handleNewSearch = (e) => {
    setSearchParams({ nameContains: e.target.value });
  };

  return (
    <div>
      <input
        value={nameFilter || ""}
        placeholder="Rechercher Par Nom"
        onChange={handleNewSearch}
      />
      <ul>
        {launchesToShow.map((launch) => (
          <li key={launch.id}>
            <Link to={`/launches/${launch.id}`}>{launch.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Launches;
