# Deployment Guide - Safiya's Portfolio

This is a static HTML/CSS/JavaScript portfolio website ready for deployment on Vercel.

## Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14 or higher)

## Quick Start - Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# - Link to Vercel account
# - Select or create a team
# - Confirm project settings
```

### Option 2: Using GitHub Integration

1. Push code to GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push origin main
   ```

2. Visit [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Import" and deploy

### Option 3: Direct Upload

1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project" → "Continue with Git" (or upload folder)
3. Configure project settings (optional)
4. Click "Deploy"

## Local Development

### Using Python's Built-in Server

```bash
# Start local server on port 3000
npm run dev

# Or manually
python -m http.server 3000

# Visit http://localhost:3000
```

### Using Node.js (if installed)

```bash
# Install simple HTTP server
npm install -g http-server

# Start server
http-server -p 3000
```

## Project Structure

```
├── index.html              # Main portfolio page
├── styles.css              # Styling (responsive, dark/light theme)
├── script.js               # Interactive features and animations
├── package.json            # Project metadata
├── vercel.json             # Vercel deployment configuration
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
├── assets/                 # Static assets
│   ├── Safiya Bi_A.jpeg   # Profile image
│   ├── Safiya_Bi_A__Resume.pdf
│   ├── certs/              # Certificate images
│   └── docs/               # Project documentation
└── README.md               # Project information
```

## Configuration Files

### vercel.json
Defines Vercel deployment settings:
- **buildCommand**: Build script (static site - no build needed)
- **outputDirectory**: Root directory (.)
- **rewrites**: URL routing configuration
- **headers**: Security and caching headers

### Security Headers Included
- **Cache-Control**: Asset caching strategy
- **X-Content-Type-Options**: Prevent MIME sniffing
- **X-Frame-Options**: Prevent clickjacking
- **X-XSS-Protection**: XSS attack mitigation

## Environment Variables

Currently, this portfolio doesn't require environment variables. If needed in the future:

1. Copy `.env.example` to `.env.local`
2. Fill in values
3. In Vercel Dashboard: Settings → Environment Variables
4. Add your variables

## Performance Optimization

✅ **Already Implemented:**
- Minimal CSS/JS (no heavy frameworks)
- Responsive design (mobile-first)
- Semantic HTML
- Font optimization (Google Fonts with display=swap)
- Asset caching headers

## Domain Configuration

### Custom Domain on Vercel

1. Dashboard → Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., safiyabi-a.com)
4. Follow DNS configuration instructions

### DNS Setup (varies by provider)
- Point domain to Vercel nameservers, OR
- Create CNAME record pointing to your Vercel URL

## Troubleshooting

### Page not loading
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console for errors (F12)
- Verify asset paths in `index.html`

### Assets (images, PDFs) not loading
- Ensure `assets/` folder is committed to git
- Check file paths are relative (e.g., `assets/image.jpg`)
- Verify files aren't in `.gitignore`

### Theme toggle not working
- Check `script.js` is loaded in browser
- Verify browser supports localStorage
- Open DevTools Console for error messages

### Build errors on Vercel
- Check Vercel deployment logs in Dashboard
- Ensure all referenced files exist
- Verify no syntax errors in HTML/CSS/JS

## Maintenance

### Update Content

1. Edit `index.html` for page content
2. Update `styles.css` for styling
3. Modify `script.js` for functionality
4. Add/update files in `assets/` as needed

### Deploy Changes

```bash
git add .
git commit -m "Update: [description]"
git push origin main
```
Vercel auto-deploys on push to main branch.

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [HTML/CSS/JS Guide](https://developer.mozilla.org/en-US/)
- [Vercel Community](https://vercel.com/support)

---

**Last Updated:** May 2026
