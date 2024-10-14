// get reference to the display area
var form = document.getElementById("resume-form");
var resumeDisplayelement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //  prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('e-mail').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHtml = "\n<h2><b>Resume<b></h2>\n\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n\n<p><b>E-mail:</b>").concat(email, "</p>\n<p><b>phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    // display the generated resume
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume will display element is missing.');
    }
});
