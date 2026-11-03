# Script de Despliegue Rápido en Móviles Android (Andrés y Maeva)
# Conecta el móvil por USB con Depuración USB activa para instalar la PWA 100% Offline

$ErrorActionPreference = "Continue"
$port = 8095
$appDir = (Resolve-Path "$PSScriptRoot\..\APP").Path

Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "     INSTALADOR MÓVIL OFFLINE - LEGADO DIGITAL FAMILIAR (ANDROID)     " -ForegroundColor Cyan
Write-Host "======================================================================" -ForegroundColor Cyan

# 1. Comprobar si el servidor local en 8095 está activo; si no, levantarlo en segundo plano
$conn = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if (-not $conn) {
    Write-Host "[1/3] Levantando servidor local en http://127.0.0.1:$port ..." -ForegroundColor Yellow
    Start-Process -FilePath "uv" -ArgumentList "run python -m http.server $port --bind 127.0.0.1 --directory `"$appDir`"" -WindowStyle Hidden
    Start-Sleep -Seconds 2
} else {
    Write-Host "[1/3] Servidor local ya activo en puerto $port." -ForegroundColor Green
}

# 2. Verificar dispositivos Android conectados por ADB
$adbCmd = Get-Command adb -ErrorAction SilentlyContinue
if ($adbCmd) {
    Write-Host "[2/3] Configurando túnel USB seguro (adb reverse tcp:$port tcp:$port)..." -ForegroundColor Yellow
    adb reverse tcp:$port tcp:$port
    Write-Host "[3/3] Abriendo Legado Digital en el navegador Chrome del móvil..." -ForegroundColor Green
    adb shell am start -a android.intent.action.VIEW -d "http://127.0.0.1:$port/index.html"
    Write-Host ""
    Write-Host "PASO FINAL EN EL MÓVIL:" -ForegroundColor Cyan
    Write-Host "Pulsa el menú de Chrome (⋮) -> 'Instalar aplicación' (Añadir a pantalla de inicio)." -ForegroundColor White
    Write-Host "El Service Worker descargará los 19 módulos y el Mapa Archify para uso 100% sin internet." -ForegroundColor White
} else {
    Write-Host "[INFO] ADB no detectado en PATH. También puedes abrir la app en el móvil conectándote a la misma Wi-Fi local o mediante el plugin android-cli de Antigravity." -ForegroundColor Yellow
}
