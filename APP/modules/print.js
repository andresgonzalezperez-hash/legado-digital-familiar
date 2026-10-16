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
        </div>
    `;
}
