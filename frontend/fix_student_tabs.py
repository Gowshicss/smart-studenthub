import re

def update_student_dashboard():
    with open('src/pages/StudentDashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add useState import if not present
    if 'useState' not in content:
        content = content.replace(
            "import React from 'react';",
            "import React, { useState } from 'react';"
        )

    # 2. Add state variable
    content = content.replace(
        "export default function StudentDashboard() {",
        "export default function StudentDashboard() {\n  const [activeTab, setActiveTab] = useState(3);"
    )

    # 3. Modify Tab Buttons
    # Base class prefix: "flex-1 flex items-center justify-center gap-2.5 py-3 px-4 "
    # Suffix: " border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
    
    # We will replace the whole `<button className="..." id="tabBtn-X">` with our dynamic ones.
    
    # Button 1
    content = re.sub(
        r'<button\s*className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 bg-white text-\[#111111\] hover:bg-slate-100 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer"\s*id="tabBtn-1"\s*>',
        r'<button onClick={() => setActiveTab(1)} className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 1 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`} id="tabBtn-1">',
        content
    )

    # Button 2
    content = re.sub(
        r'<button\s*className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 bg-white text-\[#111111\] hover:bg-slate-100 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer"\s*id="tabBtn-2"\s*>',
        r'<button onClick={() => setActiveTab(2)} className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 2 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`} id="tabBtn-2">',
        content
    )

    # Button 3
    content = re.sub(
        r'<button\s*className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 bg-\[#111111\] text-white border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer"\s*id="tabBtn-3"\s*>',
        r'<button onClick={() => setActiveTab(3)} className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 border-2 border-border-dark neo-shadow neo-shadow-active font-bold text-xs sm:text-sm tracking-wide uppercase cursor-pointer ${activeTab === 3 ? "bg-[#111111] text-white" : "bg-white text-[#111111] hover:bg-slate-100"}`} id="tabBtn-3">',
        content
    )

    # 4. Modify Tab Contents
    content = re.sub(
        r'<section className="space-y-6 hidden" id="tabContent-1">',
        r'<section className={`space-y-6 ${activeTab === 1 ? "block" : "hidden"}`} id="tabContent-1">',
        content
    )

    content = re.sub(
        r'<section className="space-y-6 hidden" id="tabContent-2">',
        r'<section className={`space-y-6 ${activeTab === 2 ? "block" : "hidden"}`} id="tabContent-2">',
        content
    )

    content = re.sub(
        r'<section className="space-y-6" id="tabContent-3">',
        r'<section className={`space-y-6 ${activeTab === 3 ? "block" : "hidden"}`} id="tabContent-3">',
        content
    )


    with open('src/pages/StudentDashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_student_dashboard()
    print("Done")
