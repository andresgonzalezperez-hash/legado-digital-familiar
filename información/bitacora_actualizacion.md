# BitÃ¡cora de ActualizaciÃ³n - Legado Digital Familiar

Este archivo registra cronolÃ³gicamente los pasos dados en el desarrollo del proyecto, asegurando la trazabilidad de los cambios tanto en local como en la copia sincronizada de Google Drive.

---

## [24/05/2026] - InicializaciÃ³n y CreaciÃ³n del Sistema

### 1. InvestigaciÃ³n y PlanificaciÃ³n
- Lectura y anÃ¡lisis del documento original de directrices: [manual_legado_digital_familiar.pdf](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/manual_legado_digital_familiar.pdf).
- CreaciÃ³n del plan de implementaciÃ³n y lista de tareas correspondientes.

### 2. Estructura de Scripts y AutomatizaciÃ³n
- **Script de sincronizaciÃ³n**: Creado [sincronizar_drive.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/sincronizar_drive.ps1) para automatizar el mirroring mediante `robocopy` a la carpeta de Google Drive `G:\Mi unidad\LEGADO DIGITAL`.
- **Script de inventario de apps**: Creado [extraer_apps.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/extraer_apps.ps1) para listar mediante ADB paquetes instalados de terceros y darles formato en un CSV.
- **Script de carpetas Cryptomator**: Creado [crear_estructura.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/crear_estructura.ps1) para configurar los 11 directorios documentales cifrados y generar el archivo `LEEME_PRIMERO.txt`.

### 3. Desarrollo de la AplicaciÃ³n Web Local (Dashboard)
- **Interfaz (HTML)**: Creado [index.html](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/index.html) que incluye las pestaÃ±as interactivas de Roadmap/Dashboard, GestiÃ³n de Inventario, Checklist por semanas, Generador del Documento Maestro e instrucciones tÃ©cnicas.
- **DiseÃ±o (CSS)**: Creado [index.css](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/index.css) con paleta oscura premium, efectos glassmorphic y reglas de visualizaciÃ³n de impresiÃ³n optimizadas para papel A4.
- **LÃ³gica (JS)**: Creado [app.js](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/app.js) para controlar la interactividad, almacenamiento persistente en `localStorage`, importaciÃ³n/exportaciÃ³n JSON y la vista de impresiÃ³n dinÃ¡mica del Documento Maestro.

### 4. SincronizaciÃ³n
- VerificaciÃ³n exitosa del volumen `G:` en Google Drive y localizaciÃ³n de la carpeta destino `G:\Mi unidad\LEGADO DIGITAL`.
- EjecuciÃ³n de la sincronizaciÃ³n inicial de todos los recursos (incluido el PDF original).
- Registro del progreso actual: Capas 1, 2 y 3 preparadas y listas para la fase de configuraciÃ³n final por parte del usuario.

### 5. AclaraciÃ³n del Flujo de Trabajo Multidispositivo
- AÃ±adida guÃ­a sobre el uso de la exportaciÃ³n/importaciÃ³n de archivos JSON para mantener sincronizados los datos entre el ordenador principal (desktop) y el portÃ¡til de campo sin comprometer la seguridad ni enviar datos a internet.

### 6. CorrecciÃ³n de la LÃ­nea Temporal (Fase 1 DinÃ¡mica)
- Corregido el elemento visual de la "Fase 1" en el Dashboard. Anteriormente estaba marcado como completado de manera estÃ¡tica. Ahora responde dinÃ¡micamente al estado de la tarea del checklist correspondiente ("Crear el inventario inicial...").

### 7. Soporte para Perfiles (AndrÃ©s y Maeva)
- **Modal de entrada**: Modificado el campo de texto libre "Titular" por un selector desplegable con las opciones `AndrÃ©s`, `Maeva` y `Compartido`.
- **Filtros interactivos**: Implementado un nuevo grupo de filtros en la secciÃ³n de Inventario para filtrar las cuentas mostradas segÃºn el titular seleccionado.
- **Mapeo de datos**: Actualizado el listado predeterminado de ejemplos para distribuir cuentas reales de ejemplo entre AndrÃ©s, Maeva y cuentas compartidas de la pareja.
- **Resumen en Dashboard**: AÃ±adida una secciÃ³n visual en la tarjeta de resumen para reflejar el conteo de activos de AndrÃ©s, Maeva y compartidos por separado.

## [25/05/2026] - RefactorizaciÃ³n Modular y Mejoras UI

### 8. ImplementaciÃ³n del Scaffold y RefactorizaciÃ³n JS
- **Directorios**: CreaciÃ³n de la estructura base (`APP`, `DATA`, `START`, `TOOLS`, etc.) y reubicaciÃ³n de todos los archivos desde la carpeta `/informaciÃ³n`.
- **ModularizaciÃ³n**: DivisiÃ³n del archivo monolÃ­tico `app.js` en mÃºltiples submÃ³dulos (`state.js`, `router.js`, `dashboard.js`, `inventario.js`, `print.js`, `checklist.js`, `export-import.js`).
- **Hotfix Offline**: Se revirtiÃ³ el uso de ES Modules (`type="module"`) por carga secuencial de scripts globales en `index.html` para permitir la ejecuciÃ³n nativa offline desde `file://` sin problemas de CORS.
- **Contratos de Datos**: ExtracciÃ³n de datos en crudo a archivos JSON en `/DATA/`.

