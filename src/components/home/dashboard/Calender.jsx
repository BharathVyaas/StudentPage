import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      tileClassName={({ date, view }) =>
        (view === "month" && date.getDay() === 0) || date.getDay() === 6
          ? "weekend-day"
          : null
      }
      className="custom-calendar"
    />
  );
};

export default CustomCalendar;
