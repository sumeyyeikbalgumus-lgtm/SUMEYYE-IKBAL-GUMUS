const toggleBtn = document.getElementById('toggle-btn');
const skillsSection = document.getElementById('skills-section');

toggleBtn.addEventListener('click', function() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Show Skills';
    }
});