const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const WEBSITE_URL = 'https://puribeach-resort.com';
const REPORT_DIR = './lighthouse-reports';

// Create reports directory if it doesn't exist
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

async function runLighthouse() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  console.log(`Running Lighthouse audit for ${WEBSITE_URL}...`);
  
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  const runnerResult = await lighthouse(WEBSITE_URL, options);
  
  await chrome.kill();
  
  // Save HTML report
  const htmlReport = runnerResult.report;
  const htmlPath = path.join(REPORT_DIR, `report-${timestamp}.html`);
  fs.writeFileSync(htmlPath, htmlReport);
  
  // Save JSON report
  const jsonPath = path.join(REPORT_DIR, `report-${timestamp}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(runnerResult.lhr, null, 2));
  
  // Extract and display scores
  const scores = {
    Performance: runnerResult.lhr.categories.performance.score * 100,
    Accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    'Best Practices': runnerResult.lhr.categories['best-practices'].score * 100,
    SEO: runnerResult.lhr.categories.seo.score * 100,
  };
  
  console.log('\n=== Lighthouse Scores ===');
  for (const [category, score] of Object.entries(scores)) {
    console.log(`${category}: ${score.toFixed(0)}/100`);
  }
  
  console.log(`\nReports saved to:`);
  console.log(`HTML: ${htmlPath}`);
  console.log(`JSON: ${jsonPath}`);
  
  return scores;
}

runLighthouse().catch(console.error);
