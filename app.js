// TypeScript code
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(',');
    var resume = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills.join(', '), "</p>\n    ");
    document.getElementById('resume').innerHTML = resume;
});
