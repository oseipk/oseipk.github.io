# ML Engineer Portfolio

A modern, professional portfolio website showcasing ML engineering expertise, projects, and experience.

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics
- **Deployment**: GitHub Pages (Static Export)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm start
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## 📦 Static Export

This portfolio is configured for static export, making it perfect for GitHub Pages deployment.

```bash
# Build static files
pnpm build

# Output will be in the /out directory
```

## 🚀 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** section (under "Code and automation")
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main

3. **Access your site**:
   - Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the static site
pnpm build

# The /out folder contains your static site
# You can deploy this folder to any static hosting service
```

## 📁 Project Structure

```
modern-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── experience.tsx    # Experience section
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   └── projects.tsx      # Projects section
├── public/               # Static assets
├── styles/               # Global styles
├── .github/workflows/    # GitHub Actions workflows
└── next.config.mjs       # Next.js configuration
```

## 🎨 Customization

### Personal Information

Update your personal information in these components:
- `components/hero.tsx` - Name, title, bio, social links
- `components/about.tsx` - Skills and expertise
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - Portfolio projects
- `components/contact.tsx` - Contact information

### Images

- Hero image: Located in `/public` or update to use external URLs
- Project images: Currently using Unsplash URLs
- All images are unoptimized for static export compatibility

### Theme

The portfolio includes a dark/light theme toggle. Customize colors in:
- `app/globals.css` - CSS variables for theme colors
- Tailwind configuration is in the CSS file using CSS variables

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)

```javascript
{
  output: 'export',           // Enable static export
  images: {
    unoptimized: true,        // Required for static export
    domains: ['images.unsplash.com']
  }
}
```

## 📝 Features

- ✅ Fully responsive design
- ✅ Dark/Light theme toggle
- ✅ Smooth animations and transitions
- ✅ Professional UI components
- ✅ SEO optimized
- ✅ Type-safe with TypeScript
- ✅ Static site generation
- ✅ GitHub Pages ready
- ✅ Mobile-first approach

## 🐛 Troubleshooting

### Build Issues

If you encounter build errors:
1. Delete `.next` and `out` folders
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall dependencies: `pnpm install`
4. Rebuild: `pnpm build`

### GitHub Pages Not Showing

1. Ensure GitHub Actions workflow ran successfully
2. Check that Pages is enabled in repository settings
3. Verify the source is set to "GitHub Actions"
4. Wait a few minutes for DNS propagation

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or suggestions, reach out via the contact form on the portfolio or through GitHub issues.

---

Built with ❤️ using Next.js and Tailwind CSS
