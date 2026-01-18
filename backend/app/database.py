from sqlmodel import SQLModel, create_engine, Session
import os

# Use SQLite for now (local file database).
# Switch to PostgreSQL later if needed.

sqllite_file_name = "database.db"
DATABASE_URL = f"sqlite:///{sqllite_file_name}"

debug_sql = os.getenv("DEBUG_SQL", "false").lower() == "true"
engine = create_engine(DATABASE_URL, echo=debug_sql)

def create_db_and_tables():
    """Create tables if they do not exist."""
    SQLModel.metadata.create_all(engine)
    _ensure_featured_column()
    _seed_if_empty()

def _ensure_featured_column():
    if engine.url.get_backend_name() != "sqlite":
        return

    with engine.connect() as connection:
        result = connection.exec_driver_sql("PRAGMA table_info(project)")
        columns = [row[1] for row in result.fetchall()]
        if "featured" in columns:
            return
        connection.exec_driver_sql(
            "ALTER TABLE project ADD COLUMN featured BOOLEAN NOT NULL DEFAULT 0"
        )
        connection.commit()

def _seed_if_empty():
    from datetime import datetime
    from sqlmodel import select
    from .models import Project, ContactMessage

    with Session(engine) as session:
        has_project = session.exec(select(Project).limit(1)).first()
        has_contact = session.exec(select(ContactMessage).limit(1)).first()

        if not has_project:
            seed_projects = [
                Project(
                    id=3,
                    title="Anlu Portfolio",
                    description="Personal portfolio site showcasing my projects and experience.",
                    image_url="/images/portfolio.png",
                    link_github="https://github.com/AnluYaens/Anlu-Portfolio",
                    link_demo=None,
                    tags="React, Tailwind, FastAPI, Python, SQL",
                    featured=True,
                ),
                Project(
                    id=4,
                    title="Anomalize",
                    description="Audit sampling app that uses our trained AI model to detect anomalies.",
                    image_url="/images/anomalize.png",
                    link_github="https://github.com/AnluYaens/Audit-Sampling-Tool",
                    link_demo=None,
                    tags="Python, JavaScript, HTML, CSS, AI, Machine Learning",
                    featured=True,
                ),
                Project(
                    id=5,
                    title="AI Budget Tracker",
                    description="Budget tracker app with AI features.",
                    image_url="/images/AIBudgetTracker.png",
                    link_github="https://github.com/AnluYaens/Advanced-Coding-project",
                    link_demo=None,
                    tags="AI, Finance, Budgeting, Data Visualization",
                    featured=False,
                ),
            ]
            session.add_all(seed_projects)

        if not has_contact:
            seed_contacts = [
                ContactMessage(
                    id=1,
                    name="Test",
                    email="test@test.com",
                    message="Hola mundo",
                    created_at=datetime.fromisoformat("2026-01-14 23:33:37.575304"),
                ),
                ContactMessage(
                    id=2,
                    name="Test",
                    email="test@test.com",
                    message="Hola mundo",
                    created_at=datetime.fromisoformat("2026-01-14 23:33:37.628910"),
                ),
                ContactMessage(
                    id=3,
                    name="Test",
                    email="test@test.com",
                    message="Hola mundo",
                    created_at=datetime.fromisoformat("2026-01-14 23:33:37.670817"),
                ),
                ContactMessage(
                    id=4,
                    name="Test",
                    email="test@test.com",
                    message="Hola mundo",
                    created_at=datetime.fromisoformat("2026-01-14 23:33:37.713905"),
                ),
                ContactMessage(
                    id=5,
                    name="Test",
                    email="test@test.com",
                    message="Hola mundo",
                    created_at=datetime.fromisoformat("2026-01-14 23:33:37.755879"),
                ),
            ]
            session.add_all(seed_contacts)

        if not has_project or not has_contact:
            session.commit()

def get_session():
    """Dependency to get a DB session per request."""
    with Session(engine) as session:
        yield session
