import Calender from "./dashboard/Calender";
import CardContainer from "./dashboard/CardContainer";
import Chart from "./dashboard/Chart";
import Steps from "./dashboard/Steps";
import UserCard from "./dashboard/UserCard";
import Profile from "./dashboard/usercard/Profile";

function Dashboard() {
  return (
    <div style={{ marginInlineStart: "280px" }}>
      <div className="pt-4 ps-4 flex flex-wrap gap-x-4 gap-y-4">
        <div className="w-full xl:w-[60%] 2xl:w-1/2 flex flex-col gap-y-4">
          <div className="shadow block shadow-blue-200 text-[#0f0f0f] 2xl:hidden">
            <Profile />
          </div>
          <div className="shadow shadow-blue-200 rounded w-full">
            <Chart />
          </div>

          <div className="shadow shadow-blue-200 rounded w-full">
            <Steps />
          </div>
        </div>

        <div className="relative shadow shadow-blue-100 rounded w-full xl:w-[38%] 2xl:w-[24%]">
          <div className="h-full absolute min-w-full bg-gradient-to-b from-blue-800 via-blue-800 to-white opacity-[.05] top-0 left-0 -z-10">
            <div className="h-full min-w-full bg-gradient-to-b from-white via-white to-white opacity-20">
              <div className="h-full min-w-full bg-gradient-to-t from-blue-800 via-white to-blue-800 opacity-70"></div>
            </div>
          </div>

          <div className="shadow h-full shadow-blue-200 rounded w-full">
            <div className="p-4 py-[1.36rem]">
              <Calender />
            </div>
            <div>
              <CardContainer />
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-[23%]">
          <div className="text-[#0f0f0f] w-full flex-wrap justify-between rounded space-y-4">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
