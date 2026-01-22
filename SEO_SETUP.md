# SEO Setup Guide - Getting Your Site Indexed by Google

Your site needs to be properly indexed by Google to appear in search results. Follow these steps:

## 1. Google Search Console Setup

### Step 1: Add Your Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Add all your domains:
   - `www.robincarruthers.com`
   - `robincarruthers.com`
   - `www.gymrob.com`
   - `gymrob.com`
   - `gym-rob.vercel.app`

### Step 2: Verify Ownership
1. Choose "HTML tag" verification method
2. Copy the `content` value from the meta tag (e.g., `abc123xyz...`)
3. Add it to your `.env.local` file:
   ```bash
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz...
   ```
4. Redeploy your site
5. Click "Verify" in Google Search Console

### Step 3: Submit Sitemap
1. In Google Search Console, go to "Sitemaps"
2. Add your sitemap URL:
   - `https://www.robincarruthers.com/sitemap.xml`
   - Repeat for all domains

## 2. Request Indexing

### Immediate Indexing Request
1. In Google Search Console, use "URL Inspection" tool
2. Enter your homepage URL: `https://www.robincarruthers.com`
3. Click "Request Indexing"
4. Repeat for important pages:
   - Homepage
   - Blog posts
   - About section

## 3. Check robots.txt

Your robots.txt is accessible at:
- `https://www.robincarruthers.com/robots.txt`

Verify it allows Google to crawl:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
```

## 4. Build Quality Backlinks

### Social Media Links
- Add your website URL to your Instagram bio (@gymrob123)
- Add to LinkedIn profile
- Share blog posts on social media

### Local Directories
- Google Business Profile (if you have one)
- Local fitness directories
- Mumbai business listings

## 5. Content Optimization

### Keywords to Target
- "Robin Carruthers"
- "GymRob"
- "eGym Lokhandwala"
- "Personal trainer Mumbai"
- "Fitness coach Andheri"
- "Strength training Mumbai"

### Content Updates
- Regularly update blog posts
- Add new content monthly
- Keep information current

## 6. Technical SEO Checklist

✅ Sitemap exists: `/sitemap.xml`
✅ Robots.txt configured: `/robots.txt`
✅ Structured data (JSON-LD) implemented
✅ Open Graph tags for social sharing
✅ Canonical URLs set
✅ Mobile-friendly (responsive design)
✅ Fast loading times
✅ HTTPS enabled

## 7. Monitor Progress

### Check Indexing Status
1. Google Search Console → Coverage
2. Check for errors
3. Monitor indexed pages

### Search Performance
1. Google Search Console → Performance
2. Track impressions and clicks
3. Monitor average position

## 8. Timeframe

- **Initial indexing**: 1-7 days after submission
- **Full indexing**: 2-4 weeks
- **Ranking improvements**: 1-3 months with consistent content

## 9. Additional Tips

### Speed Up Indexing
1. Share links on social media
2. Submit to other search engines (Bing, DuckDuckGo)
3. Get backlinks from other websites
4. Submit to web directories

### Content Strategy
- Write blog posts targeting "Robin Carruthers" and "GymRob"
- Include location-based keywords (Mumbai, Andheri, Lokhandwala)
- Add client testimonials with keywords
- Create location-specific content

## 10. Troubleshooting

### Site Not Appearing After 2 Weeks?
1. Check Google Search Console for errors
2. Verify robots.txt isn't blocking
3. Check for duplicate content issues
4. Ensure site is accessible (no password protection)
5. Verify HTTPS is working

### Low Rankings?
- Improve content quality
- Add more relevant keywords naturally
- Get more backlinks
- Improve page load speed
- Add more unique content

## Quick Start Checklist

- [ ] Set up Google Search Console for all domains
- [ ] Add verification meta tag to `.env.local`
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for homepage
- [ ] Add website URL to Instagram bio
- [ ] Share blog posts on social media
- [ ] Check robots.txt is accessible
- [ ] Monitor indexing status weekly

