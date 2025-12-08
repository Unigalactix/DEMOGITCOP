param(
  [Parameter(Mandatory=$true)][string]$a,
  [Parameter(Mandatory=$true)][string]$b
)

$ErrorActionPreference = 'Stop'
Push-Location "$PSScriptRoot\..\node-addition"
try {
  node index.js $a $b
} finally {
  Pop-Location
}
