import { connect } from "react-redux";
import userplaceholder from "../../../assets/userplaceholder.png";

function ProfileComponent({ userName }) {
  return (
    <div className="m-4 flex items-center space-x-4 text-[#070707]">
      <img
        src={userplaceholder}
        width={50}
        height={50}
        className="rounded-full border-gray-400 border-2"
        alt="user"
      />

      <div>
        <p className="font-bold">{userName}</p>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
});

const mapDispatch = {};

const Profile = connect(mapState, mapDispatch)(ProfileComponent);

export default Profile;
