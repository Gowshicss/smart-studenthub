// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TPODashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "cohort" | "dispatcher" | "placement"
  >("cohort");
  const [activePlacementTab, setActivePlacementTab] = useState<
    "placed" | "unplaced"
  >("placed");
  return (
    <>
      <div>
        <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant z-50 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="h-16 px-space-lg flex items-center justify-between border-b border-outline-variant bg-surface-container-low">
              <div className="flex items-center gap-space-sm">
                <div className="w-5 h-5 bg-primary-container flex items-center justify-center text-on-primary font-label-code-md text-label-code-md font-bold">
                  TN
                </div>
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-bold uppercase">
                  TECHNOVA
                </span>
              </div>
              <span className="font-label-code-sm text-label-code-sm bg-surface-container border border-outline-variant px-1.5 py-0.5 text-on-surface-variant">
                v4.2
              </span>
            </div>
            <div className="px-space-md py-space-sm border-b border-outline-variant bg-surface">
              <div className="flex items-center justify-between">
                <span className="font-label-code-sm text-label-code-sm uppercase text-secondary">
                  TELEMETRY NODE
                </span>
                <span className="font-label-code-sm text-label-code-sm text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
            <nav
              className="flex flex-col p-space-sm gap-space-xs"
              data-active-classes="bg-primary-container text-on-primary font-semibold shadow-[2px_2px_0px_#111111]"
            >
              <div className="px-space-sm py-space-xs font-label-code-sm text-label-code-sm uppercase text-secondary">
                Command Scopes
              </div>
              <a
                className="flex items-center justify-between px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent hover:border-outline-variant transition-none"
                data-path="student-command-center"
                href="#"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    person
                  </span>
                  <span className="font-body-md text-body-md">
                    Student Scope
                  </span>
                </div>
                <span className="font-label-code-sm text-label-code-sm px-1 bg-surface-container-high text-on-surface-variant border border-outline-variant">
                  78%
                </span>
              </a>
              <a
                className="flex items-center justify-between px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent hover:border-outline-variant transition-none"
                data-path="mentor-command-center"
                href="#"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    supervisor_account
                  </span>
                  <span className="font-body-md text-body-md">
                    Cohort Manager
                  </span>
                </div>
                <span className="font-label-code-sm text-label-code-sm px-1 bg-error-container text-on-error-container border border-error">
                  06
                </span>
              </a>
              <a
                aria-current="page"
                className="flex items-center justify-between px-space-md py-space-sm rounded border border-transparent hover:border-outline-variant transition-none bg-primary-container text-on-primary font-semibold shadow-[2px_2px_0px_#111111]"
                data-path="tpo-placement-intelligence-center"
                href="#"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    analytics
                  </span>
                  <span className="font-body-md text-body-md">
                    TPO Intelligence
                  </span>
                </div>
                <span className="font-label-code-sm text-label-code-sm px-1 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary">
                  MACRO
                </span>
              </a>
              <div className="mt-space-md px-space-sm py-space-xs font-label-code-sm text-label-code-sm uppercase text-secondary">
                Operations
              </div>
              <a
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent hover:border-outline-variant transition-none"
                data-path="verification-ledger"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span className="font-body-md text-body-md">
                  Verification Log
                </span>
              </a>
            </nav>
          </div>
          <div className="p-space-md border-t border-outline-variant bg-surface-container-low">
            <div className="p-space-sm border border-outline-variant bg-surface-container-lowest shadow-[2px_2px_0px_#111111]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-code-sm text-label-code-sm uppercase text-secondary">
                  INSTITUTE FEED
                </span>
                <span className="font-label-code-sm text-label-code-sm text-tertiary">
                  SYNCED
                </span>
              </div>
              <div className="font-label-code-md text-label-code-md font-semibold text-on-surface truncate">
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
        <div className="pl-64">
          <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest border-b border-outline-variant z-40 px-space-xl flex items-center justify-between">
            <div className="flex items-center gap-space-lg">
              <div className="flex items-center border border-outline-variant px-space-md py-1 bg-surface">
                <span className="font-label-code-sm text-label-code-sm uppercase text-secondary mr-2">
                  LEDGER RUNTIME:
                </span>
                <span className="font-label-code-md text-label-code-md text-on-surface font-semibold">
                  AY-2024/25.Q2
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-space-xs text-secondary font-label-code-sm text-label-code-sm">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  verified_user
                </span>
                <span className="">
                  ISO-27001 AUDITED VERIFICATION PIPELINE
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs px-2 py-1 bg-surface border border-outline-variant font-label-code-sm text-label-code-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary-container" />
                <span className="text-on-surface font-medium">
                  ACTIVE SESSION
                </span>
              </div>
              <div className="h-6 w-px bg-outline-variant" />
              <div className="flex items-center gap-space-sm pl-space-xs">
                <div className="text-right hidden sm:block">
                  <div className="font-label-code-sm text-label-code-sm font-semibold text-on-surface">
                    DR. ARUNACHALAM
                  </div>
                  <div className="font-label-code-sm text-label-code-sm text-secondary">
                    HEAD OF TPO &amp; TALENT OPS
                  </div>
                </div>
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-outline-variant shadow-[1px_1px_0px_#111111]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VopixYv-uuD28nFC2hRkt7JifJFJbRzQyvHKbagcYbnVaZ0Igy3AtO95NePwp-RsZGbD2FgCrc-KYoZnoxIbsZz2vbLZWkTEojTdoxTRWPJ2Hdk2duEniq8VpGZVe-hVkJ1hbNrrhhdkB0sUQ7xF676Ny1wT1vowcNQKk3hoAPuqkwiTRIm3NuqOJOiVrIJEnUFt2YTnyLswzk12iX6QF2zdGPCaiqXKhcS6tJHZD3aTDQ3liky5fMKGaC"
                />
              </div>
            </div>
          </header>
          <main className="w-full pt-16 bg-surface">
            <div className="flex flex-col w-full">
              {/* Top Operational Alert / Enforcement Strip */}
              <div className="w-full bg-surface-container-low border-b border-outline-variant px-space-xl py-space-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-code-sm text-label-code-sm font-semibold border border-tertiary uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping" />
                    Zero Self-Proclamation Protocol Active
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Recruiter matching engine suppresses unverified credentials.
                    All CGPA, skill, and attendance matrices are
                    cryptographically signed by assigned faculty mentors.
                  </span>
                </div>
                <div className="flex items-center gap-space-md shrink-0">
                  <span className="font-label-code-sm text-label-code-sm text-secondary">
                    LEDGER SYNC: 14 SEC AGO
                  </span>
                  <button className="px-2 py-1 bg-surface-container-lowest border border-outline font-label-code-sm text-label-code-sm text-on-surface hover:bg-surface-container transition-none flex items-center gap-1 shadow-[2px_2px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                    <span className="material-symbols-outlined text-[14px]">
                      refresh
                    </span>
                    AUDIT RE-SCAN
                  </button>
                </div>
              </div>
              <div className="p-space-xl flex flex-col gap-space-xl max-w-[1440px] mx-auto w-full">
                {/* Subheader Macro Status */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-sm border-b border-outline-variant">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                        INSTITUTIONAL TELEMETRY
                      </span>
                      <span className="text-outline-variant">/</span>
                      <span className="font-label-code-sm text-label-code-sm text-primary uppercase font-bold">
                        EXECUTIVE PLACEMENT COCKPIT
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-bold">
                      Placement Intelligence &amp; Verified Talent Engine
                    </h1>
                  </div>
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <span className="font-label-code-sm text-label-code-sm bg-surface-container border border-outline-variant px-2.5 py-1 text-on-surface font-medium">
                      BATCH:{" "}
                      <strong className="text-primary font-bold tabular-nums">
                        2021–2025
                      </strong>
                    </span>
                    <span className="font-label-code-sm text-label-code-sm bg-surface-container border border-outline-variant px-2.5 py-1 text-on-surface font-medium">
                      AUDIT CYCLE:{" "}
                      <strong className="text-tertiary font-bold">
                        PASS-Q2
                      </strong>
                    </span>
                    <button className="px-3 py-1 bg-surface-container-lowest border border-outline font-label-code-sm text-label-code-sm font-semibold text-on-surface shadow-[2px_2px_0px_#111111] hover:bg-surface-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        file_download
                      </span>
                      TPO NIRF EXPORT
                    </button>
                  </div>
                </div>
                {/* 1. Neo-Brutalist Three-Tab Bar */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  id="main-tab-bar"
                >
                  <button
                    onClick={() => setActiveTab("cohort")}
                    className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "cohort" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`}
                    id="tab-btn-cohort"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      groups
                    </span>
                    <span>1. COHORT OVERVIEW</span>
                    <span
                      className={`ml-1 px-2 py-0.5 text-[12px] font-bold border tabular-nums ${activeTab === "cohort" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-surface-container border-outline-variant text-secondary"}`}
                      id="tab-badge-cohort"
                    >
                      3,842
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("dispatcher")}
                    className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "dispatcher" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`}
                    id="tab-btn-dispatcher"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      bolt
                    </span>
                    <span>2. QUICK DRIVE DISPATCHER</span>
                    <span
                      className={`ml-1 px-2 py-0.5 text-[12px] font-bold border ${activeTab === "dispatcher" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-surface-container border-outline-variant text-secondary"}`}
                      id="tab-badge-dispatcher"
                    >
                      STAGING
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("placement")}
                    className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "placement" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`}
                    id="tab-btn-placement"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      work
                    </span>
                    <span>3. PLACEMENT</span>
                    <span
                      className={`ml-1 px-2 py-0.5 text-[12px] font-bold tabular-nums border ${activeTab === "placement" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-tertiary-fixed text-on-tertiary-fixed border-tertiary"}`}
                      id="tab-badge-placement"
                    >
                      68.4%
                    </span>
                  </button>
                </div>
                {/* TAB 1 PANEL: COHORT OVERVIEW */}
                <div
                  className={
                    activeTab === "cohort"
                      ? "flex flex-col gap-space-xl"
                      : "hidden"
                  }
                  id="panel-cohort"
                >
                  {/* 6-card KPI Row (Sharp 1px Border Matrix) */}
                  <section>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 border border-outline-variant bg-outline-variant gap-px">
                      {/* Metric 1 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                            Total Cohort
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            groups
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-on-surface tabular-nums">
                            3,842
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-secondary">
                            All Final Year Registered
                          </div>
                        </div>
                      </div>
                      {/* Metric 2 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-primary font-semibold">
                            Verified Talent
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            verified
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-primary tabular-nums">
                            3,126
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-tertiary font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                            100% MENTOR AUDITED
                          </div>
                        </div>
                      </div>
                      {/* Metric 3 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                            Active Drives
                          </span>
                          <span className="px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed font-label-code-sm text-label-code-sm font-bold border border-primary">
                            LIVE
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-on-surface tabular-nums">
                            12
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-secondary">
                            4 Multi-National Scheduled
                          </div>
                        </div>
                      </div>
                      {/* Metric 4 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                            Overall Placed
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            trending_up
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-on-surface tabular-nums">
                            68.4%
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-tertiary font-medium">
                            +4.2% YoY vs 2024.Q2
                          </div>
                        </div>
                      </div>
                      {/* Metric 5: Unplaced Eligible updated to 1,214 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-error font-semibold">
                            Unplaced Eligible
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-error">
                            person_alert
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-error tabular-nums">
                            1,214
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant">
                            Immediate Focus Target
                          </div>
                        </div>
                      </div>
                      {/* Metric 6 */}
                      <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between h-28">
                        <div className="flex items-center justify-between">
                          <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                            Average CTC
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            payments
                          </span>
                        </div>
                        <div>
                          <div className="font-headline-lg text-headline-lg font-bold text-on-surface tabular-nums">
                            ₹11.4{" "}
                            <span className="font-label-code-md text-label-code-md font-normal text-secondary">
                              LPA
                            </span>
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                            MEDIAN: ₹9.8 LPA
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Bento Split: Campus Skill Supply (65% / col-8) &amp; AI Placement Diagnostic (35% / col-4 full height) */}
                  <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
                    {/* Gap Matrix Table &amp; Visual Bar */}
                    <div className="xl:col-span-8 bg-surface-container-lowest border border-outline-variant p-space-lg flex flex-col justify-between shadow-[2px_2px_0px_#111111]">
                      <div>
                        <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-md">
                          <div>
                            <span className="font-label-code-sm text-label-code-sm uppercase text-secondary font-medium">
                              TALENT MARKET ARBITRAGE
                            </span>
                            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">
                              Campus Skill Supply vs Recruiter Pipeline Demand
                            </h2>
                          </div>
                          <span className="font-label-code-sm text-label-code-sm px-2 py-0.5 bg-surface-container border border-outline-variant text-secondary">
                            DERIVED FROM 12 ACTIVE HIRING JDs
                          </span>
                        </div>
                        <div className="space-y-space-md">
                          {/* Row 1: Python */}
                          <div className="p-space-sm border border-outline-variant bg-surface hover:bg-surface-container-low transition-none">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-space-sm">
                                <span className="font-label-code-md text-label-code-md font-bold text-on-surface">
                                  PYTHON / DATA SCIENCE
                                </span>
                                <span className="font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                                  SUPPLY: 680 | DEMAND: 500
                                </span>
                              </div>
                              <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-code-sm text-label-code-sm font-bold border border-tertiary tabular-nums">
                                +180 SUFFICIENT
                              </span>
                            </div>
                            <div className="w-full bg-surface-container-highest h-3 flex overflow-hidden border border-outline-variant">
                              <div
                                className="bg-tertiary h-full"
                                style={{ width: "100%" }}
                              />
                            </div>
                            <div className="flex justify-between font-label-code-sm text-label-code-sm text-secondary mt-1 tabular-nums">
                              <span>Verified Baseline: 680 Candidates</span>
                              <span>
                                Job Openings: 500 Seats (136% Coverage)
                              </span>
                            </div>
                          </div>
                          {/* Row 2: AWS Cloud */}
                          <div className="p-space-sm border border-error bg-error-container/20">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-space-sm">
                                <span className="font-label-code-md text-label-code-md font-bold text-on-surface">
                                  AWS CLOUD ARCHITECTURE
                                </span>
                                <span className="font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                                  SUPPLY: 120 | DEMAND: 380
                                </span>
                              </div>
                              <span className="px-2 py-0.5 bg-error-container text-on-error-container font-label-code-sm text-label-code-sm font-bold border border-error tabular-nums">
                                -260 CRITICAL GAP
                              </span>
                            </div>
                            <div className="w-full bg-surface-container-highest h-3 flex overflow-hidden border border-outline-variant">
                              <div
                                className="bg-primary h-full"
                                style={{ width: "31.5%" }}
                              />
                              <div
                                className="bg-error/30 h-full repeating-linear-gradient"
                                style={{ width: "68.5%" }}
                              />
                            </div>
                            <div className="flex justify-between font-label-code-sm text-label-code-sm text-error font-medium mt-1 tabular-nums">
                              <span>
                                Severe Shortage: Recruiter requisition unfilled
                              </span>
                              <span>Demand Deficit: 68.5%</span>
                            </div>
                          </div>
                          {/* Row 3: Docker / Kubernetes */}
                          <div className="p-space-sm border border-error bg-error-container/20">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-space-sm">
                                <span className="font-label-code-md text-label-code-md font-bold text-on-surface">
                                  DOCKER &amp; KUBERNETES
                                </span>
                                <span className="font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                                  SUPPLY: 45 | DEMAND: 210
                                </span>
                              </div>
                              <span className="px-2 py-0.5 bg-error-container text-on-error-container font-label-code-sm text-label-code-sm font-bold border border-error tabular-nums">
                                -165 CRITICAL GAP
                              </span>
                            </div>
                            <div className="w-full bg-surface-container-highest h-3 flex overflow-hidden border border-outline-variant">
                              <div
                                className="bg-primary h-full"
                                style={{ width: "21.4%" }}
                              />
                              <div
                                className="bg-error/30 h-full"
                                style={{ width: "78.6%" }}
                              />
                            </div>
                            <div className="flex justify-between font-label-code-sm text-label-code-sm text-error font-medium mt-1 tabular-nums">
                              <span>Supply Index: 21.4% Coverage</span>
                              <span>Immediate Bootcamp Required</span>
                            </div>
                          </div>
                          {/* Row 4: React / Modern Web */}
                          <div className="p-space-sm border border-outline-variant bg-surface hover:bg-surface-container-low transition-none">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-space-sm">
                                <span className="font-label-code-md text-label-code-md font-bold text-on-surface">
                                  REACT / NEXT.JS FRONTEND
                                </span>
                                <span className="font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                                  SUPPLY: 320 | DEMAND: 460
                                </span>
                              </div>
                              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-code-sm text-label-code-sm font-bold border border-outline tabular-nums">
                                -140 MODERATE GAP
                              </span>
                            </div>
                            <div className="w-full bg-surface-container-highest h-3 flex overflow-hidden border border-outline-variant">
                              <div
                                className="bg-primary h-full"
                                style={{ width: "69.5%" }}
                              />
                              <div
                                className="bg-secondary/20 h-full"
                                style={{ width: "30.5%" }}
                              />
                            </div>
                            <div className="flex justify-between font-label-code-sm text-label-code-sm text-secondary mt-1 tabular-nums">
                              <span>Verified: 320 Students</span>
                              <span>Shortage: 30.5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-space-md pt-space-sm border-t border-outline-variant flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            insights
                          </span>
                          <span className="font-label-code-sm text-label-code-sm text-secondary">
                            Aggregated across CSE, IT, ECE, EEE placement
                            rosters.
                          </span>
                        </div>
                        <button className="font-label-code-sm text-label-code-sm text-primary font-bold hover:underline flex items-center gap-1">
                          VIEW SKILL DRILL-DOWN{" "}
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* AI Placement Diagnostic Card (taking full height of column) */}
                    <div className="xl:col-span-4 flex flex-col">
                      <div className="bg-surface-container-lowest border border-outline-variant p-space-lg shadow-[2px_2px_0px_#111111] h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-space-sm pb-space-xs border-b border-outline-variant">
                            <span className="material-symbols-outlined text-[18px] text-primary">
                              auto_awesome
                            </span>
                            <span className="font-label-code-sm text-label-code-sm uppercase tracking-wider font-bold text-primary">
                              AI Placement Diagnostic
                            </span>
                          </div>
                          <div className="p-space-md bg-primary-fixed/20 border border-primary/40 mb-space-md">
                            <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                              <strong className="font-bold text-primary">
                                CAMPUS-WIDE ALERT:
                              </strong>{" "}
                              78% of unplaced students targeting Backend &amp;
                              DevOps profiles lack CI/CD &amp; verified Cloud
                              infrastructure credentials.
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                              Action proposal: Authorize an intensive 10-day
                              institutional AWS Workshop. Projected to unlock
                              eligibility for{" "}
                              <strong className="text-on-surface font-semibold tabular-nums">
                                450+ unplaced students
                              </strong>{" "}
                              across Morgan Stanley, Cisco, and Goldman drives.
                            </p>
                          </div>
                          <div className="p-space-sm bg-surface-container border border-outline-variant mb-space-md">
                            <div className="flex items-center justify-between text-[12px] font-semibold text-secondary mb-1">
                              <span>ADVISORY TARGET BATCH</span>
                              <span className="text-primary">
                                2025 PASSING OUT
                              </span>
                            </div>
                            <div className="text-[12px] text-on-surface font-medium">
                              Prioritized Departments: CSE, IT, ECE (Eligible
                              pool: 1,214 candidates)
                            </div>
                          </div>
                        </div>
                        <div className="pt-space-md border-t border-outline-variant">
                          <button className="w-full py-2 px-3 bg-primary text-on-primary font-label-code-sm text-label-code-sm font-semibold border border-on-surface shadow-[2px_2px_0px_#111111] hover:bg-on-primary-fixed-variant active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-none uppercase">
                            FORWARD TO ACADEMIC DEAN
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                {/* TAB 2 PANEL: QUICK DRIVE DISPATCHER */}
                <div
                  className={activeTab === "dispatcher" ? "block" : "hidden"}
                  id="panel-dispatcher"
                >
                  <div className="max-w-4xl mx-auto w-full bg-surface-container-lowest border-2 border-on-surface p-space-xl shadow-[4px_4px_0px_#111111]">
                    <div className="flex items-center justify-between pb-space-sm border-b-2 border-on-surface mb-space-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[24px] text-on-surface">
                          bolt
                        </span>
                        <h2 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface tracking-tight">
                          Quick Drive Dispatcher
                        </h2>
                      </div>
                      <span className="font-label-code-sm text-label-code-sm bg-surface-container px-2 py-1 text-secondary border border-outline-variant font-bold uppercase">
                        STAGING
                      </span>
                    </div>
                    <div className="space-y-space-md">
                      {/* Row 1 (2 cols): COMPANY &amp; ROLE TYPE */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div>
                          <label className="block font-label-code-sm text-label-code-sm uppercase text-secondary font-bold mb-1.5">
                            Company
                          </label>
                          <input
                            id="publish-company"
                            className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef] font-semibold"
                            type="text"
                            defaultValue="Goldman Sachs"
                          />
                        </div>
                        <div>
                          <label className="block font-label-code-sm text-label-code-sm uppercase text-secondary font-bold mb-1.5">
                            Role Type
                          </label>
                          <input
                            id="publish-role"
                            className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef] font-semibold"
                            type="text"
                            defaultValue="Analyst (Systems)"
                          />
                        </div>
                      </div>
                      {/* Row 2 (2 cols): OFFERED CTC &amp; MIN CGPA FILTER */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div>
                          <label className="block font-label-code-sm text-label-code-sm uppercase text-secondary font-bold mb-1.5">
                            Offered CTC
                          </label>
                          <input
                            id="publish-ctc"
                            className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef] font-semibold tabular-nums"
                            type="text"
                            defaultValue="₹24.0 LPA"
                          />
                        </div>
                        <div>
                          <label className="block font-label-code-sm text-label-code-sm uppercase text-secondary font-bold mb-1.5">
                            Min CGPA Filter
                          </label>
                          <input
                            className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef] font-semibold tabular-nums"
                            id="input-cgpa"
                            type="text"
                            defaultValue={8.0}
                          />
                        </div>
                      </div>
                      {/* Row 3 (full width): AUDITED SKILLSET CRITERIA */}
                      <div>
                        <label className="block font-label-code-sm text-label-code-sm uppercase text-secondary font-bold mb-1.5">
                          Audited Skillset Criteria
                        </label>
                        <input
                          id="publish-skills"
                          className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef] font-semibold"
                          type="text"
                          defaultValue="AWS Cloud, Python, SQL"
                        />
                      </div>
                    </div>
                    {/* Target Verified Pool container */}
                    <div className="mt-space-lg p-space-md bg-surface-container border-2 border-on-surface flex items-center justify-between">
                      <div>
                        <div className="font-label-code-sm text-label-code-sm uppercase text-secondary font-semibold">
                          Target Verified Pool
                        </div>
                        <div
                          className="font-headline-sm text-headline-sm font-bold text-on-surface tabular-nums"
                          id="qualify-count"
                        >
                          142 candidates strictly qualify
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-tertiary text-[28px]">
                        check_circle
                      </span>
                    </div>
                    {/* Bottom Action Button */}
                    <div className="mt-space-lg">
                      <button
                        className="w-full py-3 text-surface-container-lowest font-bold text-[14px] uppercase border-2 border-on-surface bg-on-surface shadow-[4px_4px_0px_#155eef] hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-none"
                        id="btn-publish-drive"
                        onClick={() => {
                          const company =
                            (
                              document.getElementById(
                                "publish-company",
                              ) as HTMLInputElement
                            )?.value || "Goldman Sachs";
                          const role =
                            (
                              document.getElementById(
                                "publish-role",
                              ) as HTMLInputElement
                            )?.value || "Analyst (Systems)";
                          const ctc =
                            (
                              document.getElementById(
                                "publish-ctc",
                              ) as HTMLInputElement
                            )?.value || "₹24.0 LPA";
                          const minCgpa =
                            (
                              document.getElementById(
                                "input-cgpa",
                              ) as HTMLInputElement
                            )?.value || "8.0";
                          const skills =
                            (
                              document.getElementById(
                                "publish-skills",
                              ) as HTMLInputElement
                            )?.value || "AWS Cloud, Python, SQL";

                          // Set deadline to 3 days from now
                          const deadlineDate = new Date();
                          deadlineDate.setDate(deadlineDate.getDate() + 3);

                          const driveData = {
                            company,
                            role,
                            ctc,
                            minCgpa: parseFloat(minCgpa),
                            skills,
                            deadline: deadlineDate.toISOString(),
                            id: Date.now(),
                          };

                          localStorage.setItem(
                            "publishedDrive",
                            JSON.stringify(driveData),
                          );
                          window.dispatchEvent(new Event("storage")); // Trigger update across tabs
                          alert(
                            "Drive published successfully to Smart Notice Board!",
                          );
                        }}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          campaign
                        </span>
                        <span>PUBLISH TO SMART NOTICE BOARD</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* TAB 3 PANEL: PLACEMENT (Sub-tabs PLACED &amp; UNPLACED) */}
                <div
                  className={
                    activeTab === "placement"
                      ? "flex flex-col gap-space-md"
                      : "hidden"
                  }
                  id="panel-placement"
                >
                  {/* Sub-tab buttons side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <button
                      onClick={() => setActivePlacementTab("placed")}
                      className={`p-4 bg-surface-container-lowest text-left border-2 transition-none cursor-pointer flex items-center justify-between ${activePlacementTab === "placed" ? "border-on-surface border-t-4 border-t-tertiary shadow-[4px_4px_0px_#111111]" : "border-outline-variant hover:border-on-surface"}`}
                      id="subtab-btn-placed"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-tertiary text-[20px]">
                            check_circle
                          </span>
                          <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">
                            PLACED
                          </span>
                        </div>
                        <div className="font-headline-lg text-headline-lg font-bold text-tertiary tabular-nums">
                          2,628
                        </div>
                        <div className="font-label-code-sm text-label-code-sm text-secondary font-medium tabular-nums">
                          68.4% of 3,842 Candidates
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[12px] border border-tertiary uppercase">
                        OFFER ACCEPTED
                      </span>
                    </button>
                    <button
                      onClick={() => setActivePlacementTab("unplaced")}
                      className={`p-4 bg-surface-container-lowest text-left border-2 transition-none cursor-pointer flex items-center justify-between ${activePlacementTab === "unplaced" ? "border-on-surface border-t-4 border-t-yellow-800 shadow-[4px_4px_0px_#111111]" : "border-outline-variant hover:border-on-surface"}`}
                      id="subtab-btn-unplaced"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-yellow-800 text-[20px]">
                            schedule
                          </span>
                          <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">
                            UNPLACED
                          </span>
                        </div>
                        <div className="font-headline-lg text-headline-lg font-bold text-on-surface tabular-nums">
                          1,214
                        </div>
                        <div className="font-label-code-sm text-label-code-sm text-secondary font-medium tabular-nums">
                          31.6% of 3,842 Candidates
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 font-bold text-[12px] border border-yellow-800 uppercase">
                        IN PIPELINE
                      </span>
                    </button>
                  </div>
                  {/* Recruiter Matrix Table Container */}
                  <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[2px_2px_0px_#111111]">
                    {/* Simple Filter Bar without filter chips or recruiter toolbar */}
                    <div className="p-space-md border-b border-outline-variant bg-surface flex flex-wrap items-center justify-between gap-space-md">
                      <div className="relative flex-1 max-w-md">
                        <input
                          className="w-full bg-surface-container-lowest border-2 border-on-surface px-3 py-1.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:shadow-[2px_2px_0px_#155eef]"
                          id="table-search-input"
                          placeholder="Filter candidate name / Roll #..."
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute right-2.5 top-2 text-[18px] text-secondary">
                          search
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="px-3 py-1.5 bg-surface-container border border-outline-variant font-label-code-sm text-label-code-sm font-bold text-on-surface tabular-nums"
                          id="subtab-result-count"
                        >
                          2,628 PLACED RESULTS
                        </span>
                      </div>
                    </div>
                    {/* PLACED SUB-PANEL TABLE */}
                    <div
                      className={
                        activePlacementTab === "placed" ? "block" : "hidden"
                      }
                      id="subpanel-placed"
                    >
                      <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface-container-low border-b border-outline-variant font-label-code-sm text-label-code-sm uppercase text-secondary font-bold">
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Student Identity &amp; Roll #
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Department
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                CGPA (Audited)
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                Attendance
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Company
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Role
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                CTC (LPA)
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                Offer Status
                              </th>
                              <th className="py-space-sm px-space-md text-right">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-outline-variant font-body-sm text-body-sm">
                            {/* Row 1: Priya Nair */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-primary-container text-on-primary font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    PN
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Priya Nair
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B031 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                9.21
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                95.2%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                Stripe India
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Backend Engineer
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹18.5
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                            {/* Row 2: Vikram Rao */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    VR
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Vikram Rao
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A007 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.97
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                92.4%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                Goldman Sachs
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Analyst (Systems)
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹24.0
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                            {/* Row 3: Meera Iyer */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    MI
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Meera Iyer
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B077 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                9.05
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                93.8%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                Morgan Stanley
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Technology Analyst
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹22.0
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                            {/* Row 4: Arjun Menon */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    AM
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Arjun Menon
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A051 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.55
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                88.7%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                Razorpay
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Backend Engineer
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹16.0
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                            {/* Row 5: Sneha Kulkarni */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    SK
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Sneha Kulkarni
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B064 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.68
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                90.1%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                Cisco Systems
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Software Engineer
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹14.0
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                            {/* Row 6: Rahul Verma */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    RV
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Rahul Verma
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A066 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                7.92
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                85.3%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-bold text-on-surface">
                                TCS Digital
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-on-surface-variant">
                                Systems Engineer
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-primary tabular-nums">
                                ₹7.0
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary font-bold text-[11px] uppercase">
                                  PLACED
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <button
                                  className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                  onClick={() => navigate("/student")}
                                >
                                  VIEW
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Placed Table Footer */}
                      <div className="p-space-sm px-space-md bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-code-sm text-label-code-sm text-secondary">
                        <div className="flex items-center gap-space-md">
                          <span className="tabular-nums">
                            SHOWING 1–6 OF 2,628 PLACED STUDENTS
                          </span>
                          <span className="text-outline-variant">|</span>
                          <span className="flex items-center gap-1 text-tertiary">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                            OFFICIAL NIRF / AUDIT VERIFIED RECRUITMENT
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface disabled:opacity-40"
                            disabled
                          >
                            PREV
                          </button>
                          <span className="px-2 py-0.5 bg-on-surface text-surface-container-lowest font-bold tabular-nums">
                            1
                          </span>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface tabular-nums">
                            2
                          </button>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface tabular-nums">
                            3
                          </button>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface">
                            NEXT
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* UNPLACED SUB-PANEL TABLE (7 existing rows, NO checkbox column) */}
                    <div
                      className={
                        activePlacementTab === "unplaced" ? "block" : "hidden"
                      }
                      id="subpanel-unplaced"
                    >
                      <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface-container-low border-b border-outline-variant font-label-code-sm text-label-code-sm uppercase text-secondary font-bold">
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Student Identity &amp; Roll #
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Department
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                CGPA (Audited)
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                Attendance
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant">
                                Verified Skills (Faculty Audited)
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                JD Match
                              </th>
                              <th className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                Status
                              </th>
                              <th className="py-space-sm px-space-md text-right">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-outline-variant font-body-sm text-body-sm">
                            {/* Row 1: Aarav Sharma */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-primary-container text-on-primary font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    AS
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Aarav Sharma
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A042 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.84
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                89.4%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Python
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    FastAPI
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    SQL
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Prof. Vignesh
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  90%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 2: Neha Sundaram */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    NS
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Neha Sundaram
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B102 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.92
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                91.0%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Java
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    SpringBoot
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    PostgreSQL
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Dr. M. Iyer
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  88%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 3: Karthik Venkat */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    KV
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Karthik Venkat
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B019 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.45
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                87.2%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Terraform
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Golang
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Prof. A. Chari
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  86%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 4: Divya Balachandran */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    DB
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Divya Balachandran
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A088 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                9.12
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                94.8%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    C++
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    System Design
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Prof. Vignesh
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  94%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 5: Rohan K. Murthy */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    RM
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Rohan K. Murthy
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B055 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.20
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                86.0%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Python
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Linux Kernel
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Dr. M. Iyer
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  84%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 6: Ananya Deshmukh */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    AD
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Ananya Deshmukh
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      CS24B112 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Computer Science
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.76
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                92.1%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Python
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    PyTorch
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Dr. M. Iyer
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.5 border border-tertiary tabular-nums">
                                  89%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {/* Row 7: Tanmay Gupta */}
                            <tr className="hover:bg-surface-container/50 bg-surface-container-lowest transition-none">
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex items-center gap-space-sm">
                                  <div className="w-7 h-7 bg-surface-container-highest text-on-surface font-bold text-[12px] flex items-center justify-center border border-on-surface">
                                    TG
                                  </div>
                                  <div>
                                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                                      Tanmay Gupta
                                    </div>
                                    <div className="font-label-code-sm text-label-code-sm text-secondary">
                                      IT24A015 • NITK-2025
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant font-medium text-on-surface">
                                B.Tech Information Tech
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right font-bold text-on-surface tabular-nums">
                                8.05
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right text-secondary tabular-nums">
                                88.5%
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant">
                                <div className="flex flex-wrap gap-1 items-center">
                                  <span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-[11px] font-semibold flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[10px]">
                                      verified
                                    </span>
                                    AWS
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    Node.js
                                  </span>
                                  <span className="px-1.5 py-0.2 bg-surface-container border border-outline-variant text-[11px] text-on-surface">
                                    MongoDB
                                  </span>
                                  <span className="text-[11px] text-secondary italic block w-full mt-0.5">
                                    Audited by Prof. Vignesh
                                  </span>
                                </div>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-right">
                                <span className="font-bold text-secondary bg-surface-container px-1.5 py-0.5 border border-outline-variant tabular-nums">
                                  81%
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md border-r border-outline-variant text-center">
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-800 font-bold text-[11px] uppercase">
                                  Unplaced
                                </span>
                              </td>
                              <td className="py-space-sm px-space-md text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    className="px-2 py-1 bg-surface-container-lowest border border-outline font-bold text-[11px] text-on-surface hover:bg-surface-container shadow-[1px_1px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                    onClick={() => navigate("/student")}
                                  >
                                    VIEW
                                  </button>
                                  <button className="px-2 py-1 bg-primary text-on-primary border border-on-surface font-bold text-[11px] shadow-[1px_1px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                                    SHORTLIST
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Unplaced Table Footer */}
                      <div className="p-space-sm px-space-md bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-code-sm text-label-code-sm text-secondary">
                        <div className="flex items-center gap-space-md">
                          <span className="tabular-nums">
                            SHOWING 1–7 OF 1,214 UNPLACED STUDENTS
                          </span>
                          <span className="text-outline-variant">|</span>
                          <span className="flex items-center gap-1 text-tertiary">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                            ALL PROFILES AUDITED BY TPO QUALITY CELL
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface disabled:opacity-40"
                            disabled
                          >
                            PREV
                          </button>
                          <span className="px-2 py-0.5 bg-on-surface text-surface-container-lowest font-bold tabular-nums">
                            1
                          </span>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface tabular-nums">
                            2
                          </button>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface tabular-nums">
                            3
                          </button>
                          <button className="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface">
                            NEXT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Placement Office Audit Integrity Footer Strip */}
                <div className="p-space-md border border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      policy
                    </span>
                    <span className="font-label-code-sm text-label-code-sm text-on-surface font-semibold uppercase">
                      NATIONAL ACCREDITATION GOVERNANCE COMPLIANT (NIRF 2025 /
                      NAAC A++)
                    </span>
                  </div>
                  <div className="flex items-center gap-space-md font-label-code-sm text-label-code-sm text-secondary tabular-nums">
                    <span>LEDGER HASH: 0x9f4a...83d2</span>
                    <span>TAMPER-PROOF VERIFICATION LEVEL: L3</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
