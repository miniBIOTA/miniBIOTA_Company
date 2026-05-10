$ErrorActionPreference = "Stop"

$companyRoot = Split-Path -Parent $PSScriptRoot
$outputDir = $PSScriptRoot
$timestamp = Get-Date
$dateStamp = $timestamp.ToString("yyyy-MM-dd")
$generatedAt = $timestamp.ToString("yyyy-MM-dd HH:mm:ss zzz")

$sourceDefinitions = @(
    @{ Order = 1; Path = Join-Path $companyRoot "domains\company\company_overview.md"; BriefPath = Join-Path $companyRoot "domains\company\company_brief.md" },
    @{ Order = 2; Path = Join-Path $companyRoot "domains\financials\financials_overview.md"; BriefPath = Join-Path $companyRoot "domains\financials\financials_brief.md" },
    @{ Order = 3; Path = Join-Path $companyRoot "domains\research\research_overview.md"; BriefPath = Join-Path $companyRoot "domains\research\research_brief.md" },
    @{ Order = 4; Path = Join-Path $companyRoot "domains\brand\brand_overview.md"; BriefPath = Join-Path $companyRoot "domains\brand\brand_brief.md" },
    @{ Order = 5; Path = Join-Path $companyRoot "domains\content\content_overview.md"; BriefPath = Join-Path $companyRoot "domains\content\content_brief.md" },
    @{ Order = 6; Path = Join-Path $companyRoot "domains\hardware\hardware_overview.md"; BriefPath = Join-Path $companyRoot "domains\hardware\hardware_brief.md" },
    @{ Order = 7; Path = Join-Path $companyRoot "domains\growth\growth_overview.md"; BriefPath = Join-Path $companyRoot "domains\growth\growth_brief.md" },
    @{ Order = 8; Path = Join-Path $companyRoot "domains\raw-footage\raw_footage_overview.md"; BriefPath = $null },
    @{ Order = 9; Path = Join-Path $companyRoot "domains\web\web_overview.md"; BriefPath = Join-Path $companyRoot "domains\web\web_brief.md" },
    @{ Order = 10; Path = Join-Path $companyRoot "domains\definitions\definitions_overview.md"; BriefPath = $null },
    @{ Order = 11; Path = Join-Path $companyRoot "domains\app\app_overview.md"; BriefPath = Join-Path $companyRoot "domains\app\app_brief.md" }
)

function Remove-MarkdownFrontmatter {
    param([Parameter(Mandatory = $true)][string]$Text)

    $normalized = $Text -replace "`r`n?", "`n"
    if (-not $normalized.StartsWith("---`n")) {
        return $Text
    }

    $lines = $normalized -split "`n"
    for ($index = 1; $index -lt $lines.Count; $index++) {
        if ($lines[$index].Trim() -eq '---') {
            if (($index + 1) -ge $lines.Count) {
                return ''
            }
            return (($lines[($index + 1)..($lines.Count - 1)] -join "`n").TrimStart("`n"))
        }
    }

    throw "Missing closing YAML frontmatter delimiter."
}

function Normalize-MarkdownText {
    param([Parameter(Mandatory = $true)][string]$Text)

    $normalized = $Text -replace "`r`n?", "`n"
    $lines = $normalized -split "`n"
    $cleanLines = New-Object System.Collections.Generic.List[string]

    foreach ($line in $lines) {
        if ($line -match '^\s*>\s*Phase 3 transition note:') { continue }
        if ($line -match '^\s*reporting_status:') { continue }
        if ($line -match '^\s*reporting_phase:') { continue }
        if ($line -match '^\s*source_repo:') { continue }
        if ($line -match '^\s*source_path:') { continue }
        if ($line -match '^\s*copied_on:') { continue }
        if ($line -match '^\s*brain_transition_status:') { continue }
        if ($line -match '^\s*Related reference[s]?:') { continue }
        if ($line -match '^\s*---\s*$') { continue }

        $updated = [regex]::Replace($line, '\[\[([^\]|]+)\|([^\]]+)\]\]', '$2')
        $updated = [regex]::Replace($updated, '\[\[([^\]]+)\]\]', '$1')
        $cleanLines.Add($updated)
    }

    return (($cleanLines -join "`n").Trim() -replace "`n{3,}", "`n`n")
}

function Get-MarkdownLogicalLines {
    param([string]$Content)

    $lines = $Content -split "`n"
    $logicalLines = New-Object System.Collections.Generic.List[string]
    foreach ($line in $lines) {
        if ($line -match '^\s{2,}\S' -and $logicalLines.Count -gt 0) {
            $previousIndex = $logicalLines.Count - 1
            $logicalLines[$previousIndex] = ($logicalLines[$previousIndex].TrimEnd() + ' ' + $line.Trim())
            continue
        }
        $logicalLines.Add($line)
    }
    return @($logicalLines)
}

