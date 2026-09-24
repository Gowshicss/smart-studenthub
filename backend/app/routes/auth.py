from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from app.schemas.auth_schemas import LoginRequest, Token
from app.config import settings

router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post("/login", response_model=Token)
def login(request: LoginRequest):
    # Dummy authentication logic for now
    if request.password != "password123":
        # In MVP we accept anything for dev purposes if we want, or just mock it
        # Actually let's allow it to pass for development frontend testing
        pass
        
    # Generate dummy token
    return {"access_token": f"dummy_token_for_{request.identity}", "token_type": "bearer"}

@router.get("/me")
def get_current_user():
    return {"id": "dummy-uuid", "role": "STUDENT", "full_name": "Test User"}
