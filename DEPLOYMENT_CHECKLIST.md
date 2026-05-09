# Deployment Checklist - Safiya's Portfolio

Complete these steps to deploy your portfolio to production.

## Pre-Deployment

- [ ] All content is finalized and proofread
- [ ] Links in navigation work correctly
- [ ] All asset files (images, PDFs, certificates) are present
- [ ] Website looks good on mobile, tablet, and desktop
- [ ] Theme toggle (light/dark) works properly
- [ ] All external links open in new tabs (`target="_blank"`)
- [ ] Social media links are correct
- [ ] Email link is configured correctly
- [ ] Resume PDF is up to date
- [ ] No console errors in browser DevTools (F12)

## Vercel Setup

- [ ] Create [Vercel Account](https://vercel.com/signup)
- [ ] Verify email address
- [ ] Install [Vercel CLI](https://vercel.com/docs/cli) (optional but recommended)
- [ ] Link GitHub account to Vercel

## Deployment Steps

### Using GitHub Integration (Recommended)

1. [ ] Repository is pushed to GitHub
2. [ ] Visit [Vercel Dashboard](https://vercel.com/dashboard)
3. [ ] Click "New Project"
4. [ ] Select "SafiyaBiA/Safiya_Portpolio" repository
5. [ ] Click "Import"
6. [ ] Review project settings:
   - Framework: "Other" (static)
   - Build Command: Leave as suggested or use `npm run build`
   - Output Directory: `.` (root)
7. [ ] Click "Deploy"
8. [ ] Wait for deployment to complete (~2-5 minutes)

### Using Vercel CLI

1. [ ] Open terminal in project directory
2. [ ] Run: `vercel`
3. [ ] Login or create Vercel account
4. [ ] Select team (personal recommended)
5. [ ] Confirm project name: `safiya-portfolio`
6. [ ] Confirm build settings (use defaults)
7. [ ] Wait for deployment to complete

### Manual Upload

1. [ ] Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. [ ] Click "New Project"
3. [ ] Click "Continue with Web Upload"
4. [ ] Drag and drop project folder
5. [ ] Click "Deploy"

## Post-Deployment

- [ ] Visit deployed URL from Vercel dashboard
- [ ] Verify page loads correctly
- [ ] Check all navigation links work
- [ ] Verify theme toggle functions
- [ ] Test on mobile device (use browser DevTools)
- [ ] Check that all images load
- [ ] Confirm PDF downloads work
- [ ] Verify social media links are functional
- [ ] Test external links open correctly
- [ ] Check browser console for errors

## Domain Configuration (Optional)

- [ ] Decide on custom domain (e.g., `safiyabi-a.com`)
- [ ] Purchase domain from registrar (GoDaddy, Namecheap, etc.)
- [ ] In Vercel Dashboard → Project Settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter your domain
- [ ] Follow DNS setup instructions from Vercel
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Verify domain resolves to your portfolio

## Performance & Security

- [ ] Run Lighthouse audit (Chrome DevTools → Lighthouse)
- [ ] Check Performance score (aim for >90)
- [ ] Check Accessibility score (aim for >90)
- [ ] Check Best Practices score (aim for >90)
- [ ] Check SEO score (aim for >90)
- [ ] Verify no mixed content warnings (all assets use HTTPS)
- [ ] Test website on slow 3G (Chrome DevTools → Network throttling)

## Monitoring & Maintenance

- [ ] Enable Vercel Analytics (optional)
- [ ] Set up notifications for deployment failures
- [ ] Monitor deployment logs for errors
- [ ] Check error tracking in Vercel dashboard
- [ ] Schedule regular content updates
- [ ] Keep git history clean with meaningful commits

## Troubleshooting Reference

| Issue | Solution |
|-------|----------|
| Page not loading | Clear browser cache (Ctrl+Shift+Del) |
| Assets not showing | Verify file paths are relative, not absolute |
| Theme toggle broken | Check browser supports localStorage |
| Build failing | Check Vercel deployment logs |
| Domain not resolving | Wait for DNS propagation, check registrar settings |
| Slow loading | Run Lighthouse, optimize image sizes |

## Important Links

- 📊 [Vercel Dashboard](https://vercel.com/dashboard)
- 📖 [Vercel Documentation](https://vercel.com/docs)
- 🐙 [GitHub Repository](https://github.com/SafiyaBiA/Safiya_Portpolio)
- 🔍 [Google Search Console](https://search.google.com/search-console)
- 📈 [Vercel Analytics](https://vercel.com/docs/analytics)

## Support

If you encounter issues:
1. Check [Vercel Status](https://www.vercelstatus.com/)
2. Review [Deployment logs](https://vercel.com/docs/deployments/troubleshooting)
3. Check [Vercel Community](https://github.com/vercel/vercel/discussions)
4. Open a support ticket at [vercel.com/help](https://vercel.com/help)

---

**Last Updated:** May 9, 2026

**Deployment Status:** Ready for Production ✅
