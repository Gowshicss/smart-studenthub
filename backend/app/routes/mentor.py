from fastapi import APIRouter

router = APIRouter(prefix="/api/mentor", tags=["Mentor"])

@router.get("/students")
def get_cohort_students():
    return [
        {"id": "IT24A042", "name": "Aarav Sharma", "cgpa": 8.84, "status": "SAFE"},
        {"id": "IT24A045", "name": "Deepshika G S", "cgpa": 9.10, "status": "SAFE"},
    ]

@router.get("/students/{student_id}/details")
def get_student_details(student_id: str):
    return {"id": student_id, "name": "Aarav Sharma", "skills": ["Python", "React"]}
