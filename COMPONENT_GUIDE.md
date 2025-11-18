# Component Guide

Visual guide to understanding and editing each component.

## 🏗️ Page Structure

```
┌─────────────────────────────────────────┐
│            Header (Fixed)               │ ← Header.tsx
│  Arturo Lopez          [Work with me]   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│         Hero Section                    │ ← HeroSection.tsx
│   Name + Title + 3D Sphere             │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│         About Section                   │ ← AboutSection.tsx
│   Bio + Experience + Tech Stack        │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│        Services Section                 │ ← ServicesSection.tsx
│   What I Do + Service Cards            │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│         Work Section                    │ ← WorkSection.tsx
│   Portfolio Projects Grid              │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│        Contact Section                  │ ← ContactSection.tsx
│   Contact Form + Social Links          │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│              Footer                     │
│   © 2025 Arturo Lopez                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│    [🏠] [👤] [💼] [📊] [✉️]           │ ← Navigation.tsx (Fixed)
└─────────────────────────────────────────┘
```

## 📝 Component Details

### 1. Header Component
**File**: `src/components/Header.tsx`

**What it does**:
- Fixed top navigation
- Shows your name as a logo
- "Work with me" button scrolls to contact

**Edit to**:
- Change your name
- Update LinkedIn link
- Modify button text

**Key props**: None (uses config)

---

### 2. Hero Section
**File**: `src/components/sections/HeroSection.tsx`

**What it does**:
- First section visitors see
- Large name display
- Animated typing effect for title
- 3D sphere on the right (desktop only)
- Social media links

**Edit to**:
- Change name and title
- Update bio text
- Modify button actions
- Customize 3D element

**Uses**:
- `Scene3D.tsx` - 3D canvas wrapper
- `Sphere3D.tsx` - Animated sphere

**Content from**: `src/config/portfolio.ts` → `personalInfo`

---

### 3. About Section
**File**: `src/components/sections/AboutSection.tsx`

**What it does**:
- Shows years of experience
- Displays bio
- Lists technology stack
- Resume download button

**Edit to**:
- Update experience years
- Change bio text
- Add/remove technologies
- Update resume link

**Content from**: `src/config/portfolio.ts` → `about`

**Layout**:
```
┌──────────────┬──────────────┐
│              │              │
│  Experience  │    Bio       │
│   Card       │  + Tech      │
│              │  + Buttons   │
└──────────────┴──────────────┘
```

---

### 4. Services Section
**File**: `src/components/sections/ServicesSection.tsx`

**What it does**:
- Lists services you offer
- Shows service descriptions
- Icon for each service
- Links to related work

**Edit to**:
- Add/remove services
- Change descriptions
- Update icons
- Modify links

**Content from**: `src/config/portfolio.ts` → `services`

**Layout**:
```
┌──────────────┬──────────────┐
│              │  ┌─────────┐ │
│   Header     │  │ Service │ │
│   + CTA      │  └─────────┘ │
│              │  ┌─────────┐ │
│              │  │ Service │ │
│              │  └─────────┘ │
└──────────────┴──────────────┘
```

---

### 5. Work Section
**File**: `src/components/sections/WorkSection.tsx`

**What it does**:
- Displays project portfolio
- Shows project cards in grid
- Live demo and code links
- Project tags and categories

**Edit to**:
- Add/remove projects
- Change grid layout (2, 3, or 4 columns)
- Update project details
- Add project images

**Content from**: `src/config/portfolio.ts` → `projects`

**Project Card Structure**:
```
┌─────────────────────┐
│   Project Image     │
├─────────────────────┤
│ Category            │
│ Title               │
│ Description         │
│ [Tag] [Tag] [Tag]   │
│ [Live] [Code]       │
└─────────────────────┘
```

---

### 6. Contact Section
**File**: `src/components/sections/ContactSection.tsx`

**What it does**:
- Contact form with validation
- Email input
- Message textarea
- Submit button
- Social links

**Edit to**:
- Add email service integration
- Change form fields
- Update validation
- Modify styling

**Content from**: `src/config/portfolio.ts` → `contact`

**Form Structure**:
```
┌─────────────────────┐
│  Get in touch       │
│  Let's work         │
│  together!          │
├─────────────────────┤
│  [Name input]       │
│  [Email input]      │
│  [Message textarea] │
│  [Send button]      │
└─────────────────────┘
```

