$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$brainRoot = "M:\miniBIOTA\miniBIOTA_Brain"

Write-Host "miniBIOTA Company Codex startup"
Write-Host "Repo: $repoRoot"

if (Test-Path "$brainRoot\_system\agent_memory.md") {
    Write-Host "Brain memory: $brainRoot\_system\agent_memory.md"
} else {
    Write-Host "Brain memory not found at expected path: $brainRoot\_system\agent_memory.md"
}

if (Test-Path "$brainRoot\1. Company Operations\company_brief.md") {
    Write-Host "Company brief: $brainRoot\1. Company Operations\company_brief.md"
} else {
    Write-Host "Company brief not found yet at expected path."
}

if (Test-Path "$brainRoot\_system\minibiota_tools.py") {
    try {
        Push-Location $brainRoot
        python -c "import sys; sys.path.insert(0, r'_system'); import minibiota_tools as tools; print('Supabase tools import: ok')"
        Pop-Location
    } catch {
        Pop-Location
        Write-Host "Supabase tools import check failed: $($_.Exception.Message)"
    }
}

try {
    Push-Location $repoRoot
    git status --short --branch
    Pop-Location
} catch {
    Pop-Location
    Write-Host "Git status check failed: $($_.Exception.Message)"
}

Write-Host "Startup complete. Read AGENTS.md, docs/agent_protocol.md, Brain agent_memory.md, and Brain company_brief.md before work."
