import Image from "next/image";
import styles from "./page.module.css";
import Profile from "@/components/Profile";
import Hr from "@/components/Hr";
import About from "@/components/About";
import Experience from "@/components/Experience";


import Education from "@/components/Education";
export default function Home() {
  return (
    <>
    <div style={{height:50}}></div>
      <main>
        <Profile />
        <div>
          <Hr />
        </div>
        <About />
        <div>
          <Hr />
        </div>
        <Experience />
        <div>
          <Hr />
        </div>
        <Education />
      </main>
    </>

  );
}
