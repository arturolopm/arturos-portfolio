# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📋 Prerequisites

- Node.js 18+ installed
- Basic knowledge of React/Next.js
- A code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Content

Edit `src/config/portfolio.ts` and update:

```typescript
export const personalInfo = {
  name: 'Your Name',              // ← Change this
  title: 'Your Title',            // ← Change this
  description: 'Your bio...',     // ← Change this
  resumeUrl: 'your-resume-link',  // ← Change this
  social: {
    github: 'your-github-url',    // ← Change this
    linkedin: 'your-linkedin-url', // ← Change this
  },
};
```

### 4. Add Your Projects

In the same file, update the `projects` array:

```typescript
export const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    category: 'Full Stack',
    image: '/projects/project.jpg',
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    tags: ['React', 'Node.js'],
  },
];
```

### 5. Customize Colors (Optional)

Edit `src/app/globals.css`:

```css
.text-gradient {
  /* Change these colors to your brand colors */
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent;
}
```

## 🎨 What You Get

- ✅ Modern, responsive design
- ✅ 3D animated hero section
- ✅ Smooth scroll animations
- ✅ Contact form ready
- ✅ SEO optimized
- ✅ Dark theme
- ✅ Mobile-friendly navigation

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/config/portfolio.ts` | All your content (name, projects, etc.) |
| `src/app/globals.css` | Colors and styling |
| `src/app/layout.tsx` | Site metadata and fonts |
| `src/components/sections/*` | Individual page sections |

## 🔧 Common Tasks

### Change Your Name
→ Edit `src/config/portfolio.ts` → `personalInfo.name`

### Add a Project
→ Edit `src/config/portfolio.ts` → Add to `projects` array

### Change Colors
→ Edit `src/app/globals.css` → `.text-gradient` class

### Add Project Images
→ Place images in `public/projects/` folder
→ Reference as `/projects/image.jpg`

### Update Resume Link
→ Edit `src/config/portfolio.ts` → `personalInfo.resumeUrl`

## 🚀 Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site will be live in minutes.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

## 📱 Test Your Site

Before deploying, test:

1. **Desktop**: Resize browser window
2. **Mobile**: Use Chrome DevTools mobile view
3. **Performance**: Run Lighthouse audit
4. **Links**: Click all buttons and links

## 🆘 Need Help?

- Read the full [README.md](./README.md)
- Check [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed guides
- Review component files for inline comments

## 📝 Next Steps

1. ✅ Update personal info
2. ✅ Add your projects
3. ✅ Customize colors
4. ✅ Test on mobile
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share with the world! 🎉

---

**Pro Tips:**
- Use high-quality project images (800x600px recommended)
- Keep descriptions concise and impactful
- Test your site on real mobile devices
- Update your resume link regularly
- Add Google Analytics for visitor tracking

Happy coding! 🚀

