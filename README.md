# Robin Carruthers Portfolio

A modern, high-performance portfolio website for Robin Carruthers, a fitness & life coach with 30+ years of experience and owner of eGym Lokhandwala.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Responsive & Mobile-First**
- **SEO-Optimized**

## Features

- Modern, dark premium fitness aesthetic
- Fully responsive design
- Smooth animations with Framer Motion
- SEO-optimized with metadata and OpenGraph tags
- Accessibility-friendly (ARIA labels, semantic HTML)
- Contact form with validation
- Instagram showcase section
- Testimonials section
- Services and coaching information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── metadata.ts         # SEO metadata
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── EGym.tsx            # eGym Lokhandwala section
│   ├── Instagram.tsx       # Instagram showcase
│   ├── Testimonials.tsx    # Testimonials section
│   └── Contact.tsx         # Contact form
└── public/                 # Static assets
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Your website URL (used for metadata and OpenGraph)
NEXT_PUBLIC_SITE_URL=https://robincarruthers.com

# Contact Form Endpoint
# Option 1: Formspree (recommended - free tier available)
# Sign up at https://formspree.io and get your form ID
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Option 2: Custom API endpoint
# NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-api.com/api/contact
```

### Setting Up Contact Form

The contact form is configured to work with Formspree by default. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form endpoint URL
3. Add it to your `.env.local` file as `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
4. The form will automatically send submissions to your Formspree inbox

Alternatively, you can use any other form service by updating the endpoint in `.env.local`.

### Customization

- **Images**: All images are managed in `config/images.ts` - update URLs in one place!
- **Instagram Handle**: Already updated to `@gymrob123` in all components
- **Site URL**: Update `NEXT_PUBLIC_SITE_URL` in `.env.local` with your actual domain
- **Colors**: Modify colors in `tailwind.config.ts`
- **Metadata**: Update metadata in `app/layout.tsx` and `app/metadata.ts`

### Image Management

All images are centralized in `config/images.ts` for easy management:
- Hero background image
- eGym section images
- Instagram reel images
- Social sharing (OG) image

See `IMAGE_SETUP.md` for detailed instructions on replacing placeholder images.

## Troubleshooting

### Instagram Videos Not Loading
- The Instagram section uses placeholder images that link to Instagram
- Click any reel placeholder to view actual reels on Instagram
- To use real Instagram images, see `IMAGE_SETUP.md`

### Form Submissions Not Working
- The form requires `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` to be set
- Create a `.env.local` file with your Formspree endpoint
- See "Setting Up Contact Form" section above

### Images Are Placeholders
- All images currently use Unsplash placeholders
- See `IMAGE_SETUP.md` for instructions on replacing with real images

## License

Private project for Robin Carruthers.

