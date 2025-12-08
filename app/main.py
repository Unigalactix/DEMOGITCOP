from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="FastAPI Calculator", version="1.0.0")

# CORS: allow local dev and GitHub Pages
origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    # Replace with your GitHub Pages URL if different
    "https://unigalactix.github.io",
    "https://unigalactix.github.io/DEMOGITCOP",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Operands(BaseModel):
    a: float
    b: float

@app.get("/")
def root():
    return {"name": "FastAPI Calculator", "endpoints": ["/add", "/sub", "/mul", "/div"]}

@app.post("/add")
def add(body: Operands):
    return {"result": body.a + body.b}

@app.post("/sub")
def sub(body: Operands):
    return {"result": body.a - body.b}

@app.post("/mul")
def mul(body: Operands):
    return {"result": body.a * body.b}

@app.post("/div")
def div(body: Operands):
    if body.b == 0:
        return {"error": "Division by zero"}
    return {"result": body.a / body.b}

@app.get("/calc")
def calc(a: float = Query(...), b: float = Query(...), op: str = Query("add")):
    if op == "add":
        r = a + b
    elif op == "sub":
        r = a - b
    elif op == "mul":
        r = a * b
    elif op == "div":
        if b == 0:
            return {"error": "Division by zero"}
        r = a / b
    else:
        return {"error": "Unsupported op"}
    return {"result": r}
