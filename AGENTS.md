# Ficha de Operaciones: Legado Digital Familiar

## Propósito y Arquitectura
- **Propósito**: Bóveda offline-first para gestión segura del patrimonio digital, inventario de activos, protocolos de emergencia y generación de documento maestro notarial para herederos.
- **Puerto Asignado**: `8095` (para modo Servidor Local / PWA).
- **URL Local Oficial**: `http://127.0.0.1:8095` (o apertura directa offline vía `inicio.html`).

## Comandos Operativos

### 1. Iniciar Servidor Local (Habilita PWA e instalación nativa)
```powershell
# Usando uv (recomendado)
uv run python -m http.server 8095 --bind 127.0.0.1 --directory "C:\PROYECTOS\legado-digital-familiar\APP"

# O apertura directa en navegador sin servidor:
Start-Process "C:\PROYECTOS\legado-digital-familiar\inicio.html"
```

### 2. Detener Servidor
```powershell
Get-Process -Name python -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*8095*" } | Stop-Process
```

### 3. Compilar APK Android Offline
```powershell
powershell -ExecutionPolicy Bypass -File "C:\PROYECTOS\legado-digital-familiar\TOOLS\compilar_apk.ps1"
```

### 4. Reiniciar Servidor
Ejecutar Detener y volver a Iniciar.

## Diagnóstico y Logs
- **Logs de Consola del Navegador**: F12 > Consola para ver inicialización de Web Crypto, Service Worker y descifrado de bóveda.
- **Logs del Servidor**: Salida estándar de la terminal PowerShell de `http.server`.
- **Verificación de Integridad de Código**:
```powershell
uv run --with esprima python -c "import os, esprima; [esprima.parseScript(open(os.path.join(r, f), encoding='utf-8').read()) for r, _, fs in os.walk(r'C:\PROYECTOS\legado-digital-familiar\APP') for f in fs if f.endswith('.js') and not f.endswith('.min.js')]; print('All JS valid!')"
```
