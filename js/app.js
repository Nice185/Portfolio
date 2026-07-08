// VALIDATION FORMULAIRE

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validation nom
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Minimum 2 caractères';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    // Validation email
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Email invalide';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    // Validation message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Minimum 10 caractères';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }
    
    // Feedback final
    const feedback = document.getElementById('formFeedback');
    
    if (isValid) {
        feedback.textContent = '✅ Message envoyé avec succès !';
        feedback.style.color = '#2ECC71';
        this.reset();
    } else {
        feedback.textContent = '❌ Veuillez corriger les erreurs.';
        feedback.style.color = '#E74C3C';
    }
});