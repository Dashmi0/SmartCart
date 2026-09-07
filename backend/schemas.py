from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        from_attributes = True


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    image: str
    category: str
    stock: int

class CartCreate(BaseModel):
    user_id:int
    product_id:int
    quantity:int

class CartResponse(BaseModel):
    id: int
    product_id: int
    product_name: str
    price: float
    quantity: int
    image: str

    class Config:
        from_attributes = True

class OrderCreate(BaseModel):
    user_id:int
    total_amount:float

class OrderResponse(BaseModel):
    id:int
    user_id:int
    total_amount:float
    status:str
    class Config:
        from_attributes=True