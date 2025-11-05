# GitHub Pages Deployment Guide

## Quick Start

Your portfolio is now configured for GitHub Pages deployment! Follow these steps:

## Step 1: Test the Build Locally

Before deploying, test that everything builds correctly:

```bash
pnpm build
```

This will create an `out` folder with your static site. If the build succeeds, you're ready to deploy!

## Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Repository name options**:
   - `YOUR_USERNAME.github.io` - For a personal site (will be at `https://YOUR_USERNAME.github.io`)
   - Any other name (e.g., `portfolio`) - Will be at `https://YOUR_USERNAME.github.io/portfolio`

3. **Important**: Choose "Public" visibility (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (you already have these)

## Step 4: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name.

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions" (not "Deploy from a branch")
5. Click **Save**

## Step 6: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-3 minutes)
4. Once complete, your site will be live!

## Step 7: Access Your Site

Your portfolio will be available at:
- Personal site: `https://YOUR_USERNAME.github.io`
- Project site: `https://YOUR_USERNAME.github.io/YOUR_REPO`

## Updating Your Portfolio

Every time you push changes to the `main` branch, your site will automatically rebuild and deploy:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from any registrar
2. In your repository, create a file: `public/CNAME` with your domain
3. Configure your DNS settings:
   - Add an A record pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. In repository Settings > Pages, enter your custom domain

## Troubleshooting

### Build Fails

**Error**: Build fails in GitHub Actions
**Solution**: 
1. Check the Actions tab for error details
2. Make sure build works locally: `pnpm build`
3. Ensure all dependencies are in `package.json`

### 404 Error on Pages

**Error**: Site shows 404 or "This site can't be reached"
**Solution**:
1. Verify Pages is enabled in Settings > Pages
2. Check that Source is set to "GitHub Actions"
3. Wait 5-10 minutes for DNS propagation
4. Try clearing browser cache

### Images Not Loading

**Error**: Images show broken or don't load
**Solution**:
1. Check `next.config.mjs` has `images: { unoptimized: true }`
2. Verify image paths are correct
3. For external images (Unsplash), check network connection

### Styles Not Applied

**Error**: Site appears without styling
**Solution**:
1. Clear browser cache
2. Check console for CSS loading errors
3. Verify `app/globals.css` is imported in `layout.tsx`

### Workflow Doesn't Run

**Error**: GitHub Actions workflow doesn't trigger
**Solution**:
1. Check `.github/workflows/deploy.yml` exists
2. Verify you pushed to the `main` branch
3. Check repository permissions in Settings > Actions

## Advanced Configuration

### Using a Different Branch

To deploy from a different branch (e.g., `production`):

1. Edit `.github/workflows/deploy.yml`
2. Change `branches: ["main"]` to `branches: ["production"]`
3. Commit and push to that branch

### Base Path for Subdirectory Deployment

If deploying to a subdirectory and having path issues, update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
  // ... rest of config
}
```

**Note**: Only needed if images or links break. Try without this first.

## Manual Deployment Alternative

If you prefer manual deployment:

1. Build locally: `pnpm build`
2. Install GitHub Pages CLI: `npm install -g gh-pages`
3. Deploy: `gh-pages -d out`

## Verification Checklist

Before going live, verify:

- ✅ Build completes successfully (`pnpm build`)
- ✅ All pages load correctly in the `out` folder
- ✅ Images display properly
- ✅ Links work correctly
- ✅ Contact information is updated
- ✅ Social media links are correct
- ✅ No placeholder text remains
- ✅ Theme toggle works
- ✅ Mobile responsive design looks good

## Need Help?

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

Good luck with your deployment! 🚀
