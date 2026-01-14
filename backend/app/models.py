from datetime import datetime
from typing import Optional
from sqlmodel import Field, SQLModel

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    featured: bool = Field(default=False)
    image_url: Optional[str] = None
    link_github: Optional[str] = None
    link_demo: Optional[str] = None
    tags: Optional[str] = None # Ej: "Python, React"

class ContactMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
