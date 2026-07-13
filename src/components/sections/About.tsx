"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Psychology, Code, DevicesRounded, AutoAwesome } from '@mui/icons-material';

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
      if (!section) return;
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

const highlights = [
  {
    icon: <Psychology className="text-4xl text-violet-500" />,
    title: 'Machine Learning & AI',
    description:
      'Building intelligent, data-driven applications with Python, PyTorch, TensorFlow, XGBoost, and Scikit-Learn. Specializing in predictive modeling, deep learning, and Generative AI.',
  },
  {
    icon: <AutoAwesome className="text-4xl text-blue-500" />,
    title: 'Generative AI & RAG',
    description:
      'Hands-on experience with LLM engineering and Retrieval-Augmented Generation (RAG) to create context-aware, intelligent semantic search applications.',
  },
  {
    icon: <Code className="text-4xl text-emerald-500" />,
    title: 'Full-Stack Development',
    description:
      'End-to-end development with Next.js, React.js, FastAPI, and PostgreSQL — delivering complete AI-powered web applications from backend to frontend.',
  },
  {
    icon: <DevicesRounded className="text-4xl text-orange-500" />,
    title: 'Frontend Engineering',
    description:
      'Creating responsive, high-performance UIs with TypeScript, Tailwind CSS, and modern React patterns. Focused on UX quality and fast load times.',
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
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Me</span>
        </h2>
        <p className="about-text text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          A highly motivated <strong>Machine Learning Engineer</strong> and AI enthusiast with a strong foundation in developing intelligent, data-driven applications. My primary focus lies in <strong>Machine Learning, Deep Learning, and Generative AI</strong>, with hands-on experience in Python, data preprocessing, model development, and deploying scalable AI solutions. Passionate about solving real-world problems by integrating intelligent models into modern workflows. Additionally equipped with robust Full-Stack capabilities using <strong>JavaScript, React, Next.js, and FastAPI</strong>, enabling the end-to-end development of complete AI-powered web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="skill-card bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;