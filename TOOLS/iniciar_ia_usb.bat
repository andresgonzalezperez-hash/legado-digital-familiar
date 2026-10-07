@echo off
:: =========================================================================
:: SCRIPT DE ARRANQUE PORTABLE PARA OLLAMA (USB)
:: =========================================================================
:: Este script permite ejecutar Ollama directamente desde el USB sin 
:: instalarlo en el ordenador anfitrión y guardando los modelos en el USB.

echo [LEGADO DIGITAL] Iniciando Asistente de Inteligencia Artificial Local...
echo.

:: 1. Definir la ruta actual del USB (donde esté este script)
set USB_ROOT=%~dp0..
set OLLAMA_DIR=%USB_ROOT%\OLLAMA_PORTABLE

:: 2. Configurar Ollama para que guarde y lea modelos SOLO del USB
set OLLAMA_MODELS=%OLLAMA_DIR%\models

:: 3. Crear el directorio de modelos si no existe
if not exist "%OLLAMA_MODELS%" (
    echo Creando directorio de modelos en %OLLAMA_MODELS%...
    mkdir "%OLLAMA_MODELS%"
)

:: 4. Verificar si el ejecutable de Ollama está en el USB
if not exist "%OLLAMA_DIR%\ollama.exe" (
    echo [ERROR] No se ha encontrado ollama.exe en %OLLAMA_DIR%
    echo Por favor, descarga ollama.exe desde https://ollama.com y colocalo en la carpeta OLLAMA_PORTABLE.
    pause
    exit /b
)

:: 5. Arrancar el servidor de Ollama de fondo (minimizado)
echo Iniciando servidor Ollama...
start "Ollama Server" /MIN "%OLLAMA_DIR%\ollama.exe" serve

:: Esperar un par de segundos para que el servidor despierte
timeout /t 3 /nobreak >nul

:: 6. Asegurar que el modelo elegido (ej. phi3 o qwen2) esté cargado.
:: Puedes cambiar "phi3" por el modelo legal compliance que hayas descargado.
set MODELO_ELEGIDO=phi3
echo.
echo Verificando modelo %MODELO_ELEGIDO%... (Si es la primera vez y tienes internet, se descargará).
"%OLLAMA_DIR%\ollama.exe" run %MODELO_ELEGIDO% --keepalive 5m

echo.
echo [COMPLETADO] El Asistente IA esta listo. Ya puedes abrir el Dashboard.
pause
