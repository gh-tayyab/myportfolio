import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Tools from "./components/Tools";


export default function Home() {
  return (
    <div>
      <Services />
      <Projects />
      <Tools />
    </div>
  );
}
