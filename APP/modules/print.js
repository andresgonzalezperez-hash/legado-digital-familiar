function updatePrintView() {
    const printContainer = document.getElementById('print-preview-container');
    if (!printContainer) return;
    
    const keepassLoc = document.getElementById('m-keepass-loc').value;
    const keyClue = document.getElementById('m-key-clue').value;
    const usbLoc = document.getElementById('m-usb-loc').value;
    const driveAccount = document.getElementById('m-drive-account').value;
    
    const rulesNoTodo = document.getElementById('m-rules-notodo').value;

    let inventoryHtml = '';
    state.inventory.forEach(item => {
        const docInfo = item.filePath
            ? `<br><small>Archivo: <code>${escapeHtml(item.filePath)}</code></small>`
            : '';
        const hashInfo = item.fileHash
            ? `<br><small style="font-family:monospace; font-size:7pt;">SHA-256: ${escapeHtml(item.fileHash)}</small>`
            : '';
        inventoryHtml += `
            <tr>
                <td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.category)}</small></td>
                <td>${escapeHtml(item.holder)}</td>
                <td>${escapeHtml(item.user || '-')}</td>
                <td>${escapeHtml(item.twoFactor || 'No')}</td>
                <td><code>${escapeHtml(item.secretLoc || '-')}</code>${docInfo}${hashInfo}</td>
                <td><small>${escapeHtml(item.action || '-')}</small></td>
            </tr>
        `;
    });

    // Injected legal notice
        // end marker
        printContainer.innerHTML = `
        <div class="print-doc">
            <div class="print-header">
                <h1>DOCUMENTO MAESTRO: PROTOCOLO DE LEGADO DIGITAL</h1>
                <p>Instrucciones de recuperación de emergencia y kit de contingencia offline</p>
                <p style="font-size: 8pt; color: #777; margin-top: 5px;">Generado el ${new Date().toLocaleDateString('es-ES')} - Guardar en caja fuerte física</p>
            </div>

            <div class="print-alert">
                ATENCIÓN: Sigue las instrucciones de este manual con calma. Por motivos de máxima seguridad, los PINs y contraseñas más críticas se deben escribir A MANO en la sección 2.
            </div>

            <div class="print-section">
                <h2 class="print-section-title">1. UBICACIÓN DE LOS ELEMENTOS DE CONTINGENCIA</h2>
                <div class="print-grid">
                    <div class="print-field">
                        <div class="print-label">Bóveda de Contraseñas (Passbolt)</div>
                        <div class="print-value">${escapeHtml(keepassLoc)}</div>
                    </div>
                    <div class="print-field">
                        <div class="print-label">Pista de la Frase Maestra (Desencriptado)</div>
                        <div class="print-value"><strong>${escapeHtml(keyClue)}</strong></div>
                    </div>
                    <div class="print-field">
                        <div class="print-label">Memorias USB de Contingencia (Físicas)</div>
                        <div class="print-value">${escapeHtml(usbLoc)}</div>
                    </div>
                    <div class="print-field">
                        <div class="print-label">Google Drive de Respaldo Cifrado (Nube)</div>
                        <div class="print-value">${escapeHtml(driveAccount)}</div>
                    </div>
                </div>
            </div>

            <div class="print-section" style="background: rgba(0,0,0,0.02); border: 1px dashed #ccc; padding: 12px; margin-top: 15px; page-break-inside: avoid;">
                <h2 class="print-section-title" style="margin-top: 0; color: #111;">2. KIT DE ARRANQUE EN FRÍO (RELLENAR A MANO)</h2>
                <p style="font-size: 8.5pt; color: #555; margin-bottom: 10px;">
                    Las llaves maestras iniciales necesarias para encender los dispositivos y saltarse los segundos factores de autenticación (2FA):
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 9.5pt;">
                    <div>
                        <h4 style="margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 2px;">Móvil Andrés:</h4>
                        <p style="margin: 4px 0;">PIN de SIM: ________________________</p>
                        <p style="margin: 4px 0;">PUK de SIM: ________________________</p>
                        <p style="margin: 4px 0;">PIN / Patrón pantalla: ______________</p>
                        <p style="margin: 4px 0;">Gmail: _____________________________</p>
                        <p style="margin: 4px 0;">Gmail Clave: ________________________</p>
                    </div>
                    <div>
                        <h4 style="margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 2px;">Móvil Maeva:</h4>
                        <p style="margin: 4px 0;">PIN de SIM: ________________________</p>
                        <p style="margin: 4px 0;">PUK de SIM: ________________________</p>
                        <p style="margin: 4px 0;">PIN / Patrón pantalla: ______________</p>
                        <p style="margin: 4px 0;">Gmail: _____________________________</p>
                        <p style="margin: 4px 0;">Gmail Clave: ________________________</p>
                    </div>
                </div>
            </div>

            <div class="print-section" style="page-break-inside: avoid;">
                <h2 class="print-section-title">3. PASOS CLAVE PARA LA RECUPERACIÓN (ARRANQUE OFFLINE)</h2>
                <ol style="font-size: 9pt; line-height: 1.6; margin: 0; padding-left: 15px;">
                    <li><strong>Acceder a los teléfonos:</strong> Usa los PINs escritos arriba para encender los terminales de Andrés y Maeva (necesarios para recibir los SMS de verificación bancaria y las apps de 2FA).</li>
                    <li><strong>Introducir el USB de Emergencia:</strong> Conéctalo a cualquier PC limpio. Si no dispones del USB físico, inicia sesión en la cuenta de Gmail del cónyuge arriba detallada, entra en Google Drive y descarga el archivo comprimido de respaldo.</li>
                    <li><strong>Arrancar el gestor offline:</strong> En el USB/Drive, abre la carpeta <code>SOFTWARE_PORTABLE</code> y ejecuta el programa portable <code>KeePassXC</code>.</li>
                    <li><strong>Cargar la base de contraseñas offline:</strong> Abre el archivo de respaldo cifrado de contraseñas de Passbolt (copiado en el USB/Drive) y usa la pista de la Frase Maestra para desencriptarlo. Ahí dentro tendrás la clave de todos tus bancos, seguros y activos.</li>
                    <li><strong>Desbloquear los Documentos Cifrados:</strong> Ejecuta <code>Picocrypt.exe</code> en el USB, arrastra el archivo cifrado (ej. <code>boveda.pcv</code>) y pon la contraseña maestra para recuperar los archivos originales en claro (PDFs de escrituras, contratos, etc.).</li>
                </ol>
            </div>

            <div class="print-section" style="page-break-inside: avoid;">
                <h2 class="print-section-title">4. NORMAS DE SEGURIDAD (QUÉ "NO" HACER)</h2>
                <div style="font-size: 9pt; line-height: 1.5; white-space: pre-line; color: #444;">${escapeHtml(rulesNoTodo)}</div>
            </div>

            <div class="print-section" style="page-break-before: always;">
                <h2 class="print-section-title">5. DIRECTORIO DETALLADO DE ACTIVOS</h2>
                <p style="font-size: 8.5pt; color: #555; margin-bottom: 10px;">
                    Las credenciales digitales correspondientes a esta lista se encuentran protegidas en Passbolt. Las rutas especifican la ubicación exacta de los documentos de valor en el MiniPC o copia espejo.
                </p>
                <table class="print-table">
                    <thead>
                        <tr>
                            <th>Servicio / Categoría</th>
                            <th>Titular</th>
                            <th>Usuario / Identificación</th>
                            <th>2FA</th>
                            <th>Ruta Secreto / Archivo</th>
                            <th>Acción en Emergencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${inventoryHtml}
                    </tbody>
                </table>
            </div>

            <div class="print-section" style="margin-top: 3rem; text-align: center; font-size: 8.5pt; color: #777;">
                <p>Fin del Protocolo de Legado. Mantén este sobre sellado y protegido físicamente.</p>
            </div>
        
            <div style="margin-top: 30px; padding: 12px; border-top: 1px solid #ccc; font-size: 7.5pt; color: #666; text-align: justify; line-height: 1.4;">
                <strong>Aviso Legal (Art. 96 LOPD-GDD y Código Civil):</strong> Este documento impreso constituye exclusivamente un inventario informativo para facilitar la identificación de activos y servicios por parte de los causahabientes o albaceas. No constituye testamento ni confiere potestad dispositiva inmediata sobre cuentas o productos bancarios con anterioridad a la formal adjudicación de herencia y liquidación tributaria.
            </div>
    
        </div>
    `;
}


