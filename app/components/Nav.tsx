"use client";
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="assets/download.jpeg" alt="Logo" className="h-8 mr-2"  /> 
          <h1 className="text-2xl font-bold"> Zayan Portfolio</h1>
        </div>
        <nav className="hidden md:flex">
          <Link href="/" className="mx-4 hover:text-gray-400">Home</Link>
          <Link href="/about" className="mx-4 hover:text-gray-400">About</Link>
          <Link href="/projects" className="mx-4 hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="mx-4 hover:text-gray-400">Contact</Link>
        </nav>
        
       
        </div>
      
    </header>
  );
};

export default Header;