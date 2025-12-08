# Frontend (TypeScript, Vite + React)

This folder `frontend/` contains a static TypeScript React app suitable for deployment to GitHub Pages. It performs calculator operations client-side while showcasing the multi-language backend tools available locally.

## Local Development
```powershell
cd frontend
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build
```powershell
cd frontend
npm run build
```
The production build is created in `frontend/dist`.

## GitHub Pages Deployment
A workflow is provided at `.github/workflows/deploy.yml`.

Steps:
- Push your repo to GitHub and ensure your default branch is `main` (or adjust the workflow).
- In the repo settings, enable GitHub Pages (Source: GitHub Actions).
- On every push to `main`, the workflow builds the frontend and publishes `frontend/dist` to Pages.

## Notes
- For static Pages, operations run client-side only. To use language-specific implementations server-side, expose HTTP endpoints for Node/.NET/Java/Python and update the frontend to call them.
- The Vite `base` is set to `/calculator-multilang/` in `vite.config.ts`. If your repo name differs, update that value.
