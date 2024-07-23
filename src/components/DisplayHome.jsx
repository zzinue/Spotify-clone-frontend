import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AllbumItem from "./AllbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className="mt-4 ">
        <h1 className="my-5 font-bold text-2xl">Caracteristicas</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AllbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 ">
        <h1 className="my-5 font-bold text-2xl">Hits del dia</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