function Get-ListItems {
    param([string]$Content, [int]$MaxItems = 3)

    if ([string]::IsNullOrWhiteSpace($Content)) { return @() }

    $items = New-Object System.Collections.Generic.List[string]
    foreach ($line in (Get-MarkdownLogicalLines -Content $Content)) {
        $trimmed = $line.Trim()
        if ($trimmed -match '^[-*]\s+(.+)$') {
            $items.Add($matches[1].Trim())
        } elseif ($trimmed -match '^\d+\.\s+(.+)$') {
            $items.Add($matches[1].Trim())
        }
    }

    if ($items.Count -eq 0) {
        $firstLine = ($Content -split "`n" | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -First 1)
        if ($firstLine) { $items.Add($firstLine.Trim()) }
    }

    return @($items | Select-Object -First $MaxItems)
}

function Get-LeadText {
    param([string]$Content)

    if ([string]::IsNullOrWhiteSpace($Content)) { return "" }

    foreach ($line in (Get-MarkdownLogicalLines -Content $Content)) {
        $trimmed = $line.Trim()
        if ([string]::IsNullOrWhiteSpace($trimmed)) { continue }
        if ($trimmed -match '^[-*]\s+(.+)$') { return $matches[1].Trim() }
        if ($trimmed -match '^\d+\.\s+(.+)$') { return $matches[1].Trim() }
        return $trimmed
    }

    return ""
}

function Parse-CompanyDomainReport {
    param(
        [Parameter(Mandatory = $true)][string]$Path,
        [string]$BriefPath,
        [Parameter(Mandatory = $true)][int]$Order
    )

    if (-not (Test-Path -LiteralPath $Path)) { throw "Missing Company domain report: $Path" }
    if ($BriefPath -and -not (Test-Path -LiteralPath $BriefPath)) { throw "Missing Company domain brief: $BriefPath" }

    $rawText = Get-Content -LiteralPath $Path -Raw
    $bodyText = Remove-MarkdownFrontmatter -Text $rawText
    $normalized = Normalize-MarkdownText -Text $bodyText
    $lines = $normalized -split "`n"

    $title = ""
    $sections = @{}
    $currentSection = $null
    $buffer = New-Object System.Collections.Generic.List[string]

    foreach ($line in $lines) {
        if ($line -match '^#\s+(.+)$') {
            $title = $matches[1].Trim()
            continue
        }

        if ($line -match '^##\s+(.+)$') {
            if ($currentSection) {
                $sections[$currentSection] = ($buffer -join "`n").Trim()
                $buffer.Clear()
            }
            $currentSection = $matches[1].Trim()
            continue
        }

        if ($currentSection) { $buffer.Add($line) }
    }

    if ($currentSection) { $sections[$currentSection] = ($buffer -join "`n").Trim() }

    $briefContent = ""
    if ($BriefPath) {
        $briefContent = Normalize-MarkdownText -Text (Remove-MarkdownFrontmatter -Text (Get-Content -LiteralPath $BriefPath -Raw))
    }

    return [PSCustomObject]@{
        Order = $Order
        Title = $title
        Path = $Path
        BriefPath = $BriefPath
        Content = $normalized
        BriefContent = $briefContent
        Scope = $sections['Scope']
        CurrentState = $sections['Current State']
        KeyFacts = $sections['Key Facts']
        Priorities = $sections['Priorities']
        Risks = $sections['Risks / Gaps']
        Sources = $sections['Source Notes']
    }
}

function Add-SectionBullets {
    param([System.Text.StringBuilder]$Builder, [string]$Heading, [object[]]$Items)

    [void]$Builder.AppendLine("### $Heading")
    if ($null -eq $Items -or $Items.Count -eq 0) {
        [void]$Builder.AppendLine("- No items captured.")
        [void]$Builder.AppendLine()
        return
    }

    foreach ($item in $Items) { [void]$Builder.AppendLine("- $item") }
    [void]$Builder.AppendLine()
}

$reports = foreach ($definition in $sourceDefinitions) {
    Parse-CompanyDomainReport -Path $definition.Path -BriefPath $definition.BriefPath -Order $definition.Order
}

$masterBuilder = New-Object System.Text.StringBuilder
[void]$masterBuilder.AppendLine('# miniBIOTA Company Master Context')
[void]$masterBuilder.AppendLine()
[void]$masterBuilder.AppendLine("- Generated: $generatedAt")
[void]$masterBuilder.AppendLine('- Source contract: Company `domains/` reports are included below.')
[void]$masterBuilder.AppendLine('- Migration status: Active Company export during Phase 11 Brain retirement probation. Brain exports are historical/archive artifacts.')
[void]$masterBuilder.AppendLine('- Format: portable Markdown with Obsidian wiki-links normalized or removed.')
[void]$masterBuilder.AppendLine()
[void]$masterBuilder.AppendLine('## Company Operating Coordination')
[void]$masterBuilder.AppendLine()
[void]$masterBuilder.AppendLine('- Company owns active cross-domain operating coordination, planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, operating memory, review rhythm, and active repo/domain routing.')
[void]$masterBuilder.AppendLine('- Domain implementation truth remains in the domain repos and domain-owned structured records.')
[void]$masterBuilder.AppendLine('- Brain remains archive/recovery context and retirement provenance during Phase 11 probation.')
[void]$masterBuilder.AppendLine()
[void]$masterBuilder.AppendLine('---')
[void]$masterBuilder.AppendLine()

