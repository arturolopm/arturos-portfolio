# Portfolio Customization Guide

This guide will help you customize your portfolio to match your personal brand and showcase your work.

## 🎯 Quick Start Customization

### 1. Update Personal Information

Edit `src/config/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your Tagline',
  description: 'Your description...',
  resumeUrl: 'https://your-resume-link.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
```

### 2. Update About Section

In the same file, edit the `about` object:

```typescript
export const about = {
  title: 'About me',
  subtitle: 'Your Subtitle',
  description: 'Your bio...',
  yearsOfExperience: '5+',
  technologies: ['React', 'Node.js', 'etc...'],
};
```

### 3. Add Your Projects

Update the `projects` array:

```typescript
export const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    category: 'Category',
    image: '/projects/project-image.jpg',
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/username/repo',
    tags: ['React', 'TypeScript', 'etc'],
  },
  // Add more projects...
];
```

### 4. Customize Services

Edit the `services` array to match what you offer:

```typescript
export const services = [
  {
    title: 'Service Name',
    description: 'Service description...',
    icon: 'IconName', // Palette, Code, Server, etc.
    links: ['Link1', 'Link2'],
  },
];
```

## 🎨 Styling Customization

### Change Color Scheme

Edit `src/app/globals.css`:

#### Primary Gradient Colors
```css
.text-gradient {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent;
}
```

Change to your colors:
```css
.text-gradient {
  @apply bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent;
}
```

#### Background Gradient
```css
.bg-gradient-accent {
  @apply bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20;
}
```

### Change Fonts

Edit `src/app/layout.tsx`:

```typescript
import { YourFont, YourMonoFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

Then update in `globals.css`:
```css
--font-sans: var(--font-your-font);
```

## 🔧 Component Customization

### Hero Section

File: `src/components/sections/HeroSection.tsx`

**Change the 3D Element:**
- Replace `<Scene3D />` with your own 3D component
- Or remove it entirely for a simpler design

**Modify Animation Timing:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Change this value
      delayChildren: 0.3,   // Change this value
    },
  },
};
```

### About Section

File: `src/components/sections/AboutSection.tsx`

**Change the Stats Display:**
```tsx
<div className="text-6xl lg:text-8xl font-bold text-gradient mb-4">
  5+ {/* Change this number */}
</div>
<div className="text-xl lg:text-2xl text-white/80">
  Years of Experience {/* Change this text */}
</div>
```

### Services Section

File: `src/components/sections/ServicesSection.tsx`

**Add Custom Icons:**
```typescript
import { YourIcon } from 'lucide-react';

// In the services map:
const Icon = service.icon === 'YourIcon' ? YourIcon : Palette;
```

### Work Section

File: `src/components/sections/WorkSection.tsx`

**Change Grid Layout:**
```tsx
// Current: 3 columns on large screens
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// Change to 2 columns:
<div className="grid md:grid-cols-2 gap-8">

// Change to 4 columns:
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
```

**Add Project Images:**
1. Place images in `public/projects/`
2. Update image paths in `src/config/portfolio.ts`

### Contact Section

File: `src/components/sections/ContactSection.tsx`

**Add Email Integration:**

Using EmailJS:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    // Success handling
  } catch (error) {
    // Error handling
  }
};
```

## 🎭 3D Customization

### Sphere Settings

File: `src/components/3d/Sphere3D.tsx`

**Change Color:**
```tsx
<MeshDistortMaterial
  color="#8b5cf6" // Change this hex color
  // ...
/>
```

**Adjust Animation:**
```tsx
<MeshDistortMaterial
  distort={0.4}  // Higher = more distortion
  speed={2}      // Higher = faster animation
  roughness={0.2}
  metalness={0.8}
/>
```

**Change Shape:**
```tsx
// Current: Sphere
<Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>

// Change to Box:
import { Box } from '@react-three/drei';
<Box ref={boxRef} args={[2, 2, 2]}>

// Change to Torus:
import { Torus } from '@react-three/drei';
<Torus ref={torusRef} args={[1, 0.4, 16, 100]}>
```

### Scene Lighting

File: `src/components/3d/Scene3D.tsx`

```tsx
<ambientLight intensity={0.5} /> {/* Overall brightness */}
<directionalLight position={[10, 10, 5]} intensity={1} /> {/* Main light */}
<pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" /> {/* Accent light */}
```

## 📱 Navigation Customization

File: `src/components/Navigation.tsx`

**Add/Remove Navigation Items:**
```typescript
const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  // Add your own:
  { id: 'blog', icon: BookOpen, label: 'Blog' },
];
```

**Change Position:**
```tsx
// Current: Bottom center
<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">

// Top right:
<nav className="fixed top-4 right-4 z-50">

// Left side:
<nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
```

## 🖼️ Adding Images

1. Create a `public/projects/` directory
2. Add your project images
3. Reference them in the config:

```typescript
image: '/projects/my-project.jpg'
```

For optimized images, use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/projects/my-project.jpg"
  alt="Project name"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🚀 Performance Optimization

### Reduce Animation Complexity

In any section component:
```typescript
// Simpler animations
const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
```

### Lazy Load Sections

```tsx
import dynamic from 'next/dynamic';

const WorkSection = dynamic(() => import('@/components/sections/WorkSection'), {
  loading: () => <div>Loading...</div>,
});
```

### Disable 3D on Mobile

```tsx
<div className="hidden lg:block">
  <Scene3D />
</div>
```

## 📝 Adding New Sections

1. Create component in `src/components/sections/NewSection.tsx`
2. Add to `src/app/page.tsx`
3. Add navigation item in `src/components/Navigation.tsx`
4. Add configuration in `src/config/portfolio.ts`

Example:
```tsx
// NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gradient">New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

## 🎨 Theme Customization

### Create Custom Theme

Edit `src/app/globals.css`:

```css
.dark {
  --background: oklch(0.09 0 0);      /* Background color */
  --foreground: oklch(0.985 0 0);     /* Text color */
  --card: oklch(0.15 0 0 / 50%);      /* Card background */
  --primary: oklch(0.922 0 0);        /* Primary color */
  /* etc... */
}
```

### Add Light Mode

Remove `className="dark"` from `src/app/layout.tsx`:
```tsx
<html lang="en"> {/* Remove className="dark" */}
```

Then customize light mode in `globals.css`:
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* etc... */
}
```

## 💡 Tips

1. **Test on Mobile**: Always check responsiveness
2. **Use Git**: Commit before making major changes
3. **Performance**: Use Chrome DevTools Lighthouse
4. **Accessibility**: Test with screen readers
5. **SEO**: Update metadata in `layout.tsx`

## 🆘 Common Issues

**3D not rendering?**
- Check browser console for errors
- Ensure Three.js dependencies are installed
- Try disabling 3D on mobile

**Animations not working?**
- Check Framer Motion is installed
- Verify component is client-side (`'use client'`)

**Styles not applying?**
- Clear `.next` cache: `rm -rf .next`
- Restart dev server

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/docs/)
- [Shadcn UI](https://ui.shadcn.com/)

---

Need help? Check the README.md or create an issue on GitHub!

