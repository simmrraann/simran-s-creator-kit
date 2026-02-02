import { useState, useEffect } from 'react';

export const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className='font-handwriting text-2xl cursor-pointer' onClick={() => scrollToSection('home')}>Simran</h1>
        <ul className="flex items-center space-x-8">
          <li className='font-display text-lg cursor-pointer' onClick={() => scrollToSection('collaborations')}>Collaborations</li>
          <li className='font-display text-lg cursor-pointer' onClick={() => scrollToSection('insights')}>Insights</li>
          <li className='font-display text-lg cursor-pointer' onClick={() => scrollToSection('rates')}>Rates</li>
          <li className='font-display text-lg cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};