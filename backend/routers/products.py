from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db

router=APIRouter(
    prefix="/products",
    tags=["Products"]
)

@router.get("/")
def get_products(db:Session=Depends(get_db)):
    return crud.get_products(db)

@router.post("/")
def create_product(product:schemas.ProductCreate,db:Session=Depends(get_db)):
    return crud.add_product(db,product)

@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    return crud.get_product_by_id(db, product_id)

@router.put("/{product_id}")
def update_product(product_id:int, product:schemas.ProductCreate, db:Session=Depends(get_db)):
    return crud.update_product(db,product_id,product)

@router.delete("/{product_id}")
def delete_product(product_id:int, db:Session=Depends(get_db)):
    return crud.delete_product(db, product_id)
