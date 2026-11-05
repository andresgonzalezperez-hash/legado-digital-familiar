# 💥 Informe de Estrés Adversarial: Auditoría "Red Team" de Legado Digital Familiar
> **Fecha de Ejecución**: 05 de Noviembre de 2026  
> **Comité de Auditoría Simulado**: 4 Agentes Hostiles Especializados (Criptoanálisis, Factor Humano, Derecho Sucesorio y Producto)  
> **Objetivo**: Estresar la arquitectura, identificar vulnerabilidades no contempladas y proponer mitigaciones definitivas.  

---

## 🎯 Resumen Ejecutivo del Comité

El concepto de **Legado Digital Familiar (Air-Gapped / 100% Offline)** es brillante y superior a los gestores en la nube en soberanía, privacidad y coste (\$0/año). Sin embargo, al someterlo a fuego cruzado adversarial, surgen **4 vulnerabilidades críticas** que amenazan su éxito en el mundo real si no se mitigan:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      MAPA DE AMENAZAS ADVERSARIALES                    │
├────────────────────────────┬───────────────────────────────────────────┤
│ 1. CRIPTOANÁLISIS          │ • Entorno hostil (Keyloggers en PC de uso)│
│                            │ • Fricción del protocolo file:/// en W3C  │
├────────────────────────────┼───────────────────────────────────────────┤
│ 2. FACTOR HUMANO EN CRISIS │ • "La Trampa del Olvido": 0 rescate si no │
│                            │   hay contraseña en papel sellado.        │
│                            │ • Pánico ante alertas de Windows ("Formatear")│
├────────────────────────────┼───────────────────────────────────────────┤
│ 3. LEGALIDAD Y SUCESIONES  │ • Riesgo penal (Art. 197 bis CP) si un    │
│                            │   familiar opera cuentas antes de aceptar │
│                            │   la herencia formal.                     │
├────────────────────────────┼───────────────────────────────────────────┤
│ 4. PRODUCTO Y CICLO DE VIDA│ • Síndrome del USB Desactualizado (Fricción)│
│                            │ • Destrucción catastrófica (Fuego/Pérdida)│
└────────────────────────────┴───────────────────────────────────────────┘
```

---

## 🕵️ AGENTE 1: El Criptoanalista y Auditor Ofensivo

### Diagnóstico de Ataque:
1. **La Paradoja del Ordenador Host Infectado**:
   * *Ataque*: La bóveda es matemáticamente inexpugnable (Argon2id + AES-256-GCM), pero cuando el familiar inserta el USB y teclea la contraseña maestra en un ordenador con Windows infectado (troyano, malware de portapapeles o keylogger), la clave es interceptada en el teclado antes de llegar a WebCrypto.
   * *Dictamen*: La seguridad de una aplicación web offline termina donde empieza la integridad del sistema operativo del ordenador anfitrión.
2. **El peligro del Protocolo `file:///`**:
   * *Ataque*: En varios navegadores modernos (Safari en macOS, ciertas versiones de Firefox o navegadores móviles), la API `window.crypto.subtle` restringe ciertas operaciones criptográficas si el origen no es `https://` o `localhost`. Si el usuario hace doble clic en `inicio.html` y su navegador rechaza `file:///` como origen seguro, la bóveda no se abre.
   * *Solución recomendada*: Mantener siempre listo el lanzador `iniciar_legado.bat` que arranca el micro-servidor local efímero (`http://127.0.0.1:8095`), garantizando un *Secure Context* nativo al 100%.

---

## 💔 AGENTE 2: El Familiar en Duelo (Test de Estrés Cognitivo)

### Diagnóstico de Usabilidad en Crisis:
1. **La "Trampa del Olvido Criptográfico"**:
   * *Escenario*: El titular ha fallecido repentinamente. En un gestor comercial en la nube, la viuda contacta a soporte con el certificado de defunción y tras un trámite recupera los fondos. En un sistema Air-Gapped puro, **si el familiar no tiene la contraseña exacta, los datos se pierden para siempre**. No hay botón de *"He olvidado mi contraseña"*.
   * *Solución recomendada*: El sistema debe obligar al titular a imprimir la **"Hoja de Acceso Notarial de Emergencia"** plastificada para guardarla físicamente junto a las escrituras en notaría o caja de seguridad.
