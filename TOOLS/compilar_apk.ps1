# ==============================================================================
# LEGADO DIGITAL FAMILIAR - COMPILADOR AUTOMÁTICO DE APK ANDROID
# ==============================================================================
# Genera el archivo autónomo LegadoDigital-v1.3.0.apk empaquetando la carpeta APP/
# Utiliza un contenedor efímero Docker sin ensuciar Windows con SDKs pesados.
# ==============================================================================

$ErrorActionPreference = "Stop"

$ProjectRoot = (Get-Item $PSScriptRoot).Parent.FullName
$AppDir = Join-Path $ProjectRoot "APP"
$AndroidAppDir = Join-Path $PSScriptRoot "android-app"
$AssetsDir = Join-Path $AndroidAppDir "app\src\main\assets"

Write-Host "`n📦 [1/3] Sincronizando código fuente web en assets Android..." -ForegroundColor Cyan

if (Test-Path $AssetsDir) {
    Remove-Item -Path $AssetsDir -Recurse -Force
}
Copy-Item -Path $AppDir -Destination $AssetsDir -Recurse -Force

Write-Host "🔨 [2/3] Compilando APK nativo con Gradle (Android SDK 34 en Docker)..." -ForegroundColor Cyan

docker run --rm `
    -v "${AndroidAppDir}:/project" `
    -w /project `
    --memory=3g `
    ghcr.io/cirruslabs/android-sdk:34 `
    bash -c "chmod +x ./gradlew && ./gradlew assembleDebug --no-daemon"

$GeneratedApk = Join-Path $AndroidAppDir "app\build\outputs\apk\debug\app-debug.apk"

if (Test-Path $GeneratedApk) {
    $TargetApk1 = Join-Path $PSScriptRoot "LegadoDigital-v1.3.0.apk"
    $TargetApk2 = Join-Path $ProjectRoot "LegadoDigital.apk"
    
    Copy-Item -Path $GeneratedApk -Destination $TargetApk1 -Force
    Copy-Item -Path $GeneratedApk -Destination $TargetApk2 -Force

    $SizeMB = [math]::Round((Get-Item $TargetApk1).Length / 1MB, 2)
    Write-Host "`n✅ [3/3] ¡APK generado con éxito!" -ForegroundColor Green
    Write-Host "   -> $TargetApk1 ($SizeMB MB)" -ForegroundColor Yellow
    Write-Host "   -> $TargetApk2" -ForegroundColor Yellow
    Write-Host "`n📱 Puedes copiar 'LegadoDigital.apk' a tu móvil por cable, Bluetooth o Telegram e instalarlo directamente." -ForegroundColor White
} else {
    Write-Error "No se encontró el archivo APK generado tras la compilación."
}
