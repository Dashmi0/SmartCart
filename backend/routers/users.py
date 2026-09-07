from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db

router=APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user)

@router.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    return crud.login_user(db, user)