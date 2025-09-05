import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import SimpleScrollAnimation from "../../blocks/Animations/AnimatedContent/AnimatedContent";

export default function ProjectShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./assets/top_10k_enhancify.png",
    "./assets/top_songs_enhancify.png",
    "./assets/top_artists_enhancify.png",
    "./assets/concerts_enhancify.png",
    "./assets/concert_details_enhancify.png",
    "./assets/profile_enhancify.png",
  ];

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <section className="h-auto w-full mx-0 px-[4vw] md:px-[10vw] md:mb-0 mb-[10vh] md:mt-[10vh] block" id="enhancify">
      <SimpleScrollAnimation distance={100} direction="y" duration={1}>
      <div className="w-full h-full grid rounded-2xl gap-16 grid-cols-1 md:grid-cols-[3fr_2fr] grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_4fr_1fr]">
        
        {/* Project name + icon */}
        <div className="md:col-span-2 flex items-center gap-5 text-2xl font-bold">
          <img src="./assets/spotify.png"  alt="Project Icon" className="w-12 h-12 rounded-full" />
          Enhancify - Music Statistics Platform
        </div>

        {/* Images (with popup modal) */}
        <div
          className="relative rounded-2xl z-3 overflow-hidden cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <img src={images[0]} alt="Project screenshot" className="w-full h-full object-cover" />
            {/* Small clickable arrow indicator */}
          <div className="absolute bottom-3 right-3 bg-black/60 p-3 rounded-xl z-10 transform transition-transform duration-300 hover:scale-105">
            View more
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl">
          <p className="leading-relaxed">
            Enhancify is a Spotify-powered web app that delivers year-round music stats beyond Spotify Wrapped.<br /><br />
            Users can explore the top 10,000 artists worldwide with rich details, enhanced with powerful search and filters. After logging in with Spotify, they can track their most listened songs and artists across different time frames and dive into extra insights about their personal top.<br /><br />
            Enhancify also brings concert discovery to the next level — users can see upcoming events for both top global artists and their personal favorites, with full details on dates, venues, locations, and ticket prices, plus direct purchase links.<br /><br />
            Enhancify is live and deployed, showcasing our ability to build full-stack, production-ready applications.
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-3 items-start">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">FastAPI</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">React</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Tailwind CSS</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Docker</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Redis</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">API Integration</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 items-start z-3">
          <a
            href="https://github.com/ArtemIvl/enhancify"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" /> GitHub Repo
          </a>
          <a
            href="https://enhancify.info"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" /> Check it out!
          </a>
        </div>
      </div>
      </SimpleScrollAnimation>

      {/* Modal for image gallery */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center"
            onClick={() => setIsOpen(false)}>
          <div className="relative w-[80%] h-[80%] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImage]} alt="Project gallery" className="max-h-full max-w-full rounded-lg" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 md:-right-30 -right-8 p-2 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Prev / Next Arrows */}
            <button onClick={prevImage} className="absolute md:-left-12 -left-8 bg-white/30 hover:bg-white/50 duration-300 p-2 rounded-full cursor-pointer">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage} className="absolute md:-right-12 -right-8 bg-white/30 hover:bg-white/50 duration-300 p-2 rounded-full cursor-pointer">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}