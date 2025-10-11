# GitHub Deployment Guide

## 🚀 Quick Setup to Host on GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Fill in:
   - **Repository name:** `gita-lessons` (or your preferred name)
   - **Description:** "Bhagavad Gita Life Skills Lessons for Students"
   - **Visibility:** Public (required for free GitHub Pages)
   - ❌ **DO NOT** check "Add a README file"
4. Click **Create repository**

### Step 2: Push Your Code to GitHub

Copy and run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Make sure you're in the project directory
cd d:\dev\gita-lessons\gita-website

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/gita-lessons.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `rakeshjangid`, use:
```bash
git remote add origin https://github.com/rakeshjangid/gita-lessons.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top menu)
3. Scroll down and click **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. That's it! The deployment will start automatically

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running
3. Wait 2-3 minutes for it to complete
4. Once done, your website will be live at:
   ```
   https://YOUR_USERNAME.github.io/gita-lessons/
   ```

## 🔄 Updating Your Website

Whenever you make changes:

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Update lessons"

# Push to GitHub
git push
```

The website will automatically rebuild and deploy!

## ⚙️ Important Configuration

### If You Named Your Repo Differently

If your repository name is NOT `gita-lessons`, update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/YOUR_ACTUAL_REPO_NAME/',
  // ...
})
```

Then commit and push:
```bash
git add vite.config.js
git commit -m "Update base path"
git push
```

## 🌐 Custom Domain (Optional)

If you have a custom domain:

1. In your repo, go to **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Add a `CNAME` file to your project with your domain name
4. Configure your domain's DNS settings

## 📱 Testing Locally Before Deployment

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

## 🆘 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check that `base` in `vite.config.js` matches your repo name

### Issue: 404 errors
**Solution:** Make sure GitHub Pages is enabled in Settings

### Issue: Build fails
**Solution:** Check the Actions tab for error details

## 📊 Project Status

- ✅ Git initialized
- ✅ Initial commit created
- ✅ Deployment workflow configured
- ✅ Base path set for GitHub Pages
- ⏳ **Next:** Push to GitHub and enable Pages

---

**Need Help?** Create an issue in the repository or check the Actions tab for build logs.
