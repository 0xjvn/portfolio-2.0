import Header from "./components/Header";
import Intro from "./components/Intro";
import Contributions from "./components/Contributions";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Colophon from "./components/Colophon";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Intro />
        <Contributions />
        <Experience />
        <Writing />
        <Colophon />
        <Contact />
      </main>
    </div>
  );
}