2. **Jerga Técnica que Paraliza**:
   * *Escenario*: Un familiar de 60 años en estado de shock lee en pantalla: *"Verificar firma SHA-256 del contenedor Picocrypt"*, *"Derivación Argon2id"* o *"Clave no extraíble"*. La persona no sabe qué hacer y cierra el portátil pensando que va a romper algo.
   * *Solución recomendada*: Crear un conmutador de lenguaje en la interfaz: **"Modo Sencillo / Explicado para Abuelos"**, donde los botones digan simplemente *"Comprobar que el archivo no está roto"* en lugar de *"Auditoría de integridad SHA-256"*.

---

## ⚖️ AGENTE 3: El Notario y Abogado de Sucesiones

### Diagnóstico Jurídico (Código Civil y LOPDGDD España):
1. **Riesgo Penal por Usurpación o Acceso Indebido (Art. 197 bis del Código Penal)**:
   * *Advertencia Legal*: El protocolo de la app no debe sugerir a los familiares que *"entren al banco y transfieran el dinero a su cuenta antes de que el banco bloquee los fondos"*. En España y en la mayoría de países europeos, acceder a las cuentas de un fallecido antes de liquidar el Impuesto de Sucesiones y aceptar la herencia puede constituir un delito de apropiación indebida o delito informático.
   * *Solución recomendada*: El PDF Maestro debe incluir una **cláusula de exención notarial explícita**:
     > *"Este documento es una guía informativa de inventario patrimonial para el albacea y los herederos legales. No autoriza la transferencia no consentida de fondos sin la previa liquidación tributaria y adjudicación notarial de herencia."*
2. **Validez del Testamento Digital (Art. 96 LOPD-GDD)**:
   * El inventario digital debe estar expresamente referenciado en el testamento notarial mediante una cláusula estándar: *"El testador manifiesta que el inventario detallado de sus activos y voluntades digitales se encuentra depositado en el soporte físico cifrado denominado LEGADO DIGITAL, cuya clave se custodia bajo pliego cerrado en esta notaría"*.

---

## 💼 AGENTE 4: El Competidor SaaS (Product Manager Cloud)

### Diagnóstico de Retención y Mantenimiento:
1. **El "Síndrome del Pendrive Olvidado" (Desactualización)**:
   * *Realidad*: El titular configura el Legado Digital hoy con entusiasmo. En 6 meses cambia de banco, abre una cuenta en Trade Republic y cambia 5 contraseñas. Como el USB está guardado en un cajón, **no lo actualiza**. Cuando fallece 5 años después, el 60% del inventario está obsoleto.
   * *Solución recomendada*: Implementar un recordatorio semestral pasivo en el homelab (`angy-bot` o `n8n`) que envíe un aviso al titular: *"Han pasado 180 días desde tu última comprobación del USB Legado Digital. Conéctalo 2 minutos para verificar si has añadido cuentas nuevas"*.
2. **Destrucción Catastrófica Física (Incendio / Pérdida)**:
   * Si el usuario guarda los dos USBs en la misma casa, un siniestro destruye ambas copias. La estrategia de contingencia con backup cifrado en Google Drive (`START/sincronizar_drive.ps1`) es **vital y no opcional**.

---

## 🛠️ Plan de Mejoras Inmediatas Derivado del Red Team

Para blindar la plataforma ante estas 4 conclusiones de las IAs, proponemos incorporar en la versión `v1.4.1`:

1. **Añadir el "Modo Lenguaje Humano"**: Toggle en la interfaz para alternar entre terminología criptográfica técnica y lenguaje simple para familiares sin conocimientos informáticos.
2. **Plantilla de Protocolo Notarial Imprimible con Cláusula Legal**: Modelo de cláusula testamentaria redactada por abogados para entregar al notario junto al testamento.
3. **Advertencia Jurídica Preventiva**: Aviso claro en el PDF sobre los trámites legales ante entidades bancarias y de criptomonedas.
4. **Alerta de Caducidad de Datos**: Indicador visual en el dashboard que muestre *"Estado: Requiere revisión"* si el último guardado supera los 180 días.
