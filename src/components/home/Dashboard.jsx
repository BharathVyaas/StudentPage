import { useEffect, useState } from "react";
import Calender from "./dashboard/Calender";
import Steps from "./dashboard/Steps";
import { connect } from "react-redux";
import { getMcqandProgramsDispatch } from "../../redux/actions/dashboard";
import { addDays } from "date-fns";

function DashboardComponent({ userState, getMcqandPrograms }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // simply adding selectedDate.toISOString().split("T")[0] returning day - 1
    getMcqandPrograms({
      studentId: userState.userId,
      date: addDays(selectedDate, 1).toISOString().split("T")[0],
    });
  }, [selectedDate, getMcqandPrograms]);

  return (
    <div style={{ marginInlineStart: "280px" }}>
      <div className="pt-4 ps-4 gap-x-4 gap-y-4">
        <div className="w-full  xl:w-[38%] 2xl:w-[24%] p-4 py-[1.36rem]">
          <Calender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        <div className="w-full">
          <Steps />
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userState: state.user,
});

const mapDispatch = {
  getMcqandPrograms: getMcqandProgramsDispatch,
};

const Dashboard = connect(mapState, mapDispatch)(DashboardComponent);

export default Dashboard;
