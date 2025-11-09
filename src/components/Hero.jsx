import CardSwap, { Card } from "../blocks/Components/CardSwap/CardSwap";
import TextType from "../blocks/TextAnimations/TextType/TextType";
import SimpleScrollAnimation from "../blocks/Animations/AnimatedContent/AnimatedContent";

export default function Hero() {
  return (
    <section className="min-h-[100vh] 2xl:min-h-auto md:pt-[15vh] pt-[8vh] w-full mx-0 px-[4vw] md:px-[10vw] block">
      <div className="">
        <h2 className="text-4xl md:text-5xl font-bold">Artem Ivliev</h2>
        <p className="text-2xl md:text-5xl mt-5">FullStack Web Developer</p>
          <TextType 
            className="text-lg md:text-2xl mt-8 md:mt-30 max-w-full md:max-w-[40%] min-h-[100px]"
            text={["I build modern web apps, useful Telegram bots, and clean websites that deliver real results."]}
            typingSpeed={40}
            pauseDuration={1000}
            showCursor={true}
            cursorCharacter="|"
          />
        <div className="mt-6 md:mt-10 sm:flex-row flex gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="button transform transition-transform duration-300 hover:scale-105"
          >
            Get In Touch!
          </a>
          <a
            href="./assets/Artem_Ivliev_Resume.pdf"
            target="blank"
            className="button transform transition-transform duration-300 hover:scale-105"
          >
            View CV
          </a>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-20 max-w-[90%] mx-auto mt-10 z-3 mb-10">
        <h2 className="text-4xl font-bold text-center mt-20 mb-10">What do I build?</h2>
        {/* Telegram Bots */}
        <SimpleScrollAnimation distance={100} direction="y" duration={1}>
        <div className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow rotate-4 bg-black">
          <div className="flex items-center gap-3">
            <img src="./assets/telegram.png" alt="Telegram Bots" className="w-8 h-8" />
            <h3 className="text-2xl font-semibold">Telegram Bots</h3>
          </div>
          <p className="text-base">
            Automate your communication and engage your audience with custom Telegram bots.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 text-base">
            <li>Chatbots & mini apps</li>
            <li>Support & notification bots</li>
            <li>Games inside telegram</li>
            <li>Chat management bots</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Aiogram</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">PostgreSQL</span>
          </div>
        </div>
        </SimpleScrollAnimation>

        {/* Portfolio Websites */}
        <SimpleScrollAnimation distance={100} direction="y" duration={1}>
        <div className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow -rotate-4 bg-black">
          <div className="flex items-center gap-3">
            <img src="./assets/briefcase.png" alt="Portfolio Websites" className="w-8 h-8" />
            <h3 className="text-2xl font-semibold">Portfolio Websites</h3>
          </div>
          <p className="text-base">
            Showcase your work with sleek, responsive websites tailored for freelancers and small businesses.
          </p>
          <ul className="text-base list-disc list-inside text-gray-400 space-y-1">
            <li>Personal portfolios</li>
            <li>Landing pages</li>
            <li>Small business sites</li>
            <li>Responsive design</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">React</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Node.js</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Tailwind CSS</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Webflow</span>
          </div>
        </div>
        </SimpleScrollAnimation>

        {/* Full Stack Web Apps */}
        <SimpleScrollAnimation distance={100} direction="y" duration={1}>
        <div className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow rotate-4 bg-black">
          <div className="flex items-center gap-3">
            <img src="./assets/internet.png" alt="Full Stack Web Apps" className="w-8 h-8" />
            <h3 className="text-2xl font-semibold">Full Stack Web Apps</h3>
          </div>
          <p className="text-base">
            Build robust and scalable full-stack applications with modern architecture and responsive UI.
          </p>
          <ul className="text-base list-disc list-inside text-gray-400 space-y-1">
            <li>Web 3.0 projects</li>
            <li>SaaS platforms</li>
            <li>Marketplaces</li>
            <li>API integrations</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">React</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Node.js</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">FastAPI</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">MongoDB</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Docker</span>
          </div>
        </div>
        </SimpleScrollAnimation>
        </div>
        
      <div className="mt-10 z-3 relative md:block hidden">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
        {/* Telegram Bots */}
        <Card className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow bg-[#0f172a]">
          <div className="flex items-center gap-3">
            <img src="./assets/telegram.png" alt="Telegram Bots" className="w-8 h-8" />
            <h3 className="md:text-2xl text-3xl font-semibold">Telegram Bots</h3>
          </div>
          <p className="md:text-base text-xl">
            Automate your communication and engage your audience with custom Telegram bots.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1 md:text-base text-xl">
            <li>Chatbots & Mini Apps</li>
            <li>Support & Notification Bots</li>
            <li>Games inside Telegram</li>
            <li>Chat management Bots</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Aiogram</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">PostgreSQL</span>
          </div>
        </Card>

        {/* Portfolio Websites */}
        <Card className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow bg-[#0f172a]">
          <div className="flex items-center gap-3">
            <img src="./assets/briefcase.png" alt="Portfolio Websites" className="w-8 h-8" />
            <h3 className="md:text-2xl text-3xl font-semibold">Portfolio Websites</h3>
          </div>
          <p className="md:text-base text-xl">
            Showcase your work with sleek, responsive websites tailored for freelancers and small businesses.
          </p>
          <ul className="md:text-base text-xl list-disc list-inside text-gray-400 space-y-1">
            <li>Personal portfolios</li>
            <li>Landing pages</li>
            <li>Small business sites</li>
            <li>Responsive design</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">React</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Node.js</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Tailwind CSS</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Webflow</span>
          </div>
        </Card>

        {/* Full Stack Web Apps */}
        <Card className="p-6 border-4 border-[#617de0] rounded-lg shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow bg-[#0f172a]">
          <div className="flex items-center gap-3">
            <img src="./assets/internet.png" alt="Full Stack Web Apps" className="w-8 h-8" />
            <h3 className="md:text-2xl text-3xl font-semibold">Full Stack Web Apps</h3>
          </div>
          <p className="md:text-base text-xl">
            Build robust and scalable full-stack applications with modern architecture and responsive UI.
          </p>
          <ul className="md:text-base text-xl list-disc list-inside text-gray-400 space-y-1">
            <li>Web 3.0 Projects</li>
            <li>SaaS platforms</li>
            <li>Marketplaces</li>
            <li>API integrations</li>
          </ul>
          <div className="flex gap-3 mt-auto flex-wrap">
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">React</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Node.js</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">FastAPI</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">MongoDB</span>
            <span className="md:text-sm text-base bg-[#617de0] px-3 py-1 rounded">Docker</span>
          </div>
        </Card>
        </CardSwap>
      </div>
    </section>
  );
}