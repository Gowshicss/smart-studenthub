import re

def update_tpo_dashboard():
    with open('src/pages/TPODashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace TPO Dashboard VIEW buttons (handling whitespace/newlines)
    content = re.sub(
        r'<button className="([^"]*?hover:bg-surface-container shadow-\[1px_1px_0px_#111111\] active:translate-x-\[1px\] active:translate-y-\[1px\] active:shadow-none[^"]*?)">[\s\n]*VIEW[\s\n]*</button>',
        r'<button className="\1" onClick={() => navigate("/student")}>VIEW</button>',
        content
    )

    # Some of them might just have `text-on-surface` etc
    content = re.sub(
        r'<button className="([^"]*?shadow-\[1px_1px_0px_#111111\][^"]*?)">[\s\n]*VIEW[\s\n]*</button>',
        r'<button className="\1" onClick={() => navigate("/student")}>VIEW</button>',
        content
    )

    with open('src/pages/TPODashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_tpo_dashboard()
    print("Done")
