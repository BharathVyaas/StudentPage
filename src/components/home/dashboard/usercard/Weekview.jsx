import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { addDays, format } from "date-fns";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const getDates = ({ minDate }) => {
  const updatedDates = [];
  for (let i = 0; i < 4; i++) {
    updatedDates.push(addDays(minDate, i));
  }
  return updatedDates;
};

const getFormattedDate = (_date) => {
  const day = _date.toLocaleString("en-us", { weekday: "short" });
  const date = _date.getDate();
  //const month = _date.toLocaleString("en-us", { month: "short" });

  return (
    <div className="flex flex-col items-center max-h-full overflow-hidden">
      <p className="text-xs font-light">{day}</p>
      <p className="text-lg font-bold">{date}</p>
    </div>
  );
};

const WeekView = () => {
  const [minDate, setMinDate] = useState(new Date());
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(getDates({ minDate }));
  }, [minDate]);

  const handlePrevDay = () => {
    setMinDate((prevDate) => addDays(prevDate, -1));
  };

  const handleNextDay = () => {
    setMinDate((prevDate) => addDays(prevDate, 1));
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-1">
        <button
          onClick={handlePrevDay}
          className="grid place-content-center rounded-full w-10 h-10"
        >
          <ArrowBackIosIcon
            sx={{ marginInlineStart: "10px" }}
            style={{ color: "#000000" }}
          />
        </button>
        <div className="flex space-x-2">
          <p className="font-semibold">{format(minDate, "EEEE, MMM")}</p>
          <p className="text-gray-500">
            - {format(addDays(minDate, 6), "EEEE, MMM")}
          </p>
        </div>
        <button
          onClick={handleNextDay}
          className="flex items-center justify-center rounded-full w-10 h-10"
        >
          <ArrowForwardIosIcon style={{ color: "#000000" }} />
        </button>
      </div>

      {/* Dates */}
      <div className="flex flex-grow justify-between mt-2">
        {dates.map((date, index) => (
          <motion.div
            key={index}
            className="relative rounded-md p-2 w-[4rem] h-full text-center cursor-pointer shadow hover:shadow-lg hover:shadow-[#082F4550] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="min-h-full absolute min-w-full bg-gradient-to-b from-blue-800 via-white to-blue-800 opacity-[.05] top-0 left-0 -z-10">
              <div className="min-h-full min-w-full bg-gradient-to-b from-white via-white to-blue-800 opacity-100">
                <div className="min-h-full min-w-full bg-gradient-to-t from-white via-white to-white opacity-70"></div>
              </div>
            </div>

            {getFormattedDate(date)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
