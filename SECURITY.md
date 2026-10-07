# Política de Seguridad / Security Policy

## Filosofía de Seguridad / Security Philosophy
Este proyecto es una bóveda de legado digital local y descentralizada (**Zero-Knowledge** / Cero-Conocimiento).
* **Sin Servidores**: Los datos nunca viajan a servidores externos ni se procesan en la nube.
* **Criptografía en Navegador**: Todo el cifrado (AES-GCM-256) y derivación de claves (PBKDF2) se ejecutan localmente en tu propio dispositivo utilizando la Web Crypto API nativa del navegador.
* **Control Total**: Tú posees las claves criptográficas. Si olvidas la Contraseña Maestra y la Contraseña Familiar, los datos locales almacenados serán matemáticamente imposibles de recuperar.

## Versiones Soportadas / Supported Versions

Las correcciones de seguridad se aplican prioritariamente a la rama principal de producción (`PRO`).

| Versión | Soportada |
| ------- | --------- |
| 1.x     | ✅ Sí      |
| < 1.0   | ❌ No      |

## Reportar una Vulnerabilidad / Reporting a Vulnerability

Si descubres una vulnerabilidad o fallo criptográfico en esta herramienta:

1. **No abras una Issue pública** en el repositorio.
2. Ponte en contacto de manera privada a través de los canales de comunicación personal del titular del proyecto.
3. Se revisará el reporte y se aplicará un parche criptográfico de manera prioritaria en el entorno local antes de su despliegue a producción.
