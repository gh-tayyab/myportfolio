import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Services />
      <Projects />
      <Tools />
      <Contact />
    </div>
  );
}
