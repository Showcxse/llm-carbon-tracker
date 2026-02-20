import React, { useState } from "react";
import { Leaf, Cpu, Globe, Zap, Trees } from "lucide-react";
import Dropdown from "./Dropdown.jsx";

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  {
    /*REMEMBER TO REMOVE PLACEHOLDER WHEN THE TIME COMES */
  }
  const [chosenModel, setChosenModel] = useState("PLACEHOLDER");

  return (
    <>
      {/*WRAP THIS FAKA IN AN ERROR BOUNDARY */}
      <main className="dashboardWrapper relative py-20 px-6 min-h-screen bg-primary-off-white">
          {/*MORE BLOBS SIR */}
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-primary-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-green/10 rounded-full blur-[75px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[30%] left-[10%] w-80 h-80 bg-primary-green/15 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="mb-8 flex flex-col md:flex-row lg:flex-col md:items-end lg:items-center justify-between items-center gap-4">
          <div>
          <h2 className="text-5xl lg:text-6xl font-black text-primary-dark text-center mb-8 tracking-tight">Emissions <span className="text-primary-green">Analysis</span></h2>
          <p className="text-md text-gray-500 text-center font-medium">Estimate the carbon footprint of your AI workflows</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary-white/50 backdrop-blur-sm border border-black/5 rounded-full shadow-sm">
          <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Last Synced: DATE{ /* MAKE THIS FUNCTIONAL */ }</span>
          </div>
        </div>
        

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*PROMPT INPUT*/}

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary-white/60 backdrop-blur-xl border border-primary-white/40 hover:border-primary-green/40 transition-colors p-8 rounded-3xl shadow-sm">
              <h3 className="font-xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                <div className="bg-primary-green/20 p-3 rounded-2xl">
                <Cpu aria-label="AI Chip Icon" className="text-primary-green" size={30} />
                </div>
                AI Prompt Analyzer
              </h3>

              <textarea
                className="w-full h-48 p-4 bg-primary-off-white/50 border border-primary-dark/5 rounded-3xl focus:ring-2 focus:ring-primary-green outline-none transition-all placeholder:text-gray-400 resize-none"
                placeholder="Enter your prompt here to estimate carbon impact..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
                {/*CAVEMAN APPROACH

                <select
                  className="bg-primary-white/80 border border-primary-dark/10 rounded-full px-4 py-2 text-sm font-medium outline-none"
                  value={chosenModel}
                  onChange={(e) => setChosenModel(e.target.value)}
                >
                  <option value="">PLACEHOLDER 1</option>
                  <option value="">PLACEHOLDER 2</option>
                  <option value="">PLACEHOLDER 3</option>
                  <option value="">PLACEHOLDER 4</option>
                  <option value="">PLACEHOLDER 5</option>
                  <option value="">PLACEHOLDER 6</option>
                </select>

                */}
                {/*SMARTER APPROACH */}
                <Dropdown chosenModel={chosenModel} setChosenModel={setChosenModel} />
                <button className="bg-linear-to-r from-primary-green to-emerald-600 text-primary-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-green/20 cursor-pointer">
                  Analyze Prompt
                </button>
              </div>
            </div>
          </div>

          {/* THE LIVE STATS */}

          <div className="space-y-6">
            <div className="bg-linear-to-br from-primary-green to-emerald-600 text-primary-white p-8 rounded-3xl shadow-xl overflow-hidden group backdrop-blur-md border border-primary-white/70">
              <div className="relative z-10">
                <p className="text-primary-white text-sm font-bold uppercase tracking-widest mb-1">
                  Estimated CO<sub>2</sub>
                </p>
                <h2 className="text-4xl font-bold mb-1">
                  0.00 <span className="text-lg font-medium">grams</span>
                </h2>
                <div className="flex items-center gap-2 text-xs bg-primary-white/20 w-fit px-3 py-1 mt-2 rounded-full backdrop-blur-md">
                  <Leaf aria-label="Carbon Impact Indicator"className="text-primary-white" size={16} />
                  Low Impact
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-white/80 rounded-3xl blur-3xl group-hover:bg-primary-white/90 transition-all"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-white/30 backdrop-blur-md border border-primary-white/40 hover:border-primary-green/40 transition-colors p-5 rounded-3xl shadow-lg">
                <div className="bg-primary-green/20 p-3 rounded-2xl w-fit mb-2">
                <Globe aria-label="Grid Region Icon" className="text-primary-green" size={32} />
                </div>
                <p className="text-sm text-gray-400 font-bold">Grid Region</p>
                <h3 className="text-sm font-bold text-primary-dark leading-relaxed">
                  PLACEHOLDER <br />
                  (USA)
                </h3>
              </div>
              <div className="bg-primary-white/30 backdrop-blur-md border border-primary-white/40 hover:border-primary-green/40 transition-colors p-5 rounded-3xl shadow-lg">
                {/*CHANGE THE COLOR OF THIS DEPENDING ON HOW INTENSE THE GRID IS */}
                <div className="bg-primary-green/20 p-3 rounded-2xl w-fit mb-2">
                <Zap aria-label="Grid Intensity Icon" className="text-primary-green" size={32} />
                </div>
                <p className="text-sm text-gray-400 font-bold">
                  Grid Intensity
                </p>
                <h3 className="text-sm font-bold text-primary-dark leading-relaxed">
                  PLACEHOLDER <br /> g/kWH
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-primary-white/30 backdrop-blur-md border border-primary-white/40 p-6 rounded-3xl shadow-lg md:col-span-3">
            <p className="text-sm text-gray-400 font-bold mb-2 uppercase">Environmental Context</p>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-green/20 rounded-2xl">
                <Trees aria-label="Trees Icon" className="text-primary-green" size={28} />
              </div>
              <p className="text-sm text-primary-dark font-medium leading-relaxed">
                This prompt's carbon impact is equivalent to driving 0.00 miles in a standard gasoline car
              </p>
            </div>
          </div>
      </div>
      <div className="relative w-full py-12 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-primary-dark/15"></div>
        </div>
        <div className="relative flex justify-center"> 
          <span className="bg-primary-whte/80 backdrop-blur-md px-6 py-2 rounded-full border border-primary-dark/15 text-[10px] font-black uppercase tracking-widest text-gray-400 shadow-sm">
          How it works:
          </span>
        </div>
      </div>
      </main>
    </>
  );
};
export default Dashboard;