### 9. Mejoras en la Barra Lateral
- **Selector de Nube**: Reemplazo del bloque estÃ¡tico "GOOGLE DRIVE" por un selector interactivo de proveedor de nube (Google Drive, OneDrive, Dropbox, Local, Nextcloud).
- **Nuevos Enlaces**: AdiciÃ³n de los enlaces a las secciones "FAQs" y "Disclaimer" justo encima del estado de sincronizaciÃ³n.

### 10. IntegraciÃ³n de Textos Legales y Ayuda
- **FAQs**: CreaciÃ³n de una baterÃ­a de preguntas frecuentes resolviendo dudas sobre arquitectura offline, seguridad y KeePassXC/Cryptomator.
- **Disclaimers**: IntegraciÃ³n directa en la interfaz de los textos de limitaciÃ³n de responsabilidad provistos en el prompt original.
- **UI**: InyecciÃ³n de ambos apartados como pestaÃ±as interactivas tipo "Glassmorphism" en `index.html`.

### 11. Cifrado Web Local (Web Crypto API)
- **Seguridad**: ImplementaciÃ³n de pantalla de bloqueo y cifrado AES-256-GCM nativo del navegador en `app.js` y `crypto.js`.
- **DerivaciÃ³n de Clave**: Uso de PBKDF2 para derivar la clave de encriptaciÃ³n a partir de la contraseÃ±a maestra del usuario.
- **Persistencia Segura**: SustituciÃ³n del guardado en texto plano en localStorage por un Ãºnico objeto `legado_vault` cifrado en base64 con IV aleatorio.
- **Mejoras UX/UI**: AÃ±adidos iconos para mostrar/ocultar contraseÃ±a y campo de confirmaciÃ³n obligatoria exclusivo para la primera configuraciÃ³n. CorrecciÃ³n de superposiciÃ³n del botÃ³n *submit*.

### 12. Fase 6 y 7: Inactividad y Documento Maestro
- **Documento Maestro**: Implementada pestaÃ±a especÃ­fica con un formulario interactivo para autocompletar e imprimir fÃ­sicamente el documento con los datos vitales. Se configurÃ³ CSS `@media print` para asegurar una maquetaciÃ³n profesional en papel A4.
- **Plantilla Inactividad ("Google Antigravity")**: AÃ±adida una nueva tarjeta en la secciÃ³n de Scripts con un texto plantilla de emergencia listo para copiar y pegar en la configuraciÃ³n del Google Inactive Account Manager.

### 13. Arquitectura de Archivos Pesados (PDFs, Escrituras)
- **DecisiÃ³n de DiseÃ±o**: El Dashboard actÃºa como Ã­ndice, inventario y mapa de recuperaciÃ³n, no como gestor documental de archivos pesados. Subir PDFs a un archivo HTML/LocalStorage es ineficiente y limitante para almacenamiento a gran escala.
- **ImplementaciÃ³n (Capa 2)**: Para los documentos fÃ­sicos digitalizados (escrituras, testamentos, pÃ³lizas, DNI) se utiliza la bÃ³veda de **Cryptomator**. Cryptomator monta un disco duro virtual transparente en Windows donde el usuario simplemente arrastra y suelta los PDFs. Estos se encriptan al vuelo y se suben a la nube.
- **InterconexiÃ³n**: El script `crear_estructura.ps1` autogenera la estructura de carpetas (01_Escrituras, 02_Seguros, etc.) dentro del disco de Cryptomator para mantener el orden.

## [26/05/2026] - SeparaciÃ³n de Entornos y FacilitaciÃ³n de Pruebas

### 14. DivisiÃ³n en PRE y PRO y SupresiÃ³n de Cifrado
- **Entornos Separados**: Se ha reestructurado el proyecto completo, moviendo todos los archivos de desarrollo a una nueva carpeta `PRE` y creando una copia exacta independiente en `PRO`.
- **DesactivaciÃ³n de ContraseÃ±a**: Para agilizar el proceso de desarrollo e inserciÃ³n de datos de prueba, se ha eliminado temporalmente el modal de bloqueo en `index.html` y la lÃ³gica AES-GCM en `app.js` y `state.js`.
- **LocalStorage Independiente**: El entorno `PRE` guarda sus datos en plano bajo la clave `legado_vault_pre`, mientras que `PRO` utiliza `legado_vault_pro`, permitiendo probar configuraciones sin cruzar datos.

### 15. RediseÃ±o Responsive (Mobile y Tablet)
- **AdaptaciÃ³n Visual**: Se ha reestructurado el CSS (`index.css`) aÃ±adiendo media queries para anchos menores a 1024px y 768px.
- **Cabecera MÃ³vil y MenÃº Hamburguesa**: En telÃ©fonos, el panel lateral izquierdo (`aside`) se oculta fuera de la pantalla. Se sustituye por una cabecera superior compacta (`mobile-header`) con un botÃ³n "hamburguesa" que despliega el menÃº superponiÃ©ndolo al contenido (`sidebar-overlay`).
- **NavegaciÃ³n Ãgil**: El menÃº se cierra automÃ¡ticamente (`closeMobileMenu()`) al seleccionar una nueva secciÃ³n.
- **DistribuciÃ³n de Columnas**: Las tarjetas del dashboard, listas de tareas y formularios en la vista mÃ³vil se apilan pasando de 3 o 2 columnas a ocupar el 100% del ancho de la pantalla (`grid-column: span 12`).

