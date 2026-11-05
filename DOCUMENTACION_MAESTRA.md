# 🛡️ Legado Digital Familiar: Documentación Maestra del Proyecto
> **Versión**: 1.4.0 (Edición Hardened Pure HTML — Certificación y Controles ISO/IEC 27001, ISO/IEC 27701 & SOC 2 Type II)  
> **Filosofía**: 100% Offline-First · Soberanía de Datos · Cero Dependencia en la Nube · Pure Web W3C  
> **Licencia**: MIT  

---

## 📌 1. Resumen Ejecutivo y Misión

El **Legado Digital Familiar** es una infraestructura de contingencia y custodia de patrimonio digital diseñada para resolver el problema de la pérdida de activos, cuentas bancarias, seguros y credenciales críticas en caso de fallecimiento, incapacidad o emergencia sobrevenida del titular.

A diferencia de los gestores comerciales en la nube (1Password, Bitwarden, etc.) que dependen de servidores remotos, suscripciones recurrentes y políticas de recuperación de cuentas externas:
* **Funciona 100% desconectado de internet (Modo Avión / Air-gapped)**.
* **Cero servidores propietarios**: Los datos nunca viajan por redes públicas ni residen en bases de datos de terceros.
* **Estándar Web Puro Inmortal (W3C)**: No requiere instalación ni aplicaciones nativas compiladas (cero dependencias de APK o tiendas de apps). Se ejecuta directamente desde un **Pendrive USB Notarial** en cualquier navegador de cualquier dispositivo (Windows, Mac, Linux, Android, iOS).

---

## 🏷️ Historial de Versiones Oficiales

| Versión | Fecha | Resumen de Cambios Clave |
| :--- | :--- | :--- |
| **`v1.4.0`** | **05/11/2026** | **Hardening Normativo ISO 27001, ISO 27701 & SOC 2 Type II**: Inyección de CSP hermética (`connect-src 'none'`), zeroización activa en memoria RAM, sellado inmutable `Object.freeze(Crypto)`, sanitización anti-XSS y elaboración de la matriz formal de cumplimiento. Retirada de la APK para consolidar la arquitectura 100% Pure HTML W3C. |
| **`v1.3.0`** | **03/11/2026** | **Mapa Archify & Modernización UI/UX**: Incorporación del diagrama interactivo de contingencia familiar (`APP/mapa-recuperacion.html`), sustitución de `alert()` por diálogos modales nativos `<dialog>` y notificaciones Toast, View Transitions API y backup a Google Drive. |
| **`v1.2.0`** | **16/10/2026** | **Blindaje Criptográfico en RAM**: Eliminación de claves estáticas intermedias en `sessionStorage`, aislamiento de clave maestra con `extractable: false`, copias de seguridad cifradas con AES-256-GCM y verificador activo de integridad SHA-256 en tiempo real. |
| **`v1.1.0`** | **07/10/2026** | **PWA Offline & PDF Notarial**: Soporte de instalación local con Service Worker y manifiesto web, cálculo de firmas hash y exportación A4 para custodia notarial. |
| **`v1.0.0`** | **24/05/2026** | **Lanzamiento Inicial**: Bóveda offline-first en HTML/CSS/JS con cifrado en cliente, inventario de activos y checklist familiar. |

---

## 🏗️ 2. Arquitectura Técnica y Modelo de Seguridad

```
                             [ TITULAR / USUARIO ]
                                       │
                                       ▼
                         [ PENDRIEVE USB FÍSICO NOTARIAL ]
                         inicio.html / START/iniciar_legado.bat
                         (Navegador Offline W3C Estándar)
                                       │
                                       ▼
                     ┌───────────────────────────────────┐
                     │     MOTOR LÓGICO Y CRIPTOGRAFÍA   │
                     │  Web Crypto API + Argon2 / PBKDF2 │
                     └─────────────────┬─────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        ▼                              ▼                              ▼
 [ BÓVEDA CIFRADA ]           [ AUDITORÍA SHA-256 ]         [ DOCUMENTO MAESTRO ]
  AES-256-GCM en RAM           Integridad Bit-Rot             PDF Notarial A4
 (extractable: false)         Verificación en 1 clic         Listo para Imprimir
```

### 2.1. Criptografía de Grado Militar (Web Crypto API)
* **Derivación de Clave Maestra**: Se utiliza PBKDF2 (210.000 iteraciones con sal criptográfica única de 16 bytes) y compatibilidad con **Argon2id** (64 MB de memoria y 3 iteraciones) para neutralizar ataques de fuerza bruta asistidos por GPUs o ASICs.
* **Cifrado Simétrico**: Algoritmo **AES-256-GCM** con Vector de Inicialización (IV) de 12 bytes aleatorio para cada operación de guardado y exportación.
* **Aislamiento en Memoria**: La clave de sesión descifrada (`CryptoKey`) se genera con la directiva `extractable: false` y reside únicamente en la memoria volátil (RAM). Al cerrar la pestaña o bloquear la bóveda, se ejecuta una rutina de **Zeroización** (`crypto.getRandomValues`) que destruye los buffers en memoria.

