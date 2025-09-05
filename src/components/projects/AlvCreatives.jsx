import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import SimpleScrollAnimation from "../../blocks/Animations/AnimatedContent/AnimatedContent";

export default function ProjectShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./src/assets/full_logo_alv_creatives.jpeg",
    "./src/assets/who_are_we_alv_creatives.png",
    "./src/assets/case_studies_alv_creatives.png",
    "./src/assets/roaring_20s_alv_creatives.png",
  ];

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <section className="h-auto w-full mx-0 px-[4vw] md:px-[10vw] block md:mb-0 mb-[10vh] md:mt-[10vh]" id="alv-creatives">
      <SimpleScrollAnimation distance={100} direction="y" duration={1}>
      <div className="w-full h-full grid rounded-2xl gap-16 grid-cols-1 md:grid-cols-[3fr_2fr] grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_4fr_1fr]">
        
        {/* Project name + icon */}
        <div className="md:col-span-2 flex items-center gap-5 text-2xl font-bold">
          <img src="./src/assets/logo_alv_creatives.png"  alt="Project Icon" className="w-12 h-12 rounded-full" />
          ALV Creatives — Media Agency Website
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
            I designed and developed the ALV Creatives website, creating a clean, modern, and visually impactful platform for a media and marketing agency. The site combines bold branding with a smooth user experience, featuring dedicated sections for case studies.<br /><br />
            This project demonstrates my ability to build professional portfolio websites that effectively present a company’s work, values, and identity. It highlights not only strong visual storytelling but also the importance of clear navigation and structure to keep users engaged.<br /><br />
            By delivering a site that balances design, functionality, and brand communication, I’ve shown how I can create digital experiences that help businesses present themselves at their best.
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-3 items-start">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Webflow</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Figma</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 items-start z-3">
          <a
            href="https://www.alv-creatives.com/"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />  Check it out!
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