$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$brainRoot = "M:\miniBIOTA\miniBIOTA_Brain"

Write-Host "miniBIOTA Company Codex closeout"
Write-Host "Repo: $repoRoot"

Push-Location $repoRoot
Write-Host ""
Write-Host "Company repo status:"
git status --short --branch
Pop-Location

if (Test-Path "$brainRoot\_system\sync_docs.ps1") {
    Write-Host ""
    Write-Host "Brain sync helper exists: $brainRoot\_system\sync_docs.ps1"
    Write-Host "Run from Brain when local docs changed:"
    Write-Host "powershell -ExecutionPolicy Bypass -File `"_system\sync_docs.ps1`""
}

if (Test-Path "$brainRoot\1. Company Operations\company_brief.md") {
    Write-Host "Company brief exists: $brainRoot\1. Company Operations\company_brief.md"
} else {
    Write-Host "Company brief missing at expected path."
}

Write-Host ""
Write-Host "Closeout reminder:"
Write-Host "- Read changed docs end to end."
Write-Host "- Update Brain company_brief.md when manager-facing state changed."
Write-Host "- Verify tasks/domain status for current operating claims."
Write-Host "- Commit and push completed work."
