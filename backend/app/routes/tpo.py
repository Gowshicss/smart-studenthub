from fastapi import APIRouter

router = APIRouter(prefix="/api/tpo", tags=["TPO"])

@router.get("/stats")
def get_placement_stats():
    return {
        "total_placed": 120,
        "highest_package": "24 LPA",
        "average_package": "8.5 LPA"
    }

@router.post("/drives")
def create_drive(drive_data: dict):
    return {"message": "Drive created successfully", "id": "new_drive_123"}
