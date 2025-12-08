param(
  [Parameter(Mandatory=$true)][string]$a,
  [Parameter(Mandatory=$true)][string]$b
)

$ErrorActionPreference = 'Stop'
Push-Location "$PSScriptRoot\..\java-multiplication"
try {
  javac Main.java
  java Main $a $b
} finally {
  Pop-Location
}
