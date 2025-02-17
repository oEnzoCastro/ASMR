import { useEffect, useState } from "react";
import { getMembers, getAlbums } from "../api/api";
import MemberCard from "../components/MemberCard";
import AlbumCard from "../components/AlbumCard";
import CategoryCard from "../components/CategoryCard";

const Members = () => {
  // NOT - useState() / YES - useState([]) -> Initialize
  const [members, setMembers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [bleeps, setBleeps] = useState([]);
  const [classics, setClassics] = useState([]);
  const [hipHop, setHipHop] = useState([]);
  const [jazz, setJazz] = useState([]);
  const [metal, setMetal] = useState([]);
  const [muCore, setMuCore] = useState([]);
  const [subMuCore, setSubMuCore] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let members = await getMembers();
      if (members) {
        setMembers(members);
      }
      let albums = await getAlbums();
      if (albums) {
        setAlbums(albums);
        console.log(albums)
        setBleeps(albums.Bleeps);
        setClassics(albums.Classics);
        setHipHop(albums.HipHop);
        setJazz(albums.Jazz);
        setMetal(albums.Metal);
        setMuCore(albums.MuCore);
        setSubMuCore(albums.SubMuCore);
      }
    }

    fetchAPI();
  }, []);

  return (
    <div>
      <div className="membersContainer">
        {members.map((member) => {
          return <MemberCard key={member._id} member={member} />;
        })}
      </div>
      <div>
        {/* Bleeps */}
        <CategoryCard category={bleeps} categoryName={Object.keys({bleeps})}></CategoryCard>
        <CategoryCard category={classics} categoryName={Object.keys({classics})}></CategoryCard>
        <CategoryCard category={hipHop} categoryName={Object.keys({hipHop})}></CategoryCard>
        <CategoryCard category={jazz} categoryName={Object.keys({jazz})}></CategoryCard>
        <CategoryCard category={metal} categoryName={Object.keys({metal})}></CategoryCard>
        <CategoryCard category={muCore} categoryName={Object.keys({muCore})}></CategoryCard>
        <CategoryCard category={subMuCore} categoryName={Object.keys({subMuCore})}></CategoryCard>

      </div>
    </div>
  );
};

export default Members;
