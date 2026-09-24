import os
import re

def fix_jsx_file(filepath):
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace common HTML to JSX event names
    content = content.replace('onclick=', 'onClick=')
    content = content.replace('onchange=', 'onChange=')
    content = content.replace('onkeyup=', 'onKeyUp=')
    content = content.replace('onsubmit=', 'onSubmit=')
    content = content.replace('onmouseover=', 'onMouseOver=')
    content = content.replace('onmouseout=', 'onMouseOut=')
    content = content.replace('onkeydown=', 'onKeyDown=')
    
    # Fix boolean attributes that htmltojsx missed or made strings
    content = content.replace('disabled="true"', 'disabled={true}')
    content = content.replace('checked="true"', 'defaultChecked={true}')
    content = content.replace('checked="checked"', 'defaultChecked={true}')
    content = content.replace('required="true"', 'required={true}')
    
    # Fix unescaped entities outside of JSX tags
    content = content.replace('YOU\'RE', 'YOU&apos;RE')
    content = content.replace(' & ', ' &amp; ')
    
    # Fix style attributes that might still be strings. 
    # Since htmltojsx usually converts style="width: 72%" to style={{width: 72%}}, we might be fine.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = 'c:/Users/GOWSHIC SS/SMART STUDENT/frontend/src/pages'
for filename in ['StudentDashboard.tsx', 'MentorDashboard.tsx', 'TPODashboard.tsx']:
    fix_jsx_file(os.path.join(base_dir, filename))
print("Fixed JSX files.")
