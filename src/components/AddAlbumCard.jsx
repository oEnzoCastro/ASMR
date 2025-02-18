import React, { useEffect, useState } from "react";

const AddAlbumCard = ({ category }) => {
  return (
    <div>
      {JSON.stringify(category)}
      <form action="http://localhost:8080/albums" method="POST">
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Artist"/>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddAlbumCard;
