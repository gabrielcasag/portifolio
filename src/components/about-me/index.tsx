"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";

type GithubDataProps = {
  name: string;
  bio: string;
  blog: string;
  avatar_url: string;
  location: string;
  hireable: boolean;
  company?: string;
};

export function AboutMe() {
  const [ghData, setGhData] = useState<null | GithubDataProps>(null);
  const location = [-21.366, -45.5125]; // TODO: make this dynamic based on gh location

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielcasag")
      .then((res) => res.json())
      .then((data) => setGhData(data));
  }, []);

  return (
    <main>
      <div>
        {ghData && (
          <>
            <div id="image__container">
              <img src={ghData.avatar_url} alt="avatar from github" />
            </div>
            <h2> {`Hi, i'm ${ghData.name} ✌️`}</h2>
            <p>{ghData.bio}</p>
          </>
        )}
      </div>

      <div>
        <MapContainer
          center={location}
          zoom={13}
          style={{ height: "100%", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
      </div>
    </main>
  );
}
