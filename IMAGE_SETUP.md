# Image Setup Guide

## Centralized Image Configuration

All images are managed in **`config/images.ts`** - a single file for easy management!

Simply update the image URLs in `config/images.ts` and all components will automatically use the new images.

## Current Status
All images are currently using Unsplash placeholder images. To use real photos from Instagram or your own images, follow these instructions.

## Quick Start: Update Images in Config File

Open `config/images.ts` and update the URLs:

```typescript
export const images = {
  hero: {
    background: '/images/hero-background.jpg', // Local image
    // OR
    // background: 'https://your-image-url.com/hero.jpg', // External URL
  },
  egym: {
    background: '/images/egym-background.jpg',
    main: '/images/egym-main.jpg',
  },
  instagram: {
    reels: [
      '/images/reel-1.jpg',
      '/images/reel-2.jpg',
      '/images/reel-3.jpg',
      '/images/reel-4.jpg',
      '/images/reel-5.jpg',
      '/images/reel-6.jpg',
    ],
  },
  social: {
    ogImage: '/og-image.jpg', // For social sharing
  },
}
```

## Option 1: Use Instagram Images (Recommended)

### Method A: Manual Image URLs
1. Go to https://instagram.com/gymrob123/reels/
2. Right-click on each reel you want to feature
3. Copy the image URL
4. Update the URLs in `config/images.ts` → `instagram.reels` array

### Method B: Instagram Basic Display API (Advanced)
For automatic fetching, you'll need to:
1. Set up Instagram Basic Display API
2. Get access tokens
3. Fetch images programmatically and update the config

## Option 2: Upload Your Own Images

1. **Add images to `/public/images/` folder:**
   ```bash
   mkdir -p public/images
   # Add your images here (hero-background.jpg, egym-main.jpg, reel-1.jpg, etc.)
   ```

2. **Update `config/images.ts`** with your image paths:
   ```typescript
   hero: {
     background: '/images/hero-background.jpg',
   },
   egym: {
     background: '/images/egym-background.jpg',
     main: '/images/egym-main.jpg',
   },
   instagram: {
     reels: [
       '/images/reel-1.jpg',
       '/images/reel-2.jpg',
       // ... etc
     ],
   },
   ```

## Image Specifications

- **Hero Background**: 1920x1080px (16:9 aspect ratio)
- **eGym Image**: 800x600px (4:3 aspect ratio)
- **Instagram Reels**: 400x711px (9:16 aspect ratio, vertical)

## Quick Fix: Use Better Placeholders

If you want to keep placeholders but make them more relevant, update `config/images.ts` with fitness-specific Unsplash images:

```typescript
export const images = {
  hero: {
    background: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80',
  },
  egym: {
    background: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80',
    main: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
  },
  instagram: {
    reels: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
      // ... add more Unsplash fitness images
    ],
  },
}
```

## Notes

- All images should be optimized (compressed) before uploading
- Use WebP format for better performance
- Ensure images are properly licensed for use

