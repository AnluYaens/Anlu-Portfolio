import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  // 1. State to store the project list
  const [projects, setProjects] = useState([]);

  // 2. useEffect: Runs once when the page loads
  useEffect(() => {
    // Fetch data from YOUR Backend (Python)
    fetch("http://127.0.0.1:8000/projects/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Store data in 'projects' state
      })
      .catch((error) => console.error("Error connecting to backend:", error));
  }, []);

  return (
    // CHANGE 1: Added 'flex flex-col' to create a vertical layout structure
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* CHANGE 2: Added 'flex-grow' to push the Footer to the bottom */}
      <main className="p-8 flex-grow">
        {/*Header*/}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            My portfolio
          </h1>
          <p className="text-gray-600">
            Full Stack Developer (FastAPI & React)
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map through project list and create a card for each */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>

              {/* Link Buttons */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <a
                  href={project.link_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                >
                  View GitHub Code
                </a>
                {project.link_demo && (
                  <a
                    href={project.link_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium text-sm"
                  >
                    View Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message if no projects found */}
        {projects.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-gray-500 text-lg">Loading projects...</p>
            <p className="text-sm text-gray-400">
              (Make sure the backend is running on port 800)
            </p>
          </div>
        )}
      </main>

      {/* CHANGE 3: Added Footer component at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
