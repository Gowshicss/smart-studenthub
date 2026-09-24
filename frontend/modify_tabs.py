import re

with open('src/pages/TPODashboard.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports and add state
content = content.replace(
    'import React from "react";',
    'import React, { useState } from "react";'
)

state_declaration = """
export default function TPODashboard() {
  const [activeTab, setActiveTab] = useState<'cohort' | 'dispatcher' | 'placement'>('cohort');
  const [activePlacementTab, setActivePlacementTab] = useState<'placed' | 'unplaced'>('placed');
"""
content = content.replace(
    'export default function TPODashboard() {\n',
    state_declaration
)

# 2. Main Tab Buttons
content = re.sub(
    r'<button\s*className="p-3\.5 border-2 border-on-surface bg-on-surface text-surface-container-lowest font-bold text-\[14px\] uppercase flex items-center justify-center gap-2 shadow-\[4px_4px_0px_#111111\] transition-none cursor-pointer"\s*id="tab-btn-cohort"\s*>',
    r'<button onClick={() => setActiveTab("cohort")} className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "cohort" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`} id="tab-btn-cohort">',
    content
)

content = re.sub(
    r'<span\s*className="ml-1 px-2 py-0\.5 bg-surface-container-lowest text-on-surface text-\[12px\] font-bold border border-surface-container-lowest tabular-nums"\s*id="tab-badge-cohort"\s*>',
    r'<span className={`ml-1 px-2 py-0.5 text-[12px] font-bold border tabular-nums ${activeTab === "cohort" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-surface-container border-outline-variant text-secondary"}`} id="tab-badge-cohort">',
    content
)

content = re.sub(
    r'<button\s*className="p-3\.5 border-2 border-on-surface bg-surface-container-lowest text-on-surface font-bold text-\[14px\] uppercase flex items-center justify-center gap-2 shadow-\[4px_4px_0px_#111111\] hover:bg-surface-container-low transition-none cursor-pointer"\s*id="tab-btn-dispatcher"\s*>',
    r'<button onClick={() => setActiveTab("dispatcher")} className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "dispatcher" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`} id="tab-btn-dispatcher">',
    content
)

content = re.sub(
    r'<span\s*className="ml-1 px-2 py-0\.5 bg-surface-container border border-outline-variant text-secondary text-\[12px\] font-bold"\s*id="tab-badge-dispatcher"\s*>',
    r'<span className={`ml-1 px-2 py-0.5 text-[12px] font-bold border ${activeTab === "dispatcher" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-surface-container border-outline-variant text-secondary"}`} id="tab-badge-dispatcher">',
    content
)

content = re.sub(
    r'<button\s*className="p-3\.5 border-2 border-on-surface bg-surface-container-lowest text-on-surface font-bold text-\[14px\] uppercase flex items-center justify-center gap-2 shadow-\[4px_4px_0px_#111111\] hover:bg-surface-container-low transition-none cursor-pointer"\s*id="tab-btn-placement"\s*>',
    r'<button onClick={() => setActiveTab("placement")} className={`p-3.5 border-2 border-on-surface font-bold text-[14px] uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_#111111] transition-none cursor-pointer ${activeTab === "placement" ? "bg-on-surface text-surface-container-lowest" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}`} id="tab-btn-placement">',
    content
)

content = re.sub(
    r'<span\s*className="ml-1 px-2 py-0\.5 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary text-\[12px\] font-bold tabular-nums"\s*id="tab-badge-placement"\s*>',
    r'<span className={`ml-1 px-2 py-0.5 text-[12px] font-bold tabular-nums border ${activeTab === "placement" ? "bg-surface-container-lowest text-on-surface border-surface-container-lowest" : "bg-tertiary-fixed text-on-tertiary-fixed border-tertiary"}`} id="tab-badge-placement">',
    content
)

# 3. Main Panels
content = re.sub(
    r'<div\s*className="flex flex-col gap-space-xl"\s*id="panel-cohort"\s*>',
    r'<div className={activeTab === "cohort" ? "flex flex-col gap-space-xl" : "hidden"} id="panel-cohort">',
    content
)

content = re.sub(
    r'<div\s*className="hidden"\s*id="panel-dispatcher"\s*>',
    r'<div className={activeTab === "dispatcher" ? "block" : "hidden"} id="panel-dispatcher">',
    content
)

content = re.sub(
    r'<div\s*className="hidden flex flex-col gap-space-md"\s*id="panel-placement"\s*>',
    r'<div className={activeTab === "placement" ? "flex flex-col gap-space-md" : "hidden"} id="panel-placement">',
    content
)

# 4. Sub-tabs
content = re.sub(
    r'<button\s*className="p-4 bg-surface-container-lowest text-left border-2 border-on-surface border-t-4 border-t-tertiary shadow-\[4px_4px_0px_#111111\] transition-none cursor-pointer flex items-center justify-between"\s*id="subtab-btn-placed"\s*>',
    r'<button onClick={() => setActivePlacementTab("placed")} className={`p-4 bg-surface-container-lowest text-left border-2 transition-none cursor-pointer flex items-center justify-between ${activePlacementTab === "placed" ? "border-on-surface border-t-4 border-t-tertiary shadow-[4px_4px_0px_#111111]" : "border-outline-variant hover:border-on-surface"}`} id="subtab-btn-placed">',
    content
)

content = re.sub(
    r'<button\s*className="p-4 bg-surface-container-lowest text-left border border-outline-variant hover:border-on-surface transition-none cursor-pointer flex items-center justify-between"\s*id="subtab-btn-unplaced"\s*>',
    r'<button onClick={() => setActivePlacementTab("unplaced")} className={`p-4 bg-surface-container-lowest text-left border-2 transition-none cursor-pointer flex items-center justify-between ${activePlacementTab === "unplaced" ? "border-on-surface border-t-4 border-t-yellow-800 shadow-[4px_4px_0px_#111111]" : "border-outline-variant hover:border-on-surface"}`} id="subtab-btn-unplaced">',
    content
)

# 5. Sub-panels
content = re.sub(
    r'<div\s*id="subpanel-placed"\s*>',
    r'<div className={activePlacementTab === "placed" ? "block" : "hidden"} id="subpanel-placed">',
    content
)

content = re.sub(
    r'<div\s*className="hidden"\s*id="subpanel-unplaced"\s*>',
    r'<div className={activePlacementTab === "unplaced" ? "block" : "hidden"} id="subpanel-unplaced">',
    content
)

with open('src/pages/TPODashboard.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
