import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import AnalyzePage from "./Components/AnalyzerPage/AnalyzePage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import Courses from "./Components/Courses/Courses";
import ProtectedRoute from "./Components/ProtectedRoute"; // ← new
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/analyzer"
          element={
            <ProtectedRoute>
              <AnalyzePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        {/* Public */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
