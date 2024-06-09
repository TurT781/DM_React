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
  {
    id: 2,
    name: "Starlink-15 (v1.0)",
    details: "SpaceX will launch its 15th batch of approximately 60 satellites for its Starlink broadband network, a mission designated Starlink 15.",
    links: {
      patch: {
        large: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png"
      },
      reddit: {
        campaign: "https://www.reddit.com/r/spacex/comments/j51nch/rspacex_starlink15_launch_campaign_thread/",
        launch: "https://www.reddit.com/r/spacex/comments/j5tigr/rspacex_starlink15_official_launch_discussion/",
        media: "https://www.reddit.com/r/spacex/comments/j5uyeb/rspacex_starlink15_media_thread_photographer/",
        recovery: "https://www.reddit.com/r/spacex/comments/j6h2ix/starlink15_stage_1_recovery_thread/"
      },
      presskit: "https://www.spacex.com/launches/",
      webcast: "https://youtu.be/J442-ti-Dhg",
      article: "https://spaceflightnow.com/2020/10/18/spacex-sets-new-record-for-most-reused-booster/",
      wikipedia: "https://en.wikipedia.org/wiki/Starlink"
    }
  },
  {
    id: 3,
    name: "GPS III SV04 (Sacagawea)",
    details: "SpaceX will launch the fourth GPS III satellite for the U.S. Space Force.",
    links: {
      patch: {
        large: "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"
      },
      reddit: {
        campaign: "https://www.reddit.com/r/spacex/comments/jf3mr9/gps_iii_sv04_launch_campaign_thread/",
        launch: "https://www.reddit.com/r/spacex/comments/jg10w1/rspacex_gps_iii_sv04_official_launch_discussion/",
        media: "https://www.reddit.com/r/spacex/comments/jg7ps4/rspacex_gps_iii_sv04_media_thread_photographer/",
        recovery: "https://www.reddit.com/r/spacex/comments/jgvb2e/gps_iii_sv04_stage_1_recovery_thread/"
      },
      presskit: "https://www.spacex.com/launches/gps-iii-sv04/",
      webcast: "https://youtu.be/wbSwFU6tY1c",
      article: "https://spaceflightnow.com/2020/11/05/spacex-launches-fourth-gps-iii-satellite/",
      wikipedia: "https://en.wikipedia.org/wiki/GPS_Block_III"
    }
  }
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
