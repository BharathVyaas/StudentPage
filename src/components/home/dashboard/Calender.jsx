import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      onChange={setValue}
      value={value}
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
