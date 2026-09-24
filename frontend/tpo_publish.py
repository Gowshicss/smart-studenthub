import re

def update_tpo_publish():
    with open('src/pages/TPODashboard.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add IDs to inputs based on defaultValue
    content = re.sub(
        r'<input([^>]*?)defaultValue="Goldman Sachs"',
        r'<input id="publish-company"\1defaultValue="Goldman Sachs"',
        content
    )
    
    content = re.sub(
        r'<input([^>]*?)defaultValue="Analyst \(Systems\)"',
        r'<input id="publish-role"\1defaultValue="Analyst (Systems)"',
        content
    )
    
    content = re.sub(
        r'<input([^>]*?)defaultValue="₹24.0 LPA"',
        r'<input id="publish-ctc"\1defaultValue="₹24.0 LPA"',
        content
    )
    
    content = re.sub(
        r'<input([^>]*?)defaultValue="AWS Cloud, Python, SQL"',
        r'<input id="publish-skills"\1defaultValue="AWS Cloud, Python, SQL"',
        content
    )

    # 2. Update Publish Button
    publish_btn_old = r'<button[^>]*?id="btn-publish-drive"[^>]*?>\s*<span[^>]*?>\s*campaign\s*</span>\s*<span>PUBLISH TO SMART NOTICE BOARD</span>\s*</button>'
    
    publish_script = """
    <button
      className="w-full py-3 text-surface-container-lowest font-bold text-[14px] uppercase border-2 border-on-surface bg-on-surface shadow-[4px_4px_0px_#155eef] hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-none"
      id="btn-publish-drive"
      onClick={() => {
        const company = (document.getElementById('publish-company') as HTMLInputElement)?.value || 'Goldman Sachs';
        const role = (document.getElementById('publish-role') as HTMLInputElement)?.value || 'Analyst (Systems)';
        const ctc = (document.getElementById('publish-ctc') as HTMLInputElement)?.value || '₹24.0 LPA';
        const minCgpa = (document.getElementById('input-cgpa') as HTMLInputElement)?.value || '8.0';
        const skills = (document.getElementById('publish-skills') as HTMLInputElement)?.value || 'AWS Cloud, Python, SQL';
        
        // Set deadline to 3 days from now
        const deadlineDate = new Date();
        deadlineDate.setDate(deadlineDate.getDate() + 3);
        
        const driveData = {
          company,
          role,
          ctc,
          minCgpa: parseFloat(minCgpa),
          skills,
          deadline: deadlineDate.toISOString(),
          id: Date.now()
        };
        
        localStorage.setItem('publishedDrive', JSON.stringify(driveData));
        window.dispatchEvent(new Event('storage')); // Trigger update across tabs
        alert('Drive published successfully to Smart Notice Board!');
      }}
    >
      <span className="material-symbols-outlined text-[18px]">campaign</span>
      <span>PUBLISH TO SMART NOTICE BOARD</span>
    </button>
    """
    
    content = re.sub(publish_btn_old, publish_script.strip(), content)

    with open('src/pages/TPODashboard.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_tpo_publish()
    print("Done")
