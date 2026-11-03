# MedGrid React + Vite (feature-preserving migration)

This is the React + Vite entry point for the uploaded MedGrid application.

## Important migration note

The uploaded source is a multi-page HTML/CSS/vanilla-JavaScript application with page-specific inline scripts, styles, mock data, localStorage behavior, forms, and navigation. To honor the requirement **not to change existing features**, the original pages and assets are preserved unchanged under `public/legacy/` and are currently rendered through a React Router compatibility component (`src/components/LegacyPage.jsx`). This keeps the existing page behavior intact while providing a React + Vite application shell and route map.

This is a safe migration bridge, not yet a full rewrite of every page into JSX/hooks. Rewriting all legacy DOM scripts directly into React in one pass could silently break existing functionality. The next migration stage should convert one page at a time, verify feature parity, then replace its compatibility route with a native React page.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` – Home
- `/login` – Login
- `/register` – Register
- `/patient/dashboard` – Patient dashboard
- `/doctor/dashboard` – Doctor dashboard
- `/admin/dashboard` – Admin dashboard
- `/appointment` – Book appointment
- `/appointments` – Appointments
- `/doctors` – Find doctors
- `/doctor-profile` – Doctor profile
- `/medical-records` – Medical records
- `/messages` – Messages
- `/prescriptions` – Prescriptions
- `/profile` – Profile
- `/settings` – Settings

The original HTML filenames and relative navigation remain available inside `public/legacy/`.

## Spring Boot API integration

The original uploaded application uses client-side mock data/localStorage. No backend API contract was supplied in the ZIP. Do not assume API endpoint names or replace mock behavior until the Spring Boot controllers/DTOs are available. `VITE_API_BASE_URL` is included as a future configuration example.
