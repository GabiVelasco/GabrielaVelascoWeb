document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const aboutLink = document.getElementById('about-link');
    const workLink = document.getElementById('work-link');
    const kontaktLink = document.getElementById('kontakt-link');
    const logoLink = document.getElementById('logo-link');

    const content = document.getElementById('content');
    const zitate = document.getElementById('zitate');

    // Content Data
    const defaultContent = '<h2>Willkommen!</h2><p>Ich bin Gabriela Velasco, Webentwicklerin.</p>';
    const aboutContent = `
        <p style="padding-top:5px; padding-bottom: 5px;"><br><br>
            - Angular<br>
            - TypeScript<br>
            - HTML<br>
            - CSS<br>
            - JavaScript<br>
            - Firebase<br>
            - Firestore<br>
            - Python<br>
            - React<br>
            - PHP<br>
        </p>`;
    const workContent = `
        <p><br>
            - Erstellung von Webseiten und Webanwendungen.<br>
            - Entwicklung und Umsetzung individueller Lösungen.<br>
            - Leidenschaft für kreatives Design und sauberen Code.<br>
            - Fokus auf Benutzerfreundlichkeit und Responsive Design.<br>
            - Stetige Weiterbildung und Anwendung neuer Technologien.<br><br><br>
        </p>`;
    const kontaktContent = `
        <p>Sie erreichen mich über die Social Media Links oder via 
            <a href="mailto:gabriela.luppe@gmail.com">E-Mail.</a>
        </p>`;
    const logoContent = 'Gabriela Velasco - Webentwicklerin</span><br><br>Als Webentwicklerin <br>tanze ich mit dem Code, <br>um die digitale Welt zu verschönern.</span>';

    const aboutZitate = "Über mich.";
    const workZitate = "Meine Arbeit.";
    const kontaktZitate = "Kontakt.";

    // Event Listeners
    aboutLink.addEventListener('click', function() {
        updateContent(aboutContent, aboutZitate);
    });

    workLink.addEventListener('click', function() {
        updateContent(workContent, workZitate);
    });

    kontaktLink.addEventListener('click', function() {
        updateContent(kontaktContent, kontaktZitate);
    });

    logoLink.addEventListener('click', function() {
        updateContent(logoContent, defaultContent);
    });

    // Update Function
    function updateContent(newContent, newZitate) {
        content.innerHTML = newContent;
        zitate.innerHTML = newZitate;
    }
});
