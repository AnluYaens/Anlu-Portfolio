from sqlmodel import SQLModel, create_engine, Session

# Usamos SQLite por ahora (se crea un archivo local)
# Luego cambiamos esto por PostgSQL cuando lo necesitemos 

sqllite_file_name = "database.db"
DATABASE_URL = f"sqlite:///{sqllite_file_name}"