# Puri Beach Resort Website

A fully responsive, modern website for Puri Beach Resort, a luxury beachfront hotel located in Puri, Odisha, India. The website showcases the resort's amenities, room rates, special packages, location details, and travel blog content.

## Features

### Responsive Design
- **Mobile-First Approach**: Fully responsive across all screen sizes (320px to 1920px+)
- **Breakpoints**: Optimized for mobile (320px, 375px, 480px), tablet (768px, 1024px), and desktop (1440px, 1920px)
- **Touch-Friendly**: All interactive elements designed for touch interactions (min 44px height)
- **Mobile Navigation**: Hamburger menu with smooth slide-out animation and overlay

### Core Pages
- **Homepage** (`index.html`): Hero section, about, services, gallery, blog, testimonials, FAQ, and map integration
- **Location Page** (`location.html`): Detailed location information with interactive Google Maps embed
- **Pricing Page** (`pricing.html`): Room rates and pricing information
- **Packages Page** (`packages.html`): Special packages and offers
- **Blog Page** (`blog.html`): Travel blog listing with 8 comprehensive articles

### Blog Articles
- Best Seafood Restaurants in Puri
- Best Time to Visit Puri - Complete Guide
- How to Reach Puri by Train, Road, and Air
- Complete Guide to Jagannath Temple Puri
- Puri Beach Safety Tips for Tourists
- Puri vs Konark - Which to Visit First
- Top 10 Things to Do in Puri
- Why Choose Puri Beach Resort for Your Stay

### Technical Features
- **SEO Optimized**: Meta tags, structured data, robots.txt, and sitemap.xml
- **Google Maps Integration**: Interactive map with precise location coordinates
- **Analytics**: Google Analytics 4 and Google Ads conversion tracking
- **Performance**: Optimized images, lazy loading, and efficient CSS
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance Monitoring**: Lighthouse and PageSpeed Insights integration

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom CSS with CSS Grid and Flexbox
- **JavaScript**: Vanilla JavaScript for mobile menu and interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Typography

## File Structure

```
hotel/
├── index.html              # Homepage
├── location.html           # Location page with map
├── pricing.html            # Room rates
├── packages.html           # Special packages
├── blog.html               # Blog listing
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
├── README.md               # This file
├── blog/                   # Blog articles
│   ├── best-seafood-restaurants-puri.html
│   ├── best-time-to-visit-puri.html
│   ├── how-to-reach-puri.html
│   ├── jagannath-temple-guide.html
│   ├── puri-beach-safety-tips.html
│   ├── puri-vs-konark.html
│   ├── top-10-things-to-do-in-puri.html
│   └── why-choose-puri-beach-resort.html
└── images/                 # Website images
```

## Performance Monitoring

### Lighthouse Audits
The project includes scripts for monitoring website performance using Google Lighthouse and PageSpeed Insights:

#### Option 1: PageSpeed Insights API (Recommended)
1. Get an API key from [Google Developers Console](https://developers.google.com/speed/docs/insights/v5/get-started)
2. Add the API key to `run-lighthouse.sh`
3. Run the script:
   ```bash
   ./run-lighthouse.sh
   ```
4. Reports are saved in `lighthouse-reports/` directory

#### Option 2: Local Lighthouse (Requires Chrome)
1. Install dependencies:
   ```bash
   npm install -g lighthouse
   npm install chrome-launcher
   ```
2. Run the Node.js script:
   ```bash
   node lighthouse-audit.js
   ```
3. Reports are saved in `lighthouse-reports/` directory

#### Automated Monitoring
For continuous monitoring, set up a cron job or CI/CD pipeline to run these scripts periodically and track performance trends.

## Deployment

### Static Hosting
The website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Free hosting with automatic deployments
- **Vercel**: Free hosting with CDN
- **AWS S3 + CloudFront**: Scalable hosting

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - static HTML/CSS/JS

### Customization
- Update contact information in the footer
- Replace placeholder images with actual resort photos
- Update Google Maps coordinates if needed
- Modify color scheme in CSS variables

## SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: Schema.org markup for local business
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## Contact Information

- **Location**: Marine Drive Road, near Light House, Swargadwar, Puri, Odisha 752001
- **Phone**: +91 8059815571
- **WhatsApp**: +91 8059815571

## License

This project is proprietary and confidential. All rights reserved by Puri Beach Resort.

## Version History

- **v1.0** (April 2025): Initial release with responsive design and mobile menu
- **v1.1** (April 2025): Added Google Maps integration and comprehensive blog section
