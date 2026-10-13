"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let tick = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', resize);
    resize();

    const waves = [
      { amplitude: 150, wavelength: 0.0016, speed: 0.008, offset: 0, stroke: "rgba(180, 125, 20, 0.28)", lineWidth: 2.5 },
      { amplitude: 190, wavelength: 0.0012, speed: 0.005, offset: 1.5, stroke: "rgba(217, 164, 65, 0.24)", lineWidth: 2 },
      { amplitude: 110, wavelength: 0.0024, speed: 0.011, offset: 3, stroke: "rgba(146, 96, 12, 0.2)", lineWidth: 1.5 },
      { amplitude: 230, wavelength: 0.0009, speed: 0.004, offset: 0.8, stroke: "rgba(245, 190, 75, 0.18)", lineWidth: 3 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      const meshRibbons = [
        { yShift: 0.15, speedMult: 1, colorStart: "rgba(180, 125, 20, 0.22)", colorMid: "rgba(217, 164, 65, 0.13)", colorEnd: "rgba(217, 164, 65, 0)" },
        { yShift: 0.3, speedMult: 0.7, colorStart: "rgba(146, 96, 12, 0.18)", colorMid: "rgba(245, 190, 75, 0.1)", colorEnd: "rgba(245, 190, 75, 0)" },
      ];

      meshRibbons.forEach((ribbon, idx) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y = (height * ribbon.yShift)
            + Math.sin(x * 0.0014 + tick * 0.006 * ribbon.speedMult + idx) * 130
            + Math.cos(x * 0.0008 + tick * 0.003) * 60
            + (x * 0.32); // Diagonal flow towards top right
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, ribbon.colorStart);
        grad.addColorStop(0.5, ribbon.colorMid);
        grad.addColorStop(1, ribbon.colorEnd);

        ctx.fillStyle = grad;
        ctx.fill();
      });

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        ctx.strokeStyle = wave.stroke;

        for (let x = 0; x <= width; x += 5) {
          const y = (height * 0.35)
            + Math.sin(x * wave.wavelength + tick * wave.speed + wave.offset) * wave.amplitude
            + (x * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-white font-sans text-[#171717] selection:bg-amber-300 selection:text-black dark:bg-black dark:text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-size-[4rem_4rem] dark:hidden" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[4rem_4rem] dark:block" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-6 py-16 lg:py-20">

        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full pointer-events-none z-0 overflow-hidden">
          <canvas ref={canvasRef} aria-hidden className="h-full w-full object-cover opacity-100" />

          <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-transparent pointer-events-none dark:from-black dark:via-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/40 pointer-events-none dark:from-black dark:to-black/40" />
        </div>

        {/* Hero Left Content Area */}
        <div className="relative z-10 max-w-3xl">

          <div className="mb-7 inline-flex items-center space-x-3 rounded-full border border-amber-700/20 bg-amber-50/70 px-4 py-2 backdrop-blur-xl dark:border-amber-400/20 dark:bg-amber-400/5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 " />
            </span>
            <span className="text-xs font-normal text-zinc-600 sm:text-sm dark:text-zinc-300">
              Insolify Platform 2.0: Next-gen core infrastructure for banks & fintechs
            </span>
          </div>

          <h1 className="mb-6 max-w-2xl text-4xl leading-[1.08] font-medium tracking-[-0.035em] text-[#171717] sm:text-5xl lg:text-6xl dark:text-white">
            Financial infrastructure to power digital banking in Africa and beyond.
          </h1>

          {/* Subtitle Copy */}
          <p className="mb-9 max-w-xl text-base leading-relaxed font-normal text-zinc-600 sm:text-lg dark:text-zinc-300">
          Deploy enterprise-grade core banking, AI automation, and cross-border payments in weeks—not months. Built for banks, microfinance institutions, and fintech platforms across Africa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-14">
            <Link href="/pricing" className="group inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-medium text-black shadow-lg shadow-amber-500/15 transition-colors hover:bg-amber-400">
              <span>Get Started</span>
              <svg className="w-5 h-5 ml-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
              </svg>
            </Link>

            <Link href="/contact" className="group inline-flex items-center justify-center rounded-full border border-black/15 bg-black/3 px-7 py-3.5 text-sm font-medium text-black backdrop-blur-lg transition-colors hover:bg-black/7 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
              <span>Contact Sales</span>
              <svg className="ml-2 h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-1 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Product Pillars Feature Strip */}
          <div className="grid max-w-xl grid-cols-3 gap-6 border-t border-black/10 pt-8 dark:border-white/10">
            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-wider ">01. Fincore</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">12 Core Banking Engines</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-wider">02. SAFI AI</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Automated Fraud & Analytics</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-wider">03. Settle Africa</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Instant Cross-Border Payments</div>
            </div>
          </div>

        </div>

      </div>

      <div className="relative z-20 border-t border-black/10 bg-white/80 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-5 text-center text-xs font-medium tracking-widest text-zinc-500 uppercase md:text-left dark:text-zinc-400">
            POWERING LEADING INSTITUTIONAL BANKS, MFBs, FINTECHS & PAYMENT GATEWAYS ACROSS AFRICA
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-80">
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-amber-700 dark:text-zinc-300 dark:hover:text-amber-400">
              <div className="w-3.5 h-3.5 bg-amber-400 rounded-sm" />
              <span>INSTITUTIONAL BANKS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-amber-700 dark:text-zinc-300 dark:hover:text-amber-400">
              <div className="w-3.5 h-3.5 bg-amber-400 rounded-full" />
              <span>MICROFINANCE BANKS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-amber-700 dark:text-zinc-300 dark:hover:text-amber-400">
              <div className="w-3.5 h-3.5 bg-amber-400 rotate-45 transform" />
              <span>AGILE FINTECHS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-amber-700 dark:text-zinc-300 dark:hover:text-amber-400">
              <div className="w-3.5 h-3.5 bg-amber-400 rounded-sm rotate-12" />
              <span>PAYMENT GATEWAYS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}