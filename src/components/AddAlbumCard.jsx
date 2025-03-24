import React, { useEffect, useState } from "react";
import { createAlbum } from "../api/api";

const AddAlbumCard = () => {
  const [category, setCategory] = useState('');
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');

  const changeCategory = (event) => {
    const newValue = event.target.value;
    setCategory(newValue);
  };
  const changeArtist = (event) => {
    const newValue = event.target.value;
    setArtist(newValue);
  };
  const changeTitle = (event) => {
    const newValue = event.target.value;
    setTitle(newValue);
  };
  const changeCover = (event) => {
    const newValue = event.target.value;
    setCover(newValue);
  };

  const setAlbum = () => {

    let data = {
      category: category,
      artist: artist,
      title: title,
      cover: cover,
    };
    

    var response = createAlbum(data);
    console.log(response)

  };

  return (
    <form action={setAlbum} className="addAlbum">
      <input className="addAlbumInput"
        onChange={changeCategory}
        value={category}
        placeholder="Category"
        name="category"
        required
      />
      <input className="addAlbumInput"
        onChange={changeArtist}
        value={artist}
        placeholder="Artist"
        name="artist"
        required
      />
      <input className="addAlbumInput"
        onChange={changeTitle}
        value={title}
        placeholder="Title"
        name="albumTitle"
        required
      />
      <input className="addAlbumInput"
        onChange={changeCover}
        value={cover}
        placeholder="Cover"
        name="cover"
      />
      <button type="submit" className="submitNewAlbumBtn">
        +
      </button>
    </form>
  );
};

export default AddAlbumCard;
