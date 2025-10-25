import React from "react";
import { useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import RecommendedCoursesInfo from "./RecommendedCoursesInfo.js";
import Navigate from "../Navigate/Navigate.jsx";
import Footer from "../Footer/Footer.jsx";

const Courses = () => {
  const location = useLocation();
  const result = location.state?.result;


  return (
    <div className="main">
      <Navigate />
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Recommended Courses
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Courses based on your missing skills
        </p>

        {/* Missing Skills */}
        <div className="bg-white shadow rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Missing Skills</h2>
          <div className="flex flex-wrap gap-3">
            {result.skillMatch.missing.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-base rounded-lg border border-red-300 text-red-600 bg-red-50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="flex items-center text-3xl font-semibold mb-5">
            <span className="mr-2">📖</span> Recommended Courses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-3">Missing Skill</th>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Course Link</th>
                  <th className="p-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {RecommendedCoursesInfo.filter(course =>
                  result?.skillMatch?.missing.includes(course.skill)
                ).map((course, idx) => (
                  <tr
                    key={idx}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">
                      <span className="px-3 py-1.5 text-base rounded-md bg-blue-50 text-blue-600 border border-blue-200">
                        {course.skill}
                      </span>
                    </td>
                    <td className="p-3">{course.name}</td>
                    <td className="p-3">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-base border rounded-lg hover:bg-gray-100 w-fit"
                      >
                        <ExternalLink size={18} /> View Course
                      </a>
                    </td>
                    <td className="p-3">
                      {course.price === "FREE" ? (
                        <span className="text-green-600 font-semibold bg-green-50 px-3 py-1.5 rounded-md">
                          FREE
                        </span>
                      ) : (
                        <span className="text-gray-800 font-medium">
                          {course.price}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
