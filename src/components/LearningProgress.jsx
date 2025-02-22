import React from 'react';

function LearningProgress() {
  const progressData = [
    { course: 'Digital Marketing - Unit 3', progress: 80 },
    { course: 'Financial Analyst Course - Unit 1', progress: 60 },
    { course: 'Financial Analyst Course - Unit 2', progress: 40 },
  ];

  return (
    <div className="bg-white shadow p-4 absolute w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4 top-[550px] right-2 mx-2 overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>

      <div className="grid grid-cols-1 gap-4">
        {progressData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 items-left justify-between">
            <span className="text-gray-400 text-sm">{item.course}</span>
            <div className="w-full bg-gray-200 h-3 flex">
              <div
                className="bg-black h-3"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <div>
              <span className="font-medium tex-sm">{item.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningProgress;