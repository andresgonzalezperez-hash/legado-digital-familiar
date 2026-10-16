window.generateMasterPDF = async function() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert('Error: La librería jsPDF no está cargada.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const maxWidth = 165;

    // Cabecera Notarial
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.setFont(undefined, 'bold');
    doc.text('DOCUMENTO MAESTRO: LEGADO DIGITAL FAMILIAR', 20, 25);

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(90, 90, 90);
    doc.text('Protocolo de recuperación de emergencia y registro criptográfico (100% Offline)', 20, 32);
    doc.text('Fecha de emisión: ' + new Date().toLocaleString('es-ES'), 20, 38);

    doc.setDrawColor(200, 200, 200);
    doc.line(20, 42, 190, 42);

    let y = 50;

    // 1. Ubicaciones de Contingencia (si están disponibles en el DOM)
    const getVal = (id) => {
        const el = document.getElementById(id);
        return el && el.value ? el.value : '';
    };
    const keepassLoc = getVal('m-keepass-loc');
    const keyClue = getVal('m-key-clue');
    const usbLoc = getVal('m-usb-loc');
    const driveAccount = getVal('m-drive-account');

    if (keepassLoc || keyClue || usbLoc || driveAccount) {
        doc.setFontSize(13);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('1. Ubicación de Elementos de Contingencia', 20, y);
        y += 8;

        doc.setFontSize(9.5);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(40, 40, 40);

        const contingencyLines = [
            `• Bóveda de Contraseñas: ${keepassLoc}`,
            `• Pista Frase Maestra: ${keyClue}`,
            `• Memorias USB Físicas: ${usbLoc}`,
            `• Respaldo en Nube: ${driveAccount}`
        ];

        contingencyLines.forEach(line => {
            const wrapped = doc.splitTextToSize(line, maxWidth);
            doc.text(wrapped, 22, y);
            y += wrapped.length * 5 + 1;
        });

        y += 6;
    }

    // 2. Inventario de Cuentas y Activos
    doc.setFontSize(13);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('2. Inventario de Cuentas, Activos y Firmas SHA-256', 20, y);
    y += 10;

    doc.setFontSize(9.5);

    if (!state.inventory || state.inventory.length === 0) {
        doc.setFont(undefined, 'normal');
        doc.text('No hay cuentas registradas en el inventario.', 20, y);
    } else {
        state.inventory.forEach((item, index) => {
            if (y > 255) {
                doc.addPage();
                y = 20;
            }

            doc.setFont(undefined, 'bold');
            doc.setTextColor(15, 23, 42);
            const titleLine = `${index + 1}. ${item.name} [${item.category}] — Titular: ${item.holder}`;
            doc.text(doc.splitTextToSize(titleLine, maxWidth), 20, y);
            y += 6;

            doc.setFont(undefined, 'normal');
            doc.setTextColor(50, 50, 50);

            let details = `Usuario: ${item.user || 'N/A'} | 2FA: ${item.twoFactor || 'No'}`;
            if (item.secretLoc) details += ` | Ubicación Clave: ${item.secretLoc}`;
            const wrappedDetails = doc.splitTextToSize(details, maxWidth);
            doc.text(wrappedDetails, 25, y);
            y += wrappedDetails.length * 5;

            if (item.filePath) {
                const wrappedPath = doc.splitTextToSize(`Documento Físico (.pcv): ${item.filePath}`, maxWidth);
                doc.text(wrappedPath, 25, y);
                y += wrappedPath.length * 5;
            }

            if (item.fileHash) {
                doc.setFont('courier', 'normal');
                doc.setFontSize(8);
                const wrappedHash = doc.splitTextToSize(`SHA-256: ${item.fileHash}`, maxWidth);
                doc.text(wrappedHash, 25, y);
                y += wrappedHash.length * 4.5;
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(9.5);
            }

            if (item.action) {
                const wrappedAction = doc.splitTextToSize(`Acción Familiar: ${item.action}`, maxWidth);
                doc.text(wrappedAction, 25, y);
                y += wrappedAction.length * 5;
            }

            y += 5;
        });
    }

    doc.save('Legado_Digital_Maestro.pdf');
};
