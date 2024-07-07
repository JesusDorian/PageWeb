// script.js

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las secciones que necesitan tener la funcionalidad de minimización
    const sections = document.querySelectorAll('#objetivo-general, #objetivos-especificos, #justificacion, #fases-del-proyecto, #perfiles, #Colaboradores, #contacto');

    sections.forEach(section => {
        // Agregar un evento de clic al encabezado de cada sección
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            // Alternar la clase 'hidden' en el contenido de la sección
            const content = section.querySelectorAll('p, ul, img, li');
            content.forEach(element => {
                element.classList.toggle('hidden');
            });
        });
    });
});


