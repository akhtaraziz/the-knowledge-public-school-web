document.addEventListener('DOMContentLoaded', function() {
    console.log('The Knowledge Public School website loaded successfully!');
    
    // Set current year in footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', new Date().getFullYear());
    }
});
