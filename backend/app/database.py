from sqlmodel import SQLModel, create_engine, Session

# For now will use sqlite (a local file is created)
# then will change into postgresql when needed

sqllite_file_name = "database.db"
DATABASE_URL = f"sqlite:///{sqllite_file_name}"

engine = create_engine(DATABASE_URL, echo=True)

def create_db_and_tables():
    """Crea las tablas si no existen"""
    SQLModel.metadata.create_all(engine)
    _ensure_featured_column()

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

def get_session():
    """Dependencia para obtener la sesion de BD en cada request"""
    with Session(engine) as session:
        yield session
