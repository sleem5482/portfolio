import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Brush, Speed, DevicesRounded } from '@mui/icons-material';

const About = () => {
  const sectionRef =  useRef<HTMLElement | null>(null);;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
      if (!section) return; // Ensure section is defined
    const cards = section.querySelectorAll('.skill-card');

    gsap.from(section.querySelector('.about-title'), {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(section.querySelector('.about-text'), {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const skills = [
    {
      icon: <Code className="text-4xl text-blue-500" />,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern technologies.',
    },
    {
      icon: <Brush className="text-4xl text-purple-500" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    },
    {
      icon: <Speed className="text-4xl text-green-500" />,
      title: 'Performance',
      description: 'Optimizing applications for maximum speed and efficiency.',
    },
    {
      icon: <DevicesRounded className="text-4xl text-red-500" />,
      title: 'Responsive Design',
      description: 'Ensuring perfect display across all devices and screen sizes.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="about-text text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          I&apos;m a passionate web developer with a keen eye for design and a commitment to creating
          seamless user experiences. My journey in web development has equipped me with a
          diverse skill set and a problem-solving mindset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 