from sqlalchemy import Column, Integer, Float, String, ForeignKey
from database import Base

class User(Base):
    __tablename__="users"

    id=Column(Integer,primary_key=True,index=True)
    name=Column(String(200))
    email=Column(String(200),unique=True)
    password=Column(String(200))

class Product(Base):
    __tablename__="products"

    id=Column(Integer,primary_key=True,index=True)
    name=Column(String(100))
    description=Column(String)
    price=Column(Float)
    image=Column(String(200))
    category=Column(String(100))
    stock=Column(Integer,default=0)

class Cart(Base):
    __tablename__ = "cart"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer)


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_amount = Column(Float)
    status = Column(String(50))
