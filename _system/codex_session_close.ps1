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

if (Test-Path "$brainRoot\1. miniBIOTA_Company\company_brief.md") {
    Write-Host "Company brief exists: $brainRoot\1. miniBIOTA_Company\company_brief.md"
} else {
    Write-Host "Company brief missing at expected path."
}

Write-Host ""
Write-Host "Closeout reminder:"
Write-Host "- Read changed files, memory, skills, references, or archive notes end to end."
Write-Host "- Decide whether Brain company_brief.md needs an update when manager-facing state changed."
Write-Host "- Verify tasks/domain status for current operating claims."
Write-Host "- Commit and push when the work unit is complete and git publication is scoped."
