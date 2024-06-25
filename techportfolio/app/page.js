"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useScroll, useSpring } from "framer-motion";

import Profile from "@/components/Profile";
import Hr from "@/components/Hr";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";

import Education from "@/components/Education";
import SoftSkills from "@/components/SoftSkills";

import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";

import Repo from "@/components/Repo";
import Contacts from "@/components/Contacts";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <div style={{height:"40px"}}></div>
      <motion.div className="progress_bar" style={{ scaleX }} />
      <div>
          <Hr />
        </div>
      <main>
        <Profile  />
        <div>
          <Hr />
        </div>
        <About />
        <div>
          <Hr />
        </div>
        <Skills />
        <div>
          <Hr />
        </div>
        <SoftSkills />
        <div>
          <Hr />
        </div>
        <Experience />
        <div>
          <Hr />
        </div>
        <Education />
        <div>
          <Hr />
        </div>
        <Certificates />
        <div>
          <Hr />
        </div>
        <GitHubStats />
        <Repo />
        <div>
          <Hr />
        </div>
        <Projects />
        
        <div>
          <Hr />
        </div>
        <Contacts />
        <div>
          <Hr />
        </div>
      </main>
    </>

  );
}
