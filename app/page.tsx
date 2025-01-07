"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


const Home = () => {
  return (
    <div className="bg-gray-300 min-h-screen" >
      
      <main className="container mx-auto p-4 max-w-6xl  ">
   
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;