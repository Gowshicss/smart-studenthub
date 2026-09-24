import re

def update_mentor_dashboard():
    with open('src/pages/MentorDashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add imports
    content = content.replace(
        'import React from "react";',
        'import React, { useState } from "react";\nimport { useNavigate } from "react-router-dom";'
    )

    # 2. Add state and navigate to component
    content = content.replace(
        'export default function MentorDashboard() {',
        'export default function MentorDashboard() {\n  const navigate = useNavigate();\n  const [activeSidebarTab, setActiveSidebarTab] = useState<"cohort" | "verification" | "placement">("cohort");'
    )

    # 3. Add onClick to sidebar tabs
    content = re.sub(
        r'<a\s*aria-current="page"\s*className="flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide bg-primary-container text-on-primary-container font-semibold border-2 border-\[#111111\] shadow-\[2px_2px_0px_#111111\]"\s*data-path="my-cohort"\s*href="#"\s*>',
        r'<a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("cohort"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "cohort" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="my-cohort">',
        content
    )

    content = re.sub(
        r'<a\s*className="flex items-center justify-between px-space-md py-space-sm text-on-surface-variant border border-transparent hover:border-\[#111111\] hover:bg-surface-container-highest hover:text-on-surface transition-all font-headline-sm text-headline-sm uppercase tracking-wide"\s*data-path="verification-queue"\s*href="#"\s*>',
        r'<a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("verification"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "verification" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="verification-queue">',
        content
    )

    content = re.sub(
        r'<a\s*className="flex items-center justify-between px-space-md py-space-sm text-on-surface-variant border border-transparent hover:border-\[#111111\] hover:bg-surface-container-highest hover:text-on-surface transition-all font-headline-sm text-headline-sm uppercase tracking-wide"\s*data-path="placement-status"\s*href="#"\s*>',
        r'<a onClick={(e) => { e.preventDefault(); setActiveSidebarTab("placement"); }} className={`flex items-center justify-between px-space-md py-space-sm transition-all uppercase tracking-wide cursor-pointer ${activeSidebarTab === "placement" ? "bg-primary-container text-on-primary-container font-semibold border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" : "text-on-surface-variant border border-transparent hover:border-[#111111] hover:bg-surface-container-highest hover:text-on-surface"}`} data-path="placement-status">',
        content
    )

    # 4. Wrap main content with activeTab condition, and add a simple verification queue view
    content = content.replace(
        '{/* 4-Tile KPI Strip */}',
        '{/* 4-Tile KPI Strip */}\n              {activeSidebarTab === "verification" && (\n                <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-space-xl flex flex-col items-center justify-center min-h-[400px]">\n                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">verified</span>\n                  <h2 className="font-headline-lg font-bold text-[#111111] uppercase">Verification Queue</h2>\n                  <p className="text-on-surface-variant mt-2 text-center max-w-md">There are 06 pending verification requests in your queue. Click on any student profile to review their audited skills.</p>\n                </div>\n              )}\n              {activeSidebarTab === "placement" && (\n                <div className="bg-surface-container-lowest border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-space-xl flex flex-col items-center justify-center min-h-[400px]">\n                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">insights</span>\n                  <h2 className="font-headline-lg font-bold text-[#111111] uppercase">Placement Status</h2>\n                  <p className="text-on-surface-variant mt-2">Placement status and insights for your cohort.</p>\n                </div>\n              )}\n              <div className={activeSidebarTab === "cohort" ? "block" : "hidden"}>'
    )
    
    # Close the div at the end of the main section
    content = content.replace(
        '</main>',
        '</div>\n          </main>'
    )

    # 5. Add onClick to all VIEW buttons
    # Button pattern:
    # <button
    #   className="..."
    #   type="button"
    # >
    #   VIEW ➔
    # </button>
    content = re.sub(
        r'<button(\s+className="[^"]*"\s+type="button"\s*)>\s*VIEW\s*[➔]?\s*</button>',
        r'<button\1 onClick={() => navigate("/student")}>VIEW ➔</button>',
        content
    )

    with open('src/pages/MentorDashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

def update_tpo_dashboard():
    with open('src/pages/TPODashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add useNavigate if not present
    if 'useNavigate' not in content:
        content = content.replace(
            'import React, { useState } from "react";',
            'import React, { useState } from "react";\nimport { useNavigate } from "react-router-dom";'
        )
        content = content.replace(
            'export default function TPODashboard() {',
            'export default function TPODashboard() {\n  const navigate = useNavigate();'
        )
    
    # Replace TPO Dashboard VIEW buttons
    content = re.sub(
        r'<button className="([^"]*?)">VIEW</button>',
        r'<button className="\1" onClick={() => navigate("/student")}>VIEW</button>',
        content
    )

    with open('src/pages/TPODashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_mentor_dashboard()
    update_tpo_dashboard()
    print("Done")
