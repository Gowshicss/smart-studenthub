from fastapi import APIRouter

router = APIRouter(prefix="/api/student", tags=["Student"])

@router.get("/profile")
def get_student_profile():
    return {"message": "Student profile data"}

@router.get("/opportunities")
def get_opportunities():
    return []

@router.get("/applications")
def get_applications():
    return []
