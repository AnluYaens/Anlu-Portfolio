import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProjectsGrid from "./components/projects-grid";
import BentoGrid from "./components/bento-grid";
import ContactSection from "./components/contact-section";

function App() {
  // State to store the project list
  const [projects, setProjects] = useState([]);
  // useEffect: Runs once when the page loads
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
    <div
      id="top"
      className="min-h-screen w-full bg-black text-white flex flex-col relative font-sans"
    >
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 relative z-10 px-6">
        <Hero />
        <BentoGrid />
        <ProjectsGrid projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
