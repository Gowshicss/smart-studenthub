// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MentorDashboard() {
  const navigate = useNavigate();
  const [activeSidebarTab, setActiveSidebarTab] = useState<"cohort" | "verification" | "placement">("cohort");
  return (
    <>
      <div>
        <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r-2 border-[#111111] z-50 flex flex-col justify-between select-none">
          <div className="flex flex-col">
            <div className="h-16 px-space-lg flex items-center gap-space-md border-b-2 border-[#111111] bg-surface-container-lowest">
              <img
                alt="Brand logo. - Primary color: #155eef - Font: inter - Mode: light - Roundness: rounded-lg"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WxhPik6WXqKZX27wyb1_YM_-GyQl-kJFSBmTdQ9HUMoZD78FW6Aw6ALVYNsnpaZVHl0ZjHj5Mer8q1tN34VKMluEWIs0D3bnG_XjLD7jGZQqiwA7n0HIkQ_1s8Ht0xjc12s_EE72kSSPRiIZ1pPRMyWM3z98afPEIhuS5pHm7hv9HNSJgzlwvhHMbjXCBRRXm1gd3zicpakPlDDsievuzUCgnUwebPVLRI3m8j1Cq-ayRh7Pl_I6qD8_oG"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-[#111111] leading-none">
                  TechNova
                </span>
                <span className="font-label-code-sm text-label-code-sm text-on-surface-variant uppercase tracking-widest mt-0.5">
                  Mentor Command
                </span>
              </div>
            </div>
            <div className="p-space-lg border-b-2 border-[#111111] bg-surface-container-low">
              <div className="flex items-start gap-space-sm mb-space-xs">
                <div className="w-2.5 h-2.5 bg-tertiary-container mt-1 shrink-0" />
                <div>
                  <div className="font-headline-sm text-headline-sm text-[#111111] leading-tight">
                    Dr. Arunachalam
                  </div>
                  <div className="font-label-code-sm text-label-code-sm text-on-surface-variant">
                    CS &amp; Data Sciences
                  </div>
                </div>
              </div>
              <div className="mt-space-sm pt-space-xs border-t border-[#111111]/20 flex items-center justify-between font-label-code-sm text-label-code-sm">
                <span className="text-on-surface-variant uppercase">
                  Mentor ID
                </span>
                <span className="bg-surface-container-lowest px-1.5 py-0.5 border border-[#111111] text-[#111111] font-semibold">
                  #MTR-2048
                </span>
              </div>
            </div>
            <nav
              className="p-space-md flex flex-col gap-space-sm"
              data-active-classes="bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]"
            >
              <a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("cohort"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "cohort" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="my-cohort">
                <span className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    groups
                  </span>
                  My Cohort
                </span>
                <span className="font-label-code-sm text-label-code-sm bg-surface-container px-2 py-0.5 border border-[#111111] text-on-surface">
                  20
                </span>
              </a>
              <a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("verification"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "verification" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="verification-queue">
                <span className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  Verification Queue
                </span>
                <span className="font-label-code-sm text-label-code-sm bg-error-container text-on-error-container px-2 py-0.5 border border-[#111111] font-bold">
                  06
                </span>
              </a>
              <a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("placement"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "placement" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="placement-status">
                <span className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    insights
                  </span>
                  Placement Status
                </span>
                <span className="w-2 h-2 bg-tertiary-container" />
              </a>
            </nav>
          </div>
          <div className="p-space-md border-t-2 border-[#111111] bg-surface-container-lowest">
            <div className="flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
              <span className="uppercase">System State</span>
              <span className="text-tertiary font-semibold flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-tertiary-container" />
                ONLINE
              </span>
            </div>
            <div className="mt-space-xs font-label-code-sm text-label-code-sm text-on-surface-variant/80">
              TERMINAL ID: #TN-CMD-09
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
          <main className="w-full bg-[#F7F8FA] min-h-screen">
            <div className="flex flex-col w-full p-space-lg lg:p-space-xl gap-space-lg font-body-md text-on-surface">
              {/* Top Header Card */}
              <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-space-md flex flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-2.5 h-2.5 bg-tertiary-container shrink-0" />
                  <h1 className="font-headline-sm text-headline-sm uppercase tracking-tight text-[#111111] font-bold">
                    Dr. Arunachalam | Faculty Mentor
                  </h1>
                  <span className="hidden sm:inline-block font-label-code-sm text-label-code-sm text-on-surface-variant uppercase tracking-wider">
                    • BATCH 2025 / COHORT ALPHA-20
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-[#111111] bg-[#ECFDF3] text-[#078A4B] font-label-code-sm text-label-code-sm font-bold shadow-[2px_2px_0px_#111111]">
                  <span className="w-2 h-2 bg-[#078A4B] inline-block animate-pulse" />
                  SYNCHRONIZED
                </div>
              </div>
              {/* 4-Tile KPI Strip */}
              {activeSidebarTab === "verification" && (
                <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-space-xl flex flex-col items-center justify-center min-h-[400px]">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">verified</span>
                  <h2 className="font-headline-lg font-bold text-[#111111] uppercase">Verification Queue</h2>
                  <p className="text-on-surface-variant mt-2 text-center max-w-md">There are 06 pending verification requests in your queue. Click on any student profile to review their audited skills.</p>
                </div>
              )}
              {activeSidebarTab === "placement" && (
                <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-space-xl flex flex-col items-center justify-center min-h-[400px]">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">insights</span>
                  <h2 className="font-headline-lg font-bold text-[#111111] uppercase">Placement Status</h2>
                  <p className="text-on-surface-variant mt-2">Placement status and insights for your cohort.</p>
                </div>
              )}
              <div className={activeSidebarTab === "cohort" ? "block" : "hidden"}>
              {/* Main Ledger Container */}
              <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] overflow-hidden flex flex-col">
                {/* Ledger Controls Bar */}
                <div className="p-space-md border-b-2 border-[#111111] bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-code-md text-label-code-md font-bold uppercase text-[#111111]">
                      QUICK FILTER:
                    </span>
                    <button
                      className="px-2.5 py-1 text-label-code-sm font-bold bg-[#111111] text-white border border-[#111111]"
                      type="button"
                    >
                      ALL [20]
                    </button>
                    <button
                      className="px-2.5 py-1 text-label-code-sm font-bold bg-white text-[#111111] border border-[#111111] hover:bg-surface-container-high"
                      type="button"
                    >
                      PENDING [06]
                    </button>
                    <button
                      className="px-2.5 py-1 text-label-code-sm font-bold bg-white text-[#111111] border border-[#111111] hover:bg-surface-container-high"
                      type="button"
                    >
                      PLACED [04]
                    </button>
                    <button
                      className="px-2.5 py-1 text-label-code-sm font-bold bg-white text-[#DC2626] border border-[#111111] hover:bg-[#FEF2F2]"
                      type="button"
                    >
                      AT RISK [02]
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-code-sm text-label-code-sm text-on-surface-variant uppercase">
                      SORT:
                    </span>
                    <span className="font-label-code-sm text-label-code-sm font-bold border border-[#111111] bg-white px-2 py-0.5">
                      CGPA [DESC]
                    </span>
                  </div>
                </div>
                {/* Table Frame with Horizontal Scroll Safety */}
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse text-left [font-variant-numeric:tabular-nums]">
                    <thead>
                      <tr className="bg-[#111111] text-[#FFFFFF] border-b-2 border-[#111111]">
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider text-center w-12 border-r border-[#313030]">
                          #
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider border-r border-[#313030]">
                          STUDENT DOSSIER / REG NO
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider border-r border-[#313030]">
                          TARGET ROLE
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider text-right border-r border-[#313030] w-20">
                          CGPA
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider text-right border-r border-[#313030] w-24">
                          ATTND %
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider border-r border-[#313030] w-48">
                          AI MATCH SCORE
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider text-center border-r border-[#313030] w-24">
                          CERTS
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider border-r border-[#313030] w-44">
                          STATUS
                        </th>
                        <th className="p-space-md font-label-code-sm text-label-code-sm uppercase tracking-wider text-center w-28">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#111111]/20 font-body-sm text-body-sm">
                      {/* Row 1 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          01
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Divya Krishnan
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A015
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Full Stack Lead
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          9.15
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          94.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "91%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              91%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          6/6
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#ECFDF3] text-[#078A4B] font-label-code-sm font-bold">
                            PLACED (ATLASSIAN)
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          02
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Sneha Kulkarni
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A003
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Data Engineer
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          9.02
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          91.8%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "88%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              88%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          5/5
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#FEFCE8] text-[#A16207] font-label-code-sm font-bold">
                            INTERVIEWING
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          03
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Priya Sundaram
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A014
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Security Engineer
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.95
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          92.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "89%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              89%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          6/6
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#FEFCE8] text-[#A16207] font-label-code-sm font-bold">
                            ROUND 3
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 4 (PROMINENT HIGHLIGHT: Aarav Sharma) */}
                      <tr className="cursor-pointer transition-colors bg-[#EFF4FF] border-y-2 border-[#111111] hover:bg-[#E0EAFF]">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111] text-primary">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-ping mr-1" />
                          04
                        </td>
                        <td className="p-space-md border-r border-[#111111]">
                          <div className="flex items-center gap-2">
                            <div className="font-headline-sm text-headline-sm text-[#111111] font-bold">
                              Aarav Sharma
                            </div>
                            <span className="px-1.5 py-0.2 bg-primary text-white text-[10px] font-mono uppercase font-bold">
                              ACTIVE TARGET
                            </span>
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-primary font-mono font-bold">
                            #IT24A042
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111] font-semibold text-[#111111]">
                          Backend Developer
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111] font-label-code-md font-bold text-[#111111]">
                          8.84
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111] font-label-code-md font-medium text-tertiary">
                          89.4%
                        </td>
                        <td className="p-space-md border-r border-[#111111]">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                                <div
                                  className="bg-primary h-full"
                                  style={{ width: "72%" }}
                                />
                              </div>
                              <span className="font-label-code-sm font-bold text-primary w-8">
                                72%
                              </span>
                            </div>
                            <div className="font-label-code-sm text-[10px] text-primary font-semibold">
                              +18% w/ AWS Cert
                            </div>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111] font-label-code-md font-bold">
                          <span className="text-[#111111]">4/5</span>{" "}
                          <span className="text-[#A16207] text-[10px]">
                            [PND]
                          </span>
                        </td>
                        <td className="p-space-md border-r border-[#111111]">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-primary text-white border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-primary-container active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          05
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Meera Nambiar
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A011
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Data Scientist
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.77
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          90.1%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "85%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              85%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          5/5
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#FEFCE8] text-[#A16207] font-label-code-sm font-bold">
                            INTERVIEWING
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 6 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          06
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Vikramaditya Nair
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A019
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Distributed Systems
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.71
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          85.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "86%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              86%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          4/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-secondary-container text-on-secondary-container font-label-code-sm font-bold">
                            SHORTLISTED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 7 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          07
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Ananya Roy
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A002
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Frontend Architect
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.65
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          88.5%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "84%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              84%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          5/5
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#ECFDF3] text-[#078A4B] font-label-code-sm font-bold">
                            PLACED (CISCO)
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 8 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          08
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Pooja Batra
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A013
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Cloud Architect
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.50
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          86.2%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "81%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              81%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          4/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#FEFCE8] text-[#A16207] font-label-code-sm font-bold">
                            INTERVIEWING
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 9 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          09
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Nitin Gadvi
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A012
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Backend Go Dev
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.41
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          83.5%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "83%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              83%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          5/5
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#ECFDF3] text-[#078A4B] font-label-code-sm font-bold">
                            PLACED (RAZORPAY)
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 10 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          10
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Siddharth Sen
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A017
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          ML Ops
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.34
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          81.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "82%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              82%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          3/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 11 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          11
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Kavya Hegde
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A009
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          QA Automation
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.30
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          86.4%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "79%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              79%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          4/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 12 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          12
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Farhan Akhtar
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A005
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          SRE Engineer
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.20
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          84.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "80%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              80%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          4/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#ECFDF3] text-[#078A4B] font-label-code-sm font-bold">
                            PLACED (PHONEPE)
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 13 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          13
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Deepa Malik
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A004
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Frontend Eng
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.12
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          87.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "77%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              77%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          4/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 14 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          14
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Rajeshwari M
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A016
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Security Analyst
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          8.05
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          88.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "73%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              73%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          3/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 15 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          15
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Ishaan Joshi
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A007
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Full Stack Dev
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.92
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          82.4%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "76%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              76%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          3/3
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 16 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          16
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Tarun Verma
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A020
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Backend Dev
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.88
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          78.5%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#078A4B] h-full"
                                style={{ width: "74%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#078A4B] w-8">
                              74%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          3/4
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 17 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          17
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Manikanta Reddy
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A010
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          DBA / PostgreSQL
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.70
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          80.0%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#EAB308] h-full"
                                style={{ width: "69%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#A16207] w-8">
                              69%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          3/3
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 18 */}
                      <tr className="cursor-pointer transition-colors hover:bg-primary-fixed/30 bg-surface-container-lowest">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-on-surface-variant">
                          18
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Harshvardhan G
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A006
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Systems Eng
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.65
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-medium text-tertiary">
                          79.2%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#EAB308] h-full"
                                style={{ width: "68%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#A16207] w-8">
                              68%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold">
                          2/3
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#F2F4F7] text-[#111111] font-label-code-sm font-bold">
                            UNPLACED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 19 (HIGH RISK: Attendance) */}
                      <tr className="cursor-pointer transition-colors bg-[#FEF2F2]/60 hover:bg-[#FEF2F2]">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-[#DC2626]">
                          19
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Rohan Mehta
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A008
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          DevOps Platform
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.42
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#DC2626]">
                          71.2%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#DC2626] h-full"
                                style={{ width: "58%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#DC2626] w-8">
                              58%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold text-[#DC2626]">
                          2/5
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#FEF2F2] text-[#DC2626] font-label-code-sm font-bold">
                            ATTND RISK (&lt;75%)
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                      {/* Row 20 (HIGH RISK: Blocked) */}
                      <tr className="cursor-pointer transition-colors bg-[#FEF2F2]/60 hover:bg-[#FEF2F2]">
                        <td className="p-space-md text-center font-label-code-sm font-bold border-r border-[#111111]/20 text-[#DC2626]">
                          20
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="font-headline-sm text-headline-sm text-[#111111]">
                            Tenzin Dorjee
                          </div>
                          <div className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono">
                            #IT24A018
                          </div>
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20 font-medium">
                          Security &amp; Network
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#111111]">
                          7.18
                        </td>
                        <td className="p-space-md text-right border-r border-[#111111]/20 font-label-code-md font-bold text-[#DC2626]">
                          69.5%
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-surface-container border border-[#111111] h-2.5 overflow-hidden">
                              <div
                                className="bg-[#DC2626] h-full"
                                style={{ width: "51%" }}
                              />
                            </div>
                            <span className="font-label-code-sm font-bold text-[#DC2626] w-8">
                              51%
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md text-center border-r border-[#111111]/20 font-label-code-md font-bold text-[#DC2626]">
                          2/6
                        </td>
                        <td className="p-space-md border-r border-[#111111]/20">
                          <span className="inline-block px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-label-code-sm font-bold">
                            BLOCKED
                          </span>
                        </td>
                        <td className="p-space-md text-center">
                          <button
                            className="px-2 py-1 bg-surface-container-lowest text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-surface-container-high active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-label-code-sm font-bold uppercase"
                            type="button"
                           onClick={() => navigate("/student")}>VIEW ➔</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table Footer Strip */}
                <div className="p-space-md border-t-2 border-[#111111] bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-code-sm text-label-code-sm">
                  <div className="text-[#111111] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#078A4B]" />
                    TOTAL COHORT CAPACITY: 20/20 ALLOCATED • COMPLIANCE: 90.0%
                    ISO-ACC-2025 • SHOWING ALL 20 RECORDS
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button
                      className="px-2 py-1 border border-[#111111] bg-white text-[#111111] font-bold disabled:opacity-50"
                      disabled
                      type="button"
                    >
                      PREV
                    </button>
                    <span className="font-mono font-bold px-2">
                      PAGE 1 OF 1
                    </span>
                    <button
                      className="px-2 py-1 border border-[#111111] bg-white text-[#111111] font-bold disabled:opacity-50"
                      disabled
                      type="button"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
              {/* Operational Ledger Telemetry Footnote */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-space-sm border border-[#111111]/40 bg-surface-container-low font-label-code-sm text-label-code-sm text-on-surface-variant">
                <div className>
                  <span className="font-bold text-[#111111]">
                    AUDIT SIGNATURE:
                  </span>{" "}
                  0x9482F...E8201B • NITK-CS-PLACEMENT-COMMISSION
                </div>
                <div className="flex items-center gap-3">
                  <span className>REFRESH CYCLE: 300s</span>
                  <span className="font-bold text-[#111111]">
                    HASH VALIDATED [SHA-256]
                  </span>
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
