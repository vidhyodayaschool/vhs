import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close menu on section click
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to handle initial scroll or hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setActiveSection(hash);
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Call on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="font-inter antialiased text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <img src="https://placehold.co/60x60/000000/FFFFFF?text=VHS" alt="Vidhyodaya High School Logo" className="h-12 w-12 rounded-full mr-3" />
            <span className="text-2xl font-bold text-indigo-700">Vidhyodaya High School</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0`}>
            {['home', 'about', 'academics', 'admissions', 'facilities', 'faculty', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={`block px-4 py-2 md:p-0 text-lg font-medium transition duration-300 ease-in-out ${
                    activeSection === section ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-600 hover:text-indigo-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Sections */}
      <main className="pt-20"> {/* Adjust padding-top to account for fixed header */}
        <HomeSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionsSection />
        <FacilitiesSection />
        <FacultySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Vidhyodaya High School. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Section Component
const HomeSection = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/667EEA/FFFFFF/png?text=Welcome+to+Vidhyodaya+High+School')" }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative z-10 text-center text-white p-8 rounded-lg max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
        Vidhyodaya High School
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up delay-200">
        Nurturing Minds, Building Futures. Imparting Quality Education from Preprimary to 10th Grade.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#admissions" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Admissions Open
        </a>
        <a href="#about" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// About Us Section Component
const AboutSection = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">About Vidhyodaya High School</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
          <img src="https://placehold.co/600x400/A78BFA/FFFFFF/png?text=School+Building" alt="School Building" className="rounded-xl shadow-lg w-full h-auto object-cover" />
        </div>
        <div className="md:order-1">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Established in 2017, Vidhyodaya High School has been a beacon of quality education in Sai Krishna Colony, Budvel, Rajendranagar. Our commitment is to provide a holistic and nurturing environment where every child can thrive academically, socially, and emotionally.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are dedicated to imparting quality education from Preprimary to 10th Grade, fostering a love for learning, critical thinking, and strong values. Our curriculum is designed to challenge students while providing them with the support they need to succeed in an ever-evolving world.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <p className="text-xl font-semibold text-indigo-700 mb-2">Principal: Dr. Indira Reddy</p>
            <p className="text-md text-gray-600 mb-4">
              "At Vidhyodaya, we believe in empowering our students to become confident, compassionate, and responsible global citizens. We strive to create an inclusive community where every voice is heard and every talent is celebrated."
            </p>
            <p className="text-xl font-semibold text-indigo-700 mb-2">Honorary Director: Mrs. Sulochana Rajagopal</p>
            <p className="text-md text-gray-600">
              "Our vision is to cultivate an environment of excellence, innovation, and integrity. We are committed to fostering intellectual curiosity and a lifelong passion for knowledge in our students."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Academics Section Component
const AcademicsSection = () => (
  <section id="academics" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Academic Programs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Preprimary */}
        <div className="bg-indigo-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Preprimary (Nursery, LKG, UKG)</h3>
          <p className="text-gray-700 mb-4">
            Our preprimary program focuses on foundational learning through play-based activities. We foster early literacy, numeracy, and social-emotional development in a joyful and stimulating environment.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Interactive learning</li>
            <li>Creative expression</li>
            <li>Motor skill development</li>
          </ul>
        </div>

        {/* Primary */}
        <div className="bg-green-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Primary (Grades 1-5)</h3>
          <p className="text-gray-700 mb-4">
            The primary curriculum builds strong academic fundamentals in subjects like English, Mathematics, Science, and Social Studies. We encourage inquiry-based learning and critical thinking.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Core subject mastery</li>
            <li>Project-based learning</li>
            <li>Value education</li>
          </ul>
        </div>

        {/* Middle School */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Middle School (Grades 6-8)</h3>
          <p className="text-gray-700 mb-4">
            Middle school focuses on deepening conceptual understanding and preparing students for higher grades. Specialized subjects and extracurricular activities are introduced to broaden horizons.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Subject specialization</li>
            <li>Analytical skills</li>
            <li>Leadership development</li>
          </ul>
        </div>

        {/* Secondary */}
        <div className="bg-red-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">Secondary (Grades 9-10)</h3>
          <p className="text-gray-700 mb-4">
            Our secondary program is designed to prepare students for board examinations and future academic pursuits. Emphasis is placed on comprehensive understanding and application of knowledge.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Board exam preparation</li>
            <li>Career guidance</li>
            <li>Advanced problem-solving</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl text-gray-700 mb-4">
          Our teaching methodology emphasizes a blend of traditional values with modern pedagogical approaches, ensuring a well-rounded educational experience.
        </p>
        <a href="#contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Explore Curriculum Details
        </a>
      </div>
    </div>
  </section>
);

