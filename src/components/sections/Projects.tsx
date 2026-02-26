"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitHub, Launch } from '@mui/icons-material';
import Image from 'next/image';

const Projects = () => {


  const sectionRef =  useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
     if (!section) return;
    const cards = section.querySelectorAll('.project-card');

    gsap.from(section.querySelector('.projects-title'), {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const projects = [
    {
      title: 'Faculty website',
      description: 'the responsive faculty website using React, CSS, js and web3form API ',
      image: "/img/faculty.png",
      tags: ['Html', 'React.js', 'css'],
      github: 'https://github.com/sleem5482/Respnsive_Website_react.git',
      live: 'https://spiffy-clafoutis-8c049b.netlify.app',
    },
    {
      title: 'todo App',
      description: 'A simple todo application built with React(reducer and context API) and material UI.',
      image: '/img/todo_List.png',
      tags: ['React', 'css', 'Material-UI', 'JavaScript'],
      github: 'https://github.com/sleem5482/todo_list_react.git',
      live: 'https://todo838.netlify.app',
    },
    {
      title: 'Weather App',
      description: 'A weather application built with React, OpenWeatherMap API, redux, i18n and Material UI.',
      image: '/img/weatherReact.png',
      tags: ['React', 'CSS', 'material-UI', 'Redux'],
      github: 'https://github.com/sleem5482/weater_app_react.git',
      live: 'https://weather5482.netlify.app',
    },
    {
      title: 'quiz App',
      description: 'A responsive quiz application built with React, and css.',
      image: '/img/quiz.png',
      tags: ['React', 'CSS', 'js','json'],
      github: 'https://github.com/sleem5482/quiz_app_react.git',
      live: 'https://quiz5482.netlify.app',
    },
    {
      title: 'CRUD App',
      description: 'this is project manger app you can add the name of product , category about this product and calculate the price you can else delete ,update and delete all products',
      image: '/img/crud.png',
      tags: ['html', 'SCSS', 'js', 'css'],
      github: 'https://github.com/sleem5482/CRUD_js.git',
      live: 'https://crud5482.netlify.app',
    },
    {
      title: 'e-commerce App',
      description: 'A responsive e-commerce application built with html, jquery, and bootstrap.',
      image: '/img/thirdN.png',
      tags: ['html', 'CSS', 'JavaScript', 'Bootstrap', 'jquery'],
      github: 'https://github.com/sleem5482/NTI_project_3.git',
      live: 'https://ecommercejs5482.netlify.app',
    },
    {
      title: 'world App',
      description: 'This project is a modern, responsive web magazine template named World. It is designed to showcase articles, trending topics, and lifestyle content in a visually appealing and user-friendly layout.',
      image: '/img/secondN.png',
      tags: ['html', 'CSS'],
      github: 'https://github.com/sleem5482/NTI_project_2.git',
      live: 'https://world5482.netlify.app',
    },
    {
      title: 'Axit',
      description: 'this is the first project using html css ,',
      image: '/img/firstN.png',
      tags: ['html', 'CSS'],
      github: 'https://github.com/SLeem5482/NTI_project_1.git',
      live: 'https://axit5482.netlify.app',
    },
    {
      title: 'quiz app js',
      description: 'A simple web-based quiz application built with HTML, CSS, and JavaScript',
      image: '/img/quizjs.png',
      tags: ['html', 'css', 'js'],
      github: 'https://github.com/sleem5482/quiz_app_Js.git',
      live: 'https://quizjs5482.netlify.app',
    },
    {
      title: 'calculator app js',
      description: 'A simple web-based calculator built with HTML, CSS, and JavaScript.',
      image: '/img/calc.png',
      tags: ['Html', 'css', 'js'],
      github: 'https://github.com/sleem5482/Calculator_js.git',
      live: 'https://calcjs5482.netlify.app',
    },
      {
      title: 'weather app js',
      description: 'A simple web application that displays the current weather for any city, including temperature, humidity, wind speed, and a country flag. The app uses the OpenWeatherMap API and displays a weather icon based on the current conditions.',
      image: '/img/weatherjs.png',
      tags: ['Html', 'css', 'js','openweathermap API'],
      github: 'https://github.com/sleem5482/weather_app.git',
      live: 'https://weatherjs5482.netlify.app',
    },
      {
      title: 'hangman game js',
      description: 'A simple Hangman game built with HTML, CSS, and JavaScript.',
      image: '/img/hangman.png',
      tags: ['Html', 'css', 'js'],
      github: 'https://github.com/sleem5482/Hang_game_js.git',
      live: 'https://hangjs5482.netlify.app',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 bg-gray-200 flex justify-center align-middle">
              <Image src={project.image} alt='photo about the project'  width={400} height={200}/>
              </div>
              <div className="px-6 py-5 relative">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-10 ">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end align-bottom space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <GitHub className="text-black hover:text-blue-500 "/>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                   
                  >
                    <Launch  className="text-gray-600 hover:text-blue-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 