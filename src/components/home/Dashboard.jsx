import { useEffect, useState } from "react";
import Calender from "./dashboard/Calender";
import Steps from "./dashboard/Steps";
import { connect } from "react-redux";
import { getMcqandProgramsDispatch } from "../../redux/actions/dashboard";
import { addDays } from "date-fns";
import usePageVisibility from "../../hooks/dashboard/usePageVisibility";

let first = 1;
const getFirstData = (selectedDate) => {
  first += 1;
  return selectedDate.toISOString().split("T")[0];
};

function DashboardComponent({ userState, getMcqandPrograms }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatchGetMcqandPrograms = () => {
    // Dates are not accruate in the calander.
    // simply adding selectedDate.toISOString().split("T")[0] returning day - 1
    if (userState.userId && selectedDate)
      getMcqandPrograms({
        studentId: userState.userId,
        date:
          first === 1
            ? getFirstData(selectedDate)
            : addDays(selectedDate, 1).toISOString().split("T")[0],
      });
  };

  const onVisible = () => {
    dispatchGetMcqandPrograms();
  };

  // update data if user navigated back to page after click on different tab
  usePageVisibility({ onVisible });

  useEffect(() => {
    dispatchGetMcqandPrograms();
  }, [selectedDate, getMcqandPrograms]);

  return (
    <>
      <div className="pt-2 ps-4 gap-x-4 gap-y-4 flex">
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
    </>
  );
}

const mapState = (state) => ({
  userState: state.user,
  macqandprogramState: state.mcqsandprograms.state,
});

const mapDispatch = {
  getMcqandPrograms: getMcqandProgramsDispatch,
};

const Dashboard = connect(mapState, mapDispatch)(DashboardComponent);

export default Dashboard;
