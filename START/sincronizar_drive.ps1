# Script de sincronización portable con Google Drive
# Detecta dinámicamente la ruta del proyecto y la unidad de Google Drive

$source = (Resolve-Path "$PSScriptRoot\..").Path
$destination = "G:\Mi unidad\LEGADO DIGITAL"

# Fallback si G: no está montado directamente
if (-not (Test-Path "G:\")) {
    $userProfile = $env:USERPROFILE
    if (Test-Path "$userProfile\Google Drive") {
        $destination = "$userProfile\Google Drive\Mi unidad\LEGADO DIGITAL"
    }
}

Write-Host "Iniciando sincronización de Legado Digital..." -ForegroundColor Cyan
Write-Host "Origen:  $source"
Write-Host "Destino: $destination"

if (-not (Test-Path $destination)) {
    Write-Host "Creando directorio de destino..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path $destination | Out-Null
}

# Ejecutar robocopy para sincronizar los archivos (excluyendo carpetas temporales y del sistema)
robocopy $source $destination /MIR /XD .git .system_generated scratch /R:3 /W:5

if ($LASTEXITCODE -le 7) {
    Write-Host "Sincronización completada con éxito." -ForegroundColor Green
} else {
    Write-Warning "Robocopy finalizó con advertencias o códigos de salida: $LASTEXITCODE"
}
