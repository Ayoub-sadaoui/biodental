# BioDental Website

A modern website for a natural dental care practice built with Next.js.

## Deployment on Netlify

This project is configured for easy deployment on Netlify. Follow these steps to deploy:

### Method 1: Deploy via Netlify CLI

1. Install Netlify CLI globally:

   ```
   npm install netlify-cli -g
   ```

2. Login to your Netlify account:

   ```
   netlify login
   ```

3. Initialize Netlify in this project (if not already done):

   ```
   netlify init
   ```

4. Deploy to Netlify:
   ```
   netlify deploy --prod
   ```

### Method 2: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Environment Variables

Make sure to set the following environment variables in your Netlify site settings (Settings > Build & deploy > Environment > Environment variables):

- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `RESEND_API_KEY`: Your Resend API key for email functionality

If you don't have a Resend account yet, you can:

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add it to your Netlify environment variables

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Stack

- Next.js 15.3
- React 19
- TailwindCSS 4
- Framer Motion
- TinaCMS for editable content
- Deployed on Netlify
