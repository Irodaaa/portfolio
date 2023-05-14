import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {useState} from "react";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    </div>
  );
}

export default App;
