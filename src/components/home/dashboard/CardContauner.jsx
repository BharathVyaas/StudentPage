import { Typography } from "@mui/material";

const MyCard = () => {
  return (
    <>
      <div className="max-w-full min-w-full px-6 py-2 mb-4">
        <div className="flex items-center mb-1">
          <span className="relative flex items-center h-[.60rem] w-[.60rem] mr-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#ed22249f] opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-[.60rem] w-[.60rem] bg-[#ed22249f]"></span>
          </span>

          <Typography variant="body2" fontWeight="bold">
            This is a test website
          </Typography>
        </div>
        <Typography variant="body2" className="text-gray-600 line-clamp-4 mb-4">
          This is some placeholder text that fills in for the gap. This is some
          placeholder text that fills in for the gap. This is some placeholder
          text that fills in for the gap. This is some placeholder text that
          fills in for the gap.
        </Typography>

        <div className="flex justify-between mt-4 px-2">
          <p className="text-[.64rem] font-semibold">2000-02-12</p>
          <p className="text-[.64rem] font-semibold underline">jake chan</p>
          <p className="text-[.64rem] font-semibold underline">team viewr</p>
          <p className="text-[.64rem] text-blue-500 font-bold underline">
            show more
          </p>
        </div>
      </div>

      <div className="max-w-full min-w-full px-6 py-2">
        <div className="flex items-center mb-1">
          <span className="relative flex items-center h-[.60rem] w-[.60rem] mr-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#22ed2c9f] opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-[.60rem] w-[.60rem] bg-[#22ed2c9f]"></span>
          </span>

          <Typography variant="body2" fontWeight="bold">
            This is a test website
          </Typography>
        </div>
        <Typography
          variant="body2"
          className="text-gray-600 line-clamp-3 mb-4 px-2"
        >
          This is some placeholder text that fills in for the gap. This is some
          text that fills in for the gap. This is some placeholder text that
          fills in for the gap.
        </Typography>

        <div className="flex justify-between mt-4 px-2">
          <p className="text-[.64rem] font-semibold">2000-02-12</p>
          <p className="text-[.64rem] font-semibold underline">jake chan</p>
          <p className="text-[.64rem] font-semibold underline">team viewr</p>
          <p className="text-[.64rem] text-blue-500 font-bold underline">
            show more
          </p>
        </div>
      </div>
    </>
  );
};

export default MyCard;
