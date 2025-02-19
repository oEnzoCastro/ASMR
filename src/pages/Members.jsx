import { useEffect, useState } from "react";
import { getMembers, getAlbums } from "../api/api";
import MemberCard from "../components/MemberCard";
import CategoryCard from "../components/CategoryCard";
import AddAlbumCard from "../components/AddAlbumCard";
import ApiOffline from "../components/ApiOffline";

const Members = () => {
  // NOT - useState() / YES - useState([]) -> Initialize
  const [members, setMembers] = useState([]);
  const [albums, setAlbums] = useState([]);

  const [apiState, setApiState] = useState();

  useEffect(() => {
    async function fetchAPI() {
      let members = await getMembers();
      if (members) {
        setMembers(members);
        setApiState("apiActive");
      } else {
        setApiState("apiInactive");
      }

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
    <div className="membersPage">
      <div className={"apiOffline" + " " + apiState}>
        <ApiOffline></ApiOffline>
      </div>
      <div className="membersContainer">
        {members.map((member) => {
          return <MemberCard key={member._id} member={member} />;
        })}
      </div>
      <AddAlbumCard />
      {albums.map((album) => {
        return (
          <div key={album[0]._id}>
            <CategoryCard category={album} categoryName={album[0].category} />
          </div>
        );
      })}
    </div>
  );
};

export default Members;
