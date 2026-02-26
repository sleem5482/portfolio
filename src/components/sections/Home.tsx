"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import sleem from "../../../public/img/sleem.jpg"

const Home = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const socialsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        socialsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              <span className="block text-4xl md:text-5xl mb-2">Hi, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Sleem Hashem
              </span>
            </h1>
            <p
              ref={textRef}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12"
            >
              A passionate Web Developer and Machine Learning Engineer focused on building intelligent systems and beautiful, high-performance digital experiences.
                Let&apos;s build something impactful together.
            </p>
            <div
              ref={socialsRef}
              className="flex space-x-6"
            >
              <SocialLink icon={<GitHub />} href="https://github.com/sleem5482" />
              <SocialLink icon={<LinkedIn />} href="https://www.linkedin.com/in/sleem-hashem-420235296" />
              <SocialLink icon={<Twitter />} href="https://x.com/hashem_sle82966?t=eaLCKSTR7F-5uQfqhPIBuQ&s=09" />
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              {/* Multiple rotating circles */}
              <div className="absolute inset-0 rounded-full animate-reverse-spin">
                <div className="absolute h-4 w-4 bg-blue-500 rounded-full -top-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute h-4 w-4 bg-purple-500 rounded-full top-1/2 -right-2 transform translate-y-1/2"></div>
                <div className="absolute h-4 w-4 bg-pink-500 rounded-full -bottom-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute h-4 w-4 bg-indigo-500 rounded-full top-1/2 -left-2 transform translate-y-1/2"></div>
              </div>

              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="absolute h-3 w-3 bg-blue-400 rounded-full top-1/4 -right-1.5 transform -translate-y-1/2"></div>
                <div className="absolute h-3 w-3 bg-purple-400 rounded-full bottom-1/4 -right-1.5 transform translate-y-1/2"></div>
                <div className="absolute h-3 w-3 bg-pink-400 rounded-full top-1/4 -left-1.5 transform -translate-y-1/2"></div>
                <div className="absolute h-3 w-3 bg-indigo-400 rounded-full bottom-1/4 -left-1.5 transform translate-y-1/2"></div>
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ padding: '4px' }}>
                <div className="absolute inset-0 rounded-full bg-white"></div>
              </div>
              
              {/* Profile image */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src={sleem}
                  alt="Sleem Hashem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>

              {/* Floating dots */}
              <div className="absolute inset-0 rounded-full animate-spin-slower">
                <div className="absolute h-2 w-2 bg-blue-300 rounded-full" style={{ top: '15%', right: '5%' }}></div>
                <div className="absolute h-2 w-2 bg-purple-300 rounded-full" style={{ top: '45%', right: '3%' }}></div>
                <div className="absolute h-2 w-2 bg-pink-300 rounded-full" style={{ top: '75%', right: '8%' }}></div>
                <div className="absolute h-2 w-2 bg-indigo-300 rounded-full" style={{ top: '85%', left: '5%' }}></div>
                <div className="absolute h-2 w-2 bg-blue-300 rounded-full" style={{ top: '35%', left: '3%' }}></div>
                <div className="absolute h-2 w-2 bg-purple-300 rounded-full" style={{ top: '15%', left: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform duration-200 text-gray-600 hover:text-blue-500"
  >
    {icon}
  </a>
);

export default Home; 