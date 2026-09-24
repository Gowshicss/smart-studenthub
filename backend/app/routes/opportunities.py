from fastapi import APIRouter, HTTPException, Depends
from typing import List, Dict, Any

router = APIRouter(prefix="/api/opportunities", tags=["Opportunities"])

# Mock data for opportunities based on the Stitch UI
mock_drives = [
    {
        "id": "stripe",
        "company": "Stripe India",
        "role": "Backend Engineer (Payments Infra)",
        "type": "FULL-TIME",
        "mode": "HYBRID",
        "match_score": 92,
        "location": "Bengaluru (Hybrid)",
        "salary": "18.5 LPA",
        "stack": ["Python", "FastAPI", "PostgreSQL", "AWS"],
        "deadline": "30 SEP (23:59 IST)",
        "eligible": True
    },
    {
        "id": "cisco",
        "company": "Cisco Systems India",
        "role": "Cloud Systems Intern (SRE)",
        "type": "INTERNSHIP",
        "mode": "HYBRID",
        "match_score": 84,
        "location": "Bengaluru / Chennai",
        "salary": "₹60,000/month",
        "stack": ["Python", "Linux", "Git", "Networking"],
        "deadline": "05 OCT (18:00 IST)",
        "eligible": True
    },
    {
        "id": "googlestep",
        "company": "Google STEP",
        "role": "SWE Intern",
        "type": "INTERNSHIP",
        "mode": "HYBRID",
        "match_score": 74,
        "location": "Hyderabad",
        "salary": "₹1,00,000/month",
        "stack": ["C++", "Python", "Data Structures"],
        "deadline": "Closed",
        "eligible": False
    }
]

@router.get("/", response_model=List[Dict[str, Any]])
def get_all_opportunities():
    # In a real app, this would fetch from Supabase `recruitment_drives` table
    return mock_drives

@router.get("/{drive_id}")
def get_opportunity(drive_id: str):
    drive = next((d for d in mock_drives if d["id"] == drive_id), None)
    if not drive:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    return drive
