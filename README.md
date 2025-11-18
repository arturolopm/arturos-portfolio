# Modern Portfolio - Arturo Lopez

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Shadcn UI,
and Three.js for stunning 3D effects.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber
- **Modular Components**: Easily editable sections for quick customization
- **Smooth Animations**: Framer Motion for fluid animations and transitions
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Beautiful dark theme with gradient accents
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── 3d/                 # 3D components
│   │   ├── Scene3D.tsx     # Main 3D scene wrapper
│   │   └── Sphere3D.tsx    # Animated 3D sphere
│   ├── sections/           # Modular page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WorkSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx          # Top navigation header
│   └── Navigation.tsx      # Bottom floating navigation
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization Guide

### Editing Sections

Each section is a standalone component in `src/components/sections/`. To edit a section:

1. **Hero Section** (`HeroSection.tsx`):

   - Update your name, title, and description
   - Modify social media links
   - Adjust the 3D scene settings

2. **About Section** (`AboutSection.tsx`):

   - Edit your bio and experience
   - Update the technology stack array
   - Change the resume link

3. **Services Section** (`ServicesSection.tsx`):

   - Modify the `services` array to add/remove services
   - Update service descriptions and icons

4. **Work Section** (`WorkSection.tsx`):

   - Edit the `projects` array to showcase your work
   - Add project images, descriptions, and links
   - Update project tags and categories

5. **Contact Section** (`ContactSection.tsx`):
   - Customize the contact form
   - Add email integration (e.g., EmailJS, SendGrid)
   - Update social links

### Changing Colors

Edit `src/app/globals.css` to modify the color scheme:

```css
.text-gradient {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent;
}
```

Change `purple-400`, `pink-500`, and `red-500` to your preferred colors.

### Modifying 3D Elements

Edit `src/components/3d/Sphere3D.tsx`:

- Change `color` prop for different sphere color
- Adjust `distort` and `speed` for animation effects
- Modify `scale` for size changes

## 🛠️ Installation & Setup

1. **Install dependencies**:

```bash
npm install
```

2. **Run development server**:

```bash
npm run dev
```

3. **Open in browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🎯 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 Adding New Sections

1. Create a new component in `src/components/sections/`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id='new-section'
      className='py-20 lg:py-32'
    >
      <div className='container mx-auto px-4'>{/* Your content here */}</div>
    </section>
  );
}
```

2. Import and add to `src/app/page.tsx`:

```tsx
import NewSection from '@/components/sections/NewSection';

// Add to main:
<NewSection />;
```

3. Add navigation item in `src/components/Navigation.tsx`:

```tsx
const navItems = [
  // ... existing items
  { id: 'new-section', icon: YourIcon, label: 'New Section' },
];
```

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

For Vercel:

```bash
npm install -g vercel
vercel
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Arturo Lopez

- LinkedIn: [arturo-lopez-martinez](https://www.linkedin.com/in/arturo-lopez-martinez/)
- GitHub: [@arturolopm](https://github.com/arturolopm)
