"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  image: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML5', level: 90, image: '/img/html.jpg', color: '#E34F26' },
  { name: 'CSS3', level: 90, image: '/img/css.webp', color: '#1572B6' },
  { name: 'JavaScript', level: 80, image: '/img/js.jpg', color: '#F7DF1E' },
  { name: 'TypeScript', level: 70, image: '/img/ts.jpg', color: '#3178C6' },
  { name: 'React.js', level: 70, image: '/img/logo192.png', color: '#38B2AC' },
  { name: 'Next.js', level: 60, image: '/img/next.svg', color: '#000000' },

  // Machine Learning & Data Science
  { name: 'Python', level: 85, image: '/img/python-svgrepo-com.svg', color: '#3776AB' },
  { name: 'NumPy', level: 80, image: '/img/numpy.png', color: '#013243' },
  { name: 'Pandas', level: 80, image: '/img/pandas.png', color: '#150458' },
  { name: 'Matplotlib', level: 75, image: '/img/matplotlib.png', color: '#11557C' },

  { name: 'Scikit-learn', level: 70, image: '/img/scikit.png', color: '#F7931E' },
  { name: 'TensorFlow', level: 65, image: '/img/tensorflow.png', color: '#FF6F00' },
  { name: 'Keras', level: 65, image: '/img/keras.png', color: '#D00000' },
];
export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards on scroll
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      // Animate progress bars
      gsap.from('.progress-bar', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
        width: '0%',
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
      });
    }, [skillsRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={skillsRef} className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
            My Skills
          
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="progress-bar h-2.5 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-600">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 