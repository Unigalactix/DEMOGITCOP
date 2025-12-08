param(
  [Parameter(Mandatory=$true)][string]$a,
  [Parameter(Mandatory=$true)][string]$b
)

$ErrorActionPreference = 'Stop'
Push-Location "$PSScriptRoot\..\python-division"
try {
  python main.py $a $b
} finally {
  Pop-Location
}
