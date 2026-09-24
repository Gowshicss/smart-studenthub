import re

def update_student_notice():
    with open('src/pages/StudentDashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add useEffect to imports
    if 'useEffect' not in content:
        content = content.replace(
            "import React, { useState } from 'react';",
            "import React, { useState, useEffect } from 'react';"
        )

    # 2. Add state for published drive
    state_injection = """
  const [publishedDrive, setPublishedDrive] = useState<any>(null);

  useEffect(() => {
    const fetchDrive = () => {
      const drive = localStorage.getItem('publishedDrive');
      if (drive) {
        const parsed = JSON.parse(drive);
        // Delete/hide if deadline is passed
        if (new Date() > new Date(parsed.deadline)) {
          localStorage.removeItem('publishedDrive');
          setPublishedDrive(null);
        } else {
          setPublishedDrive(parsed);
        }
      } else {
        setPublishedDrive(null);
      }
    };
    fetchDrive();
    window.addEventListener('storage', fetchDrive);
    return () => window.removeEventListener('storage', fetchDrive);
  }, []);

  const studentCGPA = 8.84;
"""
    if 'const [publishedDrive' not in content:
        content = content.replace(
            "const [activeTab, setActiveTab] = useState(3);",
            "const [activeTab, setActiveTab] = useState(3);\n" + state_injection
        )

    # 3. Render the published drive
    # Look for `<div className="p-4 space-y-4 max-h-[720px] overflow-y-auto" id="opportunityFeedContainer">`
    # We will inject the published drive JSX right after this div opening tag.
    
    dynamic_card = """
                      {publishedDrive && (
                        <article className="opp-card bg-white border-2 border-brand-blue neo-shadow p-4 space-y-3 relative mb-4">
                          <div className="absolute -top-3 -right-3 bg-brand-yellow text-black font-extrabold px-2 py-1 border-2 border-border-dark text-[10px] uppercase shadow-[2px_2px_0px_#111111] rotate-3 animate-pulse">
                            NEW PUBLISHED DRIVE
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-border-dark">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 flex items-center justify-center text-white text-base font-extrabold border-2 border-border-dark shrink-0 bg-[#111111]">
                                {publishedDrive.company.substring(0, 2).toUpperCase()}
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
                                      YOU'RE ELIGIBLE (CGPA {studentCGPA} &gt; {publishedDrive.minCgpa})
                                    </span>
                                  ) : (
                                    <span className="text-[10px] px-2 py-0.2 border font-bold tabular-nums bg-[#FEF2F2] text-brand-red border-brand-red">
                                      NOT ELIGIBLE (Requires CGPA {publishedDrive.minCgpa})
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
                                  <span className="material-symbols-outlined text-[16px]">share</span>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border-2 border-border-dark hover:bg-slate-100 neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-none bg-white">
                                  <span className="material-symbols-outlined text-[16px]">bookmark</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-2 divide-border-dark border-2 border-border-dark bg-slate-50">
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">TARGET OPENINGS</div>
                              <div className="text-xs font-bold text-[#111111]">TBD</div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">DURATION / BOND</div>
                              <div className="text-xs font-bold text-[#111111]">No Employment Bond</div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">ELIGIBLE BATCH</div>
                              <div className="text-xs font-bold text-[#111111]">2026 Passing Out</div>
                            </div>
                            <div className="p-2">
                              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">DEADLINE</div>
                              <div className="text-xs font-bold text-brand-red tabular-nums">{new Date(publishedDrive.deadline).toLocaleDateString()}</div>
                            </div>
                          </div>

                          <div className="text-xs text-slate-600 bg-slate-50 p-2 border border-border-dark">
                             <span className="font-bold">Required Skills: </span> {publishedDrive.skills}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-brand-green">check_circle</span>
                              <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wide">
                                NO ACTIVE BACKLOGS (VERIFIED)
                              </span>
                            </div>
                            <button className={`px-4 py-2 font-bold text-xs border-2 border-border-dark uppercase neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${studentCGPA >= publishedDrive.minCgpa ? "bg-brand-blue text-white" : "bg-slate-300 text-slate-500 cursor-not-allowed"}`} disabled={studentCGPA < publishedDrive.minCgpa}>
                              {studentCGPA >= publishedDrive.minCgpa ? "APPLY NOW" : "NOT ELIGIBLE"}
                            </button>
                          </div>
                        </article>
                      )}
    """
    
    target = 'id="opportunityFeedContainer"\n                    >'
    if target in content and '{publishedDrive && (' not in content:
        content = content.replace(target, target + dynamic_card)

    with open('src/pages/StudentDashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_student_notice()
    print("Done")
