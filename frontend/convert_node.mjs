import fs from 'fs';
import pkg from 'htmltojsx';
const HTMLtoJSX = pkg;

const converter = new HTMLtoJSX({
  createClass: false,
});

function convertFile(src, dest, componentName) {
  if (!fs.existsSync(src)) {
    console.log(`Skipping ${src}`);
    return;
  }
  let html = fs.readFileSync(src, 'utf-8');
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;
  
  // Remove script tags
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  let jsx = converter.convert(content);
  
  // Basic fixes for things HTMLtoJSX might miss or that we want to wrap
  const reactCode = `import React from 'react';

export default function ${componentName}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

  fs.writeFileSync(dest, reactCode);
  console.log(`Converted ${src} to ${dest}`);
}

const baseDir = 'c:/Users/GOWSHIC SS/SMART STUDENT';
convertFile(`${baseDir}/stitch_exports/student_dashboard.html`, `${baseDir}/frontend/src/pages/StudentDashboard.tsx`, 'StudentDashboard');
convertFile(`${baseDir}/stitch_exports/mentor_cohort_ledger.html`, `${baseDir}/frontend/src/pages/MentorDashboard.tsx`, 'MentorDashboard');
convertFile(`${baseDir}/stitch_exports/tpo_placement_intelligence.html`, `${baseDir}/frontend/src/pages/TPODashboard.tsx`, 'TPODashboard');
