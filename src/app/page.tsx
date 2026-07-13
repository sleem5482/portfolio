'use client';

import Layout from '@/components/layout/Layout';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skills from '@/components/sections/Skills';

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Skills/>
      <Projects />
      <Contact />
    </Layout>
  );
}