---

### 7. Navigation Component
**File**: `src/components/Navigation.tsx`

**What it does**:
- Fixed bottom navigation
- Smooth scroll to sections
- Auto-highlights active section
- Animated indicator

**Edit to**:
- Add/remove nav items
- Change icons
- Modify position
- Update styling

**Navigation Items**:
```typescript
const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'services', icon: Code, label: 'Services' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];
```

---

## 🎨 Styling Components

### Glass Effect
Used in: Navigation, Cards, Inputs

```css
.glass-effect {
  backdrop-blur-xl
  bg-white/5
  border border-white/10
}
```

### Text Gradient
Used in: Headings, Links, Accents

```css
.text-gradient {
  bg-gradient-to-r
  from-purple-400
  via-pink-500
  to-red-500
  bg-clip-text
  text-transparent
}
```

### Background Gradient
Used in: Cards, Decorative elements

```css
.bg-gradient-accent {
  bg-gradient-to-br
  from-purple-600/20
  via-pink-600/20
  to-red-600/20
}
```

---

## 🎭 Animation Components

### Framer Motion Variants

**Container Animation** (Stagger children):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
```

**Item Animation** (Slide in):
```typescript
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};
```

**Usage**:
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={itemVariants}>
    Content
  </motion.div>
</motion.div>
```

---

## 🎯 3D Components

### Scene3D
**File**: `src/components/3d/Scene3D.tsx`

**Structure**:
```tsx
<Canvas>
  <PerspectiveCamera />
  <OrbitControls />
  <ambientLight />
  <directionalLight />
  <pointLight />
  <Sphere3D />
</Canvas>
```

**Edit to**:
- Change camera position
- Adjust lighting
- Modify controls
- Add more 3D objects

### Sphere3D
**File**: `src/components/3d/Sphere3D.tsx`

**Properties**:
- `color`: Sphere color
- `distort`: Distortion amount (0-1)
- `speed`: Animation speed
- `roughness`: Surface roughness
- `metalness`: Metallic appearance

---

## 🔧 Utility Components

### Shadcn UI Components
Located in: `src/components/ui/`

**Button** - Customizable button
```tsx
<Button variant="default" size="lg">
  Click me
</Button>
```

**Card** - Container with styling
```tsx
<Card>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

**Input** - Form input
```tsx
<Input
  type="text"
  placeholder="Enter text"
/>
```

**Textarea** - Multi-line input
```tsx
<Textarea
  placeholder="Enter message"
  rows={6}
/>
```

---

## 📊 Data Flow

```
portfolio.ts (Config)
       ↓
   Components
       ↓
   Rendered UI
```

**Example**:
1. Edit `personalInfo.name` in `portfolio.ts`
2. `HeroSection.tsx` imports config
3. Displays updated name
4. No component editing needed!

---

## 🎨 Customization Quick Reference

| Want to change... | Edit this file... |
|------------------|-------------------|
| Your name | `config/portfolio.ts` |
| Projects | `config/portfolio.ts` |
| Colors | `app/globals.css` |
| Layout | Component files |
| Fonts | `app/layout.tsx` |
| Animations | Component files |
| 3D effects | `3d/Sphere3D.tsx` |
| Navigation | `Navigation.tsx` |

---

## 🚀 Common Modifications

### Add a new section
1. Create `src/components/sections/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to navigation in `Navigation.tsx`

### Change section order
Edit `src/app/page.tsx`:
```tsx
<main>
  <HeroSection />
  <WorkSection />      {/* Moved up */}
  <AboutSection />     {/* Moved down */}
  <ServicesSection />
  <ContactSection />
</main>
```

### Remove a section
Comment out or delete from `src/app/page.tsx`

### Duplicate a section
Copy component and rename, then import twice

---

## 💡 Pro Tips

1. **Always edit config first** - Most content is in `portfolio.ts`
2. **Test on mobile** - Use Chrome DevTools device mode
3. **Use Git** - Commit before major changes
4. **Check console** - Look for errors while developing
5. **Read comments** - Components have helpful inline comments

---

Need more help? Check:
- `README.md` - Full documentation
- `QUICKSTART.md` - Quick setup
- `CUSTOMIZATION.md` - Detailed guides

