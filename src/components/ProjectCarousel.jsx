import { useState, useRef } from "react";
import SimpleScrollAnimation from "../blocks/Animations/AnimatedContent/AnimatedContent";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  { 
    name: "Fast Stars", 
    description: "Live Telegram bot with 20k+ active monthly users — gamified tasks, minigames, VIP system & crypto rewards.",
    color: "#617DE0"
  },
  { 
    name: "Vozik Shop", 
    description: "Commercial project with 3k+ users — buy Telegram Stars & Premium at lower rates with crypto payments.",
    color: "#F7DF35"
  },
  { 
    name: "Enhancify", 
    description: "Spotify-powered web app — year-round music stats, personal listening insights & global concert discovery.",
    color: "#1DB954"
  },
  { 
    name: "ALV Creatives", 
    description: "Sleek Webflow website for a media agency — modern design showcasing case studies & services.",
    color: "#FFFFFF"
  }
];

export default function ProjectCarousel() {
  const n = projects.length;
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const [direction, setDirection] = useState("next");

  const idx = (i) => (i + n) % n;

  // relative position around current (-2, -1, 0, 1, 2 …)
  const rel = (i) => {
    const d = ((i - current + n) % n);
    return d > n / 2 ? d - n : d;
  };

  const goPrev = () => {
    setDirection("prev");
    setCurrent((c) => idx(c - 1));
  };

  const goNext = () => {
    setDirection("next");
    setCurrent((c) => idx(c + 1));
  };

  // swipe gestures
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    else if (diff < -50) goPrev();
    touchStartX.current = null;
  };

  return (
    <section className="h-auto w-full mx-0 px-[4vw] md:px-[10vw] block pt-[10vh] md:mb-0 mb-[50px]">
      <SimpleScrollAnimation distance={100} direction="y" duration={1}>
    <h2 className="text-4xl font-bold text-center md:mb-20 ">My Projects</h2>
     {/* --- Arrows version (sm only) --- */}
      <div
        className="flex md:hidden sm:flex min-[1200px]:hidden relative w-full min-h-[500px] items-center justify-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={goPrev}
          className="absolute left-0 p-2 text-3xl text-white z-10"
        >
          <ChevronLeft />
        </button>

        <div className="relative w-90 h-60 min-[1200px]:w-110 min-[1200px]:h-70">
          {projects.map((project, i) => {
            const r = rel(i); // -2, -1, 0, 1, 2

            let transform = "opacity-0 pointer-events-none";
            if (r === 0) transform = "translate-x-0 opacity-100 z-9";
            else if (direction === "next" && r === -1) transform = "-translate-x-full opacity-0 z-0";
            else if (direction === "next" && r === 1) transform = "translate-x-full opacity-0 z-0";
            else if (direction === "prev" && r === -1) transform = "-translate-x-full opacity-0 z-0";
            else if (direction === "prev" && r === 1) transform = "translate-x-full opacity-0 z-0";

            return (
              <div
                key={i}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${transform}`}
              >
                <ProjectCard project={project} large />
              </div>
            );
          })}
        </div>

        <button
          onClick={goNext}
          className="absolute right-0 p-2 text-3xl text-white z-10"
        >
          <ChevronRight />
        </button>
      </div>

    <div
      className="relative min-[1200px]:w-full min-h-[500px] hidden md:flex sm:hidden min-[1200px]:flex items-center justify-center"
    >
      {projects.map((project, i) => {
        const r = rel(i);

        // spacing: move left/right more aggressively so no overlap
        let transform = "";
        if (r === 0) transform = "translate-x-0 scale-105 opacity-100 z-20";
        if (r === -1) transform = "min-[1200px]:-translate-x-[400px] -translate-x-[320px] scale-90 opacity-80 z-10";
        if (r === 1) transform = "min-[1200px]:translate-x-[400px] translate-x-[320px] scale-90 opacity-80 z-10";
        if (Math.abs(r) > 1) transform = "opacity-0 pointer-events-none";

        // clicking navigation
        const clickable = r === -1 ? goPrev : r === 1 ? goNext : undefined;

        return (
          <div
            key={i}
            className={`absolute transition-all ease-out flex`}
          >
            <div
              onClick={clickable}
              className={`${transform} transition-all duration-500 ease-out cursor-pointer
                ${r === 0 ? "min-[1200px]:w-110 min-[1200px]:h-70 w-90 h-60" : "min-[1200px]:w-75 min-[1200px]:h-50 w-60 h-40"}`}
            >
              <ProjectCard project={project} large={r === 0} />
            </div>
          </div>
        );
      })}
    </div>
    </ SimpleScrollAnimation>
    </section>
  );
}

function ProjectCard({ project, large }) {
  const targetId = project.name.replace(/\s+/g, "-").toLowerCase();

  const content = (
    <div
      className={`rounded-2xl border-4 border-[#617de0] bg-black/70 backdrop-blur-sm ${
        large ? "text-white" : "text-gray-400"
      } text-center shadow-xl
        h-full w-full p-6 min-[1200px]:p-8 transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl`}
      style={{ boxShadow: "0 10px 30px rgba(97,125,224,0.15)" }}
    >
      <h3 className={`font-semibold ${large ? "min-[1200px]:text-2xl text-xl" : "min-[1200px]:text-xl text-base"}`}>
        {project.name}
      </h3>
      <div
        className={`min-[1200px]:mt-4 ${large ? "mt-4" : "mt-2"} h-1 w-12 mx-auto rounded-full`}
        style={{ backgroundColor: project.color }}
      />
      <p className={`${large ? "text-base mt-8 text-white" : "min-[1200px]:text-sm text-xs mt-5 text-gray-400"}`}>
        {project.description}
      </p>
    </div>
  );

  return large ? <a href={`#${targetId}`}>{content}</a> : content;
}
