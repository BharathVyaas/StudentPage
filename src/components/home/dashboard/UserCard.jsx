import Discussion from "./usercard/Discussion";
import Profile from "./usercard/Profile";
import TestResult from "./usercard/TestResult";
import WeekView from "./usercard/Weekview";

function UserCard() {
  return (
    <>
      <div className="shadow shadow-blue-200 text-[#0f0f0f] hidden 2xl:block">
        <Profile />
      </div>

      <div className="shadow xl:w-full w-full shadow-blue-200 text-[#0f0f0f] p-4">
        <div className="max-h-[10rem]">
          <WeekView />
        </div>

        <TestResult />
      </div>

      <div className="py-2 xl:w-full w-full">
        <Discussion />
      </div>
    </>
  );
}

export default UserCard;
