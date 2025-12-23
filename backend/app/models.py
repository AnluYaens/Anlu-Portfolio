from typing import Optional
from sqlmodel import Field, SQLModel

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    image_url: Optional[str] = None
    link_github: Optional[str] = None
    link_demo: Optional[str] = None
    tags: Optional[str] = None # Ej: "Python, React"