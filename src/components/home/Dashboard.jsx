import Calender from "./dashboard/Calender";
import Steps from "./dashboard/Steps";

function Dashboard() {
  return (
    <div style={{ marginInlineStart: "280px" }}>
      <div className="pt-4 ps-4 gap-x-4 gap-y-4">
        <div className="shadow h-full shadow-blue-200 rounded w-full  xl:w-[38%] 2xl:w-[24%] p-4 py-[1.36rem]">
          <Calender />
        </div>

        <div className="shadow shadow-blue-200 rounded w-full">
          <Steps />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
