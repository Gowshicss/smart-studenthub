from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pydantic import BaseModel

router = APIRouter(prefix="/api/applications", tags=["Applications"])

class ApplicationRequest(BaseModel):
    drive_id: str
    student_id: str

# In-memory mock store
mock_applications = []

@router.post("/")
def apply_for_opportunity(req: ApplicationRequest):
    # Check if already applied
    if any(a["drive_id"] == req.drive_id and a["student_id"] == req.student_id for a in mock_applications):
        raise HTTPException(status_code=400, detail="Already applied to this drive")
        
    application = {
        "id": f"app_{len(mock_applications)+1}",
        "drive_id": req.drive_id,
        "student_id": req.student_id,
        "status": "SUBMITTED"
    }
    mock_applications.append(application)
    return {"message": "Application submitted successfully", "application": application}

@router.get("/student/{student_id}")
def get_student_applications(student_id: str):
    return [a for a in mock_applications if a["student_id"] == student_id]
