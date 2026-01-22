/**
 * Image Configuration
 * 
 * Centralized configuration for all images used throughout the site.
 * Update image URLs here to easily manage all images in one place.
 * 
 * For local images, place them in /public/images/ and reference as '/images/filename.jpg'
 * For external images, use full URLs
 */

export const images = {
  // Hero Section
  hero: {
    background: '/images/Gemini_Generated_Image_ka5nc2ka5nc2ka5n.png',
    // Alternative: '/images/hero-background.jpg'
  },

  // eGym Lokhandwala Section
  egym: {
    background: '/images/Gemini_Generated_Image_e6489be6489be648.png',
    main: '/images/Gemini_Generated_Image_e6489be6489be648.png',
    // Alternative: '/images/egym-main.jpg'
  },

  // Transformation Section
  transformation: {
    beforeAfter: '/images/transformation-before-after.png',
    // Alternative: Use your transformation image path
    // Place the image in /public/images/transformation-before-after.jpg
  },

  // Signature
  signature: {
    image: '/images/signature.png',
  },

  // Instagram Reels Section
  // Each reel object contains the Instagram URL and optional thumbnail image
  instagram: {
    reels: [
      {
        url: 'https://www.instagram.com/gymrob123/reel/DRbgFpaifiE/',
        thumbnail: '/images/reel1.png', // Optional: replace with actual thumbnail
      },
      {
        url: 'https://www.instagram.com/gymrob123/reel/DJOjNOvJPK4/',
        thumbnail: '/images/reel2.png',
      },
      {
        url: 'https://www.instagram.com/gymrob123/reel/DEuuexpIOwt/',
        thumbnail: '/images/reel3.png',
      },
      {
        url: 'https://www.instagram.com/gymrob123/reel/DAoNyxnNrW0/',
        thumbnail: '/images/reel4.png',
      },
      {
        url: 'https://www.instagram.com/gymrob123/reel/C-998LzSXzo/',
        thumbnail: '/images/reel5.png',
      },
      {
        url: 'https://www.instagram.com/gymrob123/reel/C-csYZRSBqg/',
        thumbnail: '/images/reel6.png',
      },
    ],
    // To use local thumbnails, update like this:
    // thumbnail: '/images/reel-1-thumbnail.jpg',
  },

  // Open Graph / Social Sharing
  // OG Image Specifications:
  // - Dimensions: 1200 x 630 pixels (1.91:1 aspect ratio)
  // - Format: JPG or PNG
  // - File size: Under 8MB (recommended: under 1MB)
  // - Safe zone: Keep important content within 1200x630px (text/logo should be centered)
  // - Used for: Facebook, Twitter, LinkedIn, WhatsApp link previews
  social: {
    ogImage: '/images/Gemini_Generated_Image_vbopksvbopksvbop.png', // Place this in /public/og-image.jpg
    // Alternative: 'https://yourdomain.com/images/og-image.jpg'
    // 
    // Design Tips:
    // - Include: Name "Robin Carruthers", tagline "30+ Years of Coaching"
    // - Use brand colors (dark background, orange accents)
    // - Add gym/fitness imagery
    // - Keep text large and readable (minimum 24px font)
    // - Leave 40px padding on all sides for safe zone
  },
} as const

/**
 * Helper function to get Instagram reel by index
 */
export const getReel = (index: number) => {
  const reels = images.instagram.reels
  return reels[index % reels.length]
}

/**
 * Helper function to get all reels
 */
export const getAllReels = () => {
  return images.instagram.reels
}

/**
 * Helper function to get reel thumbnail image by index
 */
export const getReelThumbnail = (index: number): string => {
  const reel = getReel(index)
  return reel.thumbnail
}

/**
 * Helper function to get all reel thumbnails
 */
export const getAllReelThumbnails = (): string[] => {
  return images.instagram.reels.map(reel => reel.thumbnail)
}

