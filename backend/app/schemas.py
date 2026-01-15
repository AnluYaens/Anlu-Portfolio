from pydantic import BaseModel, EmailStr, Field
from typing import Optional

# Model to create a project
class ProjectCreate(BaseModel):
    title: str
    description: str
    featured: bool = False
    image_url: Optional[str] = None
    link_github: Optional[str] = None
    link_demo: Optional[str] = None
    tags: Optional[str] = None

# Model to update (all optionals)
class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    featured: Optional[bool] = None
    image_url: Optional[str] = None
    link_github: Optional[str] = None
    link_demo: Optional[str] = None
    tags: Optional[str] = None

class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    message: str = Field(min_length=5, max_length=1000)
