from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_db_and_tables
from .routers import projects

app = FastAPI()

# CORS Configuration (so react can link)
origins = ["*"] # In production, change this for the real domain

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

@app.get("/")
def read_root():
    return{"message": "API Portfolio working successfully"}