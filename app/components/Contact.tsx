const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 ">Contact Us</h2>
        <form className="mt-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows={4} 
            required 
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;