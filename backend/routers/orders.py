from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db

router=APIRouter(
    prefix="/orders",
    tags={"Orders"}
)

@router.post("/",response_model=schemas.OrderResponse)
def place_order(order:schemas.OrderCreate, db:Session=Depends(get_db)):
    return crud.create_order(db, order)

@router.get("/{user_id}",response_model=list[schemas.OrderResponse])
def view_orders(user_id:int, db:Session=Depends(get_db)):
    return crud.get_orders(db,user_id)