from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List

from ..database import get_session
from ..models import Project
from ..schemas import ProjectCreate, ProjectUpdate

router = APIRouter(prefix="/projects", tags=["projects"])

# Obtain all the projects (READ)
@router.get("/", response_model=List[Project])
def read_projects(session: Session = Depends(get_session)):
    projects = session.exec(select(Project)).all()
    return projects

# Create a project (CREATE)
@router.post("/", response_model=Project)
def create_project(project: ProjectCreate, session: Session = Depends(get_session)):
    # Convert the squema into a data base model
    db_project = Project.model_validate(project)
    session.add(db_project)
    session.commit()
    session.refresh(db_project)
    return db_project

# Obtain a project by ID
@router.get("/{project_id}", response_model=Project)
def read_project(project_id: int, session: Session = Depends(get_session)):
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

# Update a project (UPDATE)
@router.patch("/{project_id}", response_model=Project)
def update_project(project_id: int, project_update: ProjectUpdate, session: Session = Depends(get_session)):
    db_project = session.get(Project, project_id)
    if not db_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project_data = project_update.model_dump(exclude_unset=True)
    for key, value in project_data.items():
        setattr(db_project, key, value)

    session.add(db_project)
    session.commit()
    session.refresh(db_project)
    return db_project

# Delete a project (DELETE)
@router.delete("/{project_id}")
def delete_project(project_id: int, session: Session = Depends(get_session)):
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    session.delete(project)
    session.commit()
    return {"ok": True}
