const https = require('https');
const fs = require('fs');
const path = require('path');

const WEBSITE_URL = 'https://puribeach-resort.com';
const API_KEY = ''; // Get your API key from https://developers.google.com/speed/docs/insights/v5/get-started
const REPORT_DIR = './lighthouse-reports';

// Create reports directory if it doesn't exist
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

function runPageSpeedInsights(strategy) {
  return new Promise((resolve, reject) => {
    if (!API_KEY) {
      reject(new Error('API_KEY not set. Get your API key from https://developers.google.com/speed/docs/insights/v5/get-started'));
      return;
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(WEBSITE_URL)}&key=${API_KEY}&strategy=${strategy}`;

    console.log(`Running PageSpeed Insights audit (${strategy}) for ${WEBSITE_URL}...`);

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const outputPath = path.join(REPORT_DIR, `${strategy}_${timestamp}.json`);
          fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

          // Extract scores
          const scores = {
            Performance: result.lighthouseResult.categories.performance.score * 100,
            Accessibility: result.lighthouseResult.categories.accessibility.score * 100,
            'Best Practices': result.lighthouseResult.categories['best-practices'].score * 100,
            SEO: result.lighthouseResult.categories.seo.score * 100,
          };

          console.log(`\n=== ${strategy.toUpperCase()} Scores ===`);
          for (const [category, score] of Object.entries(scores)) {
            console.log(`${category}: ${score.toFixed(0)}/100`);
          }

          console.log(`Report saved to: ${outputPath}`);
          resolve(scores);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

async function runAudit() {
  try {
    console.log('=== PageSpeed Insights Audit ===\n');
    
    const mobileScores = await runPageSpeedInsights('mobile');
    console.log();
    const desktopScores = await runPageSpeedInsights('desktop');
    
    console.log('\n=== Audit Complete ===');
  } catch (error) {
    console.error('Error:', error.message);
    console.log('\nTo get an API key:');
    console.log('1. Go to https://console.cloud.google.com/');
    console.log('2. Create a new project or select existing one');
    console.log('3. Enable PageSpeed Insights API');
    console.log('4. Create credentials (API key)');
    console.log('5. Add the API key to this script (line 5)');
  }
}

runAudit();