### 2.2. Verificación Activa de Integridad (SHA-256)
Las memorias flash (USBs) pueden sufrir degradación magnética o silenciosa (*bit-rot*) con los años. El sistema calcula y almacena la firma SHA-256 de cada archivo o contenedor `.pcv` (Picocrypt). 
Desde la interfaz, el botón **`🔒 Firmado (Verificar)`** audita el archivo en tiempo real y confirma que ni un solo bit ha sido alterado.

---

## 🏛️ 3. Marco de Cumplimiento: ISO 27001, ISO 27701 & SOC 2 Type II

La versión 1.4.0 ha sido sometida a un riguroso proceso de **Hardening** documentado en [`MATRIZ_CUMPLIMIENTO_ISO_SOC2.md`](MATRIZ_CUMPLIMIENTO_ISO_SOC2.md):

1. **Content Security Policy (CSP) Hermética**:
   Directiva en cabecera `<meta>` que prohíbe cualquier conexión externa (`connect-src 'none'`), bloqueando de raíz intentos de fuga de información o telemetría.
2. **Sanitización Estricta Anti-XSS**:
   Todo dato en el DOM se escapa mediante `escapeHtml()` y sanitizadores de atributos antes de su inserción en pantalla.
3. **Inmutabilidad de Objetos (`Object.freeze`)**:
   El objeto criptográfico `Crypto` y el motor de estado se sellan en tiempo de ejecución, impidiendo que extensiones maliciosas instaladas en el navegador del usuario puedan interceptar llamadas.
4. **Zeroización de RAM**:
   Destrucción activa de buffers de claves y contraseñas al pulsar "Cerrar Bóveda" o expirar la sesión por inactividad.

---

## 🗺️ 4. Protocolo de Recuperación para Herederos

El sistema cuenta con un **Mapa Visual de Emergencia** (`APP/mapa-recuperacion.html`), generado con la skill *Archify*, que organiza el protocolo en 4 carrileras secuenciales:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  CARRILERA 1    │ ──> │  CARRILERA 2    │ ──> │  CARRILERA 3    │ ──> │  CARRILERA 4    │
│ Acceso Físico   │     │ Desbloqueo USB  │     │ Auditoría Hash  │     │ Ejecución Final │
│ y 2FA Notarial  │     │ Bóveda Offline  │     │ Contingencia GD │     │ Bancos/Cripto   │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **Modo Familiar (Solo Lectura)**: Al abrir la aplicación, el usuario puede seleccionar *"Soy Familiar / Beneficiario"*. La interfaz oculta los botones de edición y eliminación para evitar accidentes, permitiendo consultar el inventario, leer las directrices de emergencia y verificar las firmas.
2. **Modo Titular (Gestión Completa)**: Requiere la contraseña maestra para desbloquear el inventario, añadir o editar activos, cambiar llaves criptográficas y generar respaldos.
3. **Documento Notarial Maestro (PDF)**: Con un solo clic se genera un informe A4 de alta resolución (`modules/pdf-generator.js`) con salto de página inteligente (`break-inside: avoid`), listo para imprimir y archivar legalmente en la notaría o caja fuerte.

---

## ☁️ 5. Contingencia en la Nube y Homelab

Aunque el sistema es 100% offline, contempla una estrategia de redundancia pasiva:
* **Sincronización Cifrada con Google Drive (`START/sincronizar_drive.ps1`)**: Recolecta únicamente los archivos `legado_backup_cifrado_*.json` (cifrados con AES-256 antes de salir de la máquina) y los sincroniza en la nube como copia de seguridad ante incendio o pérdida física del USB.
* **Monitorización en Glance Dashboard (Puerto `8081`)**: El Homelab local dispone de un widget y acceso directo oficial apuntando a `http://127.0.0.1:8095`.

---

## 🎨 6. Estándar de Diseño: High-Craft UI/UX

El proyecto incorpora la skill nativa **`craft-ui-ux`**, que rechaza el diseño genérico de plantillas y aplica los estándares visuales de herramientas de primer nivel (Linear, Stripe, Raycast):
* **Modo Oscuro Profundo (Obsidian)**: Fondos `#090D16` con bordes sutiles translúcidos y sombras multicapa difusas.
* **Simulador de Prototipos (`MOCKUP_SHOWCASE.html`)**: Permite alternar en tiempo real entre vista Web Desktop (1280px) y vista App Compacta (414px), con 5 pantallas funcionales (Dashboard, Inventario, Protocolo Notarial, Respaldos Físicos y Ajustes).

