import { useEffect, useState } from "react";
import { getMembers } from "../api/api";
import MemberCard from "../components/MemberCard";
import AddAlbumCard from "../components/AddAlbumCard";
import ApiOffline from "../components/ApiOffline";
import AlbumsList from "../components/AlbumsList";

const Members = () => {
  // NOT - useState() / YES - useState([]) -> Initialize
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let members = await getMembers();
      if (members) {
        setMembers(members);
      }
    }

    fetchAPI();
  }, []);

  return (
    <div className="membersPage">
      <ApiOffline></ApiOffline>
      <div className="membersContainer">
        {members.map((member) => {
          return <MemberCard key={member._id} member={member} />;
        })}
      </div>
      <AddAlbumCard />
      <AlbumsList></AlbumsList>
    </div>
  );
};

export default Members;
