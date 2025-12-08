param(
  [Parameter(Mandatory=$true)][string]$a,
  [Parameter(Mandatory=$true)][string]$b
)

$ErrorActionPreference = 'Stop'
Push-Location "$PSScriptRoot\..\dotnet-subtraction"
try {
  dotnet build -nologo -clp:NoSummary | Out-Null
  dotnet run -- $a $b
} finally {
  Pop-Location
}
