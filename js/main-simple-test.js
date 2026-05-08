// Simple test JavaScript file
console.log('main-simple-test.js loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    var externalTest = document.getElementById('external-test');
    if (externalTest) {
        externalTest.innerHTML = '<span style="color:green;">✓ External JavaScript file loaded and executed successfully!</span>';
    }
});
