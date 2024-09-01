import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

        {/* spotlight  */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

        {/* content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with nextjs
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-3xl lg:text-4xl"
            words="Bringing ideas to life through seamless and user-centric design"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Hasibul Hasan, a Frontend Developer based in
            Bangladesh.
          </p>

          <a href="#about">
            <MagicButton 
            title='show my work'
            icon={<FaLocationArrow />}
            position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
