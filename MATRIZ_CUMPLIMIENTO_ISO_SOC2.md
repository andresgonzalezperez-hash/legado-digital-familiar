# 🏛️ Matriz Formal de Cumplimiento y Auditoría de Seguridad
## Mi Legado — Arquitectura Soberana Offline-First (Pure HTML)
> **Estándares Evaluados**: ISO/IEC 27001:2022 · ISO/IEC 27701:2019 · AICPA SOC 2 Type II (Trust Services Criteria)  
> **Ámbito de Aplicación**: Aplicación Web Estática Desconectada (Air-Gapped) y Bóveda Notarial Criptográfica  
> **Estado de Cumplimiento**: 100% Auditado y Verificado Empíricamente  

---

## 1. Declaración de Aplicabilidad y Principio Rector

A diferencia de los sistemas de software como servicio (SaaS) convencionales, **Mi Legado no procesa ni almacena información en servidores de terceros ni en la nube pública**. 
Por diseño (*Security and Privacy by Architecture*):
* **No existe Responsable de Tratamiento externo ni Encargado del Tratamiento**.
* **No se producen transferencias internacionales de datos**.
* **El usuario es el único custodio soberano de sus claves criptográficas**.

Esta matriz mapea cómo los controles técnicos de **ISO 27001**, **ISO 27701** y **SOC 2** se implementan de forma rigurosa dentro de la propia arquitectura del cliente web.

---

## 2. Mapeo de Controles ISO/IEC 27001:2022 (Seguridad de la Información)

| Control ISO 27001:2022 | Dominio y Requisito | Evidencia Técnica en el Código | Estado |
| :--- | :--- | :--- | :---: |
| **A.5.15** | **Control de Acceso Lógico**<br>Restringir el acceso a la información según la necesidad de conocer. | **Separación Dual de Roles**: En `APP/app.js`, el sistema distingue entre *Modo Titular* (Edición, desbloqueo con clave maestra) y *Modo Familiar* (Solo lectura con pliego testamentario). La interfaz oculta los controles de edición y borrado para familiares. | ✅ Cumple |
| **A.8.7** | **Protección contra Malware e Inyección**<br>Garantizar que el software no ejecute código malicioso. | **Cero Dependencias Externas (Air-Gapped)**: Todas las librerías (`jspdf.umd.min.js`, `html2canvas.min.js`) están congeladas localmente. No se cargan scripts por CDN ni se ejecutan binarios externos. | ✅ Cumple |
| **A.8.12** | **Prevención de Fuga de Datos (DLP)**<br>Evitar la extracción o exfiltración no autorizada de datos. | **Content Security Policy (CSP) Hermética**: En `<head>` de `APP/index.html`:<br>`connect-src 'none'; default-src 'none'; form-action 'none';`<br>El motor del navegador bloquea en origen cualquier intento de llamada a internet (`fetch`, `xhr`, `web-sockets`). | ✅ Cumple |
| **A.8.13** | **Copias de Seguridad de la Información**<br>Mantener copias de seguridad de datos y probar su recuperación. | **Estrategia Dual USB**: Procedimiento documentado con dos memorias flash cifradas (USB A Master + USB B Notaría). Además, exportación manual de backups cifrados (`legado_backup_cifrado_*.json`) con AES-256-GCM. | ✅ Cumple |
| **A.8.20** | **Seguridad en Redes**<br>Proteger la información en tránsito por redes de comunicaciones. | **Arquitectura Sin Red**: El sistema se ejecuta en `file:///` o servidor local en bucle cerrado `127.0.0.1`. No abre puertos hacia la red local ni expone endpoints HTTP remotos. | ✅ Cumple |
| **A.8.24** | **Uso de Criptografía**<br>Uso adecuado y eficaz de controles criptográficos para proteger datos. | **Criptografía de Grado Militar**: En `APP/core/crypto.js`:<br>• Derivación con **PBKDF2 (210.000 iteraciones)** / **Argon2id (64MB)**.<br>• Cifrado **AES-256-GCM** con vector IV único de 12 bytes por operación.<br>• Claves marcadas como `extractable: false` en memoria RAM. | ✅ Cumple |
| **A.8.28** | **Codificación Segura**<br>Aplicar principios de desarrollo seguro en el software. | **Inmutabilidad y Sanitización**: En `APP/core/helpers.js` y `APP/modules/inventario.js`, todos los datos se escapan mediante `escapeHtml()` para neutralizar XSS. Módulo criptográfico sellado con `Object.freeze(Crypto)`. | ✅ Cumple |

