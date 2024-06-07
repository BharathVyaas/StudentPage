import React from "react";

const Results = ({ value }) => {
  return (
    <div className="mt-2 h-12 relative">
      <div
        className="absolute top-0 left-0 h-full bg-dashed-pattern"
        style={{ width: `${value}%` }}
      ></div>
      <div className="w-full h-full bg-dashed-pattern"></div>
    </div>
  );
};

function TestResult() {
  return (
    <div className="overflow-y-auto mt-2">
      <article>
        <div className="w-full p-2 px-4 pb-0">
          <b className="w-full text-sm">This Scary test</b>

          <Results value={80} />
        </div>
      </article>
    </div>
  );
}

export default TestResult;
