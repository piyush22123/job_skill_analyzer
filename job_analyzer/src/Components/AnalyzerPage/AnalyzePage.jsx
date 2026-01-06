import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigate from "../Navigate/Navigate";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FileText, Upload, House } from "lucide-react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./AnalyzePage.css";
import Footer from "../Footer/Footer";


const AnalyzePage = () => {
  const [extractedText, setExtractedText] = useState("");
  const [resume, setResume] = useState(null);
  const [result, setResult] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Dropzone config (only store file here, don’t upload yet)
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setResume(acceptedFiles[0]);
    },
  });

  // Handle analyze button click
  const handleAnalyze = async () => {
    if (!resume) {
      alert("Please upload a resume first.");
      return;
    }
    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    try {
      setLoading(true);
      setError("");
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Backend dummy fields:
      // { resumeText, jobDescription, skillMatch: { matching[], missing[] }, score }
      setExtractedText(res.data.resumeText || "");
      setResult(res.data || null);
      console.log("frontend data", res.data);
    } catch (err) {
      console.error("Error analyzing resume:", err);
      setError("Failed to analyze. Is the backend running on :3000?");
    } finally {
      setLoading(false);
    }
  };

  // Dummy data for static UI demonstration
  const matchScore = result?.score ?? 70;

  const chartData = {
    labels: ["Matching Skills", "Missing Skills"],
    datasets: [
      {
        data: [matchScore, 100 - matchScore],
        backgroundColor: ["#10d106ff", "#fc1616ff"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="main">
      <Navigate />
      <div className="app-container">
        <div className="app-content">
          <div className="grid-container">
            <div className="left-section">
              <div className="card mb-2">
                <h2 className="card-title"><Upload />Upload Resume</h2>
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  <div className="dropzone-content">
                    <Upload className="icon" />
                    <h3>Click to upload resume</h3>
                    {resume && <p className="file-name">{resume.name}</p>}
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title"><FileText />Job Description</h2>
                <textarea
                  className="textarea"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>

              <button
                className="submit-btn"
                onClick={handleAnalyze}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Skills"}
              </button>
            </div>


            {/* right section when no data */}
            {!result && (<div className="right-section">
              <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-8 w-8 text-blue-600"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                Ready to Analyze
              </h1>
              <p>Upload your resume and paste a job description to get started with the analysis.</p>
            </div>
            )}

            {result && (<div className="right-section-1">
              <div className="card">
                <h2 className="card-title">Skill Match Analysis</h2>
                <div className="pie-chart">
                  <Pie data={chartData} options={chartOptions} />
                </div>

                <div className="score-row">
                  <span className="score-label">Overall Match:</span>
                  <span className="score-value">{matchScore}%</span>
                </div>

                <div className="match-details">

                  {/* Matching Skills */}
                  <div className="matching-skills-card" id="matching-skills">
                    <h3 className="matching-skills-title matching">
                      <span className="icon">✔</span> Matching Skills (
                      {result?.skillMatch?.matching?.length ?? 0})
                    </h3>
                    <div className="skills-list">
                      {(result?.skillMatch?.matching ?? []).map((skill, i) => (
                        <span key={i} className="skill-badge matching">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div className="matching-skills-card">
                    <h3 className="matching-skills-title missing">
                      <span className="icon">✖</span> Missing Skills (
                      {result?.skillMatch?.missing?.length ?? 0})
                    </h3>
                    <div className="skills-list">
                      {(result?.skillMatch?.missing ?? []).map((skill, i) => (
                        <span key={i} className="skill-badge missing">{skill}</span>
                      ))}
                    </div>
                    <div className="learn">
                      <Link
                        to="/courses"
                        state={{ result }}
                        className="find-link"
                      >
                        Find Learning Resources
                      </Link>
                    </div>
                  </div>


                </div>
              </div>


            </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default AnalyzePage;
