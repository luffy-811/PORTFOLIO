# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring smooth animations, interactive components, a 3D Spline animation, and a clean design aesthetic.

## 🌟 Features

### 3D Interactive Animation
- **Spline 3D scene** embedded in the top-right corner
- Fixed positioning with smooth interactions
- Fully responsive with adaptive sizing
- Non-intrusive design that enhances visual appeal
- See [SPLINE_INTEGRATION.md](./SPLINE_INTEGRATION.md) for details

### Header/Navigation Bar
- **Fixed navigation** with smooth scrolling to all sections
- Links to: Home, About, Projects, Skills, and Contact
- **Mobile-responsive hamburger menu** for smaller screens
- Transparent background with blur effect that changes on scroll

### Home Section
- Full-height hero section with animated gradient background
- Greeting with highlighted name
- **Animated typing effect** for tagline
- Call-to-action button with smooth hover effects
- Floating gradient circles animation

### About Section
- Professional bio with personal introduction
- Placeholder for profile photo with stylish border effect
- Key personal traits displayed in an organized grid
- **Fade-in animations** triggered on scroll

### Skills Section
- Skills organized into three categories:
  - Languages (JavaScript, TypeScript, HTML5, CSS3, Python)
  - Frameworks & Libraries (React, Vue.js, Node.js, Next.js, Express)
  - Tools & Technologies (Git, Webpack, Docker, Figma, VS Code)
- **Animated progress bars** showing proficiency levels
- Additional skills displayed as styled badges
- Icons for visual appeal

### Projects Section
- Grid layout of 6 featured project cards
- Each card includes:
  - Project title and description
  - Tech stack used (displayed as tags)
  - Links to live demo and GitHub repo
- **Hover effects** revealing project links
- Responsive grid adapts to screen size

### Contact Section
- Contact form with fields for Name, Email, and Message
- **Real-time form validation** with error messages
- Visual feedback for invalid inputs
- Submit button with loading state animation
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Sticky info card with connection message

### Footer
- Quick navigation links
- Social media icons
- Copyright notice with current year
- "Designed & Built with ❤️ and React" credit
- **Back to Top button** (appears on scroll)

## 🎨 Design Features

- **Dark Mode Theme** with custom color palette:
  - Primary: `#0a192f` (Navy)
  - Secondary: `#112240` (Light Navy)
  - Accent: `#64ffda` (Mint/Teal)
  - Text Primary: `#ccd6f6` (Slate)
  - Text Secondary: `#8892b0` (Light Slate)

- **Smooth Animations**:
  - Fade-in effects on scroll
  - Smooth transitions and hover states
  - Animated typing effect
  - Floating background elements
  - Progress bar animations

- **Fully Responsive**:
  - Mobile-first approach
  - Breakpoints for mobile, tablet, and desktop
  - Hamburger menu for mobile navigation
  - Flexible grid layouts

## 🛠️ Tech Stack

- **React 18** - UI library with hooks (useState, useEffect, useRef)
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with CSS Modules approach
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
website1/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example env file
copy .env.example .env

# Edit .env and add your EmailJS credentials
# Get them from https://dashboard.emailjs.com/
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔒 Security Best Practices

### EmailJS Configuration
This project uses environment variables to store EmailJS credentials:

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use the `.env.example` template** when sharing the project
3. **Additional EmailJS Security Settings**:
   - Go to https://dashboard.emailjs.com
   - Navigate to **Account** → **Allowed Origins**
   - Add only your production domain (e.g., `https://yourdomain.com`)
   - This prevents unauthorized use of your EmailJS service
   - Enable **reCAPTCHA** in EmailJS dashboard for extra protection
   - Set **rate limiting** to prevent spam

### Domain Restriction Example:
```
Allowed Origins:
- http://localhost:5173 (for development)
- https://yourdomain.com (for production)
```

This ensures only your website can use your EmailJS service.

## 🎯 Customization Guide

### Update Personal Information

1. **Name and Tagline** - Edit `src/components/Hero.jsx`:
   - Change "Your Name" to your actual name
   - Modify the `fullText` constant with your tagline

2. **About Section** - Edit `src/components/About.jsx`:
   - Update the bio paragraphs
   - Replace the placeholder image URL with your photo
   - Customize the traits array

3. **Skills** - Edit `src/components/Skills.jsx`:
   - Modify the `skillCategories` array with your skills
   - Adjust proficiency levels
   - Update additional skills badges

4. **Projects** - Edit `src/components/Projects.jsx`:
   - Update the `projects` array with your actual projects
   - Replace placeholder images and links
   - Customize tech stacks

5. **Contact Info** - Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
   - Update social media URLs
   - Change email address
   - Modify contact message

### Change Color Scheme

Edit `src/index.css` and update CSS variables in `:root`:
```css
:root {
  --primary-bg: #0a192f;
  --secondary-bg: #112240;
  --accent-color: #64ffda;
  --text-primary: #ccd6f6;
  --text-secondary: #8892b0;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## ✨ Key Features Implementation

### Smooth Scrolling
Implemented using native browser behavior with `scroll-behavior: smooth` and Intersection Observer API for scroll-triggered animations.

### Form Validation
Custom validation logic with real-time feedback:
- Required field checks
- Email format validation
- Minimum character length validation

### Mobile Menu
Toggle-based hamburger menu with smooth slide-in animation and backdrop for mobile devices.

### Typing Animation
Custom typing effect using React hooks with character-by-character rendering and blinking cursor.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.


⭐ Star this repo if you found it helpful!

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
