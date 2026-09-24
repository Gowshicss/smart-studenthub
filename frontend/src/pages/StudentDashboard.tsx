// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(3);

  const [publishedDrive, setPublishedDrive] = useState<any>(null);

  useEffect(() => {
    const fetchDrive = () => {
      const drive = localStorage.getItem("publishedDrive");
      if (drive) {
        const parsed = JSON.parse(drive);
        // Delete/hide if deadline is passed
        if (new Date() > new Date(parsed.deadline)) {
          localStorage.removeItem("publishedDrive");
          setPublishedDrive(null);
        } else {
          setPublishedDrive(parsed);
        }
      } else {
        setPublishedDrive(null);
      }
    };
    fetchDrive();
    window.addEventListener("storage", fetchDrive);
    return () => window.removeEventListener("storage", fetchDrive);
  }, []);

  const studentCGPA = 8.84;

  return (
    <>
      <div>
        {/* PERSISTENT LEFT SIDEBAR */}
        <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r-2 border-border-dark z-50 flex flex-col justify-between select-none">
          <div className="flex flex-col">
            {/* Brand Title Bar */}
            <div className="h-16 px-4 flex items-center justify-between border-b-2 border-border-dark bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue border-2 border-border-dark flex items-center justify-center text-white font-extrabold text-sm neo-shadow-sm">
                  TN
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold tracking-tight text-sm uppercase leading-none">
                    TECHNOVA
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                    CAREER INTELLIGENCE
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-slate-100 border border-border-dark px-1.5 py-0.5 font-bold tabular-nums">
                v4.2
              </span>
            </div>
            {/* Node Status */}
            <div className="px-4 py-2 border-b-2 border-border-dark bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                  TELEMETRY NODE
                </span>
                <span className="text-[11px] text-brand-green font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
            {/* Nav Links */}
            <nav className="flex flex-col p-3 gap-1">
              <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-500">
                Command Scopes
              </div>
              <a
                aria-current="page"
                className="flex items-center justify-between px-3 py-2 border-2 border-border-dark bg-brand-blue text-white font-bold neo-shadow-sm"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    person
                  </span>
                  <span className="text-sm">Student Scope</span>
                </div>
                <span className="text-xs px-1.5 bg-white text-brand-blue border border-border-dark font-bold tabular-nums">
                  78%
                </span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 text-slate-700 hover:bg-slate-100 border-2 border-transparent hover:border-border-dark font-medium"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    supervisor_account
                  </span>
                  <span className="text-sm">Cohort Manager</span>
                </div>
                <span className="text-xs px-1.5 bg-red-100 text-brand-red border border-brand-red font-bold tabular-nums">
                  06
                </span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 text-slate-700 hover:bg-slate-100 border-2 border-transparent hover:border-border-dark font-medium"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    analytics
                  </span>
                  <span className="text-sm">TPO Intelligence</span>
                </div>
                <span className="text-[10px] px-1.5 bg-green-100 text-brand-green border border-brand-green font-bold">
                  MACRO
                </span>
              </a>
              <div className="mt-4 px-2 py-1 text-[10px] uppercase font-bold text-slate-500">
                Operations
              </div>
              <a
                className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-100 border-2 border-transparent hover:border-border-dark text-sm font-medium"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
                <span className>Recruiter Exports</span>
              </a>
              <a
                className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-100 border-2 border-transparent hover:border-border-dark text-sm font-medium"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span className>Verification Log</span>
              </a>
            </nav>
          </div>
          {/* Institute Feed Footer */}
          <div className="p-3 border-t-2 border-border-dark bg-slate-50">
            <div className="p-2.5 border-2 border-border-dark bg-white neo-shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  INSTITUTE FEED
                </span>
                <span className="text-[10px] text-brand-green font-bold">
                  SYNCED
                </span>
              </div>
              <div className="text-xs font-bold text-[#111111] truncate tabular-nums">
                NIT KARNATAKA (C-88)
              </div>
            </div>
          </div>
        
          <div className="p-4 border-t-2 border-border-dark border-[#111111] bg-surface-container-lowest mt-auto w-full">
            <button onClick={() => navigate('/login')} className="w-full flex items-center justify-center gap-2 px-3 py-2 border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#DC2626] font-bold text-sm uppercase tracking-wide cursor-pointer shadow-[2px_2px_0px_#DC2626] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-none">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span>LOGOUT</span>
            </button>
          </div>
        </aside>
        {/* MAIN APPLICATION SURFACE */}
        <div className="pl-64">
          <main className="w-full bg-[#F7F8FA] min-h-screen">
            <div className="flex flex-col w-full p-4 lg:p-6 space-y-6 max-w-[1440px] mx-auto">
              {/* TOP HEADER (PERSISTENT): Profile &amp; Right Health KPIs */}
              <header className="bg-white border-2 border-border-dark neo-shadow rounded-none">
                <div className="p-4 lg:p-5 border-b-2 border-border-dark flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-white">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Aarav Sharma"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-border-dark neo-shadow-sm rounded-none"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1WcXALgLYCkjebiqIle8VyQbejW_s3PtZffsFdfK4g0aZjD2bvdQ0w9LsCCGYPEFrIKAmgwNTwh42_JmcJUlxxPC0YF8Z-totJ6O__wPUyu20yUkyFeDObdA49iuQvy24_50IvduwNeqEZ01jtY-7QSWsnAaJhiHCmrasR7GPLKKX2KkdrFIWwjYNEPByV1nw1arYy98GwQ8Gwl3VjBGVMw2DMhUlsncck-tIK0zDLYAZoryFNzd28Zum8x"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[11px] uppercase px-2 py-0.5 bg-brand-blue text-white font-bold border border-border-dark tabular-nums">
                          COHORT 2022-26
                        </span>
                        <span className="text-[11px] uppercase px-2 py-0.5 bg-[#ECFDF3] text-brand-green font-bold border border-brand-green">
                          SEM VI - REGULAR
                        </span>
                        <span className="text-[11px] uppercase px-2 py-0.5 bg-slate-100 text-slate-700 font-bold border border-border-dark tabular-nums">
                          #IT24A042
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] uppercase leading-tight">
                        AARAV SHARMA
                      </h1>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        Dept. of Computing &amp; Data Sciences • National
                        Institute of Technology Karnataka
                      </p>
                    </div>
                  </div>
                  {/* Target Scope Dropdown */}
                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                      AUDIT TARGET SCOPE
                    </span>
                    <div className="relative">
                      <button
                        className="flex items-center gap-3 bg-white border-2 border-border-dark px-4 py-2 text-xs font-bold uppercase neo-shadow-sm neo-shadow-active hover:bg-slate-50"
                        id="roleSelectorBtn"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-none bg-brand-blue border border-border-dark" />
                          <span className>BACKEND DEVELOPER</span>
                        </span>
                        <span className="material-symbols-outlined text-sm font-bold">
                          arrow_drop_down
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Persistent Metrics Row */}
                <div className="grid grid-cols-2 divide-y sm:divide-y-0 sm:divide-x-2 divide-border-dark bg-slate-50 lg:grid-cols-4">
                  {/* Current CGPA */}
                  <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-bold uppercase">
                        CURRENT CGPA
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-brand-blue">
                        show_chart
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-none mb-1 tabular-nums">
                        8.84
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium tabular-nums">
                        Rank: Top 4.2% in Dept
                      </div>
                    </div>
                  </div>
                  {/* Latest SGPA */}
                  <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-bold uppercase">
                        LATEST SGPA (SEM V)
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-brand-green">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-none mb-1 tabular-nums">
                        9.02
                      </div>
                      <div className="text-[11px] text-brand-green font-bold tabular-nums">
                        +0.34 vs Sem IV
                      </div>
                    </div>
                  </div>
                  {/* Attendance */}
                  <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-bold uppercase">
                        ATTENDANCE
                      </span>
                      <span className="w-2.5 h-2.5 bg-brand-green border border-border-dark animate-pulse" />
                    </div>
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-none mb-1 tabular-nums">
                          89.4%
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 bg-[#ECFDF3] text-brand-green border border-brand-green font-bold tabular-nums">
                          SAFE / ELIGIBLE (&gt;75%)
                        </span>
                      </div>
                      <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
                        <svg
                          className="w-full h-full transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx={18}
                            cy={18}
                            fill="none"
                            r={14}
                            stroke="#E2E8F0"
                            strokeWidth={4}
                          />
                          <circle
                            cx={18}
                            cy={18}
                            fill="none"
                            r={14}
                            stroke="#078A4B"
                            strokeDasharray="87.96"
                            strokeDashoffset="9.3"
                            strokeWidth={4}
                          />
                        </svg>
                        <span className="material-symbols-outlined text-[13px] absolute text-brand-green font-bold">
                          check
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Standing Arrears */}
                  <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-bold uppercase">
                        STANDING ARREARS
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-brand-green">
                        verified
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-none mb-1 tabular-nums">
                        0
                      </div>
                      <span className="inline-flex items-center text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-800 border border-border-dark font-bold">
                        ZERO STANDING / CLEAN
                      </span>
                    </div>
                  </div>
                </div>
              </header>
              {/* TAB NAVIGATION BAR */}
              <nav
                aria-label="Command Tabs"
                className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3"
              >
                <button
                  onClick={() => setActiveTab(1)}
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 1 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`}
                  id="tabBtn-1"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    psychology
                  </span>
                  <span className>1. SKILL GAP &amp; AI MATCH</span>
                  <span className="ml-1 px-1.5 py-0.2 bg-brand-blue text-[10px] text-white font-bold border border-white/20 tabular-nums">
                    72%
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 2 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`}
                  id="tabBtn-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    folder_open
                  </span>
                  <span className>2. CREDENTIAL UPLOADS</span>
                  <span className="ml-1 px-1.5 py-0.2 bg-slate-200 text-slate-800 text-[10px] font-bold border border-border-dark tabular-nums">
                    3 ITEMS
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 3 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`}
                  id="tabBtn-3"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    campaign
                  </span>
                  <span className>3. SMART NOTICE BOARD</span>
                  <span
                    className="ml-1 px-1.5 py-0.2 bg-[#ECFDF3] text-brand-green text-[10px] font-bold border border-brand-green tabular-nums"
                    id="tab3Badge"
                  >
                    5 ACTIVE MATCHES
                  </span>
                </button>
              </nav>
              {/* TAB 1: SKILL GAP &amp; AI MATCH */}
              <section
                className={`space-y-6 ${activeTab === 1 ? "block" : "hidden"}`}
                id="tabContent-1"
              >
                <div className="bg-white border-2 border-border-dark neo-shadow">
                  <div className="px-5 py-3 border-b-2 border-border-dark bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-blue text-xl font-bold">
                        radar
                      </span>
                      <h2 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#111111]">
                        AI MATCH ENGINE: TARGET ROLE READINESS
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="px-2 py-0.5 bg-white border border-border-dark font-bold">
                        ROLE: BACKEND ENGINEER
                      </span>
                      <span className="px-2 py-0.5 bg-brand-blue text-white font-bold border border-border-dark tabular-nums">
                        XGBOOST v2.4 • 1,420 CAMPUS HIRES
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x-2 divide-border-dark">
                    {/* Left Donut */}
                    <div className="lg:col-span-4 p-5 flex flex-col justify-between bg-white space-y-5">
                      <div>
                        <div className="flex items-center justify-between border-b-2 border-border-dark pb-2 mb-4">
                          <span className="text-xs font-bold uppercase text-slate-600">
                            BENCHMARK MATCH SCORE
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 border border-border-dark text-[#111111] tabular-nums">
                            REQ: 85% TIER 1
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center py-2">
                          <div className="relative w-44 h-44 flex items-center justify-center">
                            <svg
                              className="w-full h-full transform -rotate-90"
                              viewBox="0 0 120 120"
                            >
                              <circle
                                cx={60}
                                cy={60}
                                fill="transparent"
                                r={50}
                                stroke="#E2E8F0"
                                strokeWidth={12}
                              />
                              <circle
                                cx={60}
                                cy={60}
                                fill="transparent"
                                r={50}
                                stroke="#155EEF"
                                strokeDasharray="314.159"
                                strokeDashoffset="87.96"
                                strokeWidth={12}
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-4xl font-extrabold text-[#111111] leading-none tabular-nums">
                                72%
                              </span>
                              <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">
                                BACKEND DEV
                              </span>
                              <span className="text-[10px] text-brand-red font-bold mt-0.5 bg-red-50 px-1 border border-brand-red tabular-nums">
                                -13% BELOW CUTOFF
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 border-2 border-border-dark neo-shadow-sm mt-4">
                          <div className="flex items-center justify-between text-[11px] mb-1.5 font-bold">
                            <span className="text-slate-700 uppercase">
                              IMPACT VECTOR SIMULATION
                            </span>
                            <span className="text-brand-green font-bold tabular-nums">
                              +18% JUMP
                            </span>
                          </div>
                          <div className="w-full h-4 bg-slate-200 border border-border-dark flex">
                            <div
                              className="bg-brand-blue h-full"
                              style={{ width: "72%" }}
                            />
                            <div
                              className="bg-brand-green h-full border-l-2 border-border-dark"
                              style={{ width: "18%" }}
                            />
                          </div>
                          <div className="flex justify-between items-center text-[11px] mt-1.5">
                            <span className="text-slate-600 font-bold tabular-nums">
                              CURRENT: 72%
                            </span>
                            <span className="text-brand-green font-bold tabular-nums">
                              WITH AWS: 90% (TIER 1 CLEARED) ★
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t-2 border-border-dark text-[10px] text-slate-500 flex items-center justify-between">
                        <span className>SOURCE: TECHNOVA NEURAL ENGINE</span>
                        <span className="font-bold text-slate-800">
                          LAST AUDITED: TODAY
                        </span>
                      </div>
                    </div>
                    {/* Center Skills Matrix */}
                    <div className="lg:col-span-5 p-5 space-y-5 bg-white">
                      <div>
                        <div className="flex items-center justify-between mb-2.5 pb-1 border-b-2 border-border-dark">
                          <span className="text-xs text-brand-green font-bold uppercase flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>{" "}
                            VERIFIED COMPETENCIES (4)
                          </span>
                          <span className="text-xs text-brand-green font-bold bg-[#ECFDF3] border border-brand-green px-1.5 tabular-nums">
                            +72 PTS
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 bg-slate-50 border-2 border-brand-green/80 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-xs font-bold text-[#111111]">
                              <span className>Python</span>
                              <span className="text-brand-green font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-600 mt-1 tabular-nums">
                              Advanced • Lab 9.4
                            </span>
                          </div>
                          <div className="p-2.5 bg-slate-50 border-2 border-brand-green/80 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-xs font-bold text-[#111111]">
                              <span className>FastAPI</span>
                              <span className="text-brand-green font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-600 mt-1">
                              Intermediate
                            </span>
                          </div>
                          <div className="p-2.5 bg-slate-50 border-2 border-brand-green/80 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-xs font-bold text-[#111111]">
                              <span className>SQL</span>
                              <span className="text-brand-green font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-600 mt-1 tabular-nums">
                              Postgres 9.1
                            </span>
                          </div>
                          <div className="p-2.5 bg-slate-50 border-2 border-brand-green/80 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-xs font-bold text-[#111111]">
                              <span className>Git</span>
                              <span className="text-brand-green font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-600 mt-1">
                              Intermediate
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2.5 pb-1 border-b-2 border-border-dark">
                          <span className="text-xs text-brand-red font-bold uppercase flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px]">
                              warning
                            </span>{" "}
                            MISSING CRITICAL SKILLS (3)
                          </span>
                          <span className="text-xs text-brand-red font-bold bg-red-50 border border-brand-red px-1.5 tabular-nums">
                            -28 PTS
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="p-2.5 bg-red-50 border-2 border-brand-red flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-[#111111] flex items-center gap-2">
                                <span className>AWS CLOUD INFRASTRUCTURE</span>
                                <span className="text-[9px] bg-brand-red text-white px-1.5 py-0.2 font-bold uppercase">
                                  HIGH IMPACT
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-600 mt-0.5 tabular-nums">
                                Required by 88% of target backend recruiters
                              </div>
                            </div>
                            <span className="text-xs text-brand-red font-bold ml-2 shrink-0 tabular-nums">
                              -18%
                            </span>
                          </div>
                          <div className="p-2.5 bg-white border-2 border-slate-300 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-[#111111]">
                                DOCKER CONTAINERIZATION
                              </div>
                              <div className="text-[10px] text-slate-600 mt-0.5">
                                Microservices runtime deployment Gap
                              </div>
                            </div>
                            <span className="text-xs text-slate-600 font-bold ml-2 shrink-0 tabular-nums">
                              -6%
                            </span>
                          </div>
                          <div className="p-2.5 bg-white border-2 border-slate-300 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-[#111111]">
                                CI/CD PIPELINES (ACTIONS)
                              </div>
                              <div className="text-[10px] text-slate-600 mt-0.5">
                                Automated release verification Gap
                              </div>
                            </div>
                            <span className="text-xs text-slate-600 font-bold ml-2 shrink-0 tabular-nums">
                              -4%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right Stepper */}
                    <div className="lg:col-span-3 p-5 flex flex-col justify-between bg-white space-y-4">
                      <div>
                        <div className="flex items-center justify-between border-b-2 border-border-dark pb-2 mb-3">
                          <span className="text-xs font-bold uppercase text-slate-600">
                            RECOVERY ROADMAP
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-brand-blue text-white">
                            STEPPER
                          </span>
                        </div>
                        <div className="space-y-3 relative">
                          <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-border-dark z-0" />
                          <div className="relative z-10 pl-7">
                            <span className="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-none bg-brand-green border-2 border-border-dark flex items-center justify-center text-[10px] text-white font-bold">
                              ✓
                            </span>
                            <div className="p-2.5 bg-slate-50 border-2 border-border-dark neo-shadow-sm">
                              <span className="text-[9px] uppercase font-bold text-brand-green bg-green-50 px-1 border border-brand-green">
                                STEP 1 • COMPLETED
                              </span>
                              <div className="text-xs font-bold text-[#111111] mt-1">
                                Python, FastAPI, SQL Core Proofs
                              </div>
                            </div>
                          </div>
                          <div className="relative z-10 pl-7">
                            <span className="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-none bg-brand-yellow border-2 border-border-dark flex items-center justify-center text-[10px] text-black font-bold">
                              !
                            </span>
                            <div className="p-2.5 bg-amber-50/50 border-2 border-border-dark neo-shadow-sm">
                              <span className="text-[9px] uppercase font-bold text-amber-800 bg-amber-100 px-1 border border-amber-300">
                                STEP 2 • GOLDEN ACTION
                              </span>
                              <div className="text-xs font-bold text-[#111111] mt-1">
                                AWS Infrastructure Credential
                              </div>
                              <div className="text-[10px] text-brand-green font-bold mt-0.5 tabular-nums">
                                +18% Estimated Gain
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t-2 border-border-dark">
                        <button className="w-full py-3 px-3 bg-brand-blue text-white text-xs font-bold uppercase border-2 border-border-dark neo-shadow neo-shadow-active hover:bg-blue-700 flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-base">
                            upload_file
                          </span>
                          <span className>+ SUBMIT AWS CERTIFICATE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* TAB 2: CREDENTIAL UPLOADS */}
              <section
                className={`space-y-6 ${activeTab === 2 ? "block" : "hidden"}`}
                id="tabContent-2"
              >
                <div className="bg-white border-2 border-border-dark neo-shadow p-5 lg:p-6 space-y-6">
                  <div className="border-2 border-dashed border-border-dark p-6 sm:p-8 bg-slate-50 text-center relative neo-shadow-sm hover:bg-slate-100 cursor-pointer">
                    <div className="max-w-md mx-auto flex flex-col items-center">
                      <div className="w-14 h-14 bg-white border-2 border-border-dark neo-shadow-sm flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-2xl text-brand-blue">
                          cloud_upload
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#111111] uppercase tracking-tight">
                        DRAG AND DROP CERTIFICATE / ARTIFACT / REPO PROOF
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 tabular-nums">
                        Supported formats: PDF, PNG, GitHub Repo URL (Max 10MB)
                      </p>
                      <button className="mt-4 px-5 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase border-2 border-border-dark neo-shadow neo-shadow-active hover:bg-blue-700 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          add
                        </span>
                        <span className>+ NEW SUBMISSION</span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto border-2 border-border-dark">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b-2 border-border-dark text-xs text-slate-700 uppercase font-bold">
                          <th className="py-3 px-4">ITEM / CREDENTIAL TITLE</th>
                          <th className="py-3 px-4">CATEGORY</th>
                          <th className="py-3 px-4">SUBMITTED ON</th>
                          <th className="py-3 px-4">VERIFYING AUTHORITY</th>
                          <th className="py-3 px-4 text-center">STATUS</th>
                          <th className="py-3 px-4 text-right">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-border-dark text-xs bg-white">
                        <tr className="hover:bg-slate-50">
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#111111] text-sm">
                              AWS Certified Cloud Practitioner (CLF-C02)
                            </div>
                            <div className="text-slate-500 text-[11px] mt-0.5 tabular-nums">
                              ID: AWS-994204-VALIDATION • Hash: #8f029...b4
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 bg-slate-100 border border-border-dark font-bold text-slate-800">
                              CERTIFICATION
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-700 tabular-nums">
                            12 SEP 2026
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#111111]">
                              Prof. Vignesh R
                            </div>
                            <div className="text-[10px] text-slate-500">
                              Cloud Faculty Lead
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-800 border-2 border-amber-600 font-bold uppercase text-[11px]">
                              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />{" "}
                              PENDING REVIEW
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-brand-blue uppercase hover:bg-slate-50">
                              PING MENTOR
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#111111] text-sm">
                              Intelligent Inventory Microservices
                            </div>
                            <div className="text-slate-500 text-[11px] mt-0.5">
                              Stack: React + FastAPI + PostgreSQL
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 bg-slate-100 border border-border-dark font-bold text-slate-800">
                              CAPSTONE PROJECT
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-700 tabular-nums">
                            28 AUG 2026
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#111111]">
                              Dr. Arunachalam S
                            </div>
                            <div className="text-[10px] text-slate-500">
                              HoD Computer Science
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ECFDF3] text-brand-green border-2 border-brand-green font-bold uppercase text-[11px]">
                              <span className="w-2 h-2 bg-brand-green" />{" "}
                              VERIFIED
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-slate-800 uppercase hover:bg-slate-50">
                              VIEW RECEIPT
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              {/* TAB 3: SMART NOTICE BOARD (UNSTOP-STYLE OPPORTUNITY BROWSER &amp; APPLICATION HUB) */}
              <section
                className={`space-y-6 ${activeTab === 3 ? "block" : "hidden"}`}
                id="tabContent-3"
              >
                {/* 1. "MY APPLICATIONS" Tracker Strip */}
                {/* 2. Two-Column Layout (Left: 7 cols, Right: 5 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* LEFT COLUMN (7 cols): Toolbar &amp; Opportunity Cards Feed */}
                  <div
                    className="lg:col-span-7 bg-white border-4 border-border-dark"
                    style={{ boxShadow: "rgb(17, 17, 17) 8px 8px 0px" }}
                  >
                    {/* Physical Notice Header Bar */}
                    <div className="h-12 bg-[#111111] px-4 py-2 flex items-center justify-between border-b-4 border-border-dark select-none">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-white text-xl">
                          campaign
                        </span>
                        <span className="font-extrabold tracking-wider text-sm sm:text-base text-white uppercase leading-none font-sans">
                          NOTICE
                        </span>
                      </div>
                      <span
                        className="text-[11px] px-2 py-0.5 bg-brand-yellow text-black font-extrabold uppercase border-2 border-border-dark tabular-nums"
                        id="noticeNewBadge"
                      >
                        5 NEW
                      </span>
                    </div>
                    {/* Integrated MY APPLICATIONS Tracker Strip */}
                    <div className="p-4 bg-slate-50 border-b-2 border-border-dark">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="w-2.5 h-2.5 bg-brand-blue border border-border-dark" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                            MY SUBMITTED APPLICATIONS
                          </span>
                          <span
                            className="text-[10px] px-1.5 py-0.2 bg-white border border-border-dark font-bold tabular-nums"
                            id="myAppsCount"
                          >
                            0 ACTIVE
                          </span>
                        </div>
                        <div
                          className="flex flex-wrap items-center gap-2 overflow-x-auto"
                          id="myAppsContainer"
                        >
                          <div className="text-xs text-slate-500 font-medium italic flex items-center gap-1.5 py-0.5">
                            <span className="material-symbols-outlined text-[16px] text-slate-400">
                              info
                            </span>
                            <span className>
                              No active applications yet. Browse and apply
                              below.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Opportunity Cards Scrollable Content Area */}
                    <div
                      className="p-4 space-y-4 max-h-[720px] overflow-y-auto"
                      id="opportunityFeedContainer"
                    >
                      {publishedDrive && (
                        <article className="opp-card bg-white border-2 border-brand-blue neo-shadow p-4 space-y-3 relative mb-4">
                          <div className="absolute -top-3 -right-3 bg-brand-yellow text-black font-extrabold px-2 py-1 border-2 border-border-dark text-[10px] uppercase shadow-[2px_2px_0px_#111111] rotate-3 animate-pulse">
                            NEW PUBLISHED DRIVE
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0 bg-[#111111]">
                                {publishedDrive.company
                                  .substring(0, 2)
                                  .toUpperCase()}
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="font-bold text-base text-[#111111] leading-snug">
                                    {publishedDrive.company}
                                  </h3>
                                  <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                    FULL-TIME
                                  </span>
                                  {studentCGPA >= publishedDrive.minCgpa ? (
                                    <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-[#ECFDF3] text-brand-green border-brand-green">
                                      YOU&apos;RE ELIGIBLE (CGPA {studentCGPA} &gt;{" "}
                                      {publishedDrive.minCgpa})
                                    </span>
                                  ) : (
                                    <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-[#FEF2F2] text-brand-red border-brand-red">
                                      NOT ELIGIBLE (Requires CGPA{" "}
                                      {publishedDrive.minCgpa})
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                  {publishedDrive.role}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Pan India
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                              <div className="text-right">
                                <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                  {publishedDrive.ctc}
                                </div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                                  COMPENSATION
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center border-2 border-border-dark hover:bg-slate-100 neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-none bg-white">
                                  <span className="material-symbols-outlined text-[16px]">
                                    share
                                  </span>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border-2 border-border-dark hover:bg-slate-100 neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-none bg-white">
                                  <span className="material-symbols-outlined text-[16px]">
                                    bookmark
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-2 divide-border-dark border-2 border-border-dark bg-slate-50">
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                                TARGET OPENINGS
                              </div>
                              <div className="text-xs font-bold text-[#111111]">
                                TBD
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                                DURATION / BOND
                              </div>
                              <div className="text-xs font-bold text-[#111111]">
                                No Employment Bond
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                                ELIGIBLE BATCH
                              </div>
                              <div className="text-xs font-bold text-[#111111]">
                                2026 Passing Out
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                                DEADLINE
                              </div>
                              <div className="text-xs font-bold text-brand-red tabular-nums">
                                {new Date(
                                  publishedDrive.deadline,
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>

                          <div className="text-xs text-slate-600 bg-slate-50 p-2 border border-border-dark">
                            <span className="font-bold">Required Skills: </span>{" "}
                            {publishedDrive.skills}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-brand-green">
                                check_circle
                              </span>
                              <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wide">
                                NO ACTIVE BACKLOGS (VERIFIED)
                              </span>
                            </div>
                            <button
                              className={`px-4 py-2 font-bold text-xs border-2 border-border-dark uppercase neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${studentCGPA >= publishedDrive.minCgpa ? "bg-brand-blue text-white" : "bg-slate-300 text-slate-500 cursor-not-allowed"}`}
                              disabled={studentCGPA < publishedDrive.minCgpa}
                            >
                              {studentCGPA >= publishedDrive.minCgpa
                                ? "APPLY NOW"
                                : "NOT ELIGIBLE"}
                            </button>
                          </div>
                        </article>
                      )}

                      {/* Stripe India Card (Selected) */}
                      <article
                        className="opp-card bg-white border-2 border-brand-blue neo-shadow p-4 space-y-3 cursor-pointer relative"
                        id="card-stripe"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#635BFF" }}
                            >
                              ST
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Stripe India
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  FULL-TIME
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  HYBRID
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-[#ECFDF3] text-brand-green border-brand-green">
                                  92% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                Backend Engineer (Payments Infra)
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Bengaluru (Hybrid)
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                18.5 LPA
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Python ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              FastAPI ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              PostgreSQL ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 border border-slate-400 text-slate-600 font-bold">
                              AWS
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 30 SEP (23:59 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-red-100 text-brand-red border-brand-red">
                                6 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>
                            <span className>
                              YOU&apos;RE ELIGIBLE (CGPA 8.84, Attnd 89.4%, 0
                              Arrears)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100">
                              VIEW DETAILS
                            </button>
                            <button className="px-4 py-1.5 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700">
                              APPLY NOW →
                            </button>
                          </div>
                        </div>
                      </article>
                      {/* Cisco Systems Card */}
                      <article
                        className="opp-card bg-white border-2 border-border-dark neo-shadow-sm p-4 space-y-3 cursor-pointer relative"
                        id="card-cisco"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#049FD9" }}
                            >
                              CS
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Cisco Systems India
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  INTERNSHIP
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  HYBRID
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-slate-100 text-slate-800 border-border-dark">
                                  84% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                Cloud Systems Intern (SRE)
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Bengaluru / Chennai
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                ₹60,000/month
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Python ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Linux ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Git ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Networking ✓
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 05 OCT (18:00 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-slate-100 text-slate-700 border-border-dark">
                                11 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>
                            <span className>
                              YOU&apos;RE ELIGIBLE (CGPA 8.84, Attnd 89.4%, 0
                              Arrears)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100">
                              VIEW DETAILS
                            </button>
                            <button className="px-4 py-1.5 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700">
                              APPLY NOW →
                            </button>
                          </div>
                        </div>
                      </article>
                      {/* Razorpay Card */}
                      <article
                        className="opp-card bg-white border-2 border-border-dark neo-shadow-sm p-4 space-y-3 cursor-pointer relative"
                        id="card-razorpay"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#0C2340" }}
                            >
                              RZ
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Razorpay
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  INTERNSHIP
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  ONSITE
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-[#ECFDF3] text-brand-green border-brand-green">
                                  88% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                Backend Intern (Payments)
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Bengaluru
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                ₹75,000/month
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Python ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              FastAPI ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 border border-slate-400 text-slate-600 font-bold">
                              Docker
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              SQL ✓
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 12 OCT (20:00 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-slate-100 text-slate-700 border-border-dark">
                                18 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>
                            <span className>
                              YOU&apos;RE ELIGIBLE (CGPA 8.84, Attnd 89.4%, 0
                              Arrears)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100">
                              VIEW DETAILS
                            </button>
                            <button className="px-4 py-1.5 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700">
                              APPLY NOW →
                            </button>
                          </div>
                        </div>
                      </article>
                      {/* Smart India Hackathon Card */}
                      <article
                        className="opp-card bg-white border-2 border-border-dark neo-shadow-sm p-4 space-y-3 cursor-pointer relative"
                        id="card-sih"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#EAB308" }}
                            >
                              SH
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Smart India Hackathon 2026
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  HACKATHON
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  ONSITE
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-slate-100 text-slate-800 border-border-dark">
                                  79% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                FinTech &amp; Governance Track
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Onsite (AICTE New Delhi)
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                ₹1,00,000 prize pool
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              React ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              FastAPI ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              AI/ML ✓
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 18 OCT (23:59 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-slate-100 text-slate-700 border-border-dark">
                                24 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>
                            <span className>
                              YOU&apos;RE ELIGIBLE (CGPA 8.84, Attnd 89.4%, 0
                              Arrears)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100">
                              VIEW DETAILS
                            </button>
                            <button className="px-4 py-1.5 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700">
                              APPLY NOW →
                            </button>
                          </div>
                        </div>
                      </article>
                      {/* Goldman Sachs Card */}
                      <article
                        className="opp-card bg-white border-2 border-border-dark neo-shadow-sm p-4 space-y-3 cursor-pointer relative"
                        id="card-goldman"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#7399C6" }}
                            >
                              GS
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Goldman Sachs
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  FULL-TIME
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  HYBRID
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-slate-100 text-slate-800 border-border-dark">
                                  81% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                Analyst (Systems)
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Bengaluru
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                24.0 LPA
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Python ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              SQL ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Data Structures ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 border border-slate-400 text-slate-600 font-bold">
                              AWS
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 20 OCT (18:00 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-slate-100 text-slate-700 border-border-dark">
                                26 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              verified
                            </span>
                            <span className>
                              YOU&apos;RE ELIGIBLE (CGPA 8.84, Attnd 89.4%, 0
                              Arrears)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100">
                              VIEW DETAILS
                            </button>
                            <button className="px-4 py-1.5 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700">
                              APPLY NOW →
                            </button>
                          </div>
                        </div>
                      </article>
                      {/* Ineligible Drive: Google STEP (Greyed out at bottom) */}
                      <article
                        className="opp-card bg-slate-100 opacity-75 border-2 border-border-dark neo-shadow-sm p-4 space-y-3 cursor-pointer relative"
                        id="card-googlestep"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-slate-300">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              style={{ backgroundColor: "#1e293b" }}
                            >
                              G
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-bold text-base text-[#111111] leading-snug">
                                  Google STEP
                                </h3>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-border-dark font-bold uppercase">
                                  INTERNSHIP
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-border-dark font-bold uppercase">
                                  HYBRID
                                </span>
                                <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-slate-100 text-slate-800 border-border-dark">
                                  74% MATCH
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                                SWE Intern
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Hyderabad
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                            <div className="text-right">
                              <div className="text-lg font-extrabold text-[#111111] leading-none tabular-nums">
                                ₹1,00,000/month
                              </div>
                            </div>
                            <button
                              className="p-1 border border-border-dark bg-white hover:bg-slate-100 text-slate-600 hover:text-black bookmark-btn"
                              title="Save"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">
                              STACK:
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              C++/Python ✓
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-brand-green text-brand-green font-bold">
                              Algorithms ✓
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-xs pt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold text-slate-500">
                                CLOSES: 28 OCT (23:59 IST)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 border font-bold uppercase tabular-nums bg-slate-100 text-slate-700 border-border-dark">
                                34 DAYS LEFT
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t-2 border-slate-300 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-brand-red font-bold">
                            <span className="material-symbols-outlined text-[16px]">
                              cancel
                            </span>
                            <span className>
                              NOT ELIGIBLE: needs CGPA ≥ 9.0 (Candidate: 8.84)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <button className="px-3 py-1.5 bg-white border-2 border-slate-400 text-slate-600 font-bold text-xs uppercase">
                              VIEW DETAILS
                            </button>
                            <button
                              className="px-4 py-1.5 bg-slate-300 text-slate-500 border-2 border-slate-400 font-bold text-xs uppercase cursor-not-allowed"
                              disabled
                              title="needs CGPA ≥ 9.0 (Candidate: 8.84)"
                            >
                              APPLY LOCKED
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  {/* RIGHT COLUMN (5 cols): Selected Opportunity Detail Inspector &amp; Timeline */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Detail Inspector Panel */}
                    <div
                      className="bg-white border-4 border-border-dark"
                      id="oppDetailPanel"
                      style={{ boxShadow: "rgb(17, 17, 17) 8px 8px 0px" }}
                    >
                      <div className="p-4 bg-slate-50 border-b-2 border-border-dark">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 bg-[#635BFF] flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0"
                              id="detailLogo"
                            >
                              ST
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span
                                  className="text-[10px] px-1.5 py-0.2 bg-white border border-border-dark font-bold uppercase text-slate-800"
                                  id="detailTypeBadge"
                                >
                                  FULL-TIME • HYBRID
                                </span>
                                <span
                                  className="text-[10px] px-2 py-0.2 bg-[#ECFDF3] text-brand-green border border-brand-green font-bold tabular-nums"
                                  id="detailMatchBadge"
                                >
                                  92% MATCH
                                </span>
                              </div>
                              <h2
                                className="text-base font-extrabold text-[#111111] uppercase leading-snug mt-0.5"
                                id="detailRoleTitle"
                              >
                                Backend Engineer (Payments Infra)
                              </h2>
                              <p
                                className="text-xs text-slate-600 font-semibold"
                                id="detailCompanyTitle"
                              >
                                Stripe India Development Center
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              className="p-1.5 border-2 border-border-dark bg-white hover:bg-slate-100 text-slate-700"
                              title="Share"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                share
                              </span>
                            </button>
                            <button
                              className="p-1.5 border-2 border-border-dark bg-white hover:bg-slate-100 text-slate-700"
                              id="detailBookmarkBtn"
                              title="Bookmark"
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                bookmark_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* 2x3 Key Facts Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 divide-x-2 divide-y-2 border-b-2 border-border-dark bg-white text-xs">
                        <div className="p-2.5 border-t-0 border-l-0">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            COMPENSATION
                          </span>
                          <span
                            className="font-extrabold text-[#111111] tabular-nums"
                            id="factPay"
                          >
                            18.5 LPA
                          </span>
                        </div>
                        <div className="p-2.5 border-t-0">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            LOCATION
                          </span>
                          <span
                            className="font-extrabold text-[#111111]"
                            id="factLocation"
                          >
                            Bengaluru (Hybrid)
                          </span>
                        </div>
                        <div className="p-2.5 border-t-0 sm:border-r-0">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            DEADLINE
                          </span>
                          <span
                            className="font-extrabold text-brand-red tabular-nums"
                            id="factDeadline"
                          >
                            30 SEP (23:59 IST)
                          </span>
                        </div>
                        <div className="p-2.5 border-l-0">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            TARGET OPENINGS
                          </span>
                          <span
                            className="font-extrabold text-[#111111] tabular-nums"
                            id="factOpenings"
                          >
                            14 Campus Roles
                          </span>
                        </div>
                        <div className="p-2.5">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            DURATION / BOND
                          </span>
                          <span
                            className="font-extrabold text-[#111111]"
                            id="factBond"
                          >
                            No Employment Bond
                          </span>
                        </div>
                        <div className="p-2.5 sm:border-r-0">
                          <span className="text-[9px] font-bold text-slate-500 uppercase block">
                            ELIGIBLE BATCH
                          </span>
                          <span
                            className="font-extrabold text-[#111111] tabular-nums"
                            id="factBatch"
                          >
                            2026 Passing Out
                          </span>
                        </div>
                      </div>
                      {/* Inspector Sub-Tabs */}
                      <div className="border-b-2 border-border-dark flex bg-slate-100 text-xs">
                        <button
                          className="sub-tab-btn flex-1 py-2 px-1 text-center font-bold uppercase border-r-2 border-border-dark bg-white text-brand-blue"
                          data-tab="overview"
                        >
                          OVERVIEW
                        </button>
                        <button
                          className="sub-tab-btn flex-1 py-2 px-1 text-center font-bold uppercase border-r-2 border-border-dark text-slate-700 hover:bg-slate-200"
                          data-tab="eligibility"
                        >
                          ELIGIBILITY
                        </button>
                        <button
                          className="sub-tab-btn flex-1 py-2 px-1 text-center font-bold uppercase border-r-2 border-border-dark text-slate-700 hover:bg-slate-200"
                          data-tab="process"
                        >
                          PROCESS
                        </button>
                        <button
                          className="sub-tab-btn flex-1 py-2 px-1 text-center font-bold uppercase text-slate-700 hover:bg-slate-200"
                          data-tab="skills"
                        >
                          SKILLS
                        </button>
                      </div>
                      {/* Sub-Tab Content */}
                      <div className="p-4 min-h-[220px]" id="detailSubContent">
                        {/* Dynamically populated */}
                      </div>
                      {/* Sticky Bottom Action Bar */}
                      <div className="p-3 bg-slate-50 border-t-2 border-border-dark flex items-center justify-between gap-3">
                        <button
                          className="px-3 py-2 bg-white border-2 border-border-dark neo-shadow-sm font-bold text-xs uppercase hover:bg-slate-100 flex items-center gap-1"
                          id="saveForLaterBtn"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            bookmark_border
                          </span>
                          <span className>SAVE FOR LATER</span>
                        </button>
                        <button
                          className="flex-1 py-2.5 px-4 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs uppercase hover:bg-blue-700 flex items-center justify-center gap-1.5"
                          id="detailApplyBtn"
                        >
                          <span className>APPLY NOW →</span>
                        </button>
                      </div>
                    </div>
                    {/* Recruitment Drive Timeline */}
                    <div className="bg-white border-2 border-border-dark neo-shadow flex flex-col justify-between">
                      <div>
                        <div className="p-4 border-b-2 border-border-dark bg-slate-50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-800 text-lg">
                              calendar_month
                            </span>
                            <h2 className="text-sm sm:text-base font-bold uppercase text-[#111111]">
                              RECRUITMENT TIMELINE
                            </h2>
                          </div>
                          <span className="text-xs font-bold px-2 py-0.5 bg-white border border-border-dark">
                            Q3 SCHEDULE
                          </span>
                        </div>
                        <div className="p-5 relative space-y-6">
                          <div className="absolute left-9 top-8 bottom-8 w-0.5 bg-border-dark z-0" />
                          {/* Event 1 */}
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-10 h-10 bg-white border-2 border-border-dark neo-shadow-sm flex flex-col items-center justify-center shrink-0">
                              <span className="text-[9px] uppercase font-bold text-slate-500 leading-none">
                                SEP
                              </span>
                              <span className="text-sm font-extrabold text-[#111111] leading-none mt-0.5 tabular-nums">
                                24
                              </span>
                            </div>
                            <div className="flex-1 p-3 bg-slate-50 border-2 border-border-dark neo-shadow-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#111111] text-xs sm:text-sm">
                                  TechNova Systems
                                </span>
                                <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-1.5 border border-brand-blue tabular-nums">
                                  10:00 - 12:00
                                </span>
                              </div>
                              <div className="text-xs text-slate-600 mt-1">
                                National Online Aptitude &amp; Core CS
                                Assessment
                              </div>
                              <div className="text-[11px] text-slate-800 font-bold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px] text-brand-green">
                                  lock
                                </span>
                                <span className>
                                  LAB: CS-TERMINAL-04 (PROCTORED)
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Event 2 */}
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-10 h-10 bg-white border-2 border-border-dark neo-shadow-sm flex flex-col items-center justify-center shrink-0">
                              <span className="text-[9px] uppercase font-bold text-slate-500 leading-none">
                                SEP
                              </span>
                              <span className="text-sm font-extrabold text-brand-green leading-none mt-0.5 tabular-nums">
                                27
                              </span>
                            </div>
                            <div className="flex-1 p-3 bg-slate-50 border-2 border-border-dark neo-shadow-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#111111] text-xs sm:text-sm">
                                  Cisco Systems
                                </span>
                                <span className="text-[11px] font-bold text-brand-green bg-green-50 px-1.5 border border-brand-green tabular-nums">
                                  14:30 IST
                                </span>
                              </div>
                              <div className="text-xs text-slate-600 mt-1">
                                Technical Round 1: Linux &amp; Networking Depth
                              </div>
                              <div className="text-[11px] text-slate-800 font-bold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">
                                  videocam
                                </span>
                                <span className>WEBEX ROOM #88-CISCO-BLR</span>
                              </div>
                            </div>
                          </div>
                          {/* Event 3 */}
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-50 border-2 border-brand-red neo-shadow-sm flex flex-col items-center justify-center shrink-0">
                              <span className="text-[9px] uppercase font-bold text-brand-red leading-none">
                                SEP
                              </span>
                              <span className="text-sm font-extrabold text-brand-red leading-none mt-0.5 tabular-nums">
                                30
                              </span>
                            </div>
                            <div className="flex-1 p-3 bg-red-50/40 border-2 border-brand-red neo-shadow-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#111111] text-xs sm:text-sm">
                                  Stripe India
                                </span>
                                <span className="text-[10px] font-bold text-white bg-brand-red px-1.5 uppercase">
                                  FINAL CALL
                                </span>
                              </div>
                              <div className="text-xs text-slate-700 mt-1">
                                Portal Registration &amp; Resume Hard-Lock
                                Deadline
                              </div>
                              <div className="text-[11px] text-brand-red font-bold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">
                                  alarm
                                </span>
                                <span className="tabular-nums">
                                  T-MINUS 6 DAYS TO PORTAL CUTOFF
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-slate-50 border-t-2 border-border-dark flex items-center justify-between text-[11px] text-slate-600">
                        <span className>TIMEZONE: ASIA/KOLKATA (IST)</span>
                        <button className="font-bold text-brand-blue uppercase hover:underline">
                          SYNC TO CALENDAR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Notice */}
                <div className="p-3 bg-slate-50 border-2 border-border-dark flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
                  <span className="font-bold text-[#111111]">
                    NITK PLACEMENT CELL MANDATE: STRICT ONE-STUDENT-ONE-OFFER
                    RULES ENFORCED
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="material-symbols-outlined text-[16px] text-brand-green">
                      verified_user
                    </span>
                    <span className>AUTOMATIC TPO AUDIT SIGN-OFF ENABLED</span>
                  </span>
                </div>
              </section>
            </div>
          </main>
        </div>
        {/* MULTI-STEP APPLICATION FLOW MODAL */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 hidden"
          id="applyModal"
        >
          <div className="bg-white border-2 border-border-dark w-full max-w-xl neo-shadow rounded-none">
            {/* Header */}
            <div className="p-4 bg-slate-100 border-b-2 border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-blue text-xl font-bold">
                  send
                </span>
                <h3
                  className="text-sm sm:text-base font-bold uppercase text-[#111111]"
                  id="applyModalTitle"
                >
                  SUBMIT APPLICATION
                </h3>
              </div>
              <button className="w-8 h-8 flex items-center justify-center border-2 border-border-dark bg-white hover:bg-slate-200 font-bold">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            {/* Stepper Indicator */}
            <div className="grid grid-cols-3 border-b-2 border-border-dark text-[11px] font-bold uppercase">
              <div
                className="p-2.5 text-center bg-white border-r-2 border-border-dark text-brand-blue flex items-center justify-center gap-1.5"
                id="modalStepIndicator-1"
              >
                <span className="w-4 h-4 bg-brand-blue text-white flex items-center justify-center text-[10px]">
                  1
                </span>
                <span className>REVIEW PROFILE</span>
              </div>
              <div
                className="p-2.5 text-center bg-slate-100 border-r-2 border-border-dark text-slate-500 flex items-center justify-center gap-1.5"
                id="modalStepIndicator-2"
              >
                <span className="w-4 h-4 bg-slate-300 text-slate-700 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span className>DOCUMENTS</span>
              </div>
              <div
                className="p-2.5 text-center bg-slate-100 text-slate-500 flex items-center justify-center gap-1.5"
                id="modalStepIndicator-3"
              >
                <span className="w-4 h-4 bg-slate-300 text-slate-700 flex items-center justify-center text-[10px]">
                  3
                </span>
                <span className>CONFIRM</span>
              </div>
            </div>
            {/* Step 1 Content: Locked Institutional Profile */}
            <div className="p-5 space-y-4" id="modalStepContent-1">
              <div className="p-3 bg-blue-50 border-2 border-brand-blue/60 text-xs text-slate-700">
                <strong>Institutional Clearance:</strong> Your grades,
                attendance, and standing arrears are cryptographically locked by
                NITK TPO cell. These cannot be altered during submission.
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-slate-50 border-2 border-border-dark">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    STUDENT NAME
                  </span>
                  <span className="font-bold text-[#111111]">Aarav Sharma</span>
                </div>
                <div className="p-2.5 bg-slate-50 border-2 border-border-dark">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    ROLL / USN
                  </span>
                  <span className="font-bold text-[#111111] tabular-nums">
                    #IT24A042
                  </span>
                </div>
                <div className="p-2.5 bg-slate-50 border-2 border-border-dark">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    VERIFIED CGPA
                  </span>
                  <span className="font-bold text-brand-green tabular-nums">
                    8.84 (Zero Arrears)
                  </span>
                </div>
                <div className="p-2.5 bg-slate-50 border-2 border-border-dark">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    ATTENDANCE LOG
                  </span>
                  <span className="font-bold text-brand-green tabular-nums">
                    89.4% (Eligible)
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  TARGET OPPORTUNITY
                </label>
                <input
                  className="w-full bg-slate-100 border-2 border-border-dark p-2 text-xs font-bold text-[#111111] cursor-not-allowed"
                  id="applyModalRoleInput"
                  readOnly
                  type="text"
                  defaultValue
                />
              </div>
            </div>
            {/* Step 2 Content: Document Attachments */}
            <div className="p-5 space-y-4 hidden" id="modalStepContent-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  SELECT AUDITED RESUME ARTIFACT
                </label>
                <select
                  className="w-full bg-white border-2 border-border-dark p-2 text-xs text-[#111111] focus:outline-none"
                  id="applyResumeSelect"
                >
                  <option value="tech">
                    Aarav_Sharma_Backend_Resume_v4.pdf (Audited 12 Sep)
                  </option>
                  <option value="sre">
                    Aarav_Sharma_SRE_Cloud_v2.pdf (Audited 28 Aug)
                  </option>
                  <option value="general">
                    Aarav_Sharma_Master_NITK_Format.pdf (Standard)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  OPTIONAL COVER NOTE (MAX 300 CHARACTERS)
                </label>
                <textarea
                  className="w-full bg-white border-2 border-border-dark p-2 text-xs text-[#111111] focus:outline-none h-20"
                  maxLength={300}
                  placeholder="Highlight relevant coursework, capstones or why you're interested in this role..."
                  defaultValue={""}
                />
              </div>
              <div className="p-3 bg-slate-50 border-2 border-border-dark text-xs space-y-1">
                <span className="text-[10px] font-bold text-brand-green uppercase block">
                  ✓ ATTACHED TRANSCRIPTS:
                </span>
                <span className="text-slate-600 block">
                  Sem I to Sem V Official Grade Cards (SHA-256 Signoff
                  #8490a...c2)
                </span>
              </div>
            </div>
            {/* Step 3 Content: Confirmation &amp; Consent */}
            <div className="p-5 space-y-4 hidden" id="modalStepContent-3">
              <div className="p-3 bg-amber-50 border-2 border-brand-yellow text-xs text-amber-950 space-y-1">
                <strong>Placement Undertaking Notice:</strong>
                <p className>
                  By submitting this application, you agree to appear for all
                  rounds if shortlisted. Unexcused absence will incur placement
                  lockouts per institute guidelines.
                </p>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  className="w-4 h-4 mt-0.5 rounded-none text-brand-blue border-2 border-border-dark focus:ring-0 cursor-pointer"
                  id="applyConsentCheckbox"
                  type="checkbox"
                />
                <label
                  className="text-xs text-slate-800 font-medium cursor-pointer"
                  htmlFor="applyConsentCheckbox"
                >
                  I solemnly confirm my details are accurate and consent to
                  share my verified institutional profile with{" "}
                  <span className="font-bold" id="applyConsentCompany">
                    the hiring company
                  </span>
                  .
                </label>
              </div>
            </div>
            {/* Modal Action Footer */}
            <div className="p-4 bg-slate-50 border-t-2 border-border-dark flex items-center justify-between">
              <button
                className="px-4 py-2 bg-white border-2 border-border-dark text-xs font-bold uppercase hover:bg-slate-100"
                id="modalBackBtn"
              >
                CANCEL
              </button>
              <div className="flex items-center gap-2">
                <button
                  className="px-5 py-2 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active text-xs font-bold uppercase hover:bg-blue-700"
                  id="modalNextBtn"
                >
                  NEXT STEP →
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* UPLOAD MODAL (TAB 2) */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 hidden"
          id="uploadModal"
        >
          <div className="bg-white border-2 border-border-dark w-full max-w-xl neo-shadow rounded-none">
            <div className="p-4 bg-slate-100 border-b-2 border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-blue text-xl font-bold">
                  upload_file
                </span>
                <h3 className="text-sm sm:text-base font-bold uppercase text-[#111111]">
                  SUBMIT PROOF OF WORK
                </h3>
              </div>
              <button className="w-8 h-8 flex items-center justify-center border-2 border-border-dark bg-white hover:bg-slate-200 font-bold">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  VERIFICATION CATEGORY
                </label>
                <select className="w-full bg-white border-2 border-border-dark p-2 text-xs text-[#111111] focus:outline-none">
                  <option>
                    AWS / Cloud Certification (+18% Golden Path Boost)
                  </option>
                  <option>Docker / Containerization Project Proof</option>
                  <option>Hackathon Winner Credential</option>
                  <option>Industry Internship Completion Letter</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  ITEM / CREDENTIAL TITLE
                </label>
                <input
                  className="w-full bg-white border-2 border-border-dark p-2 text-xs text-[#111111] focus:outline-none"
                  type="text"
                  defaultValue="AWS Certified Solutions Architect / Cloud Practitioner"
                />
              </div>
              <div className="border-2 border-dashed border-border-dark p-6 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer neo-shadow-sm">
                <span className="material-symbols-outlined text-3xl text-brand-blue">
                  file_present
                </span>
                <div className="text-xs font-bold text-[#111111] mt-1">
                  CLICK TO ATTACH PDF / PNG (MAX 10MB)
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  SHA-256 AUTOMATICALLY IMMUTABLY LOGGED
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t-2 border-border-dark flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                ENCRYPTED AT REST • AES-256
              </span>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white border-2 border-border-dark text-xs font-bold uppercase hover:bg-slate-100">
                  CANCEL
                </button>
                <button className="px-4 py-2 bg-brand-blue text-white border-2 border-border-dark neo-shadow neo-shadow-active text-xs font-bold uppercase hover:bg-blue-700">
                  COMMIT &amp; TRANSMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* TOAST NOTIFICATION */}
        <div
          className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none"
          id="toastBox"
        >
          <div className="bg-[#111111] text-white border-2 border-border-dark p-4 neo-shadow flex items-center gap-3">
            <span
              className="material-symbols-outlined text-brand-green text-2xl"
              id="toastIcon"
            >
              check_circle
            </span>
            <div>
              <div className="font-bold text-xs uppercase" id="toastTitle">
                APPLICATION TRANSMITTED
              </div>
              <div className="text-[11px] text-slate-300" id="toastMsg">
                Logged with NITK TPO cell.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
