// Personalization
document.getElementById('font-size').addEventListener('input', function(event) {
    document.body.style.setProperty('--font-size', event.target.value + 'px');
});

document.getElementById('light-theme').addEventListener('click', function() {
    document.body.style.setProperty('--background-color', '#ffffff');
    document.body.style.setProperty('--text-color', '#000000');
});

document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.style.setProperty('--background-color', '#333333');
    document.body.style.setProperty('--text-color', '#ffffff');
});

// Toggle theme
document.getElementById('toggle-theme').addEventListener('click', function() {
    const isDark = document.body.style.getPropertyValue('--background-color') === '#333333';
    document.body.style.setProperty('--background-color', isDark ? '#ffffff' : '#333333');
    document.body.style.setProperty('--text-color', isDark ? '#000000' : '#ffffff');
});
