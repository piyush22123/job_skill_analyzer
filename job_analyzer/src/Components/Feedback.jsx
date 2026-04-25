import React from "react";

const Feedback = ({ feedback = [] }) => {
  return (
    <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border border-blue-100">
      
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        💡 <span>AI Feedback</span>
      </h3>

      {feedback.length > 0 ? (
        <ul className="space-y-3">
          {feedback.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-green-500 text-lg mt-1">✔</span>
              <span className="text-gray-700 text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500 text-sm italic">
          No feedback available
        </div>
      )}
    </div>
  );
};

export default Feedback;