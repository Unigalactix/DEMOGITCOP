import sys

def parse_arg(i: int) -> float:
    try:
        return float(sys.argv[i])
    except (IndexError, ValueError):
        print("Invalid number input", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    a = parse_arg(1)
    b = parse_arg(2)
    if b == 0:
        print("Division by zero", file=sys.stderr)
        sys.exit(1)
    print(a / b)
