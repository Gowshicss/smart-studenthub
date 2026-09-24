import re
import os

def html_to_jsx(html_str):
    # Basic replacements
    jsx = html_str.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('onclick=', 'onClick=')
    jsx = jsx.replace('onsubmit=', 'onSubmit=')
    
    # Self-closing tags
    void_elements = ['img', 'input', 'br', 'hr', 'link', 'meta', 'circle', 'path']
    for tag in void_elements:
        jsx = re.sub(rf'(<{tag}[^>]*?)(?<!/)>', r'\1 />', jsx)
        
    return jsx

def convert_file(src, dest, component_name):
    if not os.path.exists(src):
        print(f"Skipping {src}, file not found")
        return
        
    with open(src, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract just the body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html

    jsx = html_to_jsx(content)
    
    # Strip script tags
    jsx = re.sub(r'<script.*?>.*?</script>', '', jsx, flags=re.DOTALL)
    
    # Wrap in React component
    react_code = f"""import React, {{ useState }} from 'react';

export default function {component_name}() {{
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {jsx}
    </>
  );
}}
"""
    # Write to destination
    with open(dest, 'w', encoding='utf-8') as f:
        f.write(react_code)
    print(f"Converted {src} to {dest}")

if __name__ == '__main__':
    base_dir = 'c:/Users/GOWSHIC SS/SMART STUDENT'
    convert_file(f'{base_dir}/stitch_exports/student_dashboard.html', f'{base_dir}/frontend/src/pages/StudentDashboard.tsx', 'StudentDashboard')
    convert_file(f'{base_dir}/stitch_exports/mentor_cohort_ledger.html', f'{base_dir}/frontend/src/pages/MentorDashboard.tsx', 'MentorDashboard')
    convert_file(f'{base_dir}/stitch_exports/tpo_placement_intelligence.html', f'{base_dir}/frontend/src/pages/TPODashboard.tsx', 'TPODashboard')
