import os
import re

def strip_inline_handlers(filepath):
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Strip all onClick="...", onChange="...", onKeyUp="..."
    content = re.sub(r'\bon[A-Z]\w+="[^"]*"', '', content)
    
    # Also fix any remaining string booleans that might cause TS errors:
    # Error: Type 'boolean' is not assignable to type 'string' (Wait, this means an attribute expected string but got boolean? No, TS says Type 'string' is not assignable to type MouseEventHandler. For booleans it says Type 'boolean' is not assignable to type 'string'. Wait, if we set `aria-hidden={true}` TS wants `"true"`.)
    # Let's fix aria-hidden={true} -> aria-hidden="true"
    content = content.replace('aria-hidden={true}', 'aria-hidden="true"')
    content = content.replace('aria-expanded={true}', 'aria-expanded="true"')
    content = content.replace('aria-expanded={false}', 'aria-expanded="false"')
    content = content.replace('aria-selected={true}', 'aria-selected="true"')
    content = content.replace('aria-selected={false}', 'aria-selected="false"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = 'c:/Users/GOWSHIC SS/SMART STUDENT/frontend/src/pages'
for filename in ['StudentDashboard.tsx', 'MentorDashboard.tsx', 'TPODashboard.tsx']:
    strip_inline_handlers(os.path.join(base_dir, filename))
print("Stripped inline handlers and fixed aria-booleans.")
