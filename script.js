document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const aboutLink = document.getElementById('about-link');
    const workLink = document.getElementById('work-link');
    const kontaktLink = document.getElementById('kontakt-link');
    const logoLink = document.getElementById('logo-link');

    const content = document.getElementById('content');
    const zitate = document.getElementById('zitate');

    // Default content
    const defaultContent = `
        <h2>Willkommen</h2>
        <p>Bitte wählen Sie einen Menüpunkt aus.</p>
    `;

    // About content
    const aboutContent = `
        <h2>Erfahrungen</h2>
        <p>Hier sind meine Erfahrungen aufgelistet...</p>
    `;

    // Work content
    const workContent = `
        <h1>Die Integration von Tanz und Technologie</h1>
        <p style="font-size:24px;">Mit einer einzigartigen Verbindung von Tanz und Technologie 
            bringt Gabriela eine kreative Perspektive in die Welt der Informatik. 
            <br><br>
            Durch ihre Erfahrungen als Tänzerin und Choreografin integriert sie künstlerische Ausdrucksformen 
            in ihre technologischen Projekte. Dieser kreative Ansatz ermöglicht es ihr, 
            innovative Lösungen zu entwickeln und einzigartige Perspektiven in der sich ständig 
            weiterentwickelnden Schnittstelle von Kunst und Technologie zu schaffen.
        </p>
    `;

    // Kontakt content
    const kontaktContent = `
        <h2>Kontakt</h2>
        <a href="mailto:gabriela.luppe@gmail.com"><p>Hier sind meine Kontaktinformationen...</p></a>
        
    `;

    // Event listeners
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        content.innerHTML = aboutContent;
        zitate.style.display = 'none';
    });

    workLink.addEventListener('click', function(event) {
        event.preventDefault();
        content.innerHTML = workContent;
        zitate.style.display = 'none';
    });

    kontaktLink.addEventListener('click', function(event) {
        event.preventDefault();
        content.innerHTML = kontaktContent;
        zitate.style.display = 'none';
    });

    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        content.innerHTML = defaultContent;
        zitate.style.display = 'block';
    });
});
