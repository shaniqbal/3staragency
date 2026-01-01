# 3 Star Agency - Neo-Luxury Digital Solutions

A modern, animated website built with React 18, Tailwind CSS v4, and Framer Motion, featuring 2026 Neo-Luxury design standards.

## 🌟 Features

- **Neo-Luxury Design**: Glassmorphism, Bento Grid layouts, and premium animations
- **Magnetic Buttons**: Interactive buttons with magnetic mouse-follow effect
- **Sticky Stack Projects**: Scroll-based stacking effect for project showcase
- **Infinite Marquee**: Seamless scrolling partner logos
- **Parallax Effects**: Depth and motion throughout the site
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for buttery smooth transitions

## 🎨 Design System

- **Primary Color**: #EE1C27 (Red)
- **Background**: Dark (#0A0A0A) and Off-white (#F5F5F5)
- **Fonts**: 
  - Montserrat (Headings)
  - Source Sans Pro (Body)
  - Rajdhani (Accent)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
3staragency/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with parallax
│   │   ├── Services.jsx        # Bento Grid services layout
│   │   ├── Projects.jsx        # Sticky stack projects
│   │   ├── Partners.jsx        # Infinite marquee
│   │   ├── Contact.jsx         # Contact form with info
│   │   ├── Footer.jsx          # Site footer
│   │   └── MagneticButton.jsx  # Magnetic button component
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles with Tailwind
│   └── main.jsx                # App entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React**: 19.2.0 - UI library
- **Vite**: 7.2.4 - Build tool and dev server
- **Tailwind CSS**: 4.1.18 - Utility-first CSS
- **Framer Motion**: 12.23.26 - Animation library
- **ESLint**: 9.39.2 - Code linting

## 📞 Contact Information

- **Office**: Office 179A Bahria Town LHR
- **Phone**: 03014734113
- **Email**: info@3staragency.com

## 🎯 Key Components

### Hero Section
Animated hero with parallax background effects and call-to-action buttons.

### Services (Bento Grid)
Responsive grid layout with varying card sizes showcasing services:
- Web Development
- Mobile Apps
- UI/UX Design
- Branding
- Digital Marketing
- E-Commerce

### Projects (Sticky Stack)
Scroll-based stacking effect displaying featured projects with gradient backgrounds.

### Partners (Infinite Marquee)
Seamlessly looping marquee animation showcasing partner brands.

### Contact Form
Glassmorphism-styled contact form with office location and contact details.

## 🎭 Animations

All animations are built with Framer Motion and include:
- Fade and slide entrance animations
- Hover scale effects
- Magnetic button interactions
- Parallax scrolling
- Scroll-triggered animations
- Continuous marquee animations

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔧 Development

### Customization

Colors can be customized in `src/index.css`:
```css
@theme {
  --color-primary: #ee1c27;
  --color-dark: #0a0a0a;
  --color-offwhite: #f5f5f5;
}
```

### Adding Components

Components follow a modular structure. Create new components in `src/components/` and import them in `App.jsx`.

## 📄 License

© 2026 3 Star Agency. All rights reserved.

## 🤝 Contributing

For inquiries about contributions, please contact us through the information above.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
