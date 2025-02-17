const MemberCard = ({ member }) => {
  if (member.album2 == null) {
    return (
      <div>
        <div className="memberName">{member.name}</div>
        <div className="memberAlbum1">{member.album1}</div>
      </div>
    );
  } else {
    return (
      <div className="member">
        <div className="memberName">
          {member.name}
          <div className="memberNickname">{member.nickname}</div>
        </div>

        <a
          className="memberAlbum"
          href={"https://open.spotify.com/search/" + member.album1}
          target="_blank"
        >
          {member.album1}
        </a>
        <a
          className="memberAlbum"
          href={"https://open.spotify.com/search/" + member.album2}
          target="_blank"
        >
          {member.album2}
        </a>
      </div>
    );
  }
};

export default MemberCard;
