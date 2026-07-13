"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkRounded, SmartToy, Code, Groups, EmojiEvents } from '@mui/icons-material';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  icon: React.ReactNode;
  accentColor: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Consultant',
    company: 'Nafezly',
    period: 'Present',
    icon: <SmartToy className="text-white" />,
    accentColor: 'from-violet-600 to-purple-500',
    bullets: [
      'Provide expert consultation on the latest AI advancements, guiding clients on adopting and integrating modern AI technologies.',
      'Advise on and apply a wide spectrum of Machine Learning and Deep Learning techniques to optimize systems and solve complex data challenges.',
      'Focus on Large Language Model (LLM) engineering, leveraging advanced techniques such as Retrieval-Augmented Generation (RAG) to build smart, context-aware AI solutions.',
    ],
  },
  {
    role: 'AI & Full-Stack Developer',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: '2024 – 2025',
    icon: <WorkRounded className="text-white" />,
    accentColor: 'from-blue-600 to-cyan-500',
    bullets: [
      'Engineered a complete end-to-end web application with a high-performance FastAPI backend and a dynamic Next.js frontend.',
      'Architected and integrated a PostgreSQL database from scratch to securely handle and persist user data.',
      'Handled diverse datasets to design, train, and evaluate supervised and unsupervised ML models using XGBoost, Gradient Boosting, SVM, and KNN.',
      'Implemented deep learning architectures (NN, CNN, RNN, LSTM) for complex pattern recognition tasks.',
      'Trained predictive models on the Pride dataset achieving 99% accuracy, and developed optimized classification models for the ECG5000 time-series dataset.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Hoor Book (E-Commerce Platform)',
    period: 'June 2025 – Present',
    icon: <Code className="text-white" />,
    accentColor: 'from-emerald-600 to-teal-500',
    bullets: [
      'Develop and maintain responsive web pages using Next.js and Tailwind CSS for an e-commerce platform offering supermarket and library products.',
      'Implemented the location management feature and built the full "Forgot Password" authentication cycle.',
      'Integrated a barcode/QR scanner for faster product search and checkout flows.',
    ],
  },
  {
    role: 'Head of Front-End Department & Developer',
    company: 'Elgazaly Platform',
    period: 'Jan 2026 – Feb 2026',
    icon: <EmojiEvents className="text-white" />,
    accentColor: 'from-orange-500 to-amber-500',
    bullets: [
      'Led the frontend team, managed workflow, and supervised internal project delivery.',
      'Handled the full UI implementation for the entire platform, building all user interface pages and integrating frontend components with backend services.',
    ],
  },
  {
    role: 'Committee Head & Front-End Developer',
    company: 'IEEE Beni Suef Student Branch',
    period: 'Oct 2024 – May 2025',
    icon: <Groups className="text-white" />,
    accentColor: 'from-sky-500 to-blue-400',
    bullets: [
      'Collaborated with the IEEE student chapter to lead front-end initiatives.',
      'Developed and maintained web components for internal branch projects.',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    gsap.from(section.querySelector('.exp-title'), {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    const items = section.querySelectorAll('.exp-item');
    items.forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="exp-title text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Experience</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 text-lg">My professional journey and contributions</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-blue-400 to-sky-400 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item relative flex gap-6 md:gap-10">
                {/* Icon bubble */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${exp.accentColor} flex items-center justify-center shadow-lg z-10`}>
                  {exp.icon}
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                      <p className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${exp.accentColor}`}>{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-500 shadow-sm self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                        <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.accentColor}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