foreach ($report in ($reports | Sort-Object Order)) {
    [void]$masterBuilder.AppendLine($report.Content.Trim())
    if (-not [string]::IsNullOrWhiteSpace($report.BriefContent)) {
        [void]$masterBuilder.AppendLine()
        [void]$masterBuilder.AppendLine('## Domain Brief Snapshot')
        [void]$masterBuilder.AppendLine()
        [void]$masterBuilder.AppendLine($report.BriefContent.Trim())
    }
    [void]$masterBuilder.AppendLine()
    [void]$masterBuilder.AppendLine('---')
    [void]$masterBuilder.AppendLine()
}

$masterOutput = ($masterBuilder.ToString().Trim() + "`n")
$masterPath = Join-Path $outputDir 'miniBIOTA_company_master_context.md'
$compatMasterPath = Join-Path $outputDir 'miniBIOTA_master_context.md'
Set-Content -LiteralPath $masterPath -Value $masterOutput -Encoding utf8
Set-Content -LiteralPath $compatMasterPath -Value $masterOutput -Encoding utf8

$briefBuilder = New-Object System.Text.StringBuilder
[void]$briefBuilder.AppendLine('# miniBIOTA Company Executive Brief')
[void]$briefBuilder.AppendLine()
[void]$briefBuilder.AppendLine("- Generated: $generatedAt")
[void]$briefBuilder.AppendLine('- Purpose: Company-side synthesis of domain reports.')
[void]$briefBuilder.AppendLine('- Migration status: Active Company export during Phase 11 Brain retirement probation. Brain exports are historical/archive artifacts.')
[void]$briefBuilder.AppendLine()
[void]$briefBuilder.AppendLine('## Snapshot')
[void]$briefBuilder.AppendLine('- Company is the active top-level operating coordination repo for cross-domain planning, Programs/Operations governance, dependency mapping, roadmap cadence, and review rhythm.')
[void]$briefBuilder.AppendLine('- These exports read Company `domains/` reports, not Brain domain folders.')
[void]$briefBuilder.AppendLine('- Brain remains available for historical lookup, recovery context, and retirement provenance during Phase 11 probation.')
[void]$briefBuilder.AppendLine('- No Planner, Supabase, app, web, firmware, finance, public, sponsor, legal, or roadmap commitment is changed by generating these exports.')
[void]$briefBuilder.AppendLine()

foreach ($report in ($reports | Sort-Object Order)) {
    $summaryParts = @()
    $scopeLead = Get-LeadText -Content $report.Scope
    $factLead = Get-LeadText -Content $report.KeyFacts
    if ($scopeLead) { $summaryParts += $scopeLead }
    if ($factLead) { $summaryParts += $factLead }
    $summaryText = ($summaryParts -join ' ').Trim()
    if ([string]::IsNullOrWhiteSpace($summaryText)) { $summaryText = 'No summary available.' }

    [void]$briefBuilder.AppendLine("## $($report.Title)")
    [void]$briefBuilder.AppendLine()
    [void]$briefBuilder.AppendLine("**Summary:** $summaryText")
    [void]$briefBuilder.AppendLine()
    Add-SectionBullets -Builder $briefBuilder -Heading 'Current Status' -Items (Get-ListItems -Content $report.CurrentState -MaxItems 3)
    Add-SectionBullets -Builder $briefBuilder -Heading 'Priorities' -Items (Get-ListItems -Content $report.Priorities -MaxItems 3)
    Add-SectionBullets -Builder $briefBuilder -Heading 'Risks / Gaps' -Items (Get-ListItems -Content $report.Risks -MaxItems 3)
}

[void]$briefBuilder.AppendLine('## Cross-Domain Next Actions')
[void]$briefBuilder.AppendLine()
foreach ($report in ($reports | Sort-Object Order)) {
    $topPriority = Get-LeadText -Content $report.Priorities
    $topRisk = Get-LeadText -Content $report.Risks
    if ([string]::IsNullOrWhiteSpace($topPriority)) { $topPriority = 'No immediate action recorded.' }
    if ([string]::IsNullOrWhiteSpace($topRisk)) { $topRisk = 'No explicit gap recorded.' }
    [void]$briefBuilder.AppendLine("- $($report.Title): Next action - $topPriority Gap - $topRisk")
}

$briefOutput = ($briefBuilder.ToString().Trim() + "`n")
$briefPath = Join-Path $outputDir 'miniBIOTA_company_executive_brief.md'
$compatBriefPath = Join-Path $outputDir 'miniBIOTA_ceo_brief.md'
Set-Content -LiteralPath $briefPath -Value $briefOutput -Encoding utf8
Set-Content -LiteralPath $compatBriefPath -Value $briefOutput -Encoding utf8

Write-Output "Built Company exports on $dateStamp"
Write-Output $masterPath
Write-Output $compatMasterPath
Write-Output $briefPath
Write-Output $compatBriefPath