// Admissions Section Component
const AdmissionsSection = () => (
  <section id="admissions" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Admissions</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Admission Process */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold text-indigo-700 mb-6">Admission Process</h3>
          <ol className="list-decimal list-outside space-y-4 text-lg text-gray-700 pl-5">
            <li>
              <strong className="text-indigo-600">Enquiry & Registration:</strong> Fill out the online enquiry form or visit our school to collect the admission kit.
            </li>
            <li>
              <strong className="text-indigo-600">Interaction/Assessment:</strong> A brief interaction with the student and parents, and an assessment for the child (for certain grades).
            </li>
            <li>
              <strong className="text-indigo-600">Application Submission:</strong> Submit the completed application form along with all required documents.
            </li>
            <li>
              <strong className="text-indigo-600">Admission Confirmation:</strong> Upon successful completion of the process, admission will be confirmed.
            </li>
            <li>
              <strong className="text-indigo-600">Fee Payment:</strong> Complete the fee payment as per the school's fee structure.
            </li>
          </ol>
          <p className="mt-8 text-lg text-gray-700">
            For detailed information on eligibility criteria and required documents, please refer to our admission brochure or contact the admissions office.
          </p>
        </div>

        {/* Important Dates & Enquiry Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold text-indigo-700 mb-6">Important Dates & Enquiry</h3>

          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Key Dates for Academic Year 2025-26</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Online Application Opens:</strong> September 1, 2025</li>
              <li><strong>Last Date for Applications:</strong> Feb 15, 2026</li>
              <li><strong>Admission Assessments:</strong> March 10-20, 2026</li>
              <li><strong>First List Announcement:</strong> March 25, 2026</li>
            </ul>
          </div>

          <form className="space-y-4">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Admission Enquiry Form</h4>
            <div>
              <label htmlFor="studentName" className="block text-gray-700 text-sm font-bold mb-2">Student's Name:</label>
              <input type="text" id="studentName" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="parentEmail" className="block text-gray-700 text-sm font-bold mb-2">Parent's Email:</label>
              <input type="email" id="parentEmail" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="email@example.com" />
            </div>
            <div>
              <label htmlFor="parentPhone" className="block text-gray-700 text-sm font-bold mb-2">Parent's Phone:</label>
              <input type="tel" id="parentPhone" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+91 XXXXXXXXXX" />
            </div>
            <div>
              <label htmlFor="gradeApplying" className="block text-gray-700 text-sm font-bold mb-2">Grade Applying For:</label>
              <select id="gradeApplying" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Grade</option>
                <option value="preprimary">Preprimary</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
                <option value="grade7">Grade 7</option>
                <option value="grade8">Grade 8</option>
                <option value="grade9">Grade 9</option>
                <option value="grade10">Grade 10</option>
              </select>
            </div>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Facilities Section Component
const FacilitiesSection = () => (
  <section id="facilities" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Facilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Smart Classrooms */}
        <div className="bg-purple-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-chalkboard-teacher text-6xl text-purple-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">Smart Classrooms</h3>
          <p className="text-gray-700">
            Modern, spacious classrooms equipped with digital learning tools and interactive whiteboards for engaging lessons.
          </p>
        </div>

        {/* Science Labs */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-flask text-6xl text-blue-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">State-of-the-Art Labs</h3>
          <p className="text-gray-700">
            Well-equipped Science, Biology, and Computers laboratories for practical learning.
          </p>
        </div>

        {/* Library */}
        <div className="bg-teal-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-book-open text-6xl text-teal-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">Expansive Library</h3>
          <p className="text-gray-700">
            A vast collection of books add digital resources to foster a love for reading and research.
          </p>
        </div>

        {/* Sports Complex */}
        <div className="bg-red-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-volleyball-ball text-6xl text-red-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-red-700 mb-3">Sports Facilities</h3>
          <p className="text-gray-700">
            Dedicated areas for various sports and a large playground.
          </p>
        </div>

        {/* Arts & Music */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-palette text-6xl text-yellow-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Arts & Music Studios</h3>
          <p className="text-gray-700">
            Creative spaces for visual arts, music, and dance, nurturing artistic talents.
          </p>
        </div>

        {/* Transportation */}
        <div className="bg-green-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
          <i className="fas fa-bus text-6xl text-green-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Safe Transportation</h3>
          <p className="text-gray-700">
            Reliable and safe transportation services covering key routes for student convenience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Faculty Section Component
const FacultySection = () => (
  <section id="faculty" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Esteemed Faculty</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Principal */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/A78BFA/FFFFFF/png?text=Dr.+Indira" alt="Dr. Indira Reddy" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-indigo-300" />
          <h3 className="text-2xl font-semibold text-indigo-700">Dr. Indira Reddy</h3>
          <p className="text-indigo-500 text-lg mb-2">Principal</p>
          <p className="text-gray-700 text-sm">
            Dr. Indira Reddy is an accomplished educationist with over two decades of experience in fostering academic excellence and holistic student development. Her vision guides Vidhyodaya High School towards new heights.
          </p>
        </div>

        {/* Honorary Director */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/667EEA/FFFFFF/png?text=Mrs.+Sulochana" alt="Mrs. Sulochana Rajagopal" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-blue-300" />
          <h3 className="text-2xl font-semibold text-blue-700">Mrs. Sulochana Rajagopal</h3>
          <p className="text-blue-500 text-lg mb-2">Honorary Director</p>
          <p className="text-gray-700 text-sm">
            Mrs. Sulochana Rajagopal brings a wealth of knowledge and strategic guidance to Vidhyodaya High School. Her dedication ensures the school's continued growth and adherence to its founding principles.
          </p>
        </div>

        {/* Placeholder Faculty 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/8B5CF6/FFFFFF/png?text=Teacher+1" alt="Faculty Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-purple-300" />
          <h3 className="text-2xl font-semibold text-purple-700">Mrs Aswini Bashuthkar with Mrs Puja</h3>
          <p className="text-purple-500 text-lg mb-2">English Department</p>
          <p className="text-gray-700 text-sm">
            With a passion for literature and language, Our teachers inspire students to explore the depths of English to express themselves creatively.
          </p>
        </div>

        {/* Placeholder Faculty 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/10B981/FFFFFF/png?text=Teacher+2" alt="Faculty Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-green-300" />
          <h3 className="text-2xl font-semibold text-green-700">Mrs. Gautami and Mrs. Padmaja</h3>
          <p className="text-green-500 text-lg mb-2">Mathematics Educator</p>
          <p className="text-gray-700 text-sm">
            Mrs. Gautami & Padmaja makes complex mathematical concepts accessible and enjoyable, fostering strong analytical and problem-solving skills in his students.
          </p>
        </div>

        {/* Placeholder Faculty 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/EF4444/FFFFFF/png?text=Teacher+3" alt="Faculty Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-red-300" />
          <h3 className="text-2xl font-semibold text-red-700">Mrs Bhagya Lakshmi with Mrs Sravanthi</h3>
          <p className="text-red-500 text-lg mb-2">Science Coordinators</p>
          <p className="text-gray-700 text-sm">
            Both are innovative teaching methods bring science to life, encouraging students to explore the natural world with curiosity and scientific rigor.
          </p>
        </div>

        {/* Placeholder Faculty 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
          <img src="https://placehold.co/150x150/F59E0B/FFFFFF/png?text=Teacher+4" alt="Faculty Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-yellow-300" />
          <h3 className="text-2xl font-semibold text-yellow-700">Mr. Narsimha Rao and Mrs Mayuri Singh </h3>
          <p className="text-yellow-500 text-lg mb-2"> Social Studies Educator and Hindi Language Educator</p>
          <p className="text-gray-700 text-sm">
            Mrs. Mayuri and Narsimha  Rao Teaches Social Studies promotes a healthy and active lifestyle, inspiring students.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Contact Us Section Component
const ContactSection = () => (
  <section id="contact" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold text-indigo-700 mb-6">Get in Touch</h3>
          <div className="space-y-6 text-lg text-gray-700">
            <p className="flex items-center">
              <i className="fas fa-map-marker-alt text-indigo-600 mr-3 text-2xl"></i>
              <span>Sai Krishna Colony, St. 3 Budvel, Rajendranagar, Hyderabad, Telangana</span>
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone-alt text-indigo-600 mr-3 text-2xl"></i>
              <span>+91 94946 62999</span> {/* Placeholder Phone Number */}
            </p>
            <p className="flex items-center">
              <i className="fas fa-envelope text-indigo-600 mr-3 text-2xl"></i>
              <span>info_vhs@gmail.com</span> {/* Placeholder Email */}
            </p>
            <p className="flex items-center">
              <i className="fas fa-clock text-indigo-600 mr-3 text-2xl"></i>
              <span>Monday - Saturday: 9:00 AM - 4:00 PM</span>
            </p>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Location Map</h4>
            {/* Embedded Google Map Placeholder */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263077910882!2d78.4067223153846!3d17.44787240533829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x5c3a1c9e4a7e4b4d!2sBudvel%2C%20Rajendranagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold text-indigo-700 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
              <input type="text" id="fullName" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-bold mb-2">Email Address:</label>
              <input type="email" id="emailAddress" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
              <input type="text" id="subject" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Subject of your message" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" rows="5" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default App;
