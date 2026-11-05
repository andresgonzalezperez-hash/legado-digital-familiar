# Changelog

Todas las actualizaciones notables de este proyecto se documentarán en este archivo, siguiendo el formato estándar de versionado semántico.

---

## [1.4.1] - 2026-11-05
### Auditoría Red Team & Frescura de Información
- **Semáforo de Frescura en Tiempo Real (`state.js`, `dashboard.js`, `index.html`)**: Registro automático de la fecha/hora de última modificación (`lastUpdated`) en la bóveda cifrada y cálculo de días transcurridos con semáforo dinámico (🟢 <90d Al día, 🟡 90-180d Revisión sugerida, 🔴 >180d Desactualizado) visible en el panel de control.
- **Hoja de Acceso Notarial de Emergencia (`print.js`, `index.html`)**: Añadido generador e imprimible en blanco de la hoja de protocolo notarial (`printEmergencyNotarySheet()`) con campos para rellenar a mano (Ubicación física de USB, datos de albacea, notaría, número de protocolo) para depósito en sobre lacrado.
- **Aviso de Seguridad en Pantalla de Desbloqueo (`index.html`)**: Alerta de protección preventiva recomendando teclear la clave maestra en equipos de confianza o en modo seguro/desconectado para evitar keyloggers.
- **Cláusula Sucesoria y Legal (Art. 96 LOPD-GDD y Código Civil) (`index.html`, `print.js`, `pdf-generator.js`)**: Inclusión de descargo legal en la pestaña de disclaimers, vistas de impresión y PDF maestro clarificando que el inventario es una guía informativa y no constituye título sucesorio autónomo.
- **Documentación Bilingüe Oficial (`README.md`)**: Reestructuración integral con sección en inglés en primer lugar y sección en español a continuación.

---

## [1.4.0] - 2026-11-05
### Seguridad y Cumplimiento Normativo (ISO 27001, ISO 27701, SOC 2)
- **Content Security Policy (CSP) Hermética (`APP/index.html`, `APP/mapa-recuperacion.html`)**: Inyectada cabecera `<meta>` que prohíbe de raíz cualquier conexión de red externa (`connect-src 'none'`), bloqueando exfiltración de datos, clickjacking y scripts maliciosos.
- **Zeroización Activa en Memoria RAM (`APP/core/crypto.js`, `APP/app.js`)**: Función `Crypto.zeroize()` que sobreescribe con bytes aleatorios (`crypto.getRandomValues`) cualquier buffer de clave o contraseña al bloquear la bóveda o expirar la sesión.
- **Inmutabilidad en Runtime (`Object.freeze`)**: Sellado del objeto `Crypto` para impedir que extensiones de navegador hostiles intercepten funciones de descifrado.
- **Sanitización y Escapado Integral Anti-XSS (`APP/core/helpers.js`, `APP/modules/inventario.js`)**: Escapado riguroso de todo dato insertado en el DOM con `escapeHtml()`.
- **Matriz de Cumplimiento Normativo (`MATRIZ_CUMPLIMIENTO_ISO_SOC2.md`)**: Ficha técnica formal con 16 controles auditables de ISO/IEC 27001:2022, ISO/IEC 27701:2019 y SOC 2 Type II mapeados contra el código.

### Arquitectura
- **Pivote a "Pure HTML W3C"**: Eliminada cualquier dependencia de Android APK (`TOOLS/android-app/`, scripts de compilación y binarios) para garantizar la **inmortalidad del código a 30 años** sin requerir permisos de sistema ni tiendas de apps.

---

## [1.3.0] - 2026-11-03
### Añadido
- **Mapa Visual Interactivo de Recuperación (`APP/mapa-recuperacion.html`)**: Diagrama interactivo standalone generado con `archify` que guía a los familiares paso a paso por las 4 carrileras de emergencia (Arranque Físico/2FA, Desbloqueo Offline USB, Auditoría SHA-256 / Contingencia Drive y Ejecución Patrimonial).
- **Modales Nativos `<dialog>` y Notificaciones Toast (`APP/core/helpers.js`)**: Sustitución de los `alert()` bloqueantes por diálogos modales accesibles con desenfoque de fondo, cierre al pulsar fuera (*light-dismiss*) y avisos flotantes (`aria-live="polite"`).
- **View Transitions API (`APP/core/router.js`)**: Transiciones fluidas al navegar entre pestañas del panel con degradación elegante en navegadores antiguos.
- **Sincronización Automática de Backups Cifrados (`START/sincronizar_drive.ps1`)**: Recolección automática de archivos `legado_backup_cifrado_*.json` hacia `BACKUPS_CIFRADOS/` y sincronización con Google Drive.
- **Simulador Interactivo de Prototipos (`APP/mockup-showcase.html`)**: Prototipo interactivo con las 5 pantallas de la bóveda bajo la skill `craft-ui-ux`.

---

## [1.2.0] - 2026-10-16
### Seguridad y Criptografía
- **Blindaje de Llave Maestra en RAM (`crypto.js`, `app.js`, `state.js`)**: La clave maestra de sesión (`sessionVMK`) ahora se importa con `extractable: false` en Web Crypto API y vive exclusivamente en memoria volátil, eliminando el almacenamiento intermedio en `sessionStorage` y cualquier fallback en texto plano en `localStorage`.
- **Copias de Seguridad Cifradas (`export-import.js`)**: La exportación JSON ahora cifra todo el inventario y el checklist mediante AES-256-GCM antes de descargar el archivo.

### Añadido
- **Verificador Activo de Integridad SHA-256 (`inventario.js`)**: Al hacer clic en la insignia `🔒 Firmado (Verificar)` de cualquier registro, el usuario puede seleccionar el archivo `.pcv` físico para comprobar en tiempo real si su huella SHA-256 coincide con la original o si ha sufrido degradación (*bit-rot*).

### Corregido
- **Preservación de Firmas en Backups (`export-import.js`)**: Corregido fallo en `validateImportedData()` que omitía el campo `fileHash` al restaurar copias de seguridad.
- **Maquetación del PDF Notarial e Impresión (`pdf-generator.js`, `print.js`)**: Añadido ajuste automático de línea (`splitTextToSize`) para evitar desbordamiento horizontal en A4 e inclusión de firmas SHA-256 en la vista de impresión nativa.
- **Métricas del Dashboard (`dashboard.js`)**: Contabilización correcta de la categoría `Suscripciones` en las tarjetas de resumen.

---

## [1.1.0] - 2026-10-07
### Añadido
- **PWA (Progressive Web App)**: Añadidos `manifest.json`, `icon.png` y `sw.js` para permitir la instalación local y funcionamiento offline nativo.
- **Auditoría de Integridad**: Función en `crypto.js` para calcular la firma SHA-256 de archivos físicos (Picocrypt) y detectar degradación de datos.
- **Exportación Notarial**: Generación de PDF Maestro offline mediante `jsPDF` y `html2canvas`.

### Cambiado
- La aplicación se ejecuta y mantiene desde un repositorio oficial Git descentralizado.

---

## [1.0.0] - 2026-05-24
### Añadido
- **Lanzamiento Inicial del Legado Digital**: Bóveda offline-first en HTML/CSS/JS con cifrado en cliente, inventario de activos, checklist de contingencia y generación de documento maestro notarial.
