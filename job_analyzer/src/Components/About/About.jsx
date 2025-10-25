import {
  ArrowLeft,
  BarChart3,
  Users,
  Target,
  Brain,
  Code,
  Database,
  FileText,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Upload,
  Search,
  Award,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import Navigate from '../Navigate/Navigate';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";

const About = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigate />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="mb-6 inline-block bg-blue-100 text-blue-800 border border-blue-200 text-lg px-4 py-2 rounded">
            For Students & Fresh Graduates
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Job Skill Analyzer
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            Bridge Your Skill Gap, Land Your Dream Job
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Helping students and fresh graduates identify skill gaps, match job requirements,
            and get personalized learning recommendations to kickstart their careers.
          </p>
          <div className="flex justify-center">
            <img
              src="/public/analytical-skills.avif"
              alt="Students analyzing skills"
              className="w-96 h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge Every Student Faces</h2>
            <p className="text-lg text-gray-600 mb-6">
              Many students and fresh graduates struggle to understand what skills employers actually want.
              They spend hours crafting resumes but don't know if they match job requirements.
            </p>
            <div className="space-y-4 mb-8">
              {['Skill Gap Confusion: Not knowing which skills are missing for specific roles',
                'Resume Mismatch: Resumes that don\'t align with job descriptions',
                'Learning Direction: Wasting time learning irrelevant skills'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>{text.split(':')[0]}:</strong>{text.split(':')[1]}</p>
                </div>
              ))}
            </div>
            <span className="inline-block mb-4 bg-red-100 text-red-700 px-3 py-1 rounded">
              The Problem is Real
            </span>
            <p className="italic text-gray-600">
              "I applied to 200+ jobs but got only 3 interviews. I didn't know what skills I was missing."
            </p>
          </div>
          <div className="border-2 border-red-200 bg-red-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <img src="public/confused.webp" alt="Confused student" className="w-64 h-48 mx-auto" />
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">📊 Statistics Show:</h4>
                <p className="text-sm text-gray-600">73% of fresh graduates feel unprepared for the job market</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">⏰ Time Wasted:</h4>
                <p className="text-sm text-gray-600">Average student spends 6+ months searching without proper skill alignment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Job Skill Analyzer Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our simple 3-step process helps you understand exactly what skills you need and where to learn them – completely free!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <Upload className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Step 1: Upload & Paste</h3>
              <p className="text-gray-600">Upload your resume or paste job details to analyze required skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <Search className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Step 2: AI Analysis</h3>
              <p className="text-gray-600">Our AI compares your profile with job requirements and highlights missing skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <Lightbulb className="h-10 w-10 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Step 3: Learn & Improve</h3>
              <p className="text-gray-600">Get personalized recommendations for courses and skill-building.</p>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p>Matched Skills</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p>Missing Skills</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p>Additional Skills</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <p>Free Learning Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built With Modern Technology</h2>
          <p className="text-lg text-gray-600 mb-12">Our platform uses modern technologies for fast and reliable skill analysis.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg">
              <Code className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Frontend</h3>
              <p>React.js, Tailwind CSS, Responsive Design</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg">
              <Brain className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Backend</h3>
              <p>Python, AI Processing, Skill Matching</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg">
              <Database className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Database</h3>
              <p>MongoDB, Secure Data Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Project Section */}
      <section className="py-20 bg-gray-50 text-center">
        <span className="mb-4 inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Student Project</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Built by Students, for Students</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">Job Skill Analyzer is a minor project developed by a passionate 3-member student team who faced similar job challenges.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <Users className="h-10 w-10 text-blue-500 mx-auto mb-4" />
            <p>Frontend Developer - React & UI/UX</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Users className="h-10 w-10 text-green-500 mx-auto mb-4" />
            <p>Backend Developer - Python & AI</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Users className="h-10 w-10 text-purple-500 mx-auto mb-4" />
            <p>Database Developer - MongoDB</p>
          </div>
        </div>
        <p className="mt-8 italic text-gray-600 max-w-xl mx-auto">
          “As final year students, we built this platform to help others identify skill gaps. Feedback from students shaped its features.”
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Bridge Your Skill Gap?</h2>
        <p className="text-lg mb-8">Join thousands of students improving their careers with Job Skill Analyzer.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 rounded font-semibold hover:bg-gray-200"><Link to="/analyzer">Start Your Analysis Now</Link>
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-blue-600">Learn More</button>
        </div>
        <p className="mt-4 text-sm opacity-80">100% Free Forever • Trusted by Students</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
