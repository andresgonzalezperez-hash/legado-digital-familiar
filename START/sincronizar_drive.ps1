# Script de sincronización portable y respaldo cifrado con Google Drive
# Recolecta automáticamente el último backup cifrado (.json) y sincroniza la bóveda

$source = (Resolve-Path "$PSScriptRoot\..").Path
$backupsDir = Join-Path $source "BACKUPS_CIFRADOS"

if (-not (Test-Path $backupsDir)) {
    New-Item -ItemType Directory -Force -Path $backupsDir | Out-Null
}

# 1. Recolectar automáticamente backups cifrados recientes desde Descargas
$downloadsDir = Join-Path $env:USERPROFILE "Downloads"
if (Test-Path $downloadsDir) {
    $latestBackups = Get-ChildItem -Path $downloadsDir -Filter "legado_backup_cifrado_*.json" -ErrorAction SilentlyContinue
    foreach ($bkp in $latestBackups) {
        $destFile = Join-Path $backupsDir $bkp.Name
        if (-not (Test-Path $destFile)) {
            Copy-Item -Path $bkp.FullName -Destination $destFile -Force
            Write-Host "[OK] Backup cifrado incorporado a BACKUPS_CIFRADOS: $($bkp.Name)" -ForegroundColor Green
        }
    }
}

# 2. Sincronizar con unidad montada de Google Drive (si existe G:\ o carpeta local)
$destination = "G:\Mi unidad\LEGADO DIGITAL"
if (-not (Test-Path "G:\")) {
    $userProfile = $env:USERPROFILE
    if (Test-Path "$userProfile\Google Drive") {
        $destination = "$userProfile\Google Drive\Mi unidad\LEGADO DIGITAL"
    }
}

Write-Host "Iniciando sincronización de Legado Digital..." -ForegroundColor Cyan
Write-Host "Origen:  $source"

if (Test-Path (Split-Path $destination -Parent)) {
    Write-Host "Destino: $destination"
    if (-not (Test-Path $destination)) {
        New-Item -ItemType Directory -Force -Path $destination | Out-Null
    }
    robocopy $source $destination /MIR /XD .git .archify .system_generated scratch /XF *.finalize*.json *.browser-check.json /R:3 /W:5
    if ($LASTEXITCODE -le 7) {
        Write-Host "Sincronización local con unidad Google Drive completada con éxito." -ForegroundColor Green
    } else {
        Write-Warning "Robocopy finalizó con código: $LASTEXITCODE"
    }
} else {
    Write-Host "Unidad G:\ no montada. Los backups cifrados están listos en: $backupsDir para subida directa vía plugin gdrive de Antigravity." -ForegroundColor Yellow
}
