function generarPD(){
    const element = document.getElementById("Tabla_Enfermeras");

    html2pdf()
    .from(element)
    .set({
        margin: 1,
        filename: 'Reporte enfermeras.pdf',
        image: {
            type: 'jpeg',
            quality: 1.00
        },
        html2canvas:{
            scale:5,
            letterRendering: true,
        },
        jsPDF:{
            unit: "in",
            format:"a3",
            orientation: "portrait"
        }
    }) 
    .save();


    
}