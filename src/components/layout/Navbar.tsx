
"use client"
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HomeRounded, PersonRounded, WorkRounded, MailRounded, MenuRounded, CloseRounded, Launch } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    
    const cvUrl = '\Sleem_Hashem_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  const navItems = [
    { name: 'Home', icon: <HomeRounded />, to: 'home' },
    { name: 'About', icon: <PersonRounded />, to: 'about' },
    { name: 'Projects', icon: <WorkRounded />, to: 'projects' },
    { name: 'Contact', icon: <MailRounded />, to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'header' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sleem Hashem
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </ScrollLink>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <Launch />
                <span>Show CV</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <CloseRounded /> : <MenuRounded />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyan-600 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </ScrollLink>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 w-full px-3 py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Launch />
              <span>Show CV</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 