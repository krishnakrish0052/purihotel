#!/bin/bash

# PageSpeed Insights API Monitoring Script for Puri Beach Resort
# Run this script to audit website performance using Google's API

WEBSITE_URL="https://puribeach-resort.com"
API_KEY=""  # Get your API key from https://developers.google.com/speed/docs/insights/v5/get-started
REPORT_DIR="./lighthouse-reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create reports directory if it doesn't exist
mkdir -p "$REPORT_DIR"

if [ -z "$API_KEY" ]; then
  echo "Error: API_KEY not set. Get your API key from https://developers.google.com/speed/docs/insights/v5/get-started"
  echo "Then add it to this script."
  exit 1
fi

# Run PageSpeed Insights API audit
echo "Running PageSpeed Insights audit for $WEBSITE_URL..."

# Desktop audit
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$WEBSITE_URL&key=$API_KEY&strategy=desktop" \
  -o "$REPORT_DIR/desktop_$TIMESTAMP.json"

# Mobile audit
curl "https://www.googleapis.com/pagespeedonline/v5/v5/runPagespeed?url=$WEBSITE_URL&key=$API_KEY&strategy=mobile" \
  -o "$REPORT_DIR/mobile_$TIMESTAMP.json"

echo "Desktop report saved to: $REPORT_DIR/desktop_$TIMESTAMP.json"
echo "Mobile report saved to: $REPORT_DIR/mobile_$TIMESTAMP.json"
