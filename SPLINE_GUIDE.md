# Adding Spline 3D Scenes to Your Portfolio

## 🎨 What is Spline?

Spline is a 3D design tool that lets you create interactive 3D experiences for the web. It's perfect for adding eye-catching 3D elements to your portfolio!

## 🚀 Quick Setup

### Step 1: Create Your 3D Scene

1. Go to [spline.design](https://spline.design)
2. Sign up for a free account
3. Create a new project
4. Design your 3D scene (or use a template)
5. Export for web

### Step 2: Get Your Scene URL

1. In Spline, click **Export** (top right)
2. Select **Code Export**
3. Choose **React/Next.js**
4. Copy the scene URL (looks like: `https://prod.spline.design/xxxxx/scene.splinecode`)

### Step 3: Add to Your Portfolio

Open `src/components/sections/SkillsSection.tsx` and find this section:

```tsx
{/* Uncomment and add your Spline scene URL:
<SplineScene 
  scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode"
  className="w-full h-full"
/>
*/}
```

Replace with your actual URL:

```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR-ACTUAL-SCENE-ID/scene.splinecode"
  className="w-full h-full"
/>
```

And remove the fallback div above it.

## 🎯 Recommended Spline Scenes for Portfolio

### 1. Floating Laptop/Computer
Perfect for showcasing your developer workspace

### 2. Abstract Geometric Shapes
Modern and professional look

### 3. Code Editor Animation
Shows your coding expertise

### 4. Tech Stack Visualization
Display your technologies in 3D

### 5. Interactive Logo
Your personal brand in 3D

## 📝 Example Implementation

Here's a complete example:

```tsx
// In SkillsSection.tsx, replace the fallback div with:

<SplineScene 
  scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
  className="w-full h-full"
/>
```

## 🎨 Customization Tips

### 1. Scene Size
The component is already set to fill its container (400px on mobile, 600px on desktop)

### 2. Loading State
A loading spinner is automatically shown while the scene loads

### 3. Performance
- Keep scenes under 5MB for best performance
- Test on mobile devices
- Consider adding a "Skip 3D" option for slower devices

## 🔧 Advanced Configuration

### Add Multiple Spline Scenes

You can add Spline scenes to any section:

```tsx
import { SplineScene } from '@/components/ui/splite';

// In your component:
<SplineScene 
  scene="your-scene-url"
  className="w-full h-[500px]"
/>
```

### Conditional Loading (Mobile vs Desktop)

```tsx
{/* Show on desktop only */}
<div className="hidden lg:block">
  <SplineScene scene="your-scene-url" className="w-full h-full" />
</div>

{/* Show fallback on mobile */}
<div className="lg:hidden">
  <img src="/fallback-image.png" alt="3D Scene" />
</div>
```

## 🎯 Where to Use Spline Scenes

### ✅ Good Places:
- Skills section (current implementation)
- Hero section (replace Three.js sphere)
- About section (personal branding)
- Contact section (interactive element)

### ❌ Avoid:
- Multiple scenes on one page (performance)
- Small components (hard to see details)
- Critical content areas (accessibility)

## 📱 Mobile Optimization

The current implementation shows the Spline scene on all devices, but you can optimize:

```tsx
// Hide on mobile for better performance
<div className="hidden md:block h-[400px] lg:h-[600px]">
  <SplineScene scene="your-url" className="w-full h-full" />
</div>

// Show fallback on mobile
<div className="md:hidden h-[400px] flex items-center justify-center bg-gradient-accent rounded-3xl">
  <div className="text-6xl">💻</div>
</div>
```

## 🎨 Free Spline Templates

Check out these free templates:
- [Spline Community](https://spline.design/community)
- Search for: "portfolio", "tech", "developer", "minimal"

## 🐛 Troubleshooting

### Scene Not Loading?
1. Check the URL is correct
2. Ensure scene is published in Spline
3. Check browser console for errors
4. Verify internet connection

### Performance Issues?
1. Reduce scene complexity in Spline
2. Optimize textures and materials
3. Consider hiding on mobile
4. Add loading states

### Scene Too Small/Large?
Adjust the container height in `SkillsSection.tsx`:

```tsx
className="relative h-[300px] lg:h-[500px]"  // Smaller
className="relative h-[500px] lg:h-[700px]"  // Larger
```

## 🎉 You're All Set!

Your Skills section now supports Spline 3D scenes! Just:

1. Create a scene on spline.design
2. Get the export URL
3. Add it to `SkillsSection.tsx`
4. Enjoy your interactive 3D portfolio!

## 🔗 Resources

- [Spline Website](https://spline.design)
- [Spline Docs](https://docs.spline.design)
- [Spline Community](https://spline.design/community)
- [Spline YouTube Tutorials](https://youtube.com/@splinetool)

---

**Pro Tip**: Start with a simple scene and gradually add complexity. Test on multiple devices to ensure good performance!

