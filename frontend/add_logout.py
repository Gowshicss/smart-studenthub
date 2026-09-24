import re

files = [
    'src/pages/StudentDashboard.tsx',
    'src/pages/MentorDashboard.tsx',
    'src/pages/TPODashboard.tsx'
]

logout_html = """
          <div className="p-4 border-t-2 border-border-dark border-[#111111] bg-surface-container-lowest mt-auto w-full">
            <button onClick={() => navigate('/login')} className="w-full flex items-center justify-center gap-2 px-3 py-2 border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#DC2626] font-bold text-sm uppercase tracking-wide cursor-pointer shadow-[2px_2px_0px_#DC2626] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-none">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span>LOGOUT</span>
            </button>
          </div>
        </aside>"""

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add useNavigate import if missing
    if 'useNavigate' not in content:
        content = content.replace(
            "import React, { useState, useEffect } from 'react';",
            "import React, { useState, useEffect } from 'react';\nimport { useNavigate } from 'react-router-dom';"
        )
        content = content.replace(
            "import React, { useState } from \"react\";",
            "import React, { useState } from \"react\";\nimport { useNavigate } from 'react-router-dom';"
        )
    
    # Add const navigate if missing
    if 'const navigate = useNavigate();' not in content:
        content = content.replace(
            "export default function StudentDashboard() {",
            "export default function StudentDashboard() {\n  const navigate = useNavigate();"
        )
        content = content.replace(
            "export default function MentorDashboard() {",
            "export default function MentorDashboard() {\n  const navigate = useNavigate();"
        )
        content = content.replace(
            "export default function TPODashboard() {",
            "export default function TPODashboard() {\n  const navigate = useNavigate();"
        )
    
    # Insert logout button before </aside>
    if '<span>LOGOUT</span>' not in content:
        content = content.replace('</aside>', logout_html)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done")
