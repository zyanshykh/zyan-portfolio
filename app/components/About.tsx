

const About = () => {
    return (
      <section id="about" className="bg-gray-100 p-8">
       <div className="container mx-auto">
  <h2 className="text-3xl font-bold text-center ">About Me</h2>
  <p className="mt-4 text-gray-700 text-center">
    I am a passionate web developer with experience in building dynamic and responsive web applications. 
    I love to create user-friendly interfaces and work with modern technologies.
  </p>
  
  <div className="mt-6 text-center">
  <h3 className="text-2xl font-semibold">Skills</h3>
  <div className="mt-2 grid grid-cols-2 gap-4 text-gray-600">
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML Icon" className="mr-2" />
      <span className="text-lg">HTML</span>
    </div>
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Icon"  className="mr-2" />
      <span className="text-lg">CSS</span>
    </div>
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="JavaScript Icon"  className="mr-2" />
      <span className="text-lg">TypeScript</span>
    </div>
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Icon" className="mr-2" />
      <span className="text-lg">React</span>
    </div>
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/nextjs.png" alt="Next.js Icon" className="mr-2" />
      <span className="text-lg">Next.js</span>
    </div>
    <div className="flex items-center">
      <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js Icon"  className="mr-2" />
      <span className="text-lg">Node.js</span>
    </div>
    
   
  </div>
</div>

  <div className="mt-6 text-center">
    <h3 className="text-2xl font-semibold">Hobbies</h3>
    <p className="mt-2 text-gray-600">
      In my free time, I enjoy exploring new technologies, contributing to open-source projects, and 
      hiking in nature. I believe that staying curious and active helps me grow both personally and professionally.
    </p>
  </div>

  <div className="mt-6 text-center">
    <h3 className="text-2xl font-semibold">Let`s Connect!</h3>
    <p className="mt-2 text-gray-600">
      I am always open to discussing new projects, collaborations, or just connecting with fellow developers. 
      Feel free to reach out!
    </p>
    <a href="mailto:your-email@example.com" className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
      Contact Me
    </a>
  </div>
</div>
      </section>
    );
  };
  
  export default About;