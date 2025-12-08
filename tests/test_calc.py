import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0.5, 0.25, 0.75),
])
def test_add(a, b, expected):
    res = client.post("/add", json={"a": a, "b": b})
    assert res.status_code == 200
    assert res.json()["result"] == pytest.approx(expected)

@pytest.mark.parametrize("a,b,expected", [
    (5, 3, 2),
    (0, 1, -1),
    (1.5, 0.4, 1.1),
])
def test_sub(a, b, expected):
    res = client.post("/sub", json={"a": a, "b": b})
    assert res.status_code == 200
    assert res.json()["result"] == pytest.approx(expected)

@pytest.mark.parametrize("a,b,expected", [
    (4, 3, 12),
    (-2, 2, -4),
    (1.5, 2, 3.0),
])
def test_mul(a, b, expected):
    res = client.post("/mul", json={"a": a, "b": b})
    assert res.status_code == 200
    assert res.json()["result"] == pytest.approx(expected)


def test_div_ok():
    res = client.post("/div", json={"a": 10, "b": 2})
    assert res.status_code == 200
    assert res.json()["result"] == pytest.approx(5.0)


def test_div_by_zero():
    res = client.post("/div", json={"a": 10, "b": 0})
    assert res.status_code == 200
    assert res.json()["error"] == "Division by zero"


def test_calc_query():
    res = client.get("/calc", params={"a": 10, "b": 2, "op": "mul"})
    assert res.status_code == 200
    assert res.json()["result"] == 20
