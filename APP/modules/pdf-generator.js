window.generateMasterPDF = async function() {
  alert('Generando PDF Notarial... Por favor, espera.');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Portada
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text('Documento Maestro: Legado Digital', 20, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Generado automáticamente y de forma segura (Offline).', 20, 40);
  doc.text('Fecha: ' + new Date().toLocaleString(), 20, 50);
  
  // Inventario
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Inventario de Cuentas y Activos', 20, 70);
  
  doc.setFontSize(10);
  let y = 85;
  
  if (state.inventory.length === 0) {
      doc.text('No hay cuentas registradas en el inventario.', 20, y);
  } else {
      state.inventory.forEach((item, index) => {
        doc.setFont(undefined, 'bold');
        doc.text(`${index + 1}. ${item.name} [${item.category}]`, 20, y);
        doc.setFont(undefined, 'normal');
        
        let details = `Titular: ${item.holder} | Usuario: ${item.user || 'N/A'}`;
        if (item.secretLoc) details += ` | Ubicación Clave: ${item.secretLoc}`;
        doc.text(details, 25, y + 6);
        
        if (item.filePath) {
            doc.text(`Documento Físico (.pcv): ${item.filePath}`, 25, y + 12);
            if (item.fileHash) {
                doc.text(`Firma SHA-256: ${item.fileHash}`, 25, y + 18);
                y += 6;
            }
            y += 6;
        }
        
        if (item.action) {
            doc.text(`Acción Familiar: ${item.action}`, 25, y + 12);
            y += 6;
        }
        
        y += 20;
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
      });
  }
  
  doc.save('Legado_Digital_Maestro.pdf');
};
