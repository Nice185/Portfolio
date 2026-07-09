(function() {
    // Attendre que le DOM soit chargé
    document.addEventListener('DOMContentLoaded', function() {
        var menuToggle = document.querySelector('.menu-toggle');
        var navLinks = document.querySelector('.nav-links');

        // Vérifier que les éléments existent
        if (!menuToggle || !navLinks) {
            console.error('Menu burger : éléments introuvables');
            return;
        }

        console.log('Menu burger initialisé'); // Pour déboguer

        menuToggle.addEventListener('click', function() {
            console.log('Clic burger détecté'); // Pour déboguer
            navLinks.classList.toggle('active');
            var isOpen = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Fermer le menu au clic sur un lien
        var links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    });

    // Validation formulaire (ne pas toucher)
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            var isValid = true;

            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Minimum 2 caractères';
                isValid = false;
            } else {
                document.getElementById('nameError').textContent = '';
            }
            if (!email.includes('@') || !email.includes('.')) {
                document.getElementById('emailError').textContent = 'Email invalide';
                isValid = false;
            } else {
                document.getElementById('emailError').textContent = '';
            }
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Minimum 10 caractères';
                isValid = false;
            } else {
                document.getElementById('messageError').textContent = '';
            }
            var feedback = document.getElementById('formFeedback');
            if (isValid) {
                feedback.textContent = '✅ Message envoyé avec succès !';
                feedback.style.color = '#2ECC71';
                contactForm.reset();
            } else {
                feedback.textContent = '❌ Veuillez corriger les erreurs.';
                feedback.style.color = '#E74C3C';
            }
        });
    }
})();