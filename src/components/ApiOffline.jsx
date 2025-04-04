import { useEffect, useState } from "react";
import { getAlbums } from "../api/api";

const ApiOffline = () => {
  const [apiState, setApiState] = useState();

  useEffect(() => {
    async function fetchAPI() {
      let albums = await getAlbums();
      if (albums) {
        setApiState("apiActive");
      }
    }

    fetchAPI();
  }, []);

  return (
    <div className={"apiOffline" + " " + apiState}>
      <a
        href="https://render.com/docs/free?_gl=1*1cwv7an*_gcl_au*MTMxMjc4OTA2NC4xNzM5ODI1MzI2*_ga*MTkwOTkxNzgzOS4xNzM5ODI1MzI2*_ga_QK9L9QJC5N*MTczOTk4OTc3OC4yLjEuMTczOTk4OTkyNy45LjAuMA..#free-web-services"
        target="_blank"
      >
        Why the page isn't loading?
      </a>
    </div>
  );
};

export default ApiOffline;
