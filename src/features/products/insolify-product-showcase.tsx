"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldAlert,
  ShieldCheck,
  Globe,
  Zap,
  Layers,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Bot,
  MessageSquare,
} from "lucide-react";

export function InsolifyProductShowcase() {
  const reduceMotion = useReducedMotion();
  const [safiTab, setSafiTab] = useState('fraud'); // 'fraud', 'support', 'assistant'
  const [fincoreTab, setFincoreTab] = useState('ledger');
  const [settleTab, setSettleTab] = useState('routes');

  return (
    <section className="relative min-h-screen overflow-hidden p-4 font-sans text-black transition-colors duration-300 select-none sm:p-8 lg:p-12  dark:text-white">
      
      {/* Background Subtle Grain Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.035] mix-blend-overlay"
        
      />

      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-10 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide text-black/80 dark:border-white/10 dark:bg-white/8 dark:text-white/85">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse dark:bg-white" />
            INSOLIFY PRODUCT SUITE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Engineered for <span className="font-normal text-black/60 dark:text-white/70">borderless scale.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-black/70 sm:text-base dark:text-white/70">
          Explore our unified core banking architecture, autonomous AI fraud intelligence, and instant Pan-African cross-border settlement rails.
        </p>
      </header>

    
      {}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">

        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-black/10 bg-black/4 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-black/30 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.25)] sm:p-7 dark:border-white/10 dark:bg-white/4 dark:hover:border-white/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(255,255,255,0.12)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-black leading-tight tracking-tight dark:text-white">
              Unified <span className="text-black/60 font-normal dark:text-white/70">Core Banking</span> engineered for infinite scale
            </h3>
            <button type="button" aria-label="Explore Fincore" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs transition-all duration-300 group-hover:border-black/40 group-hover:bg-black group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-white/40 dark:group-hover:bg-white dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Sub-navigation Toggles */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-black/5 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setFincoreTab('ledger')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${fincoreTab === 'ledger' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Real-Time Ledger
            </button>
            <button 
              onClick={() => setFincoreTab('modules')} 
              className={`rounded-lg px-3 transition-all ${fincoreTab === 'modules' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Active Modules (12)
            </button>
          </div>

          {/* Fincore Embedded Visual Preview */}
          {}
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm backdrop-blur-xs dark:border-white/10 dark:bg-black/35">
            {/* Top Bar Mockup */}
            <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-xs font-bold text-white dark:bg-white dark:text-black">
                  FC
                </div>
                <div>
                  <div className="text-xs font-semibold text-black dark:text-white">Fincore Core Engine</div>
                  <div className="text-[10px] text-black/50 dark:text-white/60">v4.12 • Enterprise Multi-Tenant</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black dark:bg-white/10 dark:text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping dark:bg-white" />
                Live Engine
              </span>
            </div>

            {fincoreTab === 'ledger' ? (
              <div className="space-y-3">
                {/* Balance Overview */}
                <div className="rounded-xl border border-black/10 bg-black/5 p-3 dark:border-white/8 dark:bg-white/5">
                  <div className="mb-0.5 text-[10px] font-semibold tracking-wider text-black/60 uppercase dark:text-white/70">Total Treasury Ledger Balance</div>
                  <div className="text-2xl font-bold tracking-tight text-black dark:text-white">$12,840,920.<span className="font-normal text-black/50 dark:text-white/70">45</span></div>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-black/70 font-medium dark:text-white/50">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+14.2% inflow processed today</span>
                  </div>
                </div>

                {/* Ledger Transactions Feed */}
                <div>
                  <div className="mb-2 text-[11px] font-semibold tracking-wider text-black/60 uppercase dark:text-white/70">Real-time Banking Feed</div>
                  <div className="space-y-2">
                    {[
                      { icon: CreditCard, name: "Virtual Card Issuance Batch", cat: "Cards", status: "Settled", code: "66800 - Cards", amount: "+ $142,500.00", time: "Just now" },
                      { icon: Globe, name: "Inter-bank Clearing (NIP)", cat: "Clearing", status: "Processed", code: "66700 - Settlement", amount: "+ $89,120.00", time: "2m ago" },
                      { icon: Layers, name: "USSD Channel Inflow", cat: "Channels", status: "Settled", code: "66500 - USSD", amount: "+ $12,450.00", time: "5m ago" },
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-xl border border-black/10 p-2.5 text-xs transition-colors hover:bg-black/5 dark:border-white/8 dark:hover:bg-white/5">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 text-black/80 dark:bg-white/8 dark:text-white/85">
                            <tx.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-black leading-tight dark:text-white">{tx.name}</div>
                            <div className="text-[10px] text-black/50 dark:text-white/70">{tx.code}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-black dark:text-white">{tx.amount}</div>
                          <div className="text-[10px] text-black/70 font-medium dark:text-white/50">{tx.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Modules Tab */
              <div className="space-y-2">
                <div className="mb-1 text-xs font-semibold text-black/80 dark:text-white/85">Active Core Banking Modules</div>
                {[
                  { name: "Deposits & Savings Engine", status: "Active", throughput: "12.4k tps" },
                  { name: "Loan Origination System", status: "Active", throughput: "850 tps" },
                  { name: "Virtual Card Infrastructure", status: "Active", throughput: "4.2k tps" },
                  { name: "Treasury & Liquidity Desk", status: "Active", throughput: "Realtime" },
                  { name: "USSD Gateway Manager", status: "Active", throughput: "9.1k tps" },
                ].map((mod, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-black/10 bg-black/5 p-2.5 text-xs dark:border-white/8 dark:bg-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black/60 dark:text-white/60" />
                      <span className="font-medium text-black dark:text-white">{mod.name}</span>
                    </div>
                    <span className="rounded bg-black/10 px-2 py-0.5 font-mono text-[10px] text-black/80 dark:bg-white/10 dark:text-white/85">{mod.throughput}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Footer Indicator */}
            <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2 text-[11px] text-black/50 dark:border-white/10 dark:text-white/60">
              <span>99.999% Uptime Guarantee</span>
              <span className="font-mono text-black/70 dark:text-white/70">Lat: 12ms</span>
            </div>
          </div>
        </motion.article>

        {/* =========================================================================
            CARD 2: SAFI AI (Fraud Detection & Intelligence)
           ========================================================================= */}
        {}
        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-black/10 bg-black/4 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-black/30 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.25)] sm:p-7 dark:border-white/10 dark:bg-white/4 dark:hover:border-white/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(255,255,255,0.12)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-black leading-tight tracking-tight dark:text-white">
              <span className="font-semibold text-black/70 dark:text-white/90">SAFI AI</span> catches fraud before settlement occurs
            </h3>
            <button type="button" aria-label="Explore SAFI AI" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs transition-all duration-300 group-hover:border-black/40 group-hover:bg-black group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-white/40 dark:group-hover:bg-white dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-black/5 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setSafiTab('fraud')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'fraud' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Fraud AI
            </button>
            <button 
              onClick={() => setSafiTab('support')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'support' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Support AI
            </button>
            <button 
              onClick={() => setSafiTab('assistant')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'assistant' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Meeting AI
            </button>
          </div>

          {/* SAFI AI Visual Preview Panel */}
          {}
          <div className="relative flex-1 bg-black rounded-2xl border border-white/10 p-4 shadow-md text-white overflow-hidden flex flex-col justify-between">
            
            {/* Header Telemetry Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-white/20 text-white/90 flex items-center justify-center border border-white/10">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-medium text-white text-xs">SAFI Threat Intelligence</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-white/20 border border-white/10 text-white/90 text-[10px] font-mono tracking-wider">
                PROTECTION ACTIVE
              </span>
            </div>

            {safiTab === 'fraud' && (
              <div className="space-y-3 my-auto py-2">
                {/* Flagged Suspicious Transaction Alert Box */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-white/90 animate-pulse" />
                      <div>
                        <div className="text-xs font-bold text-white">HIGH RISK ANOMALY DETECTED</div>
                        <div className="text-[10px] text-white/70 font-mono">TX_ID: #8942-FRAUD-PREVENT</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/20 text-white/85 font-mono text-[10px] font-bold">
                      SCORE: 98%
                    </span>
                  </div>

                  <div className="my-2 p-2 bg-black/80 rounded-lg border border-white/10 text-xs space-y-1">
                    <div className="flex justify-between text-white/85">
                      <span>Attempted Outflow:</span>
                      <span className="font-mono font-bold text-white">$14,500.00 USD</span>
                    </div>
                    <div className="flex justify-between text-white/70 text-[10px]">
                      <span>Vector: Velocity + New Device IP</span>
                      <span className="text-white/90">Lagos, Nigeria</span>
                    </div>
                  </div>

                  {/* Mitigation Action Tag */}
                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-white/70">Action Taken:</span>
                    <span className="px-2 py-0.5 rounded bg-white text-black font-bold text-[10px] tracking-wide flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> BLOCKED & ISOLATED
                    </span>
                  </div>
                </div>

                {/* AI Detection Log Lines */}
                <div className="p-2.5 rounded-lg bg-black border border-white/10 font-mono text-[10px] space-y-1.5 text-white/70">
                  <div className="flex items-center justify-between text-white/90">
                    <span>› AI Behavioral Fingerprint Match:</span>
                    <span>FAILED</span>
                  </div>
                  <div className="flex items-center justify-between text-white/85">
                    <span>› Fraud Graph Traversal (1,400 Nodes):</span>
                    <span>0.004s</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>› Settlement Engine Signal:</span>
                    <span className="font-bold uppercase">FREEZE ASSETS</span>
                  </div>
                </div>
              </div>
            )}

            {safiTab === 'support' && (
              /* Support AI View */
              <div className="space-y-2 my-auto py-2">
                <div className="text-xs font-semibold text-white/85 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-white/90" /> Multi-lingual Support AI
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                  <div className="p-2 rounded bg-black text-white/85 text-[11px]">
                    <span className="text-white/90 font-mono">[Swahili Query]:</span> &ldquo;Nitapata wapi stakabadhi za malipo ya leo?&rdquo;
                  </div>
                  <div className="p-2 rounded bg-black text-white text-[11px] border border-white/10">
                    <span className="text-white/90 font-mono">[SAFI Bot]:</span> Resolved instantly in Swahili • Settlement receipt generated in 0.4s
                  </div>
                </div>
              </div>
            )}

            {safiTab === 'assistant' && (
              /* Meeting AI View */
              <div className="space-y-2 my-auto py-2">
                <div className="text-xs font-semibold text-white/85 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white/90" /> Executive Meeting & Risk Copilot
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                  <div className="text-[11px] text-white/85">
                    <strong>Autonomous Compliance Brief:</strong> Risk assessment matrix updated live during Board Sync. Zero high-risk exposure found across 4 currency corridors.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60 font-mono">
              <span>Zero-Loss Fraud Engine</span>
              <span>Latency: 4ms</span>
            </div>
          </div>
        </motion.article>

     
        {}
        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-black/10 bg-black/4 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-black/30 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.25)] sm:p-7 dark:border-white/10 dark:bg-white/4 dark:hover:border-white/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(255,255,255,0.12)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-black leading-tight tracking-tight dark:text-white">
              Instant <span className="font-normal text-black/60 dark:text-white/70">Pan-African settlement</span> with zero hidden friction
            </h3>
            <button type="button" aria-label="Explore Settle Africa" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs transition-all duration-300 group-hover:border-black/40 group-hover:bg-black group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-white/40 dark:group-hover:bg-white dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Sub-navigation Toggles */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-black/5 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setSettleTab('routes')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${settleTab === 'routes' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Route Matrix
            </button>
            <button 
              onClick={() => setSettleTab('rails')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${settleTab === 'rails' ? 'bg-white text-black shadow-xs font-semibold dark:bg-white/15 dark:text-white' : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
            >
              Payout Rails
            </button>
          </div>

          {/* Settle Africa Visual Preview */}
          {}
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm backdrop-blur-xs dark:border-white/10 dark:bg-black/35">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs dark:bg-white dark:text-black">
                  SA
                </div>
                <div>
                  <div className="text-xs font-semibold text-black dark:text-white">Settle Africa Rail</div>
                  <div className="text-[10px] text-black/50 dark:text-white/60">Direct FX & Mobile Money Bridge</div>
                </div>
              </div>
              <span className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black/80 dark:border-white/10 dark:bg-white/10 dark:text-white/90">
                Instant Settlement
              </span>
            </div>

            {settleTab === 'routes' ? (
              <div className="space-y-2.5 my-auto py-2">
                <div className="text-[11px] font-semibold tracking-wider text-black/60 uppercase dark:text-white/70">Live Cross-Border Liquidity Routes</div>
                
                {[
                  { from: "Lagos, NGN", to: "Nairobi, KES", rate: "1 NGN = 0.089 KES", speed: "Instant (0.2s)", status: "Optimal" },
                  { from: "Accra, GHS", to: "London, GBP", rate: "1 GHS = 0.052 GBP", speed: "Instant (0.4s)", status: "Optimal" },
                  { from: "Johannesburg, ZAR", to: "Kigali, RWF", rate: "1 ZAR = 71.4 RWF", speed: "Instant (0.3s)", status: "Optimal" },
                  { from: "Abidjan, XOF", to: "Douala, XAF", rate: "1 XOF = 1.00 XAF", speed: "Instant (0.1s)", status: "Optimal" },
                ].map((route, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-black/10 bg-black/5 p-2.5 text-xs transition-all hover:border-black/30 hover:bg-black/5 dark:border-white/8 dark:bg-white/4 dark:hover:border-white/15 dark:hover:bg-white/7">
                    <div>
                      <div className="flex items-center gap-1.5 font-semibold text-black dark:text-white">
                        <span>{route.from}</span>
                        <ArrowRight className="w-3 h-3 text-black/50 dark:text-white/70" />
                        <span>{route.to}</span>
                      </div>
                      <div className="text-[10px] text-black/50 font-mono mt-0.5 dark:text-white/70">{route.rate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-black/70 flex items-center justify-end gap-1 dark:text-white/50">
                        <Zap className="w-3 h-3 fill-black/60 text-black/60 dark:fill-white/60 dark:text-white/60" /> {route.speed}
                      </div>
                      <div className="text-[10px] text-black/50 dark:text-white/70">{route.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Payout Rails View */
              <div className="space-y-2 my-auto py-2">
                <div className="mb-1 text-xs font-semibold text-black/80 dark:text-white/85">Supported Pan-African Channels</div>
                {[
                  { title: "Mobile Money (M-Pesa, MTN, Airtel)", fee: "0.1% upfront", speed: "Immediate" },
                  { title: "Real-time Bank Transfers (NIP, RSwitch)", fee: "Flat fee", speed: "< 1 second" },
                  { title: "Agent Cash Pickup Networks", fee: "0.2% upfront", speed: "Instant QR" },
                  { title: "Direct Merchant POS Settlement", fee: "Zero markup", speed: "Realtime" },
                ].map((rail, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-black/10 bg-black/5 p-2.5 text-xs dark:border-white/8 dark:bg-white/5">
                    <div>
                      <div className="font-semibold text-black dark:text-white">{rail.title}</div>
                      <div className="text-[10px] text-black/50 dark:text-white/70">{rail.fee}</div>
                    </div>
                    <span className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black/80 dark:bg-white/10 dark:text-white/85">
                      {rail.speed}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Footer Details */}
            <div className="flex items-center justify-between border-t border-black/10 pt-2 text-[11px] text-black/50 dark:border-white/10 dark:text-white/60">
              <span>54 African Markets Covered</span>
              <span className="font-mono text-black/70 dark:text-white/70">Zero FX Slippage</span>
            </div>
          </div>
        </motion.article>

      </div>

    </section>
  );
}