---

## 📂 7. Árbol de Directorios del Proyecto

```
C:\PROYECTOS\legado-digital-familiar\
├── inicio.html                     # Lanzador web principal para navegadores
├── AGENTS.md                       # Ficha técnica de operaciones y asignación de puertos
├── README.md                       # Guía de inicio rápido para el repositorio público
├── DOCUMENTACION_MAESTRA.md        # Documentación técnica completa (este archivo)
├── MATRIZ_CUMPLIMIENTO_ISO_SOC2.md # Matriz formal de controles ISO 27001, 27701 y SOC 2
├── .gitignore                      # Reglas estrictas: prohíbe ejecutables, binarios y backups
│
├── APP/                            # Núcleo de la Aplicación Web (100% Offline)
│   ├── index.html                  # Punto de entrada con CSP hermética integrada
│   ├── index.css                   # Sistema de diseño con variables y temas
│   ├── app.js                      # Orquestador del ciclo de vida y zeroización en RAM
│   ├── manifest.json               # Manifiesto PWA para instalación de escritorio
│   ├── sw.js                       # Service Worker para caché offline total
│   ├── mapa-recuperacion.html      # Diagrama interactivo de contingencia (Archify)
│   ├── mockup-showcase.html        # Simulador interactivo de prototipos (Craft UI)
│   ├── core/                       # Módulos de infraestructura lógica
│   │   ├── crypto.js               # Web Crypto API: Zeroización, AES-256-GCM, Object.freeze
│   │   ├── state.js                # Gestión reactiva de la bóveda en memoria
│   │   ├── router.js               # Enrutamiento SPA con View Transitions API
│   │   ├── helpers.js              # Diálogos modales <dialog>, anti-XSS y alertas Toast
│   │   ├── jspdf.umd.min.js        # Motor offline de generación de PDF
│   │   └── html2canvas.min.js      # Rasterizador de elementos gráficos
│   └── modules/                    # Módulos de negocio
│       ├── inventario.js           # Gestión y verificación SHA-256 de activos
│       ├── dashboard.js            # Cuadro de mando y métricas
│       ├── checklist.js            # Lista de verificación de tareas familiares
│       ├── pdf-generator.js        # Generador del Documento Maestro A4
│       ├── export-import.js        # Exportación e importación de backups cifrados
│       └── print.js                # Renderizado optimizado para impresión
│
├── START/                          # Automatizaciones y Lanzadores
│   ├── iniciar_legado.bat          # Script de arranque en Windows desde USB
│   └── sincronizar_drive.ps1       # Sincronizador de backups cifrados a Google Drive
│
└── TOOLS/                          # Utilidades de Bóveda y Herramientas Locales
    ├── Picocrypt/                  # Herramienta standalone de cifrado de archivos físicos
    ├── crear_estructura.ps1        # Inicializador de carpetas en nuevo pendrive
    ├── extraer_apps.ps1            # Extractor de ejecutables portables
    └── iniciar_ia_usb.bat          # Lanzador auxiliar
```

---

## 🛠️ 8. Comandos Operativos y Mantenimiento

### Arrancar la Aplicación
```powershell
# Opción 1: Apertura directa en navegador (sin servidor, 100% offline)
Start-Process "C:\PROYECTOS\legado-digital-familiar\inicio.html"

# Opción 2: Modo Servidor Local (Puerto 8095)
uv run python -m http.server 8095 --bind 127.0.0.1 --directory "C:\PROYECTOS\legado-digital-familiar\APP"
```

### Auditar Integridad del Código JavaScript
```powershell
uv run --with esprima python -c "import os, esprima; [esprima.parseScript(open(os.path.join(r, f), encoding='utf-8').read()) for r, _, fs in os.walk(r'C:\PROYECTOS\legado-digital-familiar\APP') for f in fs if f.endswith('.js') and not f.endswith('.min.js')]; print('¡Todos los archivos JS son 100% válidos!')"
```

---

## ⚖️ 9. Conclusión y Valor Diferencial

El **Legado Digital Familiar** no es una simple aplicación; es un **sistema de custodia patrimonial autónomo e inmortal**. Al sustentarse exclusivamente en los estándares web de W3C sin depender de aplicaciones móviles ni servidores externos, garantiza que ninguna actualización de sistema operativo, suscripción cancelada o empresa quebrada impida a tus familiares recuperar lo que les pertenece.
