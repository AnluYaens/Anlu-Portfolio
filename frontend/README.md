# My Portfolio - React + Vite

Personal portfolio with a landing page, project grid, and contact form.
The frontend consumes a FastAPI backend for projects and messages. It also
includes an admin dashboard accessible only by typing `/admin` in the URL.

## Requirements

- Node.js 18+ (npm included)
- Python 3.10+ and pip (for backend)
- Windows, macOS, or Linux

## Setup

### Backend (FastAPI)

PowerShell (Windows):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Bash (macOS/Linux):

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Check `backend/.env`:

- `ADMIN_PASSWORD`: password for admin endpoints and the `/admin` dashboard
- `DEBUG_SQL`: optional

### Frontend (React + Vite)

PowerShell (Windows):

```powershell
cd frontend
npm install
```

Bash (macOS/Linux):

```bash
cd frontend
npm install
```

Check `frontend/.env` and point `VITE_API_URL` to the backend.

## Run

### Backend

PowerShell (Windows):

```powershell
cd backend
uvicorn app.main:app --reload --port 8000
```

Bash (macOS/Linux):

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

### Frontend

PowerShell (Windows):

```powershell
cd frontend
npm run dev
```

Bash (macOS/Linux):

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

## Usage

- Public landing: hero, bento grid, projects, and contact.
- Projects load from `GET /projects`.
- Contact sends to `POST /contacts` and stores in `backend/database.db`.

## Admin dashboard

- The only entry to the dashboard is typing `/admin` in the URL (no link).
- Log in with the `ADMIN_PASSWORD` value in `backend/.env`.
- View messages, daily count, and download an Excel file (`/contacts/export-excel`).

## Environment variables

`frontend/.env`

```
VITE_API_URL=http://127.0.0.1:8000
```

`backend/.env`

```
ADMIN_PASSWORD=secure_password_123
DEBUG_SQL=true
```

## Notes

- If you change the frontend port, update CORS in `backend/app/main.py`.
- Admin endpoints require the `x-admin-password` header.
- Rate limits: contacts 5/min, admin 30/min, export 5/min.

## Copyright

@AnluYaens 2026

## Useful scripts

- `npm run dev` - development mode
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run lint` - lint
