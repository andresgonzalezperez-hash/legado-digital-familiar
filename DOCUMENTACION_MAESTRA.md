# 🛡️ Legado Digital Familiar: Documentación Maestra del Proyecto
> **Versión**: 1.3.1 (Edición Dual: USB Físico + APK Android Offline)  
> **Filosofía**: 100% Offline-First · Soberanía de Datos · Cero Dependencia en la Nube  
> **Licencia**: MIT  

---

## 📌 1. Resumen Ejecutivo y Misión

El **Legado Digital Familiar** es una infraestructura de contingencia y custodia de patrimonio digital diseñada para resolver el problema de la pérdida de activos, cuentas bancarias, seguros y credenciales críticas en caso de fallecimiento, incapacidad o emergencia sobrevenida del titular.

A diferencia de los gestores comerciales en la nube (1Password, Bitwarden, etc.) que dependen de servidores remotos, suscripciones recurrentes y políticas de recuperación de cuentas externas:
* **Funciona 100% desconectado de internet (Modo Avión / Air-gapped)**.
* **Cero servidores propietarios**: Los datos nunca viajan por redes públicas ni residen en bases de datos de terceros.
* **Sistema Dual de Entrega**: Diseñado para ser ejecutado directamente desde un **Pendrive USB Notarial** en cualquier PC (Windows, Mac, Linux) o como una **Aplicación Nativa en Android (`.apk`)**.

---

## 🏗️ 2. Arquitectura Técnica y Modelo de Seguridad

```
                             [ TITULAR / USUARIO ]
                                       │
                ┌──────────────────────┴──────────────────────┐
                ▼                                             ▼
       [ SISTEMA 1: USB FÍSICO ]                   [ SISTEMA 2: ANDROID APK ]
     inicio.html / iniciar_legado.bat                 LegadoDigital.apk
        (Navegador Offline)                      (WebViewAssetLoader Seguro)
                │                                             │
                └──────────────────────┬──────────────────────┘
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
* **Aislamiento en Memoria**: La clave de sesión descifrada (`CryptoKey`) se genera con la directiva `extractable: false` y reside únicamente en la memoria volátil (RAM). Al cerrar la pestaña o la app, la clave desaparece sin dejar rastro en disco.

### 2.2. Verificación Activa de Integridad (SHA-256)
Las memorias flash (USBs y smartphones) pueden sufrir degradación magnética o silenciosa (*bit-rot*) con los años. El sistema calcula y almacena la firma SHA-256 de cada archivo o contenedor `.pcv` (Picocrypt). 
Desde la interfaz, el botón **`🔒 Firmado (Verificar)`** audita el archivo en tiempo real y confirma que ni un solo bit ha sido alterado.

---

## 🚀 3. El Sistema Dual de Distribución

El proyecto está concebido para poder presentarse y utilizarse en dos formatos complementarios:

### 💾 Sistema A: USB Físico Notarial
* **Uso**: Se guarda en la caja fuerte del hogar o se deposita en una notaría junto con el testamento.
* **Arranque**:
  1. Conectar el pendrive a cualquier ordenador.
  2. Hacer doble clic en `inicio.html` o en `START/iniciar_legado.bat`.
  3. No requiere instalar ningún software ni tener permisos de administrador.

### 📱 Sistema B: Aplicación Nativa Android (`LegadoDigital.apk`)
* **Uso**: Instalada en el smartphone del titular o facilitada en un archivo `.apk` autónomo (6.03 MB) a los beneficiarios.
* **Seguridad de Red**: La aplicación no tiene salida a internet.
* **Tecnología `WebViewAssetLoader`**: Sirve todos los archivos locales bajo el dominio virtual seguro `https://appassets.androidplatform.net/assets/`. Esto permite que el motor Chromium de Android habilite `window.crypto.subtle` de forma nativa en modo offline.
* **Compilación Reproducible**: Mediante el script `TOOLS/compilar_apk.ps1`, se puede recompilar la app en un contenedor Docker en menos de 1 minuto sin ensuciar Windows con gigas de SDKs.

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
3. **Documento Notarial Maestro (PDF)**: Con un solo clic se genera un informe A4 de alta resolución (`modules/pdf-generator.js`) con salto de página inteligente (`break-inside: avoid`), listo para imprimir y archivar legalmente.

---

## ☁️ 5. Contingencia en la Nube y Homelab

Aunque el sistema es 100% offline, contempla una estrategia de redundancia pasiva:
* **Sincronización Cifrada con Google Drive (`START/sincronizar_drive.ps1`)**: Recolecta únicamente los archivos `legado_backup_cifrado_*.json` (cifrados con AES-256 antes de salir de la máquina) y los sincroniza en la nube como copia de seguridad ante incendio o pérdida física del USB.
* **Monitorización en Glance Dashboard (Puerto `8081`)**: El Homelab local dispone de un widget y acceso directo oficial apuntando a `http://127.0.0.1:8095`.

