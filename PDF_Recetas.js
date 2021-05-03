function generarReceta(){
    const element = document.getElementById("REC");

    html2pdf()
    .from(element)
    .set({
        margin: 1,
        filename: 'Receta.pdf',
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