### 16. IntegraciÃ³n de Asistente IA Local (Offline-First)
- **Motor de Inferencia**: Se ha integrado el ejecutable de **Ollama** de forma 100% portable dentro de la carpeta `TOOLS/OLLAMA_PORTABLE`. Esto evita instalaciones en el sistema anfitriÃ³n y asegura que los modelos de lenguaje (ej. Phi-3) residan y se ejecuten directamente desde el USB.
- **Lanzador Ãnico**: Se ha creado el script `ABRIR_EL_LEGADO.bat` en la raÃ­z del proyecto. Este archivo sirve como puerta de entrada unificada: enciende la IA de forma invisible en segundo plano y abre el Dashboard en el navegador con un solo doble clic.
- **InyecciÃ³n DinÃ¡mica de Contexto**: El mÃ³dulo `ai_chat.js` implementa un chat responsivo en el Dashboard. Cada vez que el usuario hace una pregunta, el sistema inyecta un *System Prompt* robusto y adjunta una copia textual del inventario actual para que la IA disponga del contexto familiar sin comprometer la privacidad (ningÃºn dato sale a internet).

### 17. Estrategia de Almacenamiento de Documentos Pesados (BÃ³veda Documental)
- **Contexto**: El Dashboard en HTML funciona como un "Ãndice Maestro" o mapa del tesoro, pero no estÃ¡ diseÃ±ado para almacenar archivos binarios (PDFs de escrituras, contratos, imÃ¡genes).
- **Estructura Creada**: Se ha formalizado la carpeta `BÃVEDA_DOCUMENTAL` (y equivalente cifrada) estructurada por categorÃ­as (Bancos, Seguros, Inmuebles, Identidad).
- **Flujo de Trabajo**: En el Dashboard, al crear una entrada en el Inventario (ej. "Seguro de Vida Mapfre"), se indica en el campo de Notas o AcciÃ³n: *Ver PDF en BÃVEDA_DOCUMENTAL/Seguros/Mapfre.pdf*. De este modo, la web es Ã¡gil y los archivos pesados quedan organizados en el sistema de archivos del USB.

### Hito 18: Pivot a Buscador Inteligente Offline
**Fecha**: 26 de Mayo de 2026
**Acción**: Se ha eliminado el motor de IA generativa (Ollama y modelos asociados) debido a limitaciones severas de hardware (cuellos de botella en CPU sin GPU dedicada).
**Solución**: Se ha implementado un 'Buscador Inteligente' 100% nativo en Javascript que filtra el inventario instantáneamente en el navegador. Esto recupera 2.5GB de espacio en el USB, mantiene la privacidad estricta (offline) y garantiza compatibilidad con cualquier ordenador antiguo.

### Hito 19: Migración Final a Entorno de Producción (PRO)
**Fecha**: 26 de Mayo de 2026
**Acción**: Tras las intensas pruebas en el entorno PRE (incluyendo la eliminación de la IA por limitaciones de CPU y la creación del Buscador Inteligente integrado), el usuario ha aprobado la versión final.
**Solución**: Se ha clonado el entorno PRE exacto al entorno PRO. Se ha sustituido el archivo .bat por un lanzador HTML directo (ENTRAR_AL_LEGADO.html). El entorno PRO ya es la versión definitiva y estable del proyecto, 100% portable y offline.

### Hito 20: Migración a Picocrypt para Bóveda Documental
**Fecha**: 27 de Mayo de 2026
**Acción**: Se detectó un fallo crítico de red local (Error de Sistema 67) con el montaje WebDAV de Cryptomator debido a que el servicio WebClient de Windows suele estar desactivado por defecto. 
**Solución**: Se sustituyó el modelo de bóveda basada en disco virtual por un modelo puramente basado en cifrado de archivos usando **Picocrypt**. Se actualizó el panel web y el modelo del inventario para explicar el uso de archivos .pcv, logrando un sistema verdaderamente 100% portable y agnóstico.

### Hito 21: Integración de Picocrypt y Protocolo Blockchain (Sólo en PRE)
**Fecha**: 24 de Junio de 2026
**Acción**: Resolución de notas pendientes en el entorno de desarrollo PRE mediante la actualización técnica del frontend, guías de usuario y soporte de datos.
**Solución**:
1. **Evaluación de Bóveda**: Se modificó [index.html](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/index.html) y [print.js](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/modules/print.js) para establecer **Picocrypt** como la opción principal recomendada de cifrado sin instalación (resolviendo el Error de Red 67), agregando una comparativa detallada en FAQs con Cryptomator y ZIP AES-256.
2. **Protocolo Blockchain**: Se incorporó en las FAQs una guía interactiva sobre gestión de criptoactivos (hardware wallets, direcciones públicas, multifirma y notarización de hashes en la cadena de bloques para inmutabilidad del legado) sin comprometer llaves offline.
3. **Mapeo de Datos y Checklist**: Se registró un activo de muestra de hardware wallet (`sample-6`) en [state.js](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/core/state.js) e [inventario.json](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/DATA/inventario.json), y se añadió el checkbox `chk-s3-7` para documentar la herencia criptográfica.

### Hito 22: Unificación de Herramientas en la pestaña "Herramientas" (Sólo en PRE)
**Fecha**: 25 de Junio de 2026
# BitÃ¡cora de ActualizaciÃ³n - Legado Digital Familiar