---

## 🎨 6. Estándar de Diseño: High-Craft UI/UX

El proyecto incorpora la skill nativa **`craft-ui-ux`**, que rechaza el diseño genérico de plantillas y aplica los estándares visuales de herramientas de primer nivel (Linear, Stripe, Raycast):
* **Modo Oscuro Profundo (Obsidian)**: Fondos `#090D16` con bordes sutiles translúcidos y sombras multicapa difusas.
* **Simulador de Prototipos (`MOCKUP_SHOWCASE.html`)**: Permite alternar en tiempo real entre:
  * **Vista Web Desktop**: Bento Grid panorámico de 1280px con barra lateral y métricas en tiempo real.
  * **Vista App Compacta**: Marco de smartphone de 414px con *Notch / Dynamic Island* y barra de navegación inferior.
  * **5 Pantallas Funcionales**: Dashboard, Inventario Criptográfico, Protocolo Notarial, Respaldos Físicos y Ajustes de Llaves.
  * **Personalización**: Alternador de modo oscuro/claro y 3 paletas de acento (Esmeralda, Cobalto y Ámbar).

---

## 📂 7. Árbol de Directorios del Proyecto

```
C:\PROYECTOS\legado-digital-familiar\
├── LegadoDigital.apk               # Binario APK físico autónomo para Android (v1.3.1)
├── inicio.html                     # Lanzador web principal para navegadores
├── AGENTS.md                       # Ficha técnica de operaciones y asignación de puertos
├── README.md                       # Guía de inicio rápido para el repositorio público
├── DOCUMENTACION_MAESTRA.md        # Documentación técnica completa (este archivo)
├── .gitignore                      # Reglas estrictas: prohíbe subir secretos y backups
│
├── APP/                            # Núcleo de la Aplicación Web (100% Offline)
│   ├── index.html                  # Punto de entrada de la interfaz de usuario
│   ├── index.css                   # Sistema de diseño con variables y temas
│   ├── app.js                      # Orquestador del ciclo de vida y eventos
│   ├── manifest.json               # Manifiesto PWA / WebAPK con iconos y shortcuts
│   ├── sw.js                       # Service Worker para caché offline total
│   ├── mapa-recuperacion.html      # Diagrama interactivo de contingencia (Archify)
│   ├── mockup-showcase.html        # Simulador interactivo de prototipos (Craft UI)
│   ├── core/                       # Módulos de infraestructura lógica
│   │   ├── crypto.js               # Web Crypto API: Argon2id, PBKDF2, AES-256-GCM
│   │   ├── state.js                # Gestión reactiva de la bóveda en memoria
│   │   ├── router.js               # Enrutamiento SPA con View Transitions API
│   │   ├── helpers.js              # Diálogos modales <dialog> y alertas Toast
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
└── TOOLS/                          # Utilidades y Empaquetado
    ├── LegadoDigital-v1.3.0.apk    # Archivo APK firmado para sideloading
    ├── compilar_apk.ps1            # Autocompilador Docker Android SDK (Gradle 8.6)
    ├── instalar_en_android.ps1     # Instalador guiado de WebAPK por red local
    └── android-app/                # Código fuente del wrapper nativo Android (Java/Gradle)
```

---

## 🛠️ 8. Comandos Operativos y Mantenimiento

### Arrancar la Aplicación
```powershell
# Opción 1: Apertura directa en navegador (sin servidor)
Start-Process "C:\PROYECTOS\legado-digital-familiar\inicio.html"

# Opción 2: Modo Servidor Local / PWA (Puerto 8095)
uv run python -m http.server 8095 --bind 127.0.0.1 --directory "C:\PROYECTOS\legado-digital-familiar\APP"
```

### Recompilar el APK Android
```powershell
powershell -ExecutionPolicy Bypass -File "C:\PROYECTOS\legado-digital-familiar\TOOLS\compilar_apk.ps1"
```

### Auditar Integridad del Código JavaScript
```powershell
uv run --with esprima python -c "import os, esprima; [esprima.parseScript(open(os.path.join(r, f), encoding='utf-8').read()) for r, _, fs in os.walk(r'C:\PROYECTOS\legado-digital-familiar\APP') for f in fs if f.endswith('.js') and not f.endswith('.min.js')]; print('¡Todos los archivos JS son 100% válidos!')"
```

---

## ⚖️ 9. Conclusión y Valor Diferencial

El **Legado Digital Familiar** no es una simple aplicación; es un **sistema de custodia patrimonial autónomo**. Al desacoplarse por completo de la nube y ofrecerse tanto en soporte físico USB como en APK Android nativa, garantiza que ninguna suscripción cancelada, fallo de conectividad o empresa quebrada pueda impedir que tu familia recupere lo que legítimamente le pertenece.
