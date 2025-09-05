import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import Footer from "./components/Footer";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import FastStars from "./components/Projects/FastStars";
import VozikShop from "./components/Projects/VozikShop";
import Enhancify from "./components/Projects/Enhancify";
import AlvCreatives from "./components/Projects/AlvCreatives";
import LetsConnect from "./components/LetsConnect";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          particleHoverFactor={0.1}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <ProjectCarousel />
        <FastStars />
        <VozikShop />
        <Enhancify />
        <AlvCreatives />
        <LetsConnect />
        <Footer />
      </div>
    </div>
  );
}

export default App;