# Mali Princ Catering - Premium Experience Website

A modern, responsive website for Mali Princ Catering built with Next.js, TypeScript, and Tailwind CSS. This project showcases premium catering services with multiple pages, image galleries, and contact forms.

## 🚀 Features

- **Modern Design**: Clean, professional design with premium yellow/gold color scheme
- **Responsive Layout**: Fully responsive across all devices
- **Multi-page Structure**:
  - Home (Naslovna) - Hero section with services preview
  - Packages (Paketi) - Detailed service packages and pricing
  - Gallery (Galerija) - Image gallery with filtering and lightbox
  - About Us (O nama) - Company story, team, and values
  - Contact (Kontakt) - Contact forms and information
- **Interactive Components**:
  - Image gallery with modal viewer
  - Contact forms with validation
  - Navigation with active states
  - Smooth scrolling and transitions
- **SEO Optimized**: Meta tags, structured data, and optimized images
- **Performance**: Optimized images with Next.js Image component
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Image Optimization**: Next.js Image
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
mali-princ-catering/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx          # Home page
│   ├── paketi.tsx         # Packages page
│   ├── galerija.tsx       # Gallery page
│   ├── o-nama.tsx         # About page
│   └── kontakt.tsx        # Contact page
├── styles/
│   └── globals.css
├── public/
│   └── gallery/           # Gallery images
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- bun (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mali-princ-catering
```

2. Install dependencies:

```bash
bun install
# or
npm install
# or
yarn install
```

3. Run the development server:

```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Recent Improvements

- ✅ **Bun Support**: Full bun integration for faster development
- ✅ **Fixed Google Fonts**: Moved to `_document.tsx` for proper loading
- ✅ **Updated Image Configuration**: Using modern `remotePatterns` instead of deprecated `domains`
- ✅ **Fixed Image Loading**: Gallery images properly served from `/public/gallery`
- ✅ **Performance Optimized**: Resolved all development warnings

## 📱 Pages Overview

### Home (Naslovna)

- Hero section with premium banner
- Dream outcome metrics
- Service previews
- Client testimonials
- Contact form

### Packages (Paketi)

- Package pricing tiers
- Office catering section
- Event catering details
- Premium equipment offerings
- Value propositions

### Gallery (Galerija)

- Filterable image gallery
- Lightbox modal viewer
- Category-based organization
- Responsive grid layout
- Performance stats

### About Us (O nama)

- Company story and values
- Team member profiles
- Success stories
- Certifications
- Process overview
- Mission and vision

### Contact (Kontakt)

- Multiple contact methods
- Premium consultation form
- Services overview
- FAQ section
- Client testimonials

## 🎨 Design System

### Colors

- **Primary**: Yellow/Gold (#f59e0b)
- **Secondary**: Gray shades
- **Accent**: Green for success states
- **Error**: Red for alerts

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, good contrast

### Components

- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Default, highlighted, bordered, elevated
- **Sections**: Consistent padding and backgrounds

## 🖼️ Gallery Images

The project includes a comprehensive image gallery with the following categories:

- **Ketering**: Premium catering setups
- **Events**: Corporate events and meetings
- **Apps**: Tech industry events

Images are organized in the `/public/gallery/` directory and are optimized for web performance.

## 📧 Contact Information

- **Phone**: +387 60 320 3835
- **Email**: vip@maliprinc.ba
- **Location**: Novo Sarajevo, Šipad Building

## 🔧 Development

### Building for Production

```bash
bun run build
bun run start
```

### Linting

```bash
bun run lint
```

### Customization

The project is built with modularity in mind:

1. **Styling**: Modify `tailwind.config.js` for custom colors and themes
2. **Components**: Extend UI components in `/components/ui/`
3. **Content**: Update page content in respective page files
4. **Images**: Add new images to `/public/gallery/`

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Environment Variables

No environment variables are required for basic functionality.

## 📄 License

This project is proprietary and confidential. All rights reserved by Mali Princ Catering.

## 🤝 Contributing

For internal development only. Please follow the established coding conventions and submit pull requests for review.

## 📞 Support

For technical support or questions, please contact the development team or Mali Princ Catering directly.