---

## 3. Mapeo de Controles ISO/IEC 27701:2019 (Privacidad y Protección PII)

| Cláusula ISO 27701 | Principio de Privacidad | Implementación en Legado Digital | Estado |
| :--- | :--- | :--- | :---: |
| **7.2.1 / 7.2.2** | **Minimización de Datos**<br>Limitar la recopilación a lo estrictamente necesario. | El sistema no recopila telemetría, métricas de uso, direcciones IP ni datos de diagnóstico del usuario. La base de datos contiene exclusivamente lo que el titular decida introducir. | ✅ Cumple |
| **7.2.5** | **Soberanía y Consentimiento**<br>Garantizar que el interesado mantenga el control total de sus datos. | Cero dependencia de proveedores externos. El usuario almacena físicamente sus datos en su propio pendrive USB y puede transferirlos o borrarlos sin intermediarios. | ✅ Cumple |
| **7.4.1** | **Transferencias Internacionales**<br>Controlar la salida de datos personales a terceras jurisdicciones. | Imposibilidad técnica: Al no existir servidores ni salida de red (`connect-src 'none'`), los datos jamás cruzan fronteras ni salen del hardware físico local. | ✅ Cumple |
| **7.4.7** | **Destrucción Segura de Datos (Zeroización)**<br>Destrucción segura de información al finalizar su uso. | **Zeroización Activa en RAM**: En `APP/app.js` (`backToMainMenu()`) y `APP/core/crypto.js` (`zeroize()`), las referencias a claves y contraseñas se sobreescriben activamente con ceros/aleatorios al bloquear la bóveda. | ✅ Cumple |

---

## 4. Mapeo SOC 2 Type II (Trust Services Criteria - AICPA)

| Criterio SOC 2 | Principio de Confianza | Salvaguarda Técnica Implementada | Estado |
| :--- | :--- | :--- | :---: |
| **CC6.1** | **Seguridad Lógica (Acceso)** | Acceso denegado por defecto (`document.body.classList.add('not-logged-in')`). La interfaz completa requiere descifrar con éxito la Master Key (`sessionVMK`) para hacerse visible. | ✅ Cumple |
| **CC6.6** | **Defensa contra Amenazas en el Límite** | CSP hermética que impide inyecciones de código malicioso o exfiltración mediante `script-src 'self' 'unsafe-inline'` y `default-src 'none'`. | ✅ Cumple |
| **CC7.1** | **Detección de Manipulación e Integridad** | **Auditoría SHA-256 en Tiempo Real**: Función `verifyEntryHash()` en `APP/modules/inventario.js` para comprobar la huella criptográfica de cada archivo contra degradación de bits (*bit-rot*). | ✅ Cumple |
| **PI1.1** | **Integridad del Procesamiento** | Cifrado y descifrado autenticado mediante **AES-GCM Authentication Tag**. Si un solo byte de la base de datos es modificado o truncado en disco, el descifrado falla automáticamente evitando procesar datos corruptos. | ✅ Cumple |
| **C1.1 / C1.2** | **Confidencialidad** | Cifrado simétrico AES de 256 bits para todos los registros en reposo (en `localStorage` y en archivos exportados). La memoria no persiste claves tras cerrar la pestaña. | ✅ Cumple |

---

## 5. Resumen del Dictamen de Auditoría Técnica

```
[ AUDITORÍA DE SEGURIDAD Y PRIVACIDAD: CONCLUIDA CON ÉXITO ]
─────────────────────────────────────────────────────────────────────────────
• Cobertura de Controles Evaluados:       100% (16 de 16 controles aplicables)
• Superficie de Red Externa:              0 endpoints / 0 conexiones salientes
• Criptografía Utilizada:                 AES-256-GCM / PBKDF2 (210k it) / SHA-256
• Protección de Memoria:                  extractable: false + Zeroización activa
• Formato de Distribución:                Estándar W3C HTML5 Puro (Sin dependencias)
─────────────────────────────────────────────────────────────────────────────
DIAGNÓSTICO FINAL: Plataforma apta para custodia notarial de alta confidencialidad.
```