Este archivo registra cronolÃ³gicamente los pasos dados en el desarrollo del proyecto, asegurando la trazabilidad de los cambios tanto en local como en la copia sincronizada de Google Drive.

---

## [24/05/2026] - InicializaciÃ³n y CreaciÃ³n del Sistema

### 1. InvestigaciÃ³n y PlanificaciÃ³n
- Lectura y anÃ¡lisis del documento original de directrices: [manual_legado_digital_familiar.pdf](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/manual_legado_digital_familiar.pdf).
- CreaciÃ³n del plan de implementaciÃ³n y lista de tareas correspondientes.

### 2. Estructura de Scripts y AutomatizaciÃ³n
- **Script de sincronizaciÃ³n**: Creado [sincronizar_drive.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/sincronizar_drive.ps1) para automatizar el mirroring mediante `robocopy` a la carpeta de Google Drive `G:\Mi unidad\LEGADO DIGITAL`.
- **Script de inventario de apps**: Creado [extraer_apps.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/extraer_apps.ps1) para listar mediante ADB paquetes instalados de terceros y darles formato en un CSV.
- **Script de carpetas Cryptomator**: Creado [crear_estructura.ps1](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/crear_estructura.ps1) para configurar los 11 directorios documentales cifrados y generar el archivo `LEEME_PRIMERO.txt`.

