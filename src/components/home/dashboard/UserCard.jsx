import Discussion from "./usercard/Discussion";
import Profile from "./usercard/Profile";
import TestResult from "./usercard/TestResult";
import WeekView from "./usercard/Weekview";

function UserCard() {
  return (
    <>
      <div className="shadow shadow-blue-200 text-[#0f0f0f]">
        <Profile />
      </div>

      <div className="shadow shadow-blue-200 text-[#0f0f0f] p-4">
        <WeekView />

        <TestResult />
      </div>

      <div className="py-2">
        <Discussion />
      </div>
    </>
  );
}

export default UserCard;
