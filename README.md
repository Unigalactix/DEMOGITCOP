# Calculator (Multi-Language)

A simple multi-language project where each operation is implemented in a different language:
- Node.js: Addition
- .NET: Subtraction
- Java: Multiplication
- Python: Division

## Prerequisites
- Windows PowerShell 5.1 or later
- Node.js 18+
- .NET SDK 7 or 8
- Java SE 17+ (JDK)
- Python 3.9+

## Structure
- `node-addition/`: Node.js CLI adding two numbers
- `dotnet-subtraction/`: .NET CLI subtracting two numbers
- `java-multiplication/`: Java CLI multiplying two numbers
- `python-division/`: Python CLI dividing two numbers
- `scripts/`: Convenience PowerShell scripts to run each operation

## Quick Start (Windows PowerShell)
From the repo root `calculator-multilang`:

```powershell
# Addition (Node.js)
./scripts/run-addition.ps1 2 3

# Subtraction (.NET)
./scripts/run-subtraction.ps1 5 1

# Multiplication (Java)
./scripts/run-multiplication.ps1 4 6

# Division (Python)
./scripts/run-division.ps1 10 2
```

Each command prints the numeric result to stdout. Input arguments are treated as numbers; errors are reported for invalid input or division by zero.
