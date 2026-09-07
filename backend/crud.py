from sqlalchemy.orm import Session
import models
import schemas
from auth import hash_password

def create_user(db:Session, user: schemas.UserCreate):

    existing_user=db.query(models.User).filter(
        models.User.email==user.email
    ).first()
    if existing_user:
        return {"message":"Email already registered."}

    db_user=models.User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user

from auth import verify_password

def login_user(db: Session, user: schemas.UserLogin):

    db_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if not db_user:
        return {"message": "User not found"}

    if not verify_password(user.password, db_user.password):
        return {"message": "Incorrect password"}

    return {
        "message": "Login Successful",
        "id": db_user.id,
        "name": db_user.name,
        "email": db_user.email
    }

def get_products(db:Session):
    return db.query(models.Product).all()

def add_to_cart(db: Session, cart: schemas.CartCreate):

    # Check if this product is already in the user's cart
    existing_item = db.query(models.Cart).filter(
        models.Cart.user_id == cart.user_id,
        models.Cart.product_id == cart.product_id
    ).first()

    if existing_item:
        existing_item.quantity += cart.quantity
        db.commit()
        db.refresh(existing_item)
        return existing_item

    # Otherwise create a new cart item
    db_cart = models.Cart(
        user_id=cart.user_id,
        product_id=cart.product_id,
        quantity=cart.quantity
    )

    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)

    return db_cart

def get_product_by_id(db:Session,product_id:int):
    return db.query(models.Product).filter(
        models.Product.id==product_id
    ).first()

def update_product(db: Session, product_id: int, product: schemas.ProductCreate):

    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if db_product is None:
        return {"message": "Product not found"}

    db_product.name = product.name
    db_product.description = product.description
    db_product.price = product.price
    db_product.image = product.image
    db_product.category = product.category
    db_product.stock = product.stock

    db.commit()
    db.refresh(db_product)

    return db_product

def delete_product(db: Session, product_id: int):

    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if db_product is None:
        return {"message": "Product not found"}

    db.delete(db_product)
    db.commit()

    return {"message": "Product deleted successfully"}


def add_to_cart(db:Session, cart:schemas.CartCreate):

    db_cart=models.Cart(
        user_id=cart.user_id,
        product_id=cart.product_id,
        quantity=cart.quantity
    )

    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)
    return db_cart
def get_cart(db: Session, user_id: int):

    cart_items = db.query(models.Cart).filter(
        models.Cart.user_id == user_id
    ).all()

    result = []

    for item in cart_items:

        product = db.query(models.Product).filter(
            models.Product.id == item.product_id
        ).first()

        result.append({
            "id": item.id,
            "product_id": item.product_id,
            "product_name": product.name,
            "price": product.price,
            "image": product.image,
            "quantity": item.quantity
        })

    return result

def remove_from_cart(db:Session, cart_id:int):
    cart_item=db.query(models.Cart).filter(
        models.Cart.id==cart_id
    ).first()

    if cart_item is None:
        return {"message":"Cart Item not found"}

    db.delete(cart_item)
    db.commit()
    return {"message":"Cart Item is removed from cart"}

def clear_cart(db: Session, user_id: int):

    db.query(models.Cart).filter(
        models.Cart.user_id == user_id
    ).delete()

    db.commit()

    return {"message": "Cart cleared"}

def create_order(db: Session, order: schemas.OrderCreate):

    db_order = models.Order(
        user_id=order.user_id,
        total_amount=order.total_amount,
        status="Pending"
    )

    db.add(db_order)
    db.commit()
    db.refresh(db_order)

    clear_cart(db, order.user_id)

    return db_order

def get_orders(db:Session, user_id:int):
    return db.query(models.Order).filter(
        models.Order.user_id==user_id
    ).all()

def update_cart_quantity(db: Session, cart_id: int, quantity: int):

    cart_item = db.query(models.Cart).filter(
        models.Cart.id == cart_id
    ).first()

    if cart_item is None:
        return {"message": "Cart item not found"}

    cart_item.quantity = quantity

    db.commit()
    db.refresh(cart_item)

    return cart_item