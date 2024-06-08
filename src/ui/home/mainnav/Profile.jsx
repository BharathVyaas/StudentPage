import userplaceholder from "../../../assets/userplaceholder.png";

function Profile() {
  return (
    <div className="m-4 mb-0 flex items-center space-x-4 text-[#070707]">
      <img
        src={userplaceholder}
        width={50}
        height={50}
        className="rounded-full border-gray-400 border-2"
      />

      <div>
        <p className="font-bold">Mohan rao</p>
        <b className="font-semibold lowercase">Me and my stuff</b>
      </div>
    </div>
  );
}

export default Profile;
