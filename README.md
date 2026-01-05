# EngiDev - Personal Portfolio & Company Website

A modern, responsive portfolio website showcasing Ahmad's engineering projects, skills, and professional experience. Built with Next.js 16, React 19, and Tailwind CSS v4.

## 🚀 Live Demo

Visit the live website at your deployed URL.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## 🎯 About

EngiDev is a personal portfolio and company website for Ahmad, a Computer Science student at LUMS (Lahore University of Management Sciences) in his final semester. The site showcases his expertise in embedded systems, AI/ML, distributed systems, and hardware/software integration projects.

### Company Mission

EngiDev focuses on innovative solutions in:
- Renewable energy management systems
- AI-powered platforms
- Embedded systems development
- Hardware-software integration

## ✨ Features

### 🎨 Design Features
- **Welcome Screen**: Animated splash screen on first load with company logo
- **Dark/Light Mode**: Fully functional theme toggle with persistent storage
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern UI**: Clean, professional design with orange accent colors
- **Smooth Animations**: Framer Motion animations for enhanced user experience

### 📱 Pages & Sections

#### Home Page (`/`)
- **Hero Section**: Company introduction with EngiDev branding
- **Mission & Objectives**: Full company goals and vision
- **About Section**: 
  - Founder profile (Ahmad)
  - Education details (BS CS at LUMS)
  - Work experience (Teaching Assistant roles)
  - Featured projects showcase
  - Technical skills overview
  - Downloadable CV/Resume

#### Products Page (`/products`)
- **PV Genset Controller**: Detailed product showcase
  - Technical specifications
  - Key features
  - Use cases and applications
  - Product images and descriptions

#### Contact Page (`/contact`)
- Contact information
- Email and social media links
- Professional network connections

## 🛠 Tech Stack

### Core Framework
- **Next.js 16**: React framework with App Router
- **React 19.2**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development

### Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **Tailwind CSS Animate**: Animation utilities
- **Class Variance Authority**: Component variant management
- **Framer Motion 12**: Animation library

### UI Components
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Theme Management
- **Custom Theme System**: React Context-based theme provider
- **localStorage**: Persistent theme preference
- **System Preference Detection**: Respects OS dark mode settings

### Additional Libraries
- **date-fns**: Date manipulation
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **Recharts**: Data visualization
- **Sonner**: Toast notifications

## 📁 Project Structure

```
engidev/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── products/            # Products page
│   │   └── page.tsx
│   ├── contact/             # Contact page
│   │   └── page.tsx
│   └── globals.css          # Global styles & theme tokens
│
├── components/              # React components
│   ├── navbar.tsx          # Navigation bar with theme toggle
│   ├── footer.tsx          # Footer component
│   ├── welcome-screen.tsx  # Animated splash screen
│   ├── theme-provider.tsx  # Custom theme context provider
│   ├── theme-toggle.tsx    # Dark/light mode toggle button
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (50+ components)
│
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts       # Mobile breakpoint detection
│   └── use-toast.ts        # Toast notifications
│
├── lib/                     # Utility functions
│   └── utils.ts            # cn() helper & utilities
│
├── public/                  # Static assets
│   ├── resume.pdf          # Downloadable CV
│   └── icons/              # Favicon variations
│
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   # If using Git
   git clone <your-repo-url>
   cd engidev

   # Or download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

## 🎨 Customization

### Updating Personal Information

#### 1. Home Page Content (`app/page.tsx`)
- **Company Name**: Update the EngiDev branding
- **Mission Statement**: Edit the mission and objectives section
- **About Section**: Update education, experience, projects, and skills
- **Resume**: Replace `public/resume.pdf` with your CV

#### 2. Products (`app/products/page.tsx`)
- Add or modify product cards
- Update technical specifications
- Add new product pages as needed

#### 3. Contact Information (`app/contact/page.tsx`)
- Update email addresses
- Add/modify social media links
- Update location information

### Styling Customization

#### Theme Colors (`app/globals.css`)

The site uses CSS custom properties for theming:

```css
@theme inline {
  /* Light mode colors */
  --color-background: white;
  --color-foreground: #18181b;
  --color-primary: #f97316;  /* Orange accent */
  
  /* Dark mode colors */
  .dark {
    --color-background: #09090b;
    --color-foreground: #fafafa;
    --color-primary: #f97316;
  }
}
```

To change the accent color, update the `--color-primary` variable.

#### Typography

Fonts are configured in `app/layout.tsx` and `app/globals.css`:

```tsx
// layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'
```

Change the imports to use different Google Fonts.

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update the navbar links in `components/navbar.tsx`

Example:
```tsx
// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog Content</div>
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration Files

### next.config.mjs
```javascript
{
  typescript: {
    ignoreBuildErrors: true  // Allows build even with TS errors
  },
  images: {
    unoptimized: true        // Optimizes for static hosting
  }
}
```

### tsconfig.json
- Configures TypeScript compiler options
- Sets up path aliases (`@/` for root imports)
- Enables strict mode for type safety

## 📦 Key Dependencies Explained

| Package | Purpose |
|---------|---------|
| `next` | React framework with App Router |
| `react` & `react-dom` | Core React library |
| `typescript` | Type safety and IntelliSense |
| `tailwindcss` | Utility-first CSS framework |
| `framer-motion` | Animation library for smooth transitions |
| `lucide-react` | Icon library (Sun/Moon for theme toggle) |
| `@radix-ui/*` | Accessible UI primitives |
| `next-themes` | Theme management (fallback) |
| `class-variance-authority` | Type-safe component variants |
| `clsx` & `tailwind-merge` | Conditional className utilities |

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)

## 🐛 Known Issues & Solutions

### Dark Mode Not Persisting
- The custom theme provider uses localStorage
- Ensure browser allows localStorage
- Check browser console for errors

### Welcome Screen Flashing
- Normal behavior on slow connections
- Uses AnimatePresence for smooth transitions

### Build Errors
- Run `npm run build` to check for errors
- TypeScript errors are ignored in build (see next.config.mjs)

## 📝 Future Enhancements

Potential features to add:
- [ ] Blog section with MDX support
- [ ] Project detail pages
- [ ] Contact form with email integration
- [ ] Analytics integration
- [ ] SEO optimization with meta tags
- [ ] Performance monitoring
- [ ] i18n internationalization

**Made with ❤️ using Next.js, React, and Tailwind CSS**
