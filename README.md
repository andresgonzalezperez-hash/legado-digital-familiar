# 🛡️ Plantilla de Legado Digital Familiar (Offline-First)

Este proyecto es una plantilla de código abierto diseñada para ayudarte a organizar tu legado digital, inventario de activos y protocolos de emergencia familiares de forma 100% privada, offline y local.

> [!WARNING]
> **ADVERTENCIA DE SEGURIDAD CRÍTICA:**
> Este repositorio incluye un archivo `.gitignore` configurado. **NUNCA subas tus contraseñas reales, frases semilla de criptomonedas, bases de datos (.kdbx) ni PDFs personales a GitHub**. Este código debe ser utilizado únicamente como plantilla local en tu ordenador o USB privado.

---

## 🚀 Características Principales (v1.1.0)

*   **Cifrado Local (Web Crypto API)**: Todo el inventario se cifra matemáticamente en tu navegador (AES-256-GCM y PBKDF2). Los datos nunca tocan internet.
*   **PWA Offline**: Se instala como aplicación de escritorio independiente y funciona al 100% sin conexión a la red.
*   **Modo Familiar (Solo Lectura)**: Interfaz simplificada a prueba de fallos para que los beneficiarios puedan leer la información sin riesgo a borrarla accidentalmente.
*   **Exportación a PDF**: Generación automatizada de un "Documento Maestro" formal listo para imprimir y guardar en la caja fuerte.
*   **Auditoría Anti-Degradación**: Cálculo de huellas criptográficas (Hash SHA-256) de los documentos físicos para garantizar que no han sido alterados con los años.

---

## 📁 Estructura del Proyecto

*   **`APP/`**: Contiene el motor lógico, la interfaz de usuario dividida en módulos (`core/` y `modules/`), el Service Worker y las librerías offline.
*   **`START/`**: Scripts de conveniencia (por ejemplo, utilidades de automatización).
*   **`TOOLS/`**: Directorio pensado para alojar tus binarios de cifrado (Picocrypt, KeePassXC).

---

## ⚙️ Puesta en Marcha

1.  Descarga este repositorio en tu equipo o USB de seguridad.
2.  Haz doble clic en **`inicio.html`** (en la raíz) para abrir el cuadro de mando en tu navegador.
3.  *(Opcional)*: Instala la aplicación (PWA) pulsando el icono de instalación en la barra de direcciones de Chrome o Edge.

---

## ⚖️ Licencia y Exención de Responsabilidad

Este proyecto se distribuye bajo la **Licencia MIT**, lo que significa que eres libre de usar, modificar y distribuir el código de forma gratuita y para cualquier fin, siempre que mantengas la atribución de autoría original. No obstante, el software se proporciona "tal cual", sin garantías de ningún tipo; el autor se exime de cualquier responsabilidad legal o técnica derivada de pérdidas de información, olvido de contraseñas maestras o fallos en las herramientas recomendadas.