// Función para imprimir Hoja de Emergencia Notarial en blanco
window.printEmergencyNotarySheet = function() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Por favor, permite ventanas emergentes para imprimir la hoja notarial.');
        return;
    }
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Hoja de Acceso Notarial de Emergencia</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 2.5cm 2cm; color: #111; line-height: 1.5; font-size: 11pt; }
        h1 { font-size: 16pt; text-align: center; margin-bottom: 4px; text-transform: uppercase; border-bottom: 2px solid #333; padding-bottom: 8px; }
        .subtitle { text-align: center; font-size: 9pt; color: #555; margin-bottom: 20px; }
        .box { border: 1px solid #777; padding: 12px; margin-bottom: 16px; border-radius: 4px; }
        .box-title { font-weight: bold; font-size: 10pt; margin-bottom: 8px; text-transform: uppercase; color: #222; }
        .line-field { margin-bottom: 12px; display: flex; align-items: flex-end; }
        .line-label { font-weight: 600; width: 220px; font-size: 9.5pt; }
        .line-fill { flex-grow: 1; border-bottom: 1px dotted #444; height: 18px; }
        .notice { font-size: 8pt; color: #666; margin-top: 25px; border-top: 1px solid #ccc; padding-top: 8px; text-align: justify; }
        @media print { body { padding: 0; } }
    </style>
</head>
<body>
    <h1>Protocolo de Acceso Notarial de Emergencia</h1>
    <div class="subtitle">Documento de custodia física para sobre cerrado notarial o caja de seguridad familiar</div>

    <div class="box">
        <div class="box-title">1. Datos de Identificación del Titular y Albacea</div>
        <div class="line-field"><span class="line-label">Nombre del Titular:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">DNI / NIE:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Persona de Contacto / Albacea:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Teléfono de Emergencia:</span><span class="line-fill"></span></div>
    </div>

    <div class="box">
        <div class="box-title">2. Custodia de Dispositivos y Soportes Cifrados</div>
        <div class="line-field"><span class="line-label">Ubicación física del USB Cifrado:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Ubicación del MiniPC / Portátil:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">PIN / Desbloqueo Móvil Titular:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Pista de Contraseña Maestra:</span><span class="line-fill"></span></div>
    </div>

    <div class="box">
        <div class="box-title">3. Notario y Registro Sucesorio</div>
        <div class="line-field"><span class="line-label">Notaría de Depósito / Protocolo:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Nº de Protocolo Testamento (si existe):</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Fecha de Confección:</span><span class="line-fill"></span></div>
        <div class="line-field"><span class="line-label">Firma del Titular:</span><span class="line-fill" style="height: 40px;"></span></div>
    </div>

    <div class="notice">
        <strong>Aviso Legal y de Seguridad:</strong> Este documento físico contiene indicaciones privadas para permitir a los legítimos herederos o albaceas la localización e inventario del patrimonio digital. Consérvese en sobre lacrado y sellado. Conforme al Art. 96 de la Ley Orgánica 3/2018 (LOPD-GDD) y el Código Civil, la ejecución patrimonial de saldos requerirá la aportación del Certificado de Defunción y título sucesorio legalmente habilitante.
    </div>
    <script>
        window.onload = function() { window.print(); }
    </script>
</body>
</html>`;
    printWindow.document.write(html);
    printWindow.document.close();
};