### 3. Desarrollo de la AplicaciÃ³n Web Local (Dashboard)
- **Interfaz (HTML)**: Creado [index.html](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/index.html) que incluye las pestaÃ±as interactivas de Roadmap/Dashboard, GestiÃ³n de Inventario, Checklist por semanas, Generador del Documento Maestro e instrucciones tÃ©cnicas.
- **DiseÃ±o (CSS)**: Creado [index.css](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/index.css) con paleta oscura premium, efectos glassmorphic y reglas de visualizaciÃ³n de impresiÃ³n optimizadas para papel A4.
- **LÃ³gica (JS)**: Creado [app.js](file:///c:/Users/Roberta%20Klein/Desktop/LEGADO%20DIGITAL/app.js) para controlar la interactividad, almacenamiento persistente en `localStorage`, importaciÃ³n/exportaciÃ³n JSON y la vista de impresiÃ³n dinÃ¡mica del Documento Maestro.

### 4. SincronizaciÃ³n
- VerificaciÃ³n exitosa del volumen `G:` en Google Drive y localizaciÃ³n de la carpeta destino `G:\Mi unidad\LEGADO DIGITAL`.
- EjecuciÃ³n de la sincronizaciÃ³n inicial de todos los recursos (incluido el PDF original).
- Registro del progreso actual: Capas 1, 2 y 3 preparadas y listas para la fase de configuraciÃ³n final por parte del usuario.

### 5. AclaraciÃ³n del Flujo de Trabajo Multidispositivo
- AÃ±adida guÃ­a sobre el uso de la exportaciÃ³n/importaciÃ³n de archivos JSON para mantener sincronizados los datos entre el ordenador principal (desktop) y el portÃ¡til de campo sin comprometer la seguridad ni enviar datos a internet.

### 6. CorrecciÃ³n de la LÃ­nea Temporal (Fase 1 DinÃ¡mica)
- Corregido el elemento visual de la "Fase 1" en el Dashboard. Anteriormente estaba marcado como completado de manera estÃ¡tica. Ahora responde dinÃ¡micamente al estado de la tarea del checklist correspondiente ("Crear el inventario inicial...").

### 7. Soporte para Perfiles (AndrÃ©s y Maeva)
- **Modal de entrada**: Modificado el campo de texto libre "Titular" por un selector desplegable con las opciones `AndrÃ©s`, `Maeva` y `Compartido`.
- **Filtros interactivos**: Implementado un nuevo grupo de filtros en la secciÃ³n de Inventario para filtrar las cuentas mostradas segÃºn el titular seleccionado.
- **Mapeo de datos**: Actualizado el listado predeterminado de ejemplos para distribuir cuentas reales de ejemplo entre AndrÃ©s, Maeva y cuentas compartidas de la pareja.
- **Resumen en Dashboard**: AÃ±adida una secciÃ³n visual en la tarjeta de resumen para reflejar el conteo de activos de AndrÃ©s, Maeva y compartidos por separado.

## [25/05/2026] - RefactorizaciÃ³n Modular y Mejoras UI

### 8. ImplementaciÃ³n del Scaffold y RefactorizaciÃ³n JS
- **Directorios**: CreaciÃ³n de la estructura base (`APP`, `DATA`, `START`, `TOOLS`, etc.) y reubicaciÃ³n de todos los archivos desde la carpeta `/informaciÃ³n`.
- **ModularizaciÃ³n**: DivisiÃ³n del archivo monolÃ­tico `app.js` en mÃºltiples submÃ³dulos (`state.js`, `router.js`, `dashboard.js`, `inventario.js`, `print.js`, `checklist.js`, `export-import.js`).
- **Hotfix Offline**: Se revirtiÃ³ el uso de ES Modules (`type="module"`) por carga secuencial de scripts globales en `index.html` para permitir la ejecuciÃ³n nativa offline desde `file://` sin problemas de CORS.
- **Contratos de Datos**: ExtracciÃ³n de datos en crudo a archivos JSON en `/DATA/`.

### 9. Mejoras en la Barra Lateral
- **Selector de Nube**: Reemplazo del bloque estÃ¡tico "GOOGLE DRIVE" por un selector interactivo de proveedor de nube (Google Drive, OneDrive, Dropbox, Local, Nextcloud).
- **Nuevos Enlaces**: AdiciÃ³n de los enlaces a las secciones "FAQs" y "Disclaimer" justo encima del estado de sincronizaciÃ³n.

### 10. IntegraciÃ³n de Textos Legales y Ayuda
- **FAQs**: CreaciÃ³n de una baterÃ­a de preguntas frecuentes resolviendo dudas sobre arquitectura offline, seguridad y KeePassXC/Cryptomator.
- **Disclaimers**: IntegraciÃ³n directa en la interfaz de los textos de limitaciÃ³n de responsabilidad provistos en el prompt original.
- **UI**: InyecciÃ³n de ambos apartados como pestaÃ±as interactivas tipo "Glassmorphism" en `index.html`.

### 11. Cifrado Web Local (Web Crypto API)
- **Seguridad**: ImplementaciÃ³n de pantalla de bloqueo y cifrado AES-256-GCM nativo del navegador en `app.js` y `crypto.js`.
- **DerivaciÃ³n de Clave**: Uso de PBKDF2 para derivar la clave de encriptaciÃ³n a partir de la contraseÃ±a maestra del usuario.
- **Persistencia Segura**: SustituciÃ³n del guardado en texto plano en localStorage por un Ãºnico objeto `legado_vault` cifrado en base64 con IV aleatorio.
- **Mejoras UX/UI**: AÃ±adidos iconos para mostrar/ocultar contraseÃ±a y campo de confirmaciÃ³n obligatoria exclusivo para la primera configuraciÃ³n. CorrecciÃ³n de superposiciÃ³n del botÃ³n *submit*.

### 12. Fase 6 y 7: Inactividad y Documento Maestro
- **Documento Maestro**: Implementada pestaÃ±a especÃ­fica con un formulario interactivo para autocompletar e imprimir fÃ­sicamente el documento con los datos vitales. Se configurÃ³ CSS `@media print` para asegurar una maquetaciÃ³n profesional en papel A4.
- **Plantilla Inactividad ("Google Antigravity")**: AÃ±adida una nueva tarjeta en la secciÃ³n de Scripts con un texto plantilla de emergencia listo para copiar y pegar en la configuraciÃ³n del Google Inactive Account Manager.

### 13. Arquitectura de Archivos Pesados (PDFs, Escrituras)
- **DecisiÃ³n de DiseÃ±o**: El Dashboard actÃºa como Ã­ndice, inventario y mapa de recuperaciÃ³n, no como gestor documental de archivos pesados. Subir PDFs a un archivo HTML/LocalStorage es ineficiente y limitante para almacenamiento a gran escala.
- **ImplementaciÃ³n (Capa 2)**: Para los documentos fÃ­sicos digitalizados (escrituras, testamentos, pÃ³lizas, DNI) se utiliza la bÃ³veda de **Cryptomator**. Cryptomator monta un disco duro virtual transparente en Windows donde el usuario simplemente arrastra y suelta los PDFs. Estos se encriptan al vuelo y se suben a la nube.
- **InterconexiÃ³n**: El script `crear_estructura.ps1` autogenera la estructura de carpetas (01_Escrituras, 02_Seguros, etc.) dentro del disco de Cryptomator para mantener el orden.

## [26/05/2026] - SeparaciÃ³n de Entornos y FacilitaciÃ³n de Pruebas

### 14. DivisiÃ³n en PRE y PRO y SupresiÃ³n de Cifrado
- **Entornos Separados**: Se ha reestructurado el proyecto completo, moviendo todos los archivos de desarrollo a una nueva carpeta `PRE` y creando una copia exacta independiente en `PRO`.
- **DesactivaciÃ³n de ContraseÃ±a**: Para agilizar el proceso de desarrollo e inserciÃ³n de datos de prueba, se ha eliminado temporalmente el modal de bloqueo en `index.html` y la lÃ³gica AES-GCM en `app.js` y `state.js`.
- **LocalStorage Independiente**: El entorno `PRE` guarda sus datos en plano bajo la clave `legado_vault_pre`, mientras que `PRO` utiliza `legado_vault_pro`, permitiendo probar configuraciones sin cruzar datos.

### 15. RediseÃ±o Responsive (Mobile y Tablet)
- **AdaptaciÃ³n Visual**: Se ha reestructurado el CSS (`index.css`) aÃ±adiendo media queries para anchos menores a 1024px y 768px.
- **Cabecera MÃ³vil y MenÃº Hamburguesa**: En telÃ©fonos, el panel lateral izquierdo (`aside`) se oculta fuera de la pantalla. Se sustituye por una cabecera superior compacta (`mobile-header`) con un botÃ³n "hamburguesa" que despliega el menÃº superponiÃ©ndolo al contenido (`sidebar-overlay`).
- **NavegaciÃ³n Ã gil**: El menÃº se cierra automÃ¡ticamente (`closeMobileMenu()`) al seleccionar una nueva secciÃ³n.
- **DistribuciÃ³n de Columnas**: Las tarjetas del dashboard, listas de tareas y formularios en la vista mÃ³vil se apilan pasando de 3 o 2 columnas a ocupar el 100% del ancho de la pantalla (`grid-column: span 12`).

### 16. IntegraciÃ³n de Asistente IA Local (Offline-First)
- **Motor de Inferencia**: Se ha integrado el ejecutable de **Ollama** de forma 100% portable dentro de la carpeta `TOOLS/OLLAMA_PORTABLE`. Esto evita instalaciones en el sistema anfitriÃ³n y asegura que los modelos de lenguaje (ej. Phi-3) residan y se ejecuten directamente desde el USB.
- **Lanzador Ãšnico**: Se ha creado el script `ABRIR_EL_LEGADO.bat` en la raÃ­z del proyecto. Este archivo sirve como puerta de entrada unificada: enciende la IA de forma invisible en segundo plano y abre el Dashboard en el navegador con un solo doble clic.
- **InyecciÃ³n DinÃ¡mica de Contexto**: El mÃ³dulo `ai_chat.js` implementa un chat responsivo en el Dashboard. Cada vez que el usuario hace una pregunta, el sistema inyecta un *System Prompt* robusto y adjunta una copia textual del inventario actual para que la IA disponga del contexto familiar sin comprometer la privacidad (ningÃºn dato sale a internet).

### 17. Estrategia de Almacenamiento de Documentos Pesados (BÃ³veda Documental)
- **Contexto**: El Dashboard en HTML funciona como un "Ã ndice Maestro" o mapa del tesoro, pero no estÃ¡ diseÃ±ado para almacenar archivos binarios (PDFs de escrituras, contratos, imÃ¡genes).
- **Estructura Creada**: Se ha formalizado la carpeta `BÃ“VEDA_DOCUMENTAL` (y equivalente cifrada) estructurada por categorÃ­as (Bancos, Seguros, Inmuebles, Identidad).
- **Flujo de Trabajo**: En el Dashboard, al crear una entrada en el Inventario (ej. "Seguro de Vida Mapfre"), se indica en el campo de Notas o AcciÃ³n: *Ver PDF en BÃ“VEDA_DOCUMENTAL/Seguros/Mapfre.pdf*. De este modo, la web es Ã¡gil y los archivos pesados quedan organizados en el sistema de archivos del USB.

### Hito 18: Pivot a Buscador Inteligente Offline
**Fecha**: 26 de Mayo de 2026
**Acción**: Se ha eliminado el motor de IA generativa (Ollama y modelos asociados) debido a limitaciones severas de hardware (cuellos de botella en CPU sin GPU dedicada).
**Solución**: Se ha implementado un 'Buscador Inteligente' 100% nativo en Javascript que filtra el inventario instantáneamente en el navegador. Esto recupera 2.5GB de espacio en el USB, mantiene la privacidad estricta (offline) y garantiza compatibilidad con cualquier ordenador antiguo.

### Hito 19: Migración Final a Entorno de Producción (PRO)
**Fecha**: 26 de Mayo de 2026
**Acción**: Tras las intensas pruebas en el entorno PRE (incluyendo la eliminación de la IA por limitaciones de CPU y la creación del Buscador Inteligente integrado), el usuario ha aprobado la versión final.
**Solución**: Se ha clonado el entorno PRE exacto al entorno PRO. Se ha sustituido el archivo .bat por un lanzador HTML directo (ENTRAR_AL_LEGADO.html). El entorno PRO ya es la versión definitiva y estable del proyecto, 100% portable y offline.

### Hito 20: Migración a Picocrypt para Bóveda Documental
**Fecha**: 27 de Mayo de 2026
**Acción**: Se detectó un fallo crítico de red local (Error de Sistema 67) con el montaje WebDAV de Cryptomator debido a que el servicio WebClient de Windows suele estar desactivado por defecto. 
**Solución**: Se sustituyó el modelo de bóveda basada en disco virtual por un modelo puramente basado en cifrado de archivos usando **Picocrypt**. Se actualizó el panel web y el modelo del inventario para explicar el uso de archivos .pcv, logrando un sistema verdaderamente 100% portable y agnóstico.

### Hito 21: Integración de Picocrypt y Protocolo Blockchain (Sólo en PRE)
**Fecha**: 24 de Junio de 2026
**Acción**: Resolución de notas pendientes en el entorno de desarrollo PRE mediante la actualización técnica del frontend, guías de usuario y soporte de datos.
**Solución**:
1. **Evaluación de Bóveda**: Se modificó [index.html](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/index.html) y [print.js](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/modules/print.js) para establecer **Picocrypt** como la opción principal recomendada de cifrado sin instalación (resolviendo el Error de Red 67), agregando una comparativa detallada en FAQs con Cryptomator y ZIP AES-256.
2. **Protocolo Blockchain**: Se incorporó en las FAQs una guía interactiva sobre gestión de criptoactivos (hardware wallets, direcciones públicas, multifirma y notarización de hashes en la cadena de bloques para inmutabilidad del legado) sin comprometer llaves offline.
3. **Mapeo de Datos y Checklist**: Se registró un activo de muestra de hardware wallet (`sample-6`) en [state.js](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/core/state.js) e [inventario.json](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/DATA/inventario.json), y se añadió el checkbox `chk-s3-7` para documentar la herencia criptográfica.

### Hito 22: Unificación de Herramientas en la pestaña "Herramientas" (Sólo en PRE)
**Fecha**: 25 de Junio de 2026
**Acción**: Limpieza visual de la barra lateral izquierda y consolidación de herramientas portables y scripts técnicos en una única pestaña interactiva.
**Solución**:
1. **Limpieza de la Barra Lateral**: Se retiró el listado estático vertical de "Herramientas" en el menú de navegación de [index.html](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/index.html) para evitar recargar la interfaz.
2. **Consolidación en Pestaña**: Se renombró la pestaña "Scripts & Ayudas" a "Herramientas" y se agregaron las utilidades (KeePassXC, Picocrypt, Bóveda Docs) en forma de tarjetas (`cards`) estilizadas con la opción de copiar sus rutas relativas.
3. **Verificación y Sincronización**: Se depuraron errores de color en los pasos 4 y 6 de la sección de Ayuda (variables CSS inválidas) y se validó el comportamiento responsivo en móviles. Finalmente, se sincronizaron todos los cambios al USB (`E:`).

### Hito 23: Cifrado Criptográfico Completo en Navegador (Sólo en PRE)
**Fecha**: 25 de Junio de 2026
**Acción**: Sustitución del login plano por un flujo de inicialización y almacenamiento cifrado localmente con la Web Crypto API por seguridad.
**Solución**:
1. **Doble Acceso y Rol de Lectura**: Se rediseñó el primer arranque para obligar a configurar dos claves distintas: la Contraseña Maestra (Edición) y la Contraseña Familiar (Solo Lectura) con explicaciones integradas en la interfaz de configuración inicial y botones de alternar visibilidad (ojo 👁️).
2. **Cifrado AES-GCM-256 (Serverless)**: Las claves no se almacenan en texto plano. Se genera una clave maestra de la bóveda (VMK) aleatoria de 256 bits y se encripta dos veces por separado usando claves derivadas (PBKDF2 con sal aleatoria) de ambas contraseñas.
3. **Protección Criptográfica del Inventario**: El inventario de cuentas y checklist se encriptan con la VMK antes de guardarse en `localStorage`. Si un usuario intenta resetear el login mediante la consola, la base de datos local quedará inaccesible ya que es matemáticamente imposible desencriptarla sin la clave maestra original.

### Hito 24: Unificación de Estilos Visuales e Integración de Comunidad en Git
**Fecha**: 25 de Junio de 2026
**Acción**: Homogeneización estética de todas las pestañas (Bóveda, Herramientas, Ayuda y FAQ) y configuración del repositorio en GitHub con políticas estándar de la comunidad.
**Solución**:
1. **Reestructuración de HTML y Grid**: Refactorizados los componentes de Bóveda Documental, Preguntas Frecuentes (FAQ), Ayuda de Contingencia y Avisos Legales en `index.html` para sustituir el uso de divs con paddings y paneles de vidrio individuales por el estándar común de `section` con cabecera de sección, contenedores de cuadrícula (`.grid-container`) y tarjetas estructuradas (`.card`). Esto alinea la cuadrícula de forma limpia en todos los dispositivos y corrige los desfases de espaciado.
2. **Ayuda Multidispositivo**: Añadida una nota técnica bajo el Paso 6 de la Ayuda explicando cómo importar un backup de datos en ordenadores nuevos para evitar confusiones con bases de datos locales vacías.
3. **Repositorio Comunitario**: Desplegados todos los archivos verificados a PRO y creados los archivos estándar de comunidad en la raíz del repositorio de producción: `LICENSE` (GPL-3.0), `CODE_OF_CONDUCT.md` y `SECURITY.md`. Todo sincronizado y subido a GitHub.

### Hito 25: Unificación a Picocrypt como Herramienta Única de Cifrado (Sólo en PRE)
**Fecha**: 25 de Junio de 2026
**Acción**: Simplificación técnica del sistema eliminando referencias a Cryptomator para unificar todo bajo una única herramienta (Picocrypt).
**Solución**:
1. **Simplificación en Ayuda y Bóveda**: Se eliminó del archivo [index.html](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/index.html) toda referencia a opciones alternativas de cifrado mediante discos virtuales (Cryptomator) en el Paso 5, Bóveda, FAQs, y advertencias del sistema.
2. **Actualización de Scripts y Rutas**: Actualizado [crear_estructura.ps1](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/TOOLS/crear_estructura.ps1) y los inputs de ejemplo del Inventario para reflejar únicamente el uso del directorio de Bóveda y contenedores individuales de Picocrypt (.pcv).
3. **Coherencia Interna**: Ajustados los checklist de la Semana 2 y los comentarios de [dashboard.js](file:///c:/Users/andre/Desktop/PROYECTO%20LEGADO%20DIGITAL%20-%20FINAL/PRE/APP/modules/dashboard.js) para referenciar únicamente Picocrypt.

### Hito 26: Integración de Repositorios de Skills Antigravity y Hoja de Ruta Gradual (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Vinculación de la biblioteca centralizada de habilidades (*skills*) descargada en Google Drive (`G:\Mi unidad\Antigravity Repos`) y establecimiento del plan prioritario de evolución del proyecto.
**Hoja de Ruta Ordenada (Criterio de Ejecución)**:
1. **Fase 1 (Seguridad y Cifrado)**: Auditar el módulo de encriptación del navegador (`APP/core/crypto.js` y `state.js`) con las habilidades `security-auditor` y `frontend-security-coder` para evitar fugas de memoria o XSS en la clave maestra.
2. **Fase 2 (Interfaz y Usabilidad Familiar)**: Rediseñar la experiencia visual e interactiva del Dashboard (`APP/modules/dashboard.js` y `index.css`) con las habilidades `ui-ux-design` y `frontend-dev-guidelines`.
3. **Fase 3 (Robustez de Datos)**: Implementar validación estricta y tests de integridad sobre la exportación/importación JSON (`APP/modules/export-import.js` y `DATA/`) usando `code-quality` y `data-validation`.
4. **Fase 4 (Automatización y Guías)**: Optimizar los scripts de respaldo PowerShell (`START/sincronizar_drive.ps1`) y perfeccionar el manual de usuario con `technical-writing`.
**Estado**: Fase 1 completada.

### Hito 27: Ejecución de la Fase 1 de Auditoría de Seguridad y Cifrado (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Implementación de mejoras de seguridad derivadas de las habilidades `security-auditor` y `frontend-security-coder`.
**Mejoras Aplicadas**:
1. **Refuerzo Criptográfico PBKDF2**: Elevadas las iteraciones de PBKDF2 de 100.000 a **210.000** en `APP/core/crypto.js` para aumentar la resistencia frente a ataques de fuerza bruta en procesadores modernos.
2. **Prevención de Desbordamiento en Base64**: Optimizado el método `bufferToBase64` mediante procesamiento por bloques de 32KB (`subarray`), eliminando riesgos de *RangeError: Maximum call stack size exceeded* en datos voluminosos.
3. **Protección Anti-XSS y Escape de Atributos**: Reforzada la función `escapeHtml` en `APP/core/helpers.js` para forzar la coerción a texto (`String`), y añadida la función `escapeJsAttr` para sanitizar atributos dentro de invocaciones inline como `editEntry(id)` y `deleteEntry(id)` en `APP/modules/inventario.js`.
4. **Limpieza de Memoria Sensible en Logout**: Actualizada la función `backToMainMenu()` en `APP/app.js` para vaciar los arreglos of inventario y estado en memoria (`state.inventory` y `state.checklistState`) inmediatamente al cerrar sesión.

### Hito 28: Ejecución de la Fase 2 de Rediseño de Interfaz y Usabilidad UI/UX (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Implementación de optimizaciones visuales y de accesibilidad basadas en las habilidades `ui-ux-design` y `frontend-dev-guidelines`.
**Mejoras Aplicadas**:
1. **Accesibilidad ARIA en Progreso Global**: Incorporados atributos ARIA (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) en la barra de progreso del Dashboard (`APP/modules/dashboard.js`) para lectura clara por lectores de pantalla.
2. **Efectos Micro-interactivos Glassmorphic**: Añadidas transiciones suaves (`transition`, `transform: translateY(-2px)`, `box-shadow`) en tarjetas (`.card`, `.summary-card`) y filas de tabla (`tbody tr:hover`) en `APP/index.css`.
3. **Foco Accesible Teclado**: Configurados estilos de enfoque `:focus-visible` con anillos visuales legibles para botones primarios, secundarios y enlaces de navegación.

### Hito 29: Ejecución de la Fase 3 de Robustez de Datos y Exportación/Importación (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Refactorización del módulo de migración e integridad de datos basada en las habilidades `code-quality` y `data-validation`.
**Mejoras Aplicadas**:
1. **Validación Estricta de Esquemas JSON**: Implementada la función `validateImportedData` en `APP/modules/export-import.js` para comprobar tipos, estructuras y sanear campos obligatorios en listas de inventario y objetos de checklist antes de guardarlos.
2. **Exportación mediante Blob URL**: Sustituida la descarga por URI `data:` por objetos `Blob` nativos con revocación automática (`URL.createObjectURL` y `URL.revokeObjectURL`) para permitir copias de seguridad de cualquier volumen sin restricciones de URL.
3. **Normalización del Inventario de Muestra**: Corregido el mapeo de categorías en `DATA/inventario.json` alineando la etiqueta `Correos` con la categoría principal `Principales`.

### Hito 30: Ejecución de la Fase 4 de Automatización y Portabilidad (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Refactorización de scripts de automatización basada en las habilidades `powershell-scripting` y `technical-writing`.
**Mejoras Aplicadas**:
1. **Resolución Dinámica de Rutas Portables**: Eliminada la ruta cableada estática de usuario en `START/sincronizar_drive.ps1`, implementando resolución automática mediante `(Resolve-Path "$PSScriptRoot\..").Path`.
2. **Detección Flexible de Google Drive**: Añadido soporte de fallback automático para detectar Google Drive tanto en volumen directo (`G:\`) como en rutas locales bajo el perfil del usuario (`$env:USERPROFILE\Google Drive`).
3. **Validación Completa de la Hoja de Ruta**: Finalizadas con éxito las 4 fases de mejora (Seguridad, UI/UX, Robustez de Datos y Automatización) en el entorno `PRE/`.

### Hito 31: Función de Restablecimiento de Contraseñas a Cero (Sólo en PRE)
**Fecha**: 16 de Septiembre de 2026
**Acción**: Integración de la función `resetCredentialsAndSetup()` en `APP/app.js` y adición del botón *"Restablecer Contraseñas y Empezar de Cero"* en el panel inicial de `APP/index.html`.
**Solución**: Permite limpiar las claves criptográficas derivadas anteriores (`legado_vmk_maestra`, `legado_vmk_familiar`, `legado_salt`) para reiniciar el flujo de primer arranque y permitir al usuario crear sus nuevas contraseñas desde cero con el nuevo nivel de cifrado.
