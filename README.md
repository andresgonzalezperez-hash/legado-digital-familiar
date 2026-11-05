# 🛡️ Legado Digital Familiar (Offline-First · Pure HTML)
> **Versión Actual**: v1.4.0 (Hardened ISO 27001, ISO 27701 & SOC 2)  
> **Licencia**: MIT  

Este proyecto es una infraestructura de código abierto diseñada para organizar tu legado digital, inventario de activos y protocolos de emergencia familiares de forma **100% privada, desconectada de internet (Air-Gapped) y en HTML puro**, garantizando su funcionamiento perpetuo sin depender de servidores externos ni aplicaciones nativas.

> [!WARNING]
> **ADVERTENCIA DE SEGURIDAD CRÍTICA:**
> Este repositorio incluye un archivo `.gitignore` configurado. **NUNCA subas tus contraseñas reales, frases semilla de criptomonedas, bases de datos (.kdbx) ni PDFs personales a GitHub**. Este código debe ser utilizado únicamente de forma local en tu ordenador o USB privado.

---

## 🏷️ Historial de Versiones Oficiales

| Versión | Fecha | Hito Principal y Enlace |
| :--- | :--- | :--- |
| **`v1.4.0`** | **05/11/2026** | **Hardening Normativo & Pure HTML**: Blindaje bajo ISO/IEC 27001, ISO/IEC 27701 y SOC 2 Type II (CSP hermética, zeroización en RAM, anti-XSS y sellado de objetos). Retirada definitiva de APK para garantizar funcionamiento a 30 años en cualquier navegador W3C. [Ver detalles en Changelog](CHANGELOG.md#140---2026-11-05). |
| **`v1.3.0`** | **03/11/2026** | **Mapa Archify & Modernización UI**: Incorporación del mapa interactivo de recuperación (`APP/mapa-recuperacion.html`), modales nativos `<dialog>`, notificaciones Toast y View Transitions API. [Ver detalles en Changelog](CHANGELOG.md#130---2026-11-03). |
| **`v1.2.0`** | **16/10/2026** | **Blindaje Criptográfico en RAM**: Claves de sesión con `extractable: false`, exportación de copias de seguridad cifradas con AES-256-GCM y verificador activo de integridad SHA-256 en tiempo real. [Ver detalles en Changelog](CHANGELOG.md#120---2026-10-16). |
| **`v1.1.0`** | **07/10/2026** | **PWA & Arquitectura Git**: Soporte para ejecución e instalación offline nativa mediante Service Worker, manifiesto web y exportación a PDF notarial. [Ver detalles en Changelog](CHANGELOG.md#110---2026-10-07). |
| **`v1.0.0`** | **24/05/2026** | **Lanzamiento Inicial**: Bóveda offline-first en HTML/CSS/JS con cifrado local, inventario patrimonial y checklist de contingencia familiar. |

*Para ver el registro exhaustivo de cambios, consulta el archivo [CHANGELOG.md](CHANGELOG.md) y la [Bitácora Histórica del Proyecto](información/bitacora_actualizacion.md).*

---

## 🚀 Características Principales (v1.4.0)

*   **100% Pure Web W3C (Sin APK)**: Funciona en cualquier navegador de cualquier sistema operativo (Windows, Mac, Linux, Android, iOS) simplemente abriendo `inicio.html`. Cero dependencias de tiendas de aplicaciones o permisos de sistema.
*   **Hardening ISO 27001, ISO 27701 y SOC 2**:
    *   **CSP Hermética**: Directiva de seguridad en cabecera `<meta>` que prohíbe cualquier conexión de red saliente (`connect-src 'none'`).
    *   **Zeroización en RAM**: Sobreescritura activa de memoria con bytes aleatorios (`crypto.getRandomValues`) al cerrar la sesión o por inactividad.
    *   **Inmutabilidad Runtime**: Sellado de objetos y funciones de descifrado con `Object.freeze()`.
    *   **Sanitización Anti-XSS**: Escapado integral de todos los campos en el DOM.
    *   **Matriz de Cumplimiento**: Documentada en [`MATRIZ_CUMPLIMIENTO_ISO_SOC2.md`](MATRIZ_CUMPLIMIENTO_ISO_SOC2.md).
*   **Mapa Visual Interactivo de Emergencia (`Archify`)**: Diagrama interactivo autónomo ([`APP/mapa-recuperacion.html`](APP/mapa-recuperacion.html)) con animaciones y 4 carrileras de contingencia.
*   **Cifrado Local Blindado (Web Crypto API)**: Todo el inventario se cifra con AES-256-GCM y PBKDF2 (210.000 iteraciones) / Argon2id. La clave de sesión vive exclusivamente en RAM con la directiva `extractable: false`.
*   **Modo Familiar (Solo Lectura)**: Interfaz protegida para beneficiarios sin riesgo de borrado o alteración accidental de datos.
*   **Exportación a PDF Notarial**: Generación de "Documento Maestro" A4 con salto de página inteligente listo para imprimir y archivar legalmente.
*   **Auditoría de Integridad SHA-256**: Detección de degradación magnética de datos (*bit-rot*) con verificador interactivo en 1 clic.

---

## 📁 Estructura del Proyecto

*   **`APP/`**: Motor lógico y de presentación modular (`core/`, `modules/`), Service Worker y librerías offline.
*   **`START/`**: Scripts de arranque y sincronización de contingencia (`sincronizar_drive.ps1`).
*   **`TOOLS/`**: Utilidades complementarias de cifrado físico (Picocrypt).
*   **`MATRIZ_CUMPLIMIENTO_ISO_SOC2.md`**: Ficha técnica de auditoría y controles normativos.
*   **`DOCUMENTACION_MAESTRA.md`**: Manual técnico exhaustivo del proyecto.
*   **`CHANGELOG.md`**: Historial detallado de versiones y mejoras.

---

## ⚙️ Puesta en Marcha

1.  Descarga este repositorio en tu ordenador o USB de seguridad.
2.  Haz doble clic en **`inicio.html`** (en la raíz) para abrir la bóveda en tu navegador sin conexión a internet.
