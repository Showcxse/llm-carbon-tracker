import React from "react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  const icons = [
    assets.claudedark,
    assets.deepseekdark,
    assets.geminidark,
    assets.openaidark,
    assets.grokdark,
    assets.llammadark,
    assets.claudedark,
    assets.deepseekdark,
    assets.geminidark,
    assets.openaidark,
    assets.grokdark,
    assets.llammadark,
  ];

  return (
    <>
      <section className="relative heroWrapper bg-linear-to-b from-primary-white to bg-primary-off-white overflow-hidden min-h-[70vh] flex flex-col justify-between">
      {/*GRADIENT BACKGROUND PRIME*/}
      <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-primary-green/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>


        {/*TOP SECTION*/}
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-20 px-4">
          {/* BADGE BECAUSE EVERYONE HAS ONE FOR SOME FUCKING REASON */}
          <div className="mb-4 px-4 py-1.5 rounded-full border border-primary-green/30 bg-primary-green/10 text-sm font-medium tracking-wide">
            🌱 GREEN AI IN 2026: Real-Time Emissions Tracking
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-primary-dark text-center leading-tight tracking-tighter">
            LOREM{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-green to-emerald-700">
              IPSUM
            </span>{" "}
          </h1>
          <div className="mt-8 max-w-lg text-lg md:text-2xl text-gray-500 text-center font-medium leading-relaxed">
            <p>
              Calculate the enviormental impact output your AI prompts in
              real-time!
            </p>
          </div>
        </div>
        {/*BOTTOM SECTION*/}
        <div className="relative w-full bg-primary-green py-4 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-y-2 border-primary-dark">
          {/* BLUR EFFECT BECAUSE WE GOATED LIKE THAT*/}
          <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-b from-primary-white/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-linear-to-t from-primary-offer-white/40 to-transparent pointer-events-none"></div>
          <div className="animate-marquee flex py-8 items-center">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="mx-12 md:mx-16 shrink-0 items-center justify-center"
                >
                  <img
                    src={icon}
                    alt={`Icon ${index}`}
                    className="h-16 md:h-28 lg:h-32 w-auto brightness-0 invert object-contain"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
