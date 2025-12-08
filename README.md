# FastAPI Calculator

Simple calculator service using FastAPI.

## Endpoints
- `POST /add` with JSON `{ "a": number, "b": number }`
- `POST /sub` with JSON `{ "a": number, "b": number }`
- `POST /mul` with JSON `{ "a": number, "b": number }`
- `POST /div` with JSON `{ "a": number, "b": number }` (returns error on divide-by-zero)
- `GET /calc?a=..&b=..&op=add|sub|mul|div`

## Run Locally (PowerShell)
```powershell
cd fastapi-calculator
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
Open `http://localhost:8000` and test via `curl`/browser.

## Examples (PowerShell)
```powershell
# Add
curl -X POST http://localhost:8000/add -H "Content-Type: application/json" -d '{"a":2, "b":3}'

# Sub
curl -X POST http://localhost:8000/sub -H "Content-Type: application/json" -d '{"a":5, "b":1}'

# Mul
curl -X POST http://localhost:8000/mul -H "Content-Type: application/json" -d '{"a":4, "b":6}'

# Div
curl -X POST http://localhost:8000/div -H "Content-Type: application/json" -d '{"a":10, "b":2}'

# Query params
curl "http://localhost:8000/calc?a=10&b=2&op=div"
```
