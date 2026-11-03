# Changelog

Todas las actualizaciones notables de este proyecto se documentarán en este archivo.

## [1.3.0] - 2026-11-03
### Añadido
- **Mapa Visual Interactivo de Recuperación (`APP/mapa-recuperacion.html`)**: Diagrama interactivo standalone generado con `archify` que guía a los familiares paso a paso por las 4 carrileras de emergencia (Arranque Físico/2FA, Desbloqueo Offline USB, Auditoría SHA-256 / Contingencia Drive y Ejecución Patrimonial).
- **Modales Nativos `<dialog>` y Notificaciones Toast (`APP/core/helpers.js`)**: Sustitución de los `alert()` bloqueantes por diálogos modales accesibles con desenfoque de fondo, cierre al pulsar fuera (*light-dismiss*) y avisos flotantes (`aria-live="polite"`).
- **View Transitions API (`APP/core/router.js`)**: Transiciones fluidas al navegar entre pestañas del panel con degradación elegante en navegadores antiguos.
- **Empaquetado Móvil Android WebAPK (`APP/icon-512.png`, `APP/manifest.json`, `TOOLS/instalar_en_android.ps1`)**: Iconos adaptables de 512x512, accesos directos (`shortcuts`) y script de despliegue rápido por ADB para llevar la bóveda offline en los móviles de Andrés y Maeva.
- **Sincronización Automática de Backups Cifrados (`START/sincronizar_drive.ps1`)**: Recolección automática de archivos `legado_backup_cifrado_*.json` hacia `BACKUPS_CIFRADOS/` y sincronización con Google Drive.

## [1.2.0] - 2026-10-16
### Seguridad y Criptografía
- **Blindaje de Llave Maestra en RAM (`crypto.js`, `app.js`, `state.js`)**: La clave maestra de sesión (`sessionVMK`) ahora se importa con `extractable: false` en Web Crypto API y vive exclusivamente en memoria volátil, eliminando por completo el almacenamiento intermedio con clave estática en `sessionStorage` y cualquier escritura de respaldo en texto plano en `localStorage`.
- **Copias de Seguridad Cifradas (`export-import.js`)**: La exportación JSON ahora cifra todo el inventario y el checklist mediante AES-256-GCM antes de descargar el archivo, manteniendo retrocompatibilidad al importar versiones anteriores.

### Añadido
- **Verificador Activo de Integridad SHA-256 (`inventario.js`)**: Al hacer clic en la insignia `🔒 Firmado (Verificar)` de cualquier registro (tanto en Modo Maestro como en Modo Familiar), el usuario puede seleccionar el archivo `.pcv` físico para comprobar en tiempo real si su huella SHA-256 coincide con la original o si ha sufrido degradación (*bit-rot*).

### Corregido
- **Preservación de Firmas en Backups (`export-import.js`)**: Corregido fallo en `validateImportedData()` que omitía el campo `fileHash` al restaurar copias de seguridad.
- **Maquetación del PDF Notarial e Impresión (`pdf-generator.js`, `print.js`)**: Añadido ajuste automático de línea (`splitTextToSize`) para evitar desbordamiento horizontal en A4, inclusión de ubicaciones de contingencia y visualización de rutas `.pcv` y firmas SHA-256 en la vista de impresión nativa.
- **Métricas del Dashboard (`dashboard.js`)**: Contabilización correcta de la categoría `Suscripciones` en las tarjetas de resumen.

## [1.1.0] - 2026-10-07
### Añadido
- **PWA (Progressive Web App)**: Añadidos `manifest.json`, `icon.png` y `sw.js` para permitir la instalación local y funcionamiento offline nativo.
- **Auditoría de Integridad**: Función en `crypto.js` para calcular la firma SHA-256 de archivos físicos (Picocrypt) y detectar degradación de datos.
- **Exportación Notarial**: Generación de PDF Maestro offline mediante `jsPDF` y `html2canvas`.

### Cambiado
- La aplicación se ejecuta y mantiene desde un repositorio oficial Git descentralizado.
