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
    <section className="relative min-h-screen overflow-hidden p-4 font-sans text-neutral-900 transition-colors duration-300 select-none sm:p-8 lg:p-12  dark:text-neutral-100">
      
      {/* Background Subtle Grain Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.035] mix-blend-overlay"
        
      />

      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-10 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-300/50 bg-neutral-200/80 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700 dark:border-white/10 dark:bg-white/8 dark:text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            INSOLIFY PRODUCT SUITE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Engineered for <span className="font-normal text-neutral-500 dark:text-neutral-400">borderless scale.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          Explore our unified core banking architecture, autonomous AI fraud intelligence, and instant Pan-African cross-border settlement rails.
        </p>
      </header>

      {/* 3-Column Feature Cards Grid */}
      {}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">

        {/* =========================================================================
            CARD 1: FINCORE (Core Banking Infrastructure)
           ========================================================================= */}
        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-neutral-300/70 bg-[#ededec]/80 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-amber-500/35 hover:shadow-[0_22px_60px_-30px_rgba(120,85,20,0.35)] sm:p-7 dark:border-white/10 dark:bg-[#151515] dark:hover:border-amber-400/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(217,164,65,0.2)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 leading-tight tracking-tight dark:text-white">
              Unified <span className="text-neutral-500 font-normal dark:text-neutral-400">Core Banking</span> engineered for infinite scale
            </h3>
            <button type="button" aria-label="Explore Fincore" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 bg-white shadow-xs transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-amber-400 dark:group-hover:bg-amber-400 dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Sub-navigation Toggles */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-neutral-200/80 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setFincoreTab('ledger')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${fincoreTab === 'ledger' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Real-Time Ledger
            </button>
            <button 
              onClick={() => setFincoreTab('modules')} 
              className={`rounded-lg px-3 transition-all ${fincoreTab === 'modules' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Active Modules (12)
            </button>
          </div>

          {/* Fincore Embedded Visual Preview */}
          {}
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-neutral-300/80 bg-white/90 p-4 shadow-sm backdrop-blur-xs dark:border-white/10 dark:bg-black/35">
            {/* Top Bar Mockup */}
            <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 text-xs font-bold text-white dark:bg-amber-400 dark:text-black">
                  FC
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">Fincore Core Engine</div>
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500">v4.12 • Enterprise Multi-Tenant</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Engine
              </span>
            </div>

            {fincoreTab === 'ledger' ? (
              <div className="space-y-3">
                {/* Balance Overview */}
                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 dark:border-white/8 dark:bg-white/5">
                  <div className="mb-0.5 text-[10px] font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">Total Treasury Ledger Balance</div>
                  <div className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">$12,840,920.<span className="font-normal text-neutral-400">45</span></div>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-emerald-600 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+14.2% inflow processed today</span>
                  </div>
                </div>

                {/* Ledger Transactions Feed */}
                <div>
                  <div className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">Real-time Banking Feed</div>
                  <div className="space-y-2">
                    {[
                      { icon: CreditCard, name: "Virtual Card Issuance Batch", cat: "Cards", status: "Settled", code: "66800 - Cards", amount: "+ $142,500.00", time: "Just now" },
                      { icon: Globe, name: "Inter-bank Clearing (NIP)", cat: "Clearing", status: "Processed", code: "66700 - Settlement", amount: "+ $89,120.00", time: "2m ago" },
                      { icon: Layers, name: "USSD Channel Inflow", cat: "Channels", status: "Settled", code: "66500 - USSD", amount: "+ $12,450.00", time: "5m ago" },
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-xl border border-neutral-100 p-2.5 text-xs transition-colors hover:bg-neutral-50 dark:border-white/8 dark:hover:bg-white/5">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-white/8 dark:text-neutral-300">
                            <tx.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-neutral-800 leading-tight dark:text-neutral-200">{tx.name}</div>
                            <div className="text-[10px] text-neutral-400">{tx.code}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-neutral-900 dark:text-white">{tx.amount}</div>
                          <div className="text-[10px] text-emerald-600 font-medium">{tx.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Modules Tab */
              <div className="space-y-2">
                <div className="mb-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300">Active Core Banking Modules</div>
                {[
                  { name: "Deposits & Savings Engine", status: "Active", throughput: "12.4k tps" },
                  { name: "Loan Origination System", status: "Active", throughput: "850 tps" },
                  { name: "Virtual Card Infrastructure", status: "Active", throughput: "4.2k tps" },
                  { name: "Treasury & Liquidity Desk", status: "Active", throughput: "Realtime" },
                  { name: "USSD Gateway Manager", status: "Active", throughput: "9.1k tps" },
                ].map((mod, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-neutral-200/60 bg-neutral-50 p-2.5 text-xs dark:border-white/8 dark:bg-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{mod.name}</span>
                    </div>
                    <span className="rounded bg-neutral-200 px-2 py-0.5 font-mono text-[10px] text-neutral-700 dark:bg-white/10 dark:text-neutral-300">{mod.throughput}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Footer Indicator */}
            <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-[11px] text-neutral-400 dark:border-white/10 dark:text-neutral-500">
              <span>99.999% Uptime Guarantee</span>
              <span className="font-mono text-neutral-600 dark:text-neutral-400">Lat: 12ms</span>
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
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-neutral-300/70 bg-[#ededec]/80 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-amber-500/35 hover:shadow-[0_22px_60px_-30px_rgba(120,85,20,0.35)] sm:p-7 dark:border-white/10 dark:bg-[#151515] dark:hover:border-amber-400/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(217,164,65,0.2)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 leading-tight tracking-tight dark:text-white">
              <span className="font-semibold text-rose-600 dark:text-rose-400">SAFI AI</span> catches fraud before settlement occurs
            </h3>
            <button type="button" aria-label="Explore SAFI AI" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 bg-white shadow-xs transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-amber-400 dark:group-hover:bg-amber-400 dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-neutral-200/80 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setSafiTab('fraud')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'fraud' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Fraud AI
            </button>
            <button 
              onClick={() => setSafiTab('support')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'support' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Support AI
            </button>
            <button 
              onClick={() => setSafiTab('assistant')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${safiTab === 'assistant' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Meeting AI
            </button>
          </div>

          {/* SAFI AI Visual Preview Panel */}
          {}
          <div className="relative flex-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-4 shadow-md text-white overflow-hidden flex flex-col justify-between">
            
            {/* Header Telemetry Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-medium text-neutral-200 text-xs">SAFI Threat Intelligence</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[10px] font-mono tracking-wider">
                PROTECTION ACTIVE
              </span>
            </div>

            {safiTab === 'fraud' && (
              <div className="space-y-3 my-auto py-2">
                {/* Flagged Suspicious Transaction Alert Box */}
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
                      <div>
                        <div className="text-xs font-bold text-rose-200">HIGH RISK ANOMALY DETECTED</div>
                        <div className="text-[10px] text-rose-400/80 font-mono">TX_ID: #8942-FRAUD-PREVENT</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">
                      SCORE: 98%
                    </span>
                  </div>

                  <div className="my-2 p-2 bg-neutral-950/80 rounded-lg border border-neutral-800/80 text-xs space-y-1">
                    <div className="flex justify-between text-neutral-300">
                      <span>Attempted Outflow:</span>
                      <span className="font-mono font-bold text-white">$14,500.00 USD</span>
                    </div>
                    <div className="flex justify-between text-neutral-400 text-[10px]">
                      <span>Vector: Velocity + New Device IP</span>
                      <span className="text-rose-400">Lagos, Nigeria</span>
                    </div>
                  </div>

                  {/* Mitigation Action Tag */}
                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Action Taken:</span>
                    <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] tracking-wide flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> BLOCKED & ISOLATED
                    </span>
                  </div>
                </div>

                {/* AI Detection Log Lines */}
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 font-mono text-[10px] space-y-1.5 text-neutral-400">
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>› AI Behavioral Fingerprint Match:</span>
                    <span>FAILED</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>› Fraud Graph Traversal (1,400 Nodes):</span>
                    <span>0.004s</span>
                  </div>
                  <div className="flex items-center justify-between text-rose-400">
                    <span>› Settlement Engine Signal:</span>
                    <span className="font-bold uppercase">FREEZE ASSETS</span>
                  </div>
                </div>
              </div>
            )}

            {safiTab === 'support' && (
              /* Support AI View */
              <div className="space-y-2 my-auto py-2">
                <div className="text-xs font-semibold text-neutral-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> Multi-lingual Support AI
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-xs space-y-2">
                  <div className="p-2 rounded bg-neutral-900 text-neutral-300 text-[11px]">
                    <span className="text-emerald-400 font-mono">[Swahili Query]:</span> &ldquo;Nitapata wapi stakabadhi za malipo ya leo?&rdquo;
                  </div>
                  <div className="p-2 rounded bg-neutral-900 text-neutral-200 text-[11px] border border-emerald-500/20">
                    <span className="text-rose-400 font-mono">[SAFI Bot]:</span> Resolved instantly in Swahili • Settlement receipt generated in 0.4s
                  </div>
                </div>
              </div>
            )}

            {safiTab === 'assistant' && (
              /* Meeting AI View */
              <div className="space-y-2 my-auto py-2">
                <div className="text-xs font-semibold text-neutral-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Executive Meeting & Risk Copilot
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-xs space-y-2">
                  <div className="text-[11px] text-neutral-300">
                    <strong>Autonomous Compliance Brief:</strong> Risk assessment matrix updated live during Board Sync. Zero high-risk exposure found across 4 currency corridors.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status */}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
              <span>Zero-Loss Fraud Engine</span>
              <span>Latency: 4ms</span>
            </div>
          </div>
        </motion.article>

        {/* =========================================================================
            CARD 3: SETTLE AFRICA (Cross-Border Payments Rail)
           ========================================================================= */}
        {}
        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-160 flex-col justify-between overflow-hidden rounded-4xl border border-neutral-300/70 bg-[#ededec]/80 p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-amber-500/35 hover:shadow-[0_22px_60px_-30px_rgba(120,85,20,0.35)] sm:p-7 dark:border-white/10 dark:bg-[#151515] dark:hover:border-amber-400/30 dark:hover:shadow-[0_22px_60px_-30px_rgba(217,164,65,0.2)]"
        >
          
          {/* Card Header & Arrow */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 leading-tight tracking-tight dark:text-white">
              Instant <span className="font-normal text-neutral-500 dark:text-neutral-400">Pan-African settlement</span> with zero hidden friction
            </h3>
            <button type="button" aria-label="Explore Settle Africa" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 bg-white shadow-xs transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:group-hover:border-amber-400 dark:group-hover:bg-amber-400 dark:group-hover:text-black">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Sub-navigation Toggles */}
          <div className="z-10 mb-4 flex w-fit items-center gap-1.5 rounded-xl bg-neutral-200/80 p-1 text-xs font-medium dark:bg-black/40">
            <button 
              onClick={() => setSettleTab('routes')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${settleTab === 'routes' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Route Matrix
            </button>
            <button 
              onClick={() => setSettleTab('rails')} 
              className={`rounded-lg px-3 py-1.5 transition-all ${settleTab === 'rails' ? 'bg-white text-neutral-900 shadow-xs font-semibold dark:bg-neutral-700 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'}`}
            >
              Payout Rails
            </button>
          </div>

          {/* Settle Africa Visual Preview */}
          {}
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-neutral-300/80 bg-white/90 p-4 shadow-sm backdrop-blur-xs dark:border-white/10 dark:bg-black/35">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  SA
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">Settle Africa Rail</div>
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500">Direct FX & Mobile Money Bridge</div>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                Instant Settlement
              </span>
            </div>

            {settleTab === 'routes' ? (
              <div className="space-y-2.5 my-auto py-2">
                <div className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">Live Cross-Border Liquidity Routes</div>
                
                {[
                  { from: "Lagos, NGN", to: "Nairobi, KES", rate: "1 NGN = 0.089 KES", speed: "Instant (0.2s)", status: "Optimal" },
                  { from: "Accra, GHS", to: "London, GBP", rate: "1 GHS = 0.052 GBP", speed: "Instant (0.4s)", status: "Optimal" },
                  { from: "Johannesburg, ZAR", to: "Kigali, RWF", rate: "1 ZAR = 71.4 RWF", speed: "Instant (0.3s)", status: "Optimal" },
                  { from: "Abidjan, XOF", to: "Douala, XAF", rate: "1 XOF = 1.00 XAF", speed: "Instant (0.1s)", status: "Optimal" },
                ].map((route, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-2.5 text-xs transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/8 dark:bg-white/4 dark:hover:border-white/15 dark:hover:bg-white/7">
                    <div>
                      <div className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-neutral-200">
                        <span>{route.from}</span>
                        <ArrowRight className="w-3 h-3 text-neutral-400" />
                        <span>{route.to}</span>
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono mt-0.5">{route.rate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-emerald-600 flex items-center justify-end gap-1">
                        <Zap className="w-3 h-3 fill-emerald-500 text-emerald-500" /> {route.speed}
                      </div>
                      <div className="text-[10px] text-neutral-400">{route.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Payout Rails View */
              <div className="space-y-2 my-auto py-2">
                <div className="mb-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300">Supported Pan-African Channels</div>
                {[
                  { title: "Mobile Money (M-Pesa, MTN, Airtel)", fee: "0.1% upfront", speed: "Immediate" },
                  { title: "Real-time Bank Transfers (NIP, RSwitch)", fee: "Flat fee", speed: "< 1 second" },
                  { title: "Agent Cash Pickup Networks", fee: "0.2% upfront", speed: "Instant QR" },
                  { title: "Direct Merchant POS Settlement", fee: "Zero markup", speed: "Realtime" },
                ].map((rail, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-neutral-200/60 bg-neutral-50 p-2.5 text-xs dark:border-white/8 dark:bg-white/5">
                    <div>
                      <div className="font-semibold text-neutral-800 dark:text-neutral-200">{rail.title}</div>
                      <div className="text-[10px] text-neutral-400">{rail.fee}</div>
                    </div>
                    <span className="rounded-md bg-neutral-200/70 px-2 py-0.5 text-[10px] font-semibold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
                      {rail.speed}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Footer Details */}
            <div className="flex items-center justify-between border-t border-neutral-100 pt-2 text-[11px] text-neutral-400 dark:border-white/10 dark:text-neutral-500">
              <span>54 African Markets Covered</span>
              <span className="font-mono text-neutral-600 dark:text-neutral-400">Zero FX Slippage</span>
            </div>
          </div>
        </motion.article>

      </div>

    </section>
  );
}