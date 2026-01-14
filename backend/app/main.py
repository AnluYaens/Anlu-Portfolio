from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_db_and_tables
from .routers import projects, contacts

app = FastAPI()

# CORS Configuration (so react can link)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "*" # Keep wildcard for dev simplicity if needed, but specific is better with credentials
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# Include the projects routes
app.include_router(projects.router)
app.include_router(contacts.router)

@app.get("/")
def read_root():
    return{"message": "API Portfolio working successfully"}