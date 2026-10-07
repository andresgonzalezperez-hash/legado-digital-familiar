# Script de creación de estructura documental para la Bóveda de Picocrypt (Fase 5)
# Crea las 11 carpetas organizativas y el archivo de bienvenida en la ruta indicada

$TargetDir = Read-Host "Introduce la ruta absoluta del directorio de la Bóveda Documental (Ej. E:\, o presiona Enter para usar la carpeta actual)"

if ([string]::IsNullOrWhiteSpace($TargetDir)) {
    $TargetDir = $PSScriptRoot
}

Write-Host "Creando estructura en: $TargetDir" -ForegroundColor Cyan

$folders = @(
    "00_Instrucciones",
    "01_Identidad",
    "02_Bancos",
    "03_Seguros",
    "04_Inmuebles",
    "05_Suscripciones",
    "06_Dispositivos",
    "07_Proveedores",
    "08_Testamento_y_notaria",
    "09_Cierre_o_transferencia",
    "10_Emergencia_72h"
)

foreach ($folder in $folders) {
    $path = Join-Path $TargetDir $folder
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
        Write-Host "Creada carpeta: $folder" -ForegroundColor Green
    } else {
        Write-Host "Ya existe la carpeta: $folder" -ForegroundColor Yellow
    }
}

# Crear el archivo LEEME_PRIMERO.txt en la raíz
$readmePath = Join-Path $TargetDir "LEEME_PRIMERO.txt"

$readmeContent = @"
======================================================================
           SISTEMA DE LEGADO DIGITAL FAMILIAR - LEEME PRIMERO
======================================================================

Este directorio contiene la estructura cifrada de documentos familiares sensibles.
Cada carpeta está organizada para facilitar la localización de la información en 
caso de emergencia o fallecimiento de alguno de los cónyuges.

ESTRUCTURA DE CARPETAS Y CONTENIDO:
----------------------------------------------------------------------
00_Instrucciones           - Documento Maestro del legado y guías.
01_Identidad               - DNI, Pasaportes, Libro de Familia, Certificados digitales.
02_Bancos                  - Extractos, contratos de cuentas, tarjetas, brokers.
03_Seguros                 - Pólizas de vida, hogar, salud, decesos, coche.
04_Inmuebles               - Escrituras, contratos de alquiler, recibos de IBI.
05_Suscripciones           - Servicios activos y facturas recurrentes.
06_Dispositivos            - Inventario de ordenadores, móviles, routers y accesos.
07_Proveedores             - Suministros (Luz, Agua, Gas, Internet).
08_Testamento_y_notaria    - Copia de testamentos, poderes notariales.
09_Cierre_o_transferencia  - Guías específicas de qué dar de baja y cómo.
10_Emergencia_72h          - Documentación crítica para las primeras 72 horas.

INSTRUCCIONES DE RECUPERACIÓN RÁPIDA:
1. Localiza el archivo de contraseñas 'legado_familiar.kdbx'.
2. Utiliza KeePassXC con la Frase Maestra guardada en el protocolo físico.
3. En el archivo KeePassXC encontrarás las credenciales de acceso a las cuentas.
4. Para cualquier gestión burocrática, consulta primero '08_Testamento_y_notaria'
   y el Documento Maestro impreso.
======================================================================
"@

$readmeContent | Out-File -FilePath $readmePath -Encoding utf8 -Force
Write-Host "Archivo LEEME_PRIMERO.txt generado con éxito en: $readmePath" -ForegroundColor Green
