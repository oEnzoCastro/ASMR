import { useEffect, useState } from "react";
import { getAlbums } from "../api/api";
import CategoryCard from "./CategoryCard";

import React from "react";

const AlbumsList = () => {
  // NOT - useState() / YES - useState([]) -> Initialize
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let albums = await getAlbums();

      if (albums) {
        var Bleeps = [];
        var Classics = [];
        var HipHop = [];
        var Jazz = [];
        var Metal = [];
        var MuCore = [];
        var SubMuCore = [];

        albums.map((album) => {
          if (album.category == "Bleeps") {
            Bleeps.push(album);
          }
          if (album.category == "Classics") {
            Classics.push(album);
          }
          if (album.category == "HipHop") {
            HipHop.push(album);
          }
          if (album.category == "Jazz") {
            Jazz.push(album);
          }
          if (album.category == "Metal") {
            Metal.push(album);
          }
          if (album.category == "MuCore") {
            MuCore.push(album);
          }
          if (album.category == "SubMuCore") {
            SubMuCore.push(album);
          }
        });

        var FormatedAlbums = [];

        FormatedAlbums.push(
          MuCore,
          SubMuCore,
          Classics,
          Jazz,
          Bleeps,
          HipHop,
          Metal
        );

        setAlbums(FormatedAlbums);
      }
    }

    fetchAPI();
  }, []);

  return (
    <div>
      {albums.map((album) => {
        return (
          <div key={album[0]._id} className="albumsList">
            <CategoryCard category={album} categoryName={album[0].category} />
          </div>
        );
      })}
    </div>
  );
};

export default AlbumsList;
