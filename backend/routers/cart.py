from fastapi import APIRouter,Depends
from sqlalchemy.orm import  Session
from fastapi import Body

import crud
import schemas
from database import get_db

router=APIRouter(
    prefix="/cart",
    tags=["Cart"]
)

@router.post("/")
def add_cart(cart: schemas.CartCreate, db: Session = Depends(get_db)):
    crud.add_to_cart(db, cart)
    return {"message": "Item added to cart successfully"}

@router.get("/{user_id}",response_model=list[schemas.CartResponse])
def view_cart(user_id:int, db:Session=Depends(get_db)):
    return crud.get_cart(db,user_id)

@router.delete("/{cart_id}")
def remove_cart(cart_id, db:Session=Depends(get_db)):
    return crud.remove_from_cart(db,cart_id)

@router.delete("/clear/{user_id}")
def clear_cart(user_id: int, db: Session = Depends(get_db)):
    return crud.clear_cart(db, user_id)

@router.put("/{cart_id}")
def update_quantity(
    cart_id: int,
    quantity: int = Body(...),
    db: Session = Depends(get_db)
):
    return crud.update_cart_quantity(db, cart_id, quantity)