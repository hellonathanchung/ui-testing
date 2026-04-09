import type { UserProfileCard } from ".";
import Avatar from "./Avatar";

export default function UserProfileCard(props: UserProfileCard) {
  const { name, avatarURL, bio, isOnline, role } = props;

  return (
    <div>
      <div>{name}</div>
      <div>
        <Avatar avatarURL={avatarURL} />
      </div>
      <div>Bio: {bio ? bio : "No bio provided"}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        Status:
        {isOnline ? "Online" : "Offline"}
        <div
          style={{
            borderRadius: "100%",
            height: 10,
            width: 10,
            backgroundColor: isOnline ? "green" : "gray",
          }}
        ></div>
      </div>
      <div>{role}</div>
    </div>
  );
}
