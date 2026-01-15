from fastapi import Header, HTTPException
from typing import Optional
from dotenv import load_dotenv
import os
import secrets

load_dotenv()

def verify_admin(x_admin_password: Optional[str] = Header(None)):
    admin_password = os.getenv("ADMIN_PASSWORD")
    if not admin_password:
        raise HTTPException(status_code=500, detail="Admin password not configured")
    
    if not secrets.compare_digest(x_admin_password or "", admin_password):
        raise HTTPException(status_code=401, detail="Invalid admin password")
    return True