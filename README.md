# 🛡️ Plantilla de Legado Digital Familiar (Offline-First)

Este proyecto es una plantilla de código abierto diseñada para ayudarte a organizar tu legado digital, inventario de activos y protocolos de emergencia familiares de forma 100% privada, offline y local.

> [!WARNING]
> **ADVERTENCIA DE SEGURIDAD CRÍTICA:**
> Este repositorio incluye un archivo `.gitignore` configurado. **NUNCA subas tus contraseñas reales, frases semilla de criptomonedas, bases de datos (.kdbx) ni PDFs personales a GitHub**. Este código debe ser utilizado únicamente como plantilla local en tu ordenador o USB privado.

---

## ⚙️ ¿Cómo funciona?

El sistema está diseñado bajo una arquitectura híbrida física/digital:
1.  **Guía Visual Interactiva**: Un panel HTML local (`index.html`) que sirve como mapa de ruta para tus beneficiarios.
2.  **Cero Dependencias en la Nube**: Las contraseñas se almacenan localmente con **KeePassXC** y los documentos se cifran con **Picocrypt** de forma totalmente desconectada de internet.
3.  **Manual Físico**: Instrucciones preparadas para imprimirse en papel y guardarse en un sobre de seguridad con la clave maestra manuscrita.

---

## 📂 Estructura del Proyecto

*   **`PRE/`**: Entorno de desarrollo y pruebas. Se utiliza para validar cambios de diseño o nuevos módulos. Tiene desactivada la pantalla de bloqueo.
*   **`PRO/`**: Entorno de producción estable y limpio para el uso real de la familia.
*   **`TOOLS/`**: Carpeta destinada a alojar los ejecutables portables oficiales (como `Picocrypt.exe` o `KeePassXC.exe`), los cuales no se incluyen en este repositorio por seguridad.

---

## 🚀 Puesta en Marcha

Para iniciar el sistema en cualquier ordenador:
1.  Introduce el USB de contingencia o abre la carpeta descargada localmente.
2.  Haz doble clic en **`inicio.html`** (en la raíz de la carpeta) para abrir el cuadro de mando en tu navegador.
3.  Utiliza la sección de **Ayuda!** ante cualquier contingencia de recuperación.

---

## ⚖️ Licencia y Exención de Responsabilidad

Este proyecto se distribuye bajo la **Licencia MIT**, lo que significa que eres libre de usar, modificar y distribuir el código de forma gratuita y para cualquier fin, siempre que mantengas la atribución de autoría original. No obstante, el software se proporciona "tal cual", sin garantías de ningún tipo; el autor se exime de cualquier responsabilidad legal o técnica derivada de pérdidas de información, olvido de contraseñas maestras o fallos en las herramientas recomendadas.
