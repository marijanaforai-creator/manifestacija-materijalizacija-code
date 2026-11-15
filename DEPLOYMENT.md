# Vercel deployment

## Project

Vercel project: `manifestacija-materijalizacija-code`

## Branch strategy

- `main` is the production branch.
- `feature/platform-foundation` is the development branch.
- Pushes to the development branch should create Preview deployments.
- Do not promote a Preview deployment to Production until the application has been reviewed and approved.

## Build

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Root directory: repository root

No environment variables are currently required for the initial interface.
