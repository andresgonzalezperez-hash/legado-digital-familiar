# Script de extracción de aplicaciones móviles mediante ADB (Fase 4)
# Genera un listado CSV de las aplicaciones instaladas en tu móvil Android para el inventario

$csvPath = Join-Path $PSScriptRoot "apps_movil_inventario.csv"

Write-Host "Comprobando conexión con el dispositivo Android..." -ForegroundColor Cyan

# Verificar si adb está disponible en el sistema
$adbPath = Get-Command adb -ErrorAction SilentlyContinue
if (-not $adbPath) {
    Write-Error "No se ha encontrado el comando 'adb'. Asegúrate de tener instalado Android SDK Platform Tools y que esté en tu PATH."
    Write-Host "Puedes descargarlo de: https://developer.android.com/studio/releases/platform-tools"
    exit 1
}

# Comprobar si hay dispositivos conectados
$devices = adb devices
$connected = $devices | Select-String -Pattern "\bdevice\b"

if (-not $connected) {
    Write-Warning "No se detecta ningún dispositivo conectado."
    Write-Host "Por favor:"
    Write-Host "1. Conecta tu teléfono Android mediante cable USB."
    Write-Host "2. Asegúrate de tener activada la 'Depuración por USB' en las Opciones de Desarrollador de tu móvil."
    Write-Host "3. Acepta el mensaje emergente en tu móvil que solicita autorizar la depuración desde este ordenador."
    Write-Host ""
    Read-Host "Presiona Enter cuando lo hayas hecho para volver a intentar..."
    $devices = adb devices
    $connected = $devices | Select-String -Pattern "\bdevice\b"
    if (-not $connected) {
        Write-Error "Sigue sin detectarse ningún dispositivo. Abortando extracción."
        exit 1
    }
}

Write-Host "Dispositivo detectado. Extrayendo listado de aplicaciones de terceros..." -ForegroundColor Green

# Obtener listado de paquetes
$packages = adb shell pm list packages -3
if ($LASTEXITCODE -ne 0 -or -not $packages) {
    Write-Error "Error al extraer el listado de paquetes del dispositivo."
    exit 1
}

Write-Host "Procesando paquetes y generando el archivo CSV..." -ForegroundColor Cyan

# Mapeo básico de nombres conocidos para ayudar a rellenar el inventario
function Get-AppName($pkg) {
    switch -Regex ($pkg) {
        "whatsapp" { return "WhatsApp" }
        "telegram" { return "Telegram" }
        "chrome" { return "Google Chrome" }
        "drive" { return "Google Drive" }
        "gmail" { return "Gmail" }
        "spotify" { return "Spotify" }
        "netflix" { return "Netflix" }
        "amazon" { return "Amazon" }
        "paypal" { return "PayPal" }
        "binance" { return "Binance" }
        "authenticator" { return "Google Authenticator" }
        "microsoft.auth" { return "Microsoft Authenticator" }
        "facebook" { return "Facebook" }
        "instagram" { return "Instagram" }
        "twitter" { return "X (Twitter)" }
        "linkedin" { return "LinkedIn" }
        default { 
            # Devolver el identificador del paquete capitalizado
            $parts = $pkg -split "\."
            if ($parts.Count -gt 1) {
                return $parts[-1].ToUpper()[0] + $parts[-1].Substring(1)
            }
            return $pkg
        }
    }
}

$inventario = @()
foreach ($line in $packages) {
    if ($line -match "^package:(.+)$") {
        $packageId = $Matches[1].Trim()
        $nombreVisible = Get-AppName $packageId
        
        $obj = [PSCustomObject]@{
            "Nombre Visible"        = $nombreVisible
            "Identificador Paquete" = $packageId
            "Función"               = ""
            "Cuenta Asociada"       = ""
            "Usa 2FA (Sí/No)"       = "No"
            "Dónde está la Clave"   = "KeePassXC: Grupo 07_Moviles_y_apps"
            "Acción Emergencia"     = ""
        }
        $inventario += $obj
    }
}

# Exportar a CSV con codificación UTF-8
$inventario | Export-Csv -Path $csvPath -NoTypeInformation -Encoding UTF8 -Delimiter ";"

Write-Host "Archivo CSV generado correctamente en: $csvPath" -ForegroundColor Green
Write-Host "Puedes abrir este archivo en Excel para rellenar los datos de cada aplicación." -ForegroundColor Yellow
