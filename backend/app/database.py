from supabase import create_client, Client
from app.config import settings
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import logging

logger = logging.getLogger(__name__)

# --- Supabase Python Client ---
def get_supabase_client() -> Client:
    if not settings.SUPABASE_URL or not settings.SUPABASE_SERVICE_ROLE_KEY:
        logger.warning("Supabase URL or Key is not set in environment variables.")
    url: str = settings.SUPABASE_URL or "http://localhost:8000"
    key: str = settings.SUPABASE_SERVICE_ROLE_KEY or "dummy_key"
    return create_client(url, key)

supabase_client = get_supabase_client()


# --- SQLAlchemy Setup ---
engